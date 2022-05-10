import { db } from "~/utils/cloudbase";
import { useQuery, useMutation, useQueryClient } from "react-query";

const _ = db.command;

export const useGetLabs = () => {
  return useQuery("lab", () => {
    return db.collection("lab").get();
  });
};

export const useAddLabs = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation((data: lab) => db.collection("lab").add(data), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries("lab");
    },
  });
  return mutation;
};
