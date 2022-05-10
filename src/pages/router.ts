import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import UnAudit from "~/pages/unAudit";
import Lab from "pages/lab";

const routes = [
  {
    key: "1",
    path: "unaudit",
    name: "待审核用户",
    icon: PieChartOutlined,
    element: UnAudit,
  },
  {
    key: "2",
    path: "lab",
    name: "实验室管理",
    icon: DesktopOutlined,
    element: Lab,
  },
];

export default routes;
