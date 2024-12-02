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
      <h1 className="section-heading">QUẢN LÝ LOẠI RÁC / CHỈNH SỬA LOẠI RÁC</h1>
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
        src="/img/rac/rac01.png"
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
        <input
          type="text"
          placeholder="Nhập tên loại rác..."
          defaultValue={`"Chai nhựa"`}
        />
      </div>
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Loại rác:</label>
        <input
          type="text"
          placeholder="Chọn loại rác..."
          defaultValue="Rác tái chế"
        />
      </div>
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Số điểm thưởng tương ứng khi đổi (điểm/kg):</label>
        <input
          type="text"
          placeholder="Nhập số điểm tương ứng..."
          defaultValue="2.200"
        />
      </div>
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Hướng dẫn cách xử lý loại rác:</label>
        <CustomEditor
          initialData={`  <div className="content">
            <p>
              Dùng nước ấm và dầu rửa chén
Để làm sạch chai đựng nước, hãy đổ nước ấm vào chai và nhỏ vào đó một vài giọt nước rửa chén. Ngâm dung dịch đó trong chai khoảng 15 đến 20 phút và rửa lại với nước sạch.

Đối với những vết bẩn lâu ngày, có thể ngâm chai lâu hơn hoặc để qua đêm. Tuy nhiên, sau đó nên súc thật sạch và kĩ càng để nước rửa chén không tồn đọng trong chai.

Dùng nước ấm và dầu rửa chén
Giấy báo bỏ đi có thể làm phủi sạch và vò nhàu chúng, sau đó nhét đầy vào chai nhựa, đậy kín nắp và để qua đêm
            </p>
          </div>`}
        />
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
