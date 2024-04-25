import React from "react";
import "./style.scss";
import { Input, Space, Select } from "antd";
import Link from "next/link";

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
            <label htmlFor="">Tìm kiếm bài viết</label>
            <Search
              placeholder="Nhập mã lịch đặt"
              style={{ width: 328, height: 36 }}
              //   onSearch={handleSearch}
              //   onChange={handleSearchChange}
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
