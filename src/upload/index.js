import { Divider, Form, Input, InputNumber, Upload } from "antd";
import "./index.css";
import { Button } from "antd";
import { useState } from "react";

function UploadPage() {
  const [imgeUrl, setImgeUrl] = useState(null);
  const onSubmit = (values) => {
    console.log(values);
  };
  const onChangeImage = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imgeUrl = response.imgeUrl;
      setImgeUrl(imgeUrl);
    }
  };
  return (
    <div id="upload-container">
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">상품 사진</div>}
        >
          <Upload
            name="image"
            action="http://localhost:8080/image"
            listType="picture"
            showUploadList={false}
            onChange={onChangeImage}
          >
            {imgeUrl ? (
              <img id="upload-img" src={`http://localhost:8080/${imgeUrl}`} />
            ) : (
              <div id="upload-img-placeholder">
                <img src="/images/icons/camera.png" />
                <span>이미지를 업로드해주세요.</span>
              </div>
            )}
          </Upload>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">판매자 명</div>}
          name="seller"
          rules={[{ required: true, message: "판매자 이름을 입력해주세요" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="이름을 입력해주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">상품 이름</div>}
          name="name"
          rules={[{ required: true, message: "상품 이름을 입력해주세요" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품 이름을 입력해주세요"
          />
        </Form.Item>

        <Divider />

        <Form.Item
          label={<div className="upload-label">상품 가격</div>}
          name="price"
          rules={[{ required: true, message: "상품 가격을 입력해주세요" }]}
        >
          <InputNumber className="upload-price" size="large" defaultValue={0} />
        </Form.Item>

        <Divider />

        <Form.Item
          label={<div className="upload-label">상품 소개</div>}
          name="description"
          rules={[{ required: true, message: "상품 소개를 입력해주세요" }]}
        >
          <Input.TextArea
            id="product-description"
            size="large"
            placeholder="상품 소개를 입력해주세요"
            showCount
            maxLength={300}
          />
        </Form.Item>

        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            상품등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
