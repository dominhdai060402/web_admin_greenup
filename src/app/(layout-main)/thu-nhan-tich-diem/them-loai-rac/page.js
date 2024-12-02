"use client";
import "./style.scss";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { DatePicker } from "antd";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const initialData = [
  {
    id: 1,
    name: "...",
    pointsPerKg:  "...",
    weight:  "...",
    earnedPoints:  "...",
  },
  {
    id: 2,
    name:  "...",
    pointsPerKg:  "...",
    weight:  "...",
    earnedPoints:  "...",
  },
  {
    id: 3,
    name:  "...",
    pointsPerKg:  "...",
    weight:  "...",
    earnedPoints:  "...",
  },
];

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState(initialData);

  const totalWeight = data.reduce((sum, item) => sum + item.weight, 0);
  const totalPoints = data.reduce((sum, item) => sum + item.earnedPoints, 0);

  return (
    <section className="section">
      <h1 className="section-heading">
        Quản lý thu nhận - tích điểm/ Thêm mới
      </h1>
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Mã đổi điểm:</label>
        <input type="text" placeholder="Nhập mã đổi điểm..." />
      </div>
        <div className="input-group" style={{ width: "792px" }}>
          <label htmlFor="">Số điện thoại khách hàng:</label>
          <input type="text" placeholder="Nhập số điện thoại khách hàng.." />
        </div>      
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Tên khách hàng:</label>
        <input type="text" placeholder="Nhập tên khách hàng..." />
      </div>

      <div>
        <h3
          style={{
            marginBottom: "10px",
            fontSize: 20,
            fontWeight: 400,
            color: "#22AA56",
          }}
        >
          Danh sách loại rác giao nộp
        </h3>
      </div>
      <div className="table">
        <div className="table-row table-heading">
          <div className="table-column">STT</div>
          <div className="table-column">Tên loại rác</div>
          <div className="table-column">Số điểm thưởng tương ứng</div>
          <div className="table-column">Khối lượng rác giao nộp (kg)</div>
          <div className="table-column">Số điểm thưởng nhận được</div>
        </div>
        {data.map((item, index) => (
          <div className="table-row" key={item.id}>
            <div className="table-column">{index + 1}</div>
            <div className="table-column">{item.name || "N/A"}</div>{" "}
            {/* Kiểm tra nếu dữ liệu thiếu */}<div className="table-column">{item.pointsPerKg || "N/A"}</div>
            <div className="table-column">{item.weight || "0"}</div>
            <div className="table-column">{item.earnedPoints || "0"}</div>
          </div>
        ))}
      </div>

      <div
        className="summary" 
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          marginTop: "20px",
        }}
      >
        <div>
          <strong>Tổng khối lượng rác giao nộp:</strong> {totalWeight} kg
        </div>
        <div>
          <strong>Tổng số điểm thưởng nhận được:</strong> {totalPoints} điểm
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "flex-end",
          marginTop: "20px",
        }}
      >
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