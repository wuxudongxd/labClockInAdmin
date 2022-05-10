import { FC } from "react";
import { useGetLabs } from "~/pages/lab/useLab";
import type { location } from "types/index";
import { Table } from "antd";

const List: FC = () => {
  const { isLoading, error, data: labs } = useGetLabs();

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: {(error as any).message}</>;

  const columns = [
    {
      title: "实验室名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "位置",
      dataIndex: "locations",
      key: "locations",
      render: (locations: location[]) => (
        <div>
          经度{locations[0].longitude} / 纬度{locations[0].latitude}
        </div>
      ),
    },
  ];

  return <Table dataSource={labs?.data} columns={columns} rowKey="_id" />;
};

export default List;
