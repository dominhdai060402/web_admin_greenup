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
      <h1 className="section-heading">QUẢN LÝ ĐIỂM THU NHẬN / CHỈNH SỬA ĐIỂM THU NHẬN</h1>
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
        <label htmlFor="">Tên điểm thu nhận:</label>
        <input
          type="text"
          placeholder="Nhập tên điểm thu nhận..."
          defaultValue={`Tổ chức thu nhận rác tái chế quận Đống Đa`}
        />
      </div>
      <div className="input-group" style={{ width: "792px"}}>
          <label htmlFor="">Địa chỉ điểm thu nhận:</label>
          <input
            type="text"
            placeholder="Nhập địa chỉ điểm thu nhận..."
            defaultValue="81 P.Thái Thịnh, Thịnh Quang, Đống Đa, Hà Nội"
          />
        </div>
      <div className="input-group" style={{ width: "792px"}}>
          <label htmlFor="">Số điện thoại liên hệ:</label>
          <input type="text" placeholder="Nhập số điện thoại..." 
          defaultValue="0345335225"/>
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
              defaultValue={dayjs("2024-02-03")}
            />
          </div>
          <div className="input-group" style={{ width: 385 }}>
          <label htmlFor="">Giờ làm việc:</label>
          <input type="text" placeholder="Chọn giờ làm việc..."
          defaultValue="9:00 - 18:00" />
      </div>
      </div>
      <div className="input-group" style={{ width: "792px" }}>
          <label htmlFor="">Nhân viên làm việc tại điểm thu nhận:</label>
          <input type="text" placeholder="Chọn nhân viên ..."
          defaultValue="Nguyễn Thị Lan" />
      </div>
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Nội dung bài viết:</label>
        <CustomEditor
          initialData={`  <div className="content">
            <p>
              Tổ chức thu nhận đồ tái chế quận Đống Đa là một trong những 
              địa điểm quan trọng trong việc thu gom rác tái chế tại Hà Nội.
               Được thành lập với mục tiêu giảm thiểu chất thải và bảo vệ 
               môi trường, tổ chức này đã trở thành một điểm đến quan trọng
                cho cộng đồng dân cư trong việc đóng góp và tham gia trong 
                quá trình tái chế.
            </p>
          </div>`}
        />
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
