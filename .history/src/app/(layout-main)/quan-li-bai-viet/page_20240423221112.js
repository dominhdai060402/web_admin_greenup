import React from "react";
import { Input, Space, Select } from "antd";

const Search = Input;

export default function page() {
  return (
    <section className="section">
      <h1 className="section-heading">Quản lý bài viết</h1>
      <div
        className="filter"
        style={{
          marginBottom: "20px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="">Tìm kiếm lịch đặt:</label>
            <Search
              placeholder="Nhập mã lịch đặt"
              style={{ width: 328, height: 36 }}
              onSearch={handleSearch}
              onChange={handleSearchChange}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="">Trạng thái:</label>
            <Select
              defaultValue="all"
              onChange={handleChange}
              style={{
                width: 213,
              }}
              options={[
                {
                  value: "all",
                  label: "Tất cả",
                },
                {
                  value: "pending",
                  label: "Chờ tới",
                },
                {
                  value: "wait",
                  label: "Chờ đón",
                },
                {
                  value: "done",
                  label: "Thành công",
                },
                {
                  value: "cancel",
                  label: "Đã hủy",
                },
              ]}
            />
          </div>
        </div>
        <Link
          href="/quan-li-lich-dat/khach-san-thu-cung/them-lich-dat"
          className="add-new-btn"
        >
          + Thêm lịch đặt
        </Link>
      </div>
    </section>
  );
}
