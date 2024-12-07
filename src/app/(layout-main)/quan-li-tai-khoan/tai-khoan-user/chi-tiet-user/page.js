"use client";
import React, { useState } from "react";
import { Select, DatePicker, Modal, Input } from "antd";
import PetItem from "@/components/PetItem/PetItem";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";
import AddNewPet from "./AddNewPet";
import dayjs from "dayjs";
import Image from "next/image";
import EditAPet from "./EditAPet";

const currentUser = {
  pets: [
    {
      id: uuidv4(),
      petImg: "/img/petAva/pet_img_1.jpg",
      petName: " ",
      petSpecies: " ",
      petType: " ",
      petOld: " ",
      petGender: true,
    },
    {
      id: uuidv4(),
      petImg: "/img/petAva/pet_img_2.jpg",
      petName: " ",
      petSpecies: " ",
      petType: " ",
      petOld: " ",
      petGender: true,
    },
  ],
};

export default function Page() {
  const [popupShow, setPopupShow] = useState(false);
  const [popupEditShow, setPopupEditShow] = useState(false);
  const [editShowData, setEditShowData] = useState();
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
        QUẢN LÝ TÀI KHOẢN/ USER/ THÔNG TIN TÀI KHOẢN
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
              alignItems: "center",
            }}
          >
            <Image
              src="/img/user_avatar.png"
              width={211}
              height={211}
              style={{ borderRadius: "10px", marginTop: "36px" }}
            />
            <h3
              style={{ fontSize: "20px", color: "#22AA56", marginTop: "10px" }}
            >
              Đỗ Nhật Long
            </h3>
            <p style={{ marginTop: "10px" }}>03823376446</p>
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
                <input type="text" placeholder="Nhập tên tài khoản"
                defaultValue="Đỗ Nhật Long" />
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
                  defaultValue={dayjs("29-04-1999", "DD-MM-YYYY")}
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Số điện thoại</label>
                <input type="text" placeholder="Nhập số điện thoại..." 
                defaultValue="03823376446"/>
              </div>
            </div>   
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Địa chỉ: </label>
                <input type="text" placeholder="Nhập địa chỉ..."
                defaultValue="Số 91 Định Công, Hoàng Mai, Hà Nội" />
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
            onClick={() => {
              toast.success("Lưu thành công !");
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
