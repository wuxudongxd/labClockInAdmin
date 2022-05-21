import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import AppProvider from "~/context/AppProvider";
import mountTest from "~/test/mountTest";

import Border from "..";

describe("Border working test", () => {
  vi.mock("~/pages/unAudit/hooks", () => {
    return {
      default: () => ({ unAuditUserQuery: { data: [] }, auditUser: () => {} }),
    };
  });
  vi.mock("~/pages/lab/hooks", () => {});
  vi.mock("~/pages/leave/hooks", () => {});

  mountTest(() => (
    <AppProvider>
      <Border />
    </AppProvider>
  ));

  it("should work", () => {
    render(
      <AppProvider>
        <Border />
      </AppProvider>
    );
    expect(
      screen.getByText("Ant Design ©2018 Created by Ant UED")
    ).toBeInTheDocument();
    expect(screen.getByText("待审核用户")).toMatchSnapshot();
  });
});
