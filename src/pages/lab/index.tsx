import { FC, useState } from "react";
import { Button, Drawer, Form, Input } from "antd";
import Map from "./map";
import "./index.scss";

const Lab: FC = () => {
  // 表单域数据状态
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  const onFinish = (formData: any) => {
    console.log(formData);
    form.resetFields();
    setVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const closeDrawer = () => {
    form.resetFields();
    setVisible(false);
  };

  // 将map坐标传入form
  const onMapChange = (locations: number[]) => {
    const fields = form.getFieldsValue();
    Object.assign(fields, { locations: [locations] });
    form.setFieldsValue(fields);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        新建实验室
      </Button>
      <Drawer
        title="新建实验室"
        placement="right"
        forceRender={true}
        onClose={closeDrawer}
        visible={visible}
        width={"100%"}
      >
        <div className="container">
          <Form
            form={form}
            layout={"vertical"}
            style={{ width: "40rem" }}
            onFinish={onFinish}
          >
            <Form.Item
              label={"实验室名称"}
              name={"name"}
              rules={[{ required: true, message: "请输入项目名" }]}
            >
              <Input placeholder={"请输入实验室名称"} />
            </Form.Item>

            <Form.Item
              label={"实验室位置"}
              name={"locations"}
              // rules={[{ required: true, message: "请输入项目名" }]}
            >
              <Map onMapChange={onMapChange} />
            </Form.Item>

            <Form.Item style={{ textAlign: "right" }}>
              <Button type={"primary"} htmlType={"submit"}>
                提交
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Drawer>
    </>
  );
};

export default Lab;
