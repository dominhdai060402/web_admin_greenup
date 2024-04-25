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
          <input type="text" placeholder="Nhập giống loài thú cưng" />
        </div>
        <div className="input-group">
          <label htmlFor="">Bác sĩ / nhân viên phụ trách</label>
          <Select
            // defaultValue="fe090a69-9d7f-4dad-a398-56556be0658e"
            placeholder="Chọn nhân viên / bác sĩ phụ trách"
            style={{ width: 444, height: 40, color: "black" }}
            options={[
              {
                value: "fe090a69-9d7f-4dad-a398-56556be0658e",
                label: "Tạ Hoàng An",
              },
              {
                value: "01e7d51c-58c9-4086-a240-d6bda2ea610f",
                label: "Bùi Quang Trưởng",
              },
              {
                value: "92095615-91ba-49da-8240-8259b96b65ec",
                label: "Trần Văn Linh",
              },
              {
                value: "959da571-b7e0-42e4-ab2e-61bbf69b198f",
                label: "Hoàng Minh Hạnh",
              },
              {
                value: "f9f21422-2ead-48b2-b423-b0ab943c6e27",
                label: "Hoàng Thị Mỹ Duyên",
              },
              {
                value: "c8dfb81c-ac62-4d28-8a88-bae510ed9ad8",
                label: "Bùi Thị Phương Thảo",
              },
            ]}
          />
        </div>
      </div>
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="">Giống loài</label>
          <textarea
            type="text"
            placeholder="Ghi chú..."
            style={{ width: 905, height: 272, padding: 10 }}
          />
        </div>
      </div>
    </div>
  );
}
