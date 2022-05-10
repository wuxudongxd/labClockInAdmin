import { useState } from "react";
import { Button } from "antd";
import CreateLab from "./create";
import List from "./list";

const Lab = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        新建实验室
      </Button>
      <CreateLab visible={visible} setVisible={setVisible} />
      <List />
    </>
  );
};

export default Lab;
