"use client";
import React, { useState } from "react";
import { Select, DatePicker, Modal, Input } from "antd";
import "./style.scss";
import PetItem from "@/components/PetItem/PetItem";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import Image from "next/image";

export default function Page() {
  const [numberPet, setNumberPet] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (numberPet > 1) {
      setNumberPet(numberPet - 1);
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangeNumberPet = (e) => {
    setNumberPet(+e.target.value);
  };
  const handleBack = () => {
    router.push("/quan-li-tai-khoan/tai-khoan-admin");
  };
  return (
    <section className="section">
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <p></p>
      </Modal>
      <h1 className="section-heading">
        QUẢN LÝ TÀI KHOẢN/ ADMIN/ TẠO TÀI KHOẢN
      </h1>
      <div
        className="wrapper"
        style={{
          display: "flex",
          width: "100%",
          background: "white",
          borderRadius: "10px",
        }}
      >
        <div
          className="image"
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src="/img/hoang_an.png"
            width={211}
            height={211}
            style={{
              borderRadius: "10px",
              marginTop: "36px",
              objectFit: "cover",
            }}
          />
          <h3 style={{ fontSize: "20px", color: "#22AA56", marginTop: "10px" }}>
            Tạ Hoàng An
          </h3>
          <p style={{ marginTop: "10px" }}>tahoangan@gmail.com</p>
        </div>
        <div style={{ borderLeft: "2px solid rgba(0, 0, 0, 0.1)" }}>
          <form
            action=""
            className="form"
            style={{ width: "70%", padding: "30px 0 0 20px" }}
          >
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Tên tài khoản</label>
                <input type="text" placeholder="Nhập tên tài khoản..."
                defaultValue="Tạ Hoàng An"  />
              </div>
            </div>
            <div className="">
              <div style={{ fontWeight: "600" }}>Chọn ảnh đại diện</div>
              <button
                style={{
                  display: "block",
                  border: "1px solid black",
                  padding: "7px 10px",
                  borderRadius: "7px",
                  margin: "15px 0",
                  background: "white",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Chọn ảnh
              </button>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <div style={{ marginBottom: "15px", fontWeight: "600" }}>
                Giới tính
              </div>
              <div style={{ display: "flex" }}>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="radio"
                    value="male"
                    defaultChecked
                    name="gender"
                    style={{
                      marginRight: "10px",
                      width: "24px",
                      height: "24px",
                      accentColor: "#22AA56",
                    }}
                  />
                  Nam
                </label>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="radio"
                    value="female"
                    name="gender"
                    style={{
                      margin: "0 10px 0 20px",
                      width: "24px",
                      height: "24px",
                      accentColor: "#22AA56",
                    }}
                  />
                  Nữ
                </label>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="radio"
                    value="other"
                    name="gender"
                    style={{
                      margin: "0 10px 0 20px",
                      width: "24px",
                      height: "24px",
                      accentColor: "#22AA56",
                    }}
                  />
                  Khác
                </label>
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Nhập email..."
                defaultValue="tahoangan@gmail.com" />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Số điện thoại</label>
                <input type="text" placeholder="Nhập số điện thoại"
                defaultValue="03823376446" />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Ngày sinh:</label>
                <DatePicker
                  placeholder="Chọn ngày sinh"
                  style={{
                    width: 444,
                    height: 40,
                    border: "1px solid rgba(0, 0, 0, 0.4)",
                    borderRadius: 7,
                  }}
                  defaultValue={dayjs("19-02-1997", "DD-MM-YYYY")}
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Địa chỉ: </label>
                <input type="text" placeholder="Nhập địa chỉ..." 
                defaultValue="380 Lê Trọng Tấn, Hoàng Mai, Hà Nội"/>
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Chức vụ</label>
                <Select
                  placeholder="Chọn chức vụ"
                  style={{
                    width: 444,
                    height: 40,
                    border: "1px solid rgba(0, 0, 0, 0.4)",
                    borderRadius: 7,
                  }}
                  options={[
                    {
                      value: "admin",
                      label: "Quản trị",
                    },
                    {
                      value: "user",
                      label: "Giám đốc",
                    },
                  ]}
                  defaultValue="Quản trị"
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Phân quyền</label>
                <Select
                  placeholder="Lựa chọn"
                  style={{
                    width: 444,
                    height: 40,
                    border: "1px solid rgba(0, 0, 0, 0.4)",
                    borderRadius: 7,
                  }}
                  options={[
                    {
                      value: "admin",
                      label: "Admin",
                    },
                    {
                      value: "user",
                      label: "Người dùng",
                    },
                  ]}
                  defaultValue="Admin"
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Mật khẩu</label>
                <Input.Password
                  defaultValue="admin"
                  placeholder="123456"
                  style={{
                    width: 444,
                    height: 40,
                    border: "1px solid rgba(0, 0, 0, 0.4)",
                    borderRadius: 10,
                  }}
                />
              </div>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <div style={{ marginBottom: "15px", fontWeight: "600" }}>
                Kích hoạt
              </div>
              <div style={{ display: "flex" }}>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="radio"
                    value="active"
                    defaultChecked
                    name="active"
                    style={{
                      marginRight: "10px",
                      width: "24px",
                      height: "24px",
                      accentColor: "#22AA56",
                    }}
                  />
                  Kích hoạt
                </label>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="radio"
                    value="notActive"
                    name="active"
                    style={{
                      margin: "0 10px 0 20px",
                      width: "24px",
                      height: "24px",
                      accentColor: "#22AA56",
                    }}
                  />
                  Không kích hoạt
                </label>
              </div>
            </div>
          </form>
          <div className="" style={{ margin: "20px 0 50px 20px" }}>
            <button
              style={{
                width: "200px",
                height: "45px",
                border: "1px solid #22AA56",
                borderRadius: "7px",
                background: "#22AA56",
                fontWeight: "600",
                color: "white",
                cursor: "pointer",
                marginRight: "25px",
              }}
            >
              Lưu
            </button>
            <button
              style={{
                width: "200px",
                height: "45px",
                border: "1px solid #22AA56",
                borderRadius: "7px",
                background: "white",
                fontWeight: "600",
                color: "#22AA56",
                cursor: "pointer",
              }}
              onClick={handleBack}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
