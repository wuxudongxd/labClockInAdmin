import { Avatar, Table, Tag } from "antd";
import useUnAuditUser from "./hooks";

const { Column } = Table;

const UnAudit = () => {
  const {
    unAuditUserQuery: { data: user },
    auditUser,
  } = useUnAuditUser();

  return (
    <Table dataSource={user} rowKey="_id">
      <Column title="昵称" dataIndex="nickName"></Column>
      <Column
        title="头像"
        dataIndex="avatarUrl"
        render={(avatar: string) => <Avatar size="large" src={avatar} />}
      ></Column>
      <Column
        title="状态"
        dataIndex="isAudit"
        render={(audit: string) => (
          <>
            {audit ? (
              <Tag color="green">审核通过</Tag>
            ) : (
              <Tag color="volcano">待审核</Tag>
            )}
          </>
        )}
      ></Column>
      <Column
        title="操作"
        dataIndex="_id"
        render={(id: string) => (
          <div
            className="text-blue-600 cursor-pointer hover:text-blue-800"
            onClick={() => auditUser.mutate(id)}
          >
            通过
          </div>
        )}
      ></Column>
    </Table>
  );
};

export default UnAudit;
