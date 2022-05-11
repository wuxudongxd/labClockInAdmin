import { Table } from "antd";
import useLab from "./hooks";

const { Column } = Table;

const List = () => {
  const { labs } = useLab();

  return (
    <Table dataSource={labs} rowKey="_id">
      <Column title="实验室名称" dataIndex="name"></Column>
      <Column
        title="位置"
        dataIndex="locations"
        render={(locations: location[]) => (
          <div>
            经度{locations[0].longitude} / 纬度{locations[0].latitude}
          </div>
        )}
      ></Column>
    </Table>
  );
};

export default List;
