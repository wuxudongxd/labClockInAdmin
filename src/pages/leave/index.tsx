import { Avatar, Table, Tag } from "antd";
import useLeave from "./hooks";

const { Column } = Table;

const Leave = () => {
  const {
    leaveQuery: { data: record },
    auditLeave,
  } = useLeave();

  console.log(record);

  return (
    <Table dataSource={record} rowKey="_id">
      <Column title="申请者" dataIndex="name"></Column>
      <Column
        title="请假类型"
        dataIndex="type"
        render={(type: string) => (
          <>
            {type === "事假" ? (
              <Tag color="blue">事假</Tag>
            ) : (
              <Tag color="orange">病假</Tag>
            )}
          </>
        )}
      ></Column>
      <Column
        title="请假原因"
        dataIndex="reason"
        render={(reason: string) => <div>{reason.substring(0, 10)}...</div>}
      ></Column>
      <Column
        title="状态"
        dataIndex="isAudit"
        render={(isAudit: boolean) => (
          <>
            {isAudit ? (
              <Tag color="green">通过</Tag>
            ) : (
              <Tag color="volcano">待审核</Tag>
            )}
          </>
        )}
      ></Column>
      <Column
        title="操作"
        dataIndex="_id"
        render={(id: string, record: any) => (
          <div
            className={`${
              record.isAudit
                ? "text-gray-500 cursor-not-allowed"
                : "text-blue-600 cursor-pointer"
            }`}
            onClick={() => {
              !record.isAudit && auditLeave.mutate(id);
            }}
          >
            通过
          </div>
        )}
      ></Column>
    </Table>
  );
};

export default Leave;
