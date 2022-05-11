import { db } from "~/utils/cloudbase";
import { useQuery, useMutation, useQueryClient } from "react-query";

const command = db.command;

const useUnAuditUser = () => {
  const queryClient = useQueryClient();
  const unAuditUserQuery = useQuery("unAuditUser", () =>
    db
      .collection("user")
      .field({
        avatarUrl: true,
        nickName: true,
        isAudit: true,
      })
      .get()
      .then((res) => res.data)
  );

  const auditUser = useMutation(
    (id: string) =>
      db
        .collection("user")
        .where({
          _id: command.eq(id),
        })
        .update({
          isAudit: true,
        }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("unAuditUser");
      },
    }
  );

  return {
    unAuditUserQuery,
    auditUser,
  };
};

export default useUnAuditUser;
