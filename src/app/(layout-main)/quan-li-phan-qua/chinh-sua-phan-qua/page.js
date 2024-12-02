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
      <h1 className="section-heading">QUẢN LÝ PHẦN QUÀ / CHỈNH SỦA PHẦN QUÀ</h1>
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
        src="/img/qua/qua01.png"
        width={221}
        height={221}
        style={{ borderRadius: "10px" }}
      />
      <label htmlFor="image" className="image-choose-custom">
        Chọn ảnh
      </label>
      <input type="file" id="image" />
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Tên phần quà:</label>
        <input
          type="text"
          placeholder="Nhập tên phần quà..."
          defaultValue={`Túi cối xách tay"`}
        />
      </div>
      <div className="input-row">
        <div className="input-group" style={{ width: "385px"  }}>
          <label htmlFor="">Số điểm đổi:</label>
          <input
            type="text"
            placeholder="Nhập số điểm đổi..."
            defaultValue="1000"
          />
        </div>
        <div className="input-group" style={{ width: "385px"  }}>
          <label htmlFor="">Số lượng còn lại:</label>
          <input
            type="text"
            placeholder="Nhập số lượng..."
            defaultValue="10"
          />
        </div>
      </div>
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Mô tả phần quà:</label>
        <CustomEditor
          initialData={`  <div className="content">
            <p>
              Sản phẩm này có hòa lẫn với vật liệu từ thực vật do đặc tính của vật liệu. Các sản phẩm sáng màu có thể có màu sắc trông giống như bị biến màu. Ánh nắng trực tiếp hoặc ánh đèn huỳnh quang có thể gây bạc màu.
Vui lòng lưu ý rằng màu tự nhiên của sản phẩm này được sử dụng mà không tẩy trắng hay nhuộm. Vì vậy, màu có thể khác nhau tùy vào vật liệu thô.
Tránh giặt vì có thể khiến sản phẩm méo mó.
Tùy điều kiện bảo quản và sử dụng, giảm độ bền, sự dính và thay đổi hình dạng có thể xảy ra.
Không dùng vật nhọn để chà xát hoặc làm trầy mặt trái.
Lớp phủ mặt trái có thể bị bong ra, xuất hiện lỗ kim và ánh sáng có thể xuyên vào.
Nếu sản phẩm bị bẩn, hãy loại bỏ bằng cách dùng khăn vắt kỹ hoặc vật tương tự thấm nhẹ, sau đó phơi khô trong bóng râm, ở nơi thông thoáng.
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
