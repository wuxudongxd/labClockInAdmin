import { Breadcrumb, Layout, Menu } from "antd";
import { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import routes from "~/pages/router";
import UnAudit from "~/pages/unAudit";

const { Header, Content, Footer, Sider } = Layout;

const Board = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const defaultSelectedKey =
    routes.find((route) => location.pathname.slice(1) === route.path)?.key ||
    "1";

  return (
    <Layout className="min-h-screen">
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="h-8 m-4 bg-white bg-opacity-30" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[defaultSelectedKey]}
          mode="inline"
        >
          {routes.map((route) => {
            return (
              <Menu.Item key={route.key} icon={<route.icon />}>
                <Link to={route.path}>{route.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white p-0" />
        <Content className="my-0 mx-4">
          <Breadcrumb className="my-4 mx-0">
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>
              {location.pathname
                .slice(1)
                .replace(/^\S/, (s) => s.toUpperCase())}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="bg-white p-6 min-h-full">
            <Routes>
              {routes.map((route) => {
                return (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={<route.element />}
                  />
                );
              })}
              <Route path="*" element={<UnAudit />}></Route>
            </Routes>
          </div>
        </Content>
        <Footer className="text-center">
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Board;
