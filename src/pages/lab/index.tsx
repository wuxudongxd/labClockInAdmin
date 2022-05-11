import { useState } from "react";
import { Button } from "antd";
import CreateLab from "./create";
import List from "./list";

const Lab = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        新建实验室
      </Button>
      <CreateLab visible={visible} setVisible={setVisible} />
      <List />
    </>
  );
};

export default Lab;
