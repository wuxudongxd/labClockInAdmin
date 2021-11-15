import { db } from "src/hooks/cloudbase/cloudbase";
import { useQuery, useMutation, useQueryClient } from "react-query";

const _ = db.command;

export const useGetUnAuditUser = () => {
  return useQuery("unAuditUser", () => {
    return db
      .collection("user")
      .where({
        isAudit: _.eq(false),
      })
      .field({
        avatarUrl: true,
        nickName: true,
        isAudit: true,
      })
      .get();
  });
};

export const useAuditUser = () => {
  const mutation = useMutation((data: Object) =>
    db.collection("user").update(data)
  );
  const queryClient = useQueryClient();
  if (mutation.isSuccess) {
    queryClient.invalidateQueries("auth");
  }
  return mutation;
};
