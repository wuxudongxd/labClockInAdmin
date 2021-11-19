import { FC } from "react";
import { Button, Drawer, Form, Input } from "antd";
import { useAddLabs } from "hooks/cloudbase/useLab";
import type { lab, location } from "types/index";
import Map from "./map";
import "./index.scss";

interface CreateLabProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const CreateLab: FC<CreateLabProps> = ({ visible, setVisible }) => {
  // 表单域数据状态
  const [form] = Form.useForm();
  const mutation = useAddLabs();

  const onFinish = (formData: lab) => {
    console.log(formData);
    mutation.mutate(formData);
    form.resetFields();
    setVisible(false);
  };

  // 将map坐标传入form
  const onMapChange = (locations: location[]) => {    
    const fields = form.getFieldsValue();
    Object.assign(fields, { locations });
    form.setFieldsValue(fields);
  };

  return (
    <Drawer
      title="新建实验室"
      placement="right"
      forceRender={true}
      onClose={() => {
        setVisible(false);
        form.resetFields();
      }}
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
  );
};

export default CreateLab;