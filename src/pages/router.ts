import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import UnAudit from "./unAudit";
import Lab from "./lab";
import Leave from "./leave";

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
  {
    key: "3",
    path: "leave",
    name: "请假申请管理",
    icon: DesktopOutlined,
    element: Leave,
  },
  {
    key: "4",
    path: "analysis",
    name: "数据分析",
    icon: DesktopOutlined,
    element: Lab,
  },
];

export default routes;
