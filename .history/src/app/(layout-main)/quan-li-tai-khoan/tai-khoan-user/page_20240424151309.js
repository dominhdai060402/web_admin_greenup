"use client";
import React, { useState } from "react";
import "./style.scss";
import { Input, Space, Select, Pagination } from "antd";
import Link from "next/link";
import Image from "next/image";

const { Search } = Input;
const data = [
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Bùi Quang Trưởng",
    position: "Bác sĩ",
    gender: true,
    phoneNumber: "0975654956",
    email: "buiquangtruong@gmail.com",
    status: true,
  },
  {
    name: "Hoàng Minh Hạnh",
    position: "Bác sĩ",
    gender: false,
    phoneNumber: "0977354955",
    email: "hoangminhhang@gmail.com",
    status: true,
  },
  {
    name: "Hoàng Minh Duyên",
    position: "Bác sĩ",
    gender: false,
    phoneNumber: "0557354956",
    email: "hoangminhduyen@gmail.com",
    status: true,
  },
  {
    name: "Hoàng Đức Trung",
    position: "Nhân viên",
    gender: true,
    phoneNumber: "0937324946",
    email: "hoangductrung@gmail.com",
    status: true,
  },
  {
    name: "Trần Văn Trung",
    position: "Nhân viên",
    gender: true,
    phoneNumber: "0956354946",
    email: "tranvantrung@gmail.com",
    status: true,
  },
  {
    name: "Nguyễn Nhâm Quỳnh",
    position: "Bác sĩ",
    gender: false,
    phoneNumber: "0337354955",
    email: "nguyennhamquynh@gmail.com",
    status: true,
  },
  {
    name: "Trần Văn Linh",
    position: "Bác sĩ",
    gender: true,
    phoneNumber: "0975554956",
    email: "tranvanlinh@gmail.com",
    status: true,
  },
  {
    name: "Nguyễn Thị Thảo",
    position: "Nhân viên",
    gender: false,
    phoneNumber: "0977771956",
    email: "nguyenthithao@gmail.com",
    status: true,
  },
  {
    name: "Bùi Văn Đoan",
    position: "Nhân viên",
    gender: true,
    phoneNumber: "0973354956",
    email: " buivandoan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
  {
    name: "Tạ Hoàng An",
    position: "Giám đốc",
    gender: true,
    phoneNumber: "0977354956",
    email: "tahoangan@gmail.com",
    status: true,
  },
];
export default function Page() {
  const [articleList, setArticleList] = useState(data);
  const handleSearch = (value) => {
    if (value === "") {
      setArticleList(data);
    } else {
      let searchData = data.filter((item) => {
        return item.title.trim().match(value.trim());
      });
      setArticleList(searchData);
    }
  };
  const handleSearchChange = (e) => {
    if (e.target.value === "") {
      setArticleList(data);
    }
  };
  return (
    <section className="section">
      <h1 className="section-heading">Quản lý dịch vụ</h1>
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
            <label htmlFor="">Tìm kiếm dịch vụ:</label>
            <Search
              placeholder="Nhập tiêu đề bài viết"
              style={{ width: 328, height: 36 }}
              onSearch={handleSearch}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <Link
          href="/quan-li-lich-dat/khach-san-thu-cung/them-lich-dat"
          className="add-new-btn"
        >
          + Thêm bài viết
        </Link>
      </div>
      <div className="table">
        <div className="table-row table-heading">
          <div className="table-column">Stt</div>
          <div className="table-column">Hình ảnh</div>
          <div className="table-column">Tiêu đề</div>
          <div className="table-column">Nội dung</div>
          <div className="table-column">Ngày đăng</div>
          <div className="table-column">Người viết</div>
          <div className="table-column">Tùy chọn</div>
        </div>
        {articleList.map((article, index) => {
          return (
            <div className="table-row" key={article.id}>
              <div className="table-column">{index + 1}</div>
              <div className="table-column">
                <Image
                  src={article.img}
                  width={40}
                  height={26}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="table-column"
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                {article.name}
              </div>
              <div
                className="table-column"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  textAlign: "justify",
                }}
              >
                {article.detail}
              </div>
              <div className="table-column">08/07/2018</div>
              <div className="table-column">Bùi Quang Trưởng</div>
              <div className="table-column table-edit">
                <Image
                  src="/icon/tabler_edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                />
                <Image
                  src="/icon/mdi_trash.svg"
                  alt="trash"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        defaultCurrent={1}
        total={2}
        defaultPageSize={20}
        showSizeChanger={false}
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      />
    </section>
  );
}
