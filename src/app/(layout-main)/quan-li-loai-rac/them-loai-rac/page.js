"use client";
import "./style.scss";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
      <h1 className="section-heading">QUẢN LÝ LOẠI RÁC / THÊM LOẠI RÁC</h1>
      <h3
        style={{
          marginBottom: "10px",
          fontSize: 20,
          fontWeight: 400,
          color: "#22AA56",
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
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Tên loại rác:</label>
        <input type="text" placeholder="Nhập tên loại rác..." />
      </div>
        <div className="input-group" style={{ width: "792px" }}>
          <label htmlFor="">Loại rác:</label>
          <input type="text" placeholder="Chọn loại rác..." />
        </div>
        <div className="input-group" style={{ width: "792px" }}>
          <label htmlFor="">Số điểm thưởng tương ứng khi đổi (điểm/kg):</label>
          <input type="text" placeholder="Nhập số điểm tương ứng...." />
        </div>
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Hướng dẫn cách xử lý loại rác:</label>
        <CustomEditor initialData="Nhập mô tả..." />
      </div>
      <div className="btn-group">
        <button
          className="btn btn-cancel"
          type="button"
          onClick={() => {
            router.push("/quan-li-tin-tuc");
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
