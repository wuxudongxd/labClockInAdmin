import { Button, Drawer, Form, Input, InputNumber } from "antd";
import useLab from "../hooks";
import LabMap from "./map";

interface CreateLabProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const CreateLab = ({ visible, setVisible }: CreateLabProps) => {
  // 表单域数据状态
  const [form] = Form.useForm();
  const { addUser } = useLab();

  const onFinish = (formData: lab) => {
    console.log(formData);
    addUser(formData);
    form.resetFields();
    setVisible(false);
  };

  // 将map坐标传入form
  const onMapChange = (locations: location[]) => {
    form.setFieldsValue({ ...form.getFieldsValue(), locations });
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
      width="100%"
    >
      <div className="flex flex-col justify-center items-center">
        <Form
          form={form}
          layout="vertical"
          className="w-[40rem]"
          onFinish={onFinish}
        >
          <Form.Item
            label="实验室名称"
            name="name"
            rules={[{ required: true, message: "请输入项目名" }]}
          >
            <Input placeholder="请输入实验室名称" />
          </Form.Item>

          <Form.Item label="实验室位置" name="locations">
            <LabMap onMapChange={onMapChange} />
          </Form.Item>

          <Form.Item
            label="签到有效范围"
            name="range"
            rules={[{ required: true, message: "请输入签到有效范围" }]}
            initialValue={10}
          >
            <InputNumber addonAfter="米" />
          </Form.Item>

          <Form.Item className="text-right">
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
