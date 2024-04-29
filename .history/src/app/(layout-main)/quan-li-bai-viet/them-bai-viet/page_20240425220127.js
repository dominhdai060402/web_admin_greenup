"use client";
import "./style.scss";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";

export default function page() {
  const [value, setValue] = useState("");

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
      <label htmlFor="">Nội dung bài viết:</label>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={props.initialData}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
    </section>
  );
}
