import { render } from "@testing-library/react";
import { ComponentType } from "react";

export default function mountTest(Component: ComponentType) {
  describe("mount and unmount", () => {
    it(`component could be updated and unmounted without errors`, () => {
      const { unmount, rerender } = render(<Component />);
      expect(() => {
        rerender(<Component />);
        unmount();
      }).not.toThrowError();
    });
  });
}
