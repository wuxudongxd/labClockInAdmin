import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import AppProvider from "~/context/AppProvider";

import Border from "..";

describe("Border working test", () => {
  // 这里使用mock而不是spyOn,是因为如果只模拟unAuditUserQuery函数，~/pages/unAudit/hooks内导入db的代码仍会执行，执行db初始化代码会报错
  vi.mock("~/pages/unAudit/hooks", () => {
    return {
      __esModule: true,
      default: () => ({ unAuditUserQuery: { data: [] }, auditUser: () => {} }),
    };
  });
  vi.mock("~/pages/lab/hooks", () => {});
  vi.mock("~/pages/leave/hooks", () => {});

  it("render correctly", () => {
    render(
      <AppProvider>
        <Border />
      </AppProvider>
    );
    expect(screen.getByRole("menu")).toMatchSnapshot();
  });
});
