"use client";
import "./style.scss";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

const CustomEditor = dynamic(
  () => {
    return import("../../../../components/custom-editor");
  },
  { ssr: false }
);

export default function Page() {
  const router = useRouter();

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
        src="/img/articles/article-1.jpg"
        width={221}
        height={221}
        style={{ borderRadius: "10px" }}
      />
      <label htmlFor="image" className="image-choose-custom">
        Chọn ảnh
      </label>
      <input type="file" id="image" />
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Tiêu đề bài viết:</label>
        <input
          type="text"
          placeholder="Nhập vào tiêu đề bài viết"
          defaultValue={`Bật mi cho bạn cách chăm sóc mèo con chu đáo nhất`}
        />
      </div>
      <div className="input-row">
        <div className="input-group" style={{ width: 444 }}>
          <label htmlFor="">Tác giả:</label>
          <input
            type="text"
            placeholder="Nhập vào tên tác giả"
            defaultValue="Bùi Quang Trưởng"
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Ngày đăng:</label>
          <DatePicker
            style={{ height: 40, width: 327 }}
            placeholder="Chọn ngày"
            defaultValue={dayjs("2024-02-03")}
          />
        </div>
      </div>
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Nội dung bài viết:</label>
        <CustomEditor initialData="Nhập nội dung.." />
      </div>
      <div className="btn-group">
        <button
          className="btn btn-cancel"
          type="button"
          onClick={() => {
            router.push("/quan-li-bai-viet");
          }}
        >
          Quay lại
        </button>
        <button
          className="btn btn-save"
          type="button"
          onClick={() => {
            toast.success("Lưu thành công");
          }}
        >
          Lưu
        </button>
      </div>
    </section>
  );
}
