import React from "react";
import "./style.scss";
import { Select, DatePicker } from "antd";

export default function PetItem({ type }) {
  return (
    <div>
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
    </div>
  );
}
