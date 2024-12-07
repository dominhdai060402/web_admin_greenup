"use client";
import React, { useState } from "react";
import { Select, DatePicker, Modal, Input } from "antd";
import PetItem from "@/components/PetItem/PetItem";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import "../style.scss";
import AddNewPet from "../chi-tiet-user/AddNewPet";

const currentUser = {
  pets: [],
};

export default function Page() {
  const [popupShow, setPopupShow] = useState(false);
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
    router.push("/quan-li-tai-khoan/tai-khoan-user");
  };
  return (
    <section className="section">
      <Modal
        title=" "
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <p> </p>
      </Modal>
      <h1 className="section-heading">
        QUẢN LÝ TÀI KHOẢN/ USER/ TẠO TÀI KHOẢN
      </h1>
      <div
        className="wrapper"
        style={{
          width: "100%",
          background: "white",
          borderRadius: "10px",
          padding: "10px 35px 66px 35px",
        }}
      >
        <div style={{ display: "flex", marginBottom: "30px" }}>
          <div
            className="image"
            style={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Image
              src="/img/grey-img-3.svg"
              width={211}
              height={211}
              style={{ borderRadius: "10px", marginTop: "36px" }}
            />
          </div>
          <form
            action=""
            className="form"
            style={{
              width: "70%",
              borderLeft: "2px solid rgba(0, 0, 0, 0.1)",
              padding: "30px 20px",
            }}
          >
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Tên tài khoản</label>
                <input type="text" placeholder="Nhập tên tài khoản" />
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
                <label htmlFor="">Ngày sinh:</label>
                <DatePicker
                  placeholder="Chọn ngày sinh"
                  style={{
                    width: 444,
                    height: 40,
                    border: "1px solid rgba(0, 0, 0, 0.4)",
                    borderRadius: 7,
                  }}
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Số điện thoại:</label>
                <input type="text" placeholder="Nhập số điện thoại..." />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Địa chỉ: </label>
                <input type="text" placeholder="Nhập địa chỉ..." />
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
        </div>
        
        <div
          className=""
          style={{ display: "flex", justifyContent: "space-between" }}
        >
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
    </section>
  );
}
