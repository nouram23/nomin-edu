import React from "react";
import { Button, Form, Input, Select } from "antd";
const { Option } = Select;

import Layout from "../../components/layout";
import { UploadOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

export default function registerStudent() {
  const onFinish = async (values) => {
    const response = await fetch(`/api/v1/register-student`, {
      method: "POST",
      body: JSON.stringify({ ...values }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    alert("Таны мэдээллийг хүлээж авлаа!");
    router.push("/");
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e?.fileList;
  };
  return (
    <Layout>
      {" "}
      <div className="flex flex-col justify-center items-center py-20">
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item label="Овог нэр" name={"fullName"}>
            <Input
              className=" py-2 px-3 rounded-lg "
              type="text"
              placeholder="Овог нэр"
            />
          </Form.Item>

          <Form.Item className=" " name="language" label="Хэл">
            <Select
              size="large"
              defaultValue="..."
              onChange={handleChange}
              className="rounded-lg "
            >
              <Option value="1">Jack</Option>
              <Option value="2">Lucy</Option>
            </Select>
          </Form.Item>
          <Form.Item className=" " name="language" label="Анги">
            <Select
              size="large"
              defaultValue="..."
              onChange={handleChange}
              className="rounded-lg "
            >
              <Option value="1">Jack</Option>
              <Option value="2">Lucy</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Төлбөр" name={"payment"}>
            <Input
              className=" py-2  px-3   rounded-lg "
              type="text"
              placeholder="Төлбөр"
            />
          </Form.Item>
          <Form.Item label="Утасны дугаар" name={"phone"}>
            <Input
              className=" py-2  px-3   rounded-lg "
              type="number"
              placeholder="Утасны дугаар"
            />
          </Form.Item>
          <Form.Item label="Тайлбар" name={"discription"}>
            <Input.TextArea
              className=" py-2  px-3   rounded-lg "
              type="text"
              placeholder="Тайлбар"
            />
          </Form.Item>
          <Form.Item
            name="upload"
            label="Зураг "
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="img" action="" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              className="w-32 text-white h-10 pl-2 font-medium  rounded-lg bg-[#E28025] "
            >
              Нэмэх
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
}
