import { Layout, Menu, Breadcrumb } from "antd";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Route, Link, Routes, useLocation } from "react-router-dom";
import UnAudit from "src/pages/unAudit";
import Lab from "pages/lab";

const { Header, Content, Footer, Sider } = Layout;
const routes = [
  {
    key: "1",
    path: "unaudit",
    name: "待审核用户",
    icon: <PieChartOutlined />,
    element: <UnAudit />,
  },
  {
    key: "2",
    path: "lab",
    name: "实验室管理",
    icon: <DesktopOutlined />,
    element: <Lab />,
  },
];

const Board: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const defaultSelectedKey =
    routes.find((route) => location.pathname.slice(1) === route.path)?.key ||
    "1";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="h-8 m-4 bg-white bg-opacity-30" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[defaultSelectedKey]}
          mode="inline"
        >
          {routes.map((route) => {
            return (
              <Menu.Item key={route.key} icon={route.icon}>
                <Link to={route.path}>{route.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>
              {location.pathname
                .slice(1)
                .replace(/^\S/, (s) => s.toUpperCase())}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="bg-white" style={{ padding: 24, minHeight: 360 }}>
            <Routes>
              {routes.map((route) => {
                return (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={route.element}
                  />
                );
              })}
              <Route path="*" element={<UnAudit />}></Route>
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Board;
