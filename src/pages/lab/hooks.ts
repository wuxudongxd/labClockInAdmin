import { db } from "~/utils/cloudbase";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const useLab = () => {
  const queryClient = useQueryClient();

  const { data: labs } = useQuery("lab", () =>
    db
      .collection("lab")
      .get()
      .then((res) => res.data)
  );

  const { mutate: addUser } = useMutation(
    (data: lab) => db.collection("lab").add(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("lab");
      },
    }
  );

  return {
    labs,
    addUser,
  };
};

export default useLab;
