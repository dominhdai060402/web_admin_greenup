"use client";
import "./style.scss";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Select, DatePicker, Modal, Space } from "antd";

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
      <h1 className="section-heading">QUẢN LÝ ĐIỂM THU NHẬN / THÊM ĐIỂM THU NHẬN</h1>
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
        <label htmlFor="">Tên điểm thu nhận:</label>
        <input type="text" placeholder="Nhập tên điểm thu nhận..." />
      </div>
      <div className="input-group" style={{ width: "792px"}}>
          <label htmlFor="">Địa chỉ điểm thu nhận:</label>
          <input type="text" placeholder="Nhập địa chỉ điểm thu nhận..." />
      </div>
      <div className="input-group" style={{ width: "792px" }}>
          <label htmlFor="">Số điện thoại liên hệ:</label>
          <input type="text" placeholder="Nhập số điện thoại..." />
      </div>
      <div className="input-row">
          <div className="input-group">
            <label htmlFor="">Ngày đặt:</label>
            <DatePicker
              placeholder="Ngày làm việc"
              style={{
                width: 385,
                height: 40,
              }}
            />
          </div>
          <div className="input-group" style={{ width: 385 }}>
          <label htmlFor="">Giờ làm việc:</label>
          <input type="text" placeholder="Chọn giờ làm việc..." />
      </div>
        </div>
      <div className="input-group" style={{ width: "792px" }}>
          <label htmlFor="">Nhân viên làm việc tại điểm thu nhận:</label>
          <input type="text" placeholder="Chọn nhân viên ..." />
      </div>
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Giới thiệu điểm thu gom:</label>
        <CustomEditor initialData="Nhập nội dung.." />
      </div>
      <div className="btn-group">
        <button
          className="btn btn-cancel"
          type="button"
          onClick={() => {
            router.push("/quan-li-diem-thu-nhan");
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
