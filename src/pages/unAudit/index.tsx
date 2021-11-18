import { FC, MouseEvent, useEffect } from "react";
import { Avatar, Table, Tag } from "antd";
import type { user } from "types/index";
import {
  useGetUnAuditUser,
  useAuditUser,
} from "hooks/cloudbase/useUnAuditUser";

const UnAudit: FC = () => {
  const { isLoading, error, data: user } = useGetUnAuditUser();
  const mutation = useAuditUser();

  const getThrough = (e: MouseEvent) => {
    e && e.preventDefault();
    mutation.mutate({ ...(user?.data[0] as user), isAudit: true });
  };

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: {(error as any).message}</>;

  const columns = [
    {
      title: "昵称",
      dataIndex: "nickName",
      key: "nickName",
    },
    {
      title: "头像",
      dataIndex: "avatarUrl",
      key: "avatarUrl",
      render: (avatar: string) => <Avatar size="large" src={avatar} />,
    },
    {
      title: "状态",
      dataIndex: "isAudit",
      key: "isAudit",
      render: (audit: string) => (
        <>
          {audit ? (
            <Tag color="green">审核通过</Tag>
          ) : (
            <Tag color="volcano">待审核</Tag>
          )}
        </>
      ),
    },
    {
      title: "操作",
      dataIndex: "_id",
      key: "_id",
      render: (id: string) => <a onClick={getThrough}>通过</a>,
    },
  ];

  return <Table dataSource={user?.data} columns={columns} rowKey="_id" />;
};

export default UnAudit;
