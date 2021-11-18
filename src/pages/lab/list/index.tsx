import { FC } from "react";
import { useGetLabs } from "hooks/cloudbase/useLab";
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
        render: (locations: number[]) => (
          <div>
            经度{locations[0][0]} / 纬度{locations[0][1]}
          </div>
        ),
      },
    ];

    return <Table dataSource={labs?.data} columns={columns} rowKey="_id" />;
  return <></>;
};

export default List;
