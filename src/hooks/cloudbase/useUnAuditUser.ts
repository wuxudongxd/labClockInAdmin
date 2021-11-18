import { db } from "src/hooks/cloudbase/cloudbase";
import { useQuery, useMutation, useQueryClient } from "react-query";
import type { user } from "types/index";

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
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (data: user) =>
      db
        .collection("user")
        .where({
          _id: _.eq(data._id),
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
  return mutation;
};
