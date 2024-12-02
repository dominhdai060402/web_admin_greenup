"use client";
import React, { useState } from "react";
import "./style.scss";
import { Input, Space, Select, Pagination, Modal } from "antd";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const { Search } = Input;
const data = [
  {
    name: "Tạ Hoàng Linh",
    gender: true,
    phoneNumber: "03823376446",
    email: "tahoanglinh@gmail.com",
    role: "Quản lý",
    status: true,
  },
  {
    name: "Đỗ Thị Quỳnh Anh",
    gender: false,
    phoneNumber: "09643792928",
    email: "dothiquynhanh@gmail.com",
    role: "Nhân viên",
    status: true,
  },
  {
    name: "Tạ Minh Long",
    gender: true,
    phoneNumber: "09647367434",
    email: "taminhlong@gmail.com",
    role: "Nhân viên",
    status: true,
  },
  {
    name: "Nguyễn Thị Anh",
    gender: false,
    phoneNumber: "08635745723",
    email: "nguyenthianh@gmail.com",
    role: "Nhân viên",
    status: true,
  },
  {
    name: "Lê Thanh Thủy",
    gender: false,
    phoneNumber: "03747829045",
    email: "lethanhthuy@gmail.com",
    role: "Quản lý",
    status: true,
  },
  {
    name: "Huỳnh Ngọc Xuân",
    gender: false,
    phoneNumber: "03847927499",
    email: "huynhngocxuan@gmail.com",
    role: "Nhân viên",
    status: true,
  },
  {
    name: "Trương Anh Ngọc",
    gender: false,
    phoneNumber: "03648894402",
    email: "truonganhngoc@gmail.com",
    role: "Nhân viên",
    status: true,
  },
  {
    name: "Lê Minh Tuấn Linh",
    gender: true,
    phoneNumber: "09847478444",
    email: "leminhtuanlinh@gmail.com",
    role: "Nhân viên",
    status: true,
  },
  {
    name: "Đỗ Văn Công Thuần",
    gender: true,
    phoneNumber: "09747343886",
    email: "dovancongthuan@gmail.com",
    role: "Nhân viên",
    status: true,
  },
  {
    name: "Phạm Thị Lan",
    gender: false,
    phoneNumber: "03488948855",
    email: "phamthilan@gmail.com",
    role: "Nhân viên",
    status: true,
  },
];

export default function Page() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [account, setAccount] = useState(data);
  const handleSearch = (value) => {
    if (value === "") {
      setAccount(data);
    } else {
      let searchData = data.filter((item) => {
        return item.name.trim().match(value.trim());
      });
      setAccount(searchData);
    }
  };
  const handleSearchChange = (e) => {
    if (e.target.value === "") {
      setAccount(data);
    }
  };
  const handleDelete = () => {
    setIsModalOpen(true);
  }
  const handleOk = () => {
    toast.success("Xóa tài khoản thành công!");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getDetail = () => {
    router.push("/quan-li-tai-khoan/tai-khoan-user/chi-tiet-user")
  }
  return (
    <section className="section">
      <Modal
      title="Xóa tài khoản"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Đồng ý"
      cancelText="Hủy"
    >
      <p>Bạn có chắc chắn muốn xóa tài khoản này không?</p>
    </Modal>
    <h1 className="section-heading">
      Quản lý tài khoản/ user
    </h1>
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
          <label htmlFor="">Tìm kiếm tài khoản:</label>
          <Search
            placeholder="Nhập tên nhân viên"
            style={{ width: 328, height: 36 }}
            onSearch={handleSearch}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <Link
        href="/quan-li-tai-khoan/tai-khoan-user/them-user"
        className="add-new-btn"
      >
        + Thêm người dùng
      </Link>
    </div>
    <div className="table">
      <div className="table-row table-heading">
        <div className="table-column">STT</div>
        <div className="table-column">Tên nhân viên</div>
        <div className="table-column">Chức vụ</div>
        <div className="table-column">Giới tính</div>
        <div className="table-column">Số điện thoại</div>
        <div className="table-column">Email</div>
        <div className="table-column">Trạng thái</div>
        <div className="table-column">Thao tác</div>
      </div>
      {account.map((acc, index) => {
        return (
          <div className="table-row" key={index}>
            <div className="table-column">{index + 1}</div>
            <div
              className="table-column"
            // style={{ display: "flex", justifyContent: "flex-start" }}
            >
              {acc.name}
            </div>
            <div className="table-column">{acc.role}</div>
            <div className="table-column">
              {acc.gender && "Nam"}
              {!acc.gender && "Nữ"}
            </div>
            <div className="table-column">{acc.phoneNumber}</div>
            <div className="table-column">{acc.email}</div>
            <div className="table-column">
              {acc.status && "Kích hoạt"}
              {!acc.status && "Chưa kích hoạt"}
            </div>
            <div className="table-column table-edit">
              <Image
                src="/icon/tabler_edit.svg"
                alt="edit"
                width={24}
                height={24}
                onClick={getDetail}
              />
              <Image
                src="/icon/mdi_trash.svg"
                alt="trash"
                width={24}
                  height={24}
                  onClick={handleDelete}
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