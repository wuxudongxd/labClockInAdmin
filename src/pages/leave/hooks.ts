import { db } from "~/utils/cloudbase";
import { useQuery, useMutation, useQueryClient } from "react-query";

const command = db.command;

const useLeave = () => {
  const queryClient = useQueryClient();
  const leaveQuery = useQuery("leave", () =>
    db
      .collection("ask_for_leave_record")
      .get()
      .then((res) => {
        res.data.forEach((item) => {
          item.name = "东东";
        });
        return res.data;
      })
  );

  const auditLeave = useMutation(
    (id: string) =>
      db
        .collection("ask_for_leave_record")
        .where({
          _id: command.eq(id),
        })
        .update({
          isAudit: true,
        }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("leave");
      },
    }
  );

  return {
    leaveQuery,
    auditLeave,
  };
};

export default useLeave;
