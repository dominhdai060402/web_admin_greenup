import React from "react";
import { Select } from "antd";
import "./style.scss";

export default function page() {
  return (
    <section className="section">
      <h1 className="section-heading">
        QUẢN LÝ LỊCH ĐẶT/ LỊCH THĂM KHÁM/ THÊM LỊCH ĐẶT
      </h1>
      <form action="">
        <h2>Thông tin lịch đặt</h2>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="">Loại lịch hẹn</label>

            <Select
              defaultValue="lucy"
              style={{
                width: 120,
              }}
              disabled
              options={[
                {
                  value: "lucy",
                  label: "Lucy",
                },
              ]}
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Số lượng thú cưng</label>
            <input type="text" placeholder="Nhập số lượng thú cưng" />
          </div>
        </div>
      </form>
    </section>
  );
}
