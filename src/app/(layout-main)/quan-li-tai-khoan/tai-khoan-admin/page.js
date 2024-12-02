"use client";
import React, { useState } from "react";
import "./style.scss";
import { Input, Space, Select, Pagination, Modal } from "antd";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const { Search } = Input;
const data = 
[
  {
    "name": "Đỗ Nhật Long",
    "gender": true,
    "phoneNumber": "03823376446",
    "address": "Số 91 Định Công, Hoàng Mai",
    "score": 10000,
    "status": true
  },
  {
    "name": "Trần Hoàng Liên",
    "gender": false,
    "phoneNumber": "09643792928",
    "address": "Số 328 Lê Trọng Tấn, Hoàng Mai",
    "score": 15000,
    "status": true
  },
  {
    "name": "Nguyễn Văn Tính",
    "gender": true,
    "phoneNumber": "09647367434",
    "address": "Số 32 Chùa Láng, Đống Đa",
    "score": 41000,
    "status": true
  },
  {
    "name": "Nguyễn Linh Nhi",
    "gender": false,
    "phoneNumber": "08635745723",
    "address": "Số 131 Chùa Láng, Hoàng Mai",
    "score": 98000,
    "status": true
  },
  {
    "name": "Triệu Ngọc Linh",
    "gender": false,
    "phoneNumber": "03747829045",
    "address": "Số 109 Định Công, Hoàng Mai",
    "score": 8000,
    "status": true
  },
  {
    "name": "Ngô Thị Trúc",
    "gender": false,
    "phoneNumber": "03847927499",
    "address": "Số 33 Lê Trọng Tấn, Hoàng Mai",
    "score": 900,
    "status": true
  },
  {
    "name": "Nguyễn Minh Tú",
    "gender": false,
    "phoneNumber": "03648894402",
    "address": "Số 5 Trương Định, Hoàng Mai",
    "score": 11000,
    "status": true
  },
  {
    "name": "Tạ Văn Quang",
    "gender": true,
    "phoneNumber": "09847478444",
    "address": "Số 101 Tân Mai, Hoàng Mai",
    "score": 8000,
    "status": true
  },
  {
    "name": "Nguyễn Thị Linh",
    "gender": false,
    "phoneNumber": "09747343886",
    "address": "Số 131 Nguyễn Trãi, Thanh Xuân",
    "score": 10000,
    "status": true
  },
  {
    "name": "Phạm Thị Mai",
    "gender": false,
    "phoneNumber": "03488948855",
    "address": "Số 8 Lê Trọng Tấn, Hoàng Mai",
    "score": 1100,
    "status": true
  }
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
    router.push("/quan-li-tai-khoan/tai-khoan-admin/chi-tiet-admin");
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
        Quản lý tài khoản/ admin
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
          href="/quan-li-tai-khoan/tai-khoan-admin/them-admin"
          className="add-new-btn"
        >
          + Thêm nhân viên
        </Link>
      </div>
      <div className="table">
        <div className="table-row table-heading">
          <div className="table-column">STT</div>
          <div className="table-column">Tên người dùng</div>
          <div className="table-column">Giới tính</div>
          <div className="table-column">Số điện thoại</div>
          <div className="table-column">Địa chỉ</div>
          <div className="table-column">Điểm hiện có</div>
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
              <div className="table-column">
                {acc.gender && "Nam"}
                {!acc.gender && "Nữ"}
              </div>
              <div className="table-column">{acc.phoneNumber}</div>
              <div className="table-column">{acc.address}</div>
              <div className="table-column">{acc.score}</div>
              <div className="table-column">
                {acc.status && "Kích hoạt"}
                {!acc.status && "Chưa kích hoạt"}
              </div>
              <div className="table-column table-edit">
                <Image
                  src="/icon/tabler_edit.svg"
                  alt="edit"
                  width={24}
                  height={24}onClick={getDetail}
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