import React from "react";
import "./style.scss";
import { Select, DatePicker } from "antd";

export default function PetItem({ type }) {
  return (
    <div>
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="">Tên thú cưng </label>
          <input type="text" placeholder="Nhập tên thú cưng" />
        </div>
        <div className="input-group">
          <label htmlFor="">Chủng loại </label>
          <Select
            defaultValue="dog"
            style={{ width: 444, height: 40 }}
            options={[
              { value: "dog", label: "Chó" },
              { value: "cat", label: "Mèo" },
              { value: "bunny", label: "Thỏ" },
              { value: "other", label: "Khác" },
            ]}
          />
        </div>
      </div>
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="">Tuổi</label>
          <input type="text" placeholder="Nhập tuổi thú cưng" />
        </div>
        <div className="input-group">
          <label htmlFor="">Giới tính</label>
          <Select
            defaultValue="true"
            style={{ width: 444, height: 40 }}
            options={[
              { value: "true", label: "Đực" },
              { value: "false", label: "Cái" },
            ]}
          />
        </div>
      </div>
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="">Giống loài</label>
          <input type="text" placeholder="Nhập tuổi thú cưng" />
        </div>
        <div className="input-group">
          <label htmlFor="">Bác sĩ / nhân viên phụ trách</label>
          <Select
            defaultValue="true"
            style={{ width: 444, height: 40 }}
            options={[
              { value: "true", label: "Đực" },
              { value: "false", label: "Cái" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
