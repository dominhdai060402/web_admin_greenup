"use client";
import React, { useState } from "react";
import { Select, DatePicker } from "antd";
import "./style.scss";
import PetItem from "@/components/PetItem/PetItem";

export default function Page() {
  const [numberPet, setNumberPet] = useState(2);
  return (
    <section className="section">
      <h1 className="section-heading">
        QUẢN LÝ LỊCH ĐẶT/ LỊCH THĂM KHÁM/ THÊM LỊCH ĐẶT
      </h1>
      <form action="" className="form">
        <h2>Thông tin lịch đặt</h2>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="">Loại lịch hẹn</label>
            <Select
              defaultValue="Thăm khám"
              style={{
                width: 444,
                height: 40,
              }}
              disabled
              options={[
                {
                  value: "kbBooking",
                  label: "Thăm khám",
                },
              ]}
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Số lượng thú cưng</label>
            <input type="text" placeholder="Nhập số lượng thú cưng" />
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="">Ngày đặt:</label>
            <DatePicker
              placeholder="Ngày đặt"
              style={{
                width: 444,
                height: 40,
              }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Giờ đặt:</label>
            <Select
              defaultValue="9:00 - 10:00"
              style={{ width: 444, height: 40 }}
              options={[
                { value: "9:00 - 10:00", label: "9:00 - 10:00" },
                { value: "10:00 - 11:00", label: "10:00 - 11:00" },
                { value: "11:00 - 12:00", label: "11:00 - 12:00" },
                { value: "13:00 - 14:00", label: "13:00 - 14:00" },
                { value: "14:00 - 15:00", label: "14:00 - 15:00" },
                { value: "15:00 - 16:00", label: "15:00 - 16:00" },
                { value: "16:00 - 17:00", label: "16:00 - 17:00" },
                { value: "18:00 - 19:00", label: "18:00 - 19:00" },
                { value: "19:00 - 20:00", label: "19:00 - 20:00" },
                { value: "20:00 - 21:00", label: "20:00 - 21:00" },
              ]}
            />
          </div>
        </div>
        <h2>Thông tin người dùng:</h2>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="">Họ và tên</label>
            <input type="text" placeholder="Nhập họ và tên" />
          </div>
          <div className="input-group">
            <label htmlFor="">Số điện thoại</label>
            <input type="text" placeholder="Nhập Số điện thoại" />
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Nhập họ và tên" />
          </div>
        </div>
        <h2>Danh sách thú cưng:</h2>
        <h2>Thông tin thú cưng 1:</h2>
        {[...Array(numberPet)].map((item, index) => {
          return <PetItem type={1} />;
        })}
        <hr />
        <button
          className="add-new-pet-btn"
          // onClick={handleAddNewPet}
          type="button"
        >
          + Thêm thú cưng
        </button>
        <hr />
        <div className="btn-group">
          <button className="btn btn-cancel">Quay lại</button>
          <button className="btn btn-save">Lưu</button>
        </div>
      </form>
    </section>
  );
}
