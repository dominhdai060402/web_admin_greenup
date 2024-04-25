import "./style.scss";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section className="section">
      <h1 className="section-heading">Quản lý bài viết/ Thêm bài viết</h1>
      <h3
        style={{
          marginBottom: "10px",
          fontSize: 20,
          fontWeight: 400,
          color: "#911A1D",
        }}
      >
        Chọn ảnh nền:
      </h3>
      <Image
        src="/img/grey-img-3.svg"
        width={221}
        height={221}
        style={{ borderRadius: "10px" }}
      />
      <label htmlFor="image" className="image-choose-custom">
        Chọn ảnh
      </label>
      <input type="file" id="image" />
      <div className="input-group">
        <label htmlFor="">Tiêu đề bài viết:</label>
        <input type="text" placeholder="Nhập vào tiêu đề bài viết" />
      </div>
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="">Tác giả:</label>
          <input type="text" placeholder="Nhập vào tiêu đề bài viết" />
        </div>
        <div className="input-group">
          <label htmlFor="">Ngày đăng:</label>
          <input type="text" placeholder="Nhập vào tiêu đề bài viết" />
        </div>
      </div>
      <label htmlFor="">Nội dung bài viết</label>
    </section>
  );
}
