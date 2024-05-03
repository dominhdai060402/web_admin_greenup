"use client";
import React, { useState } from "react";
import { Select, DatePicker, Modal, Input } from "antd";
import PetItem from "@/components/PetItem/PetItem";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import "../style.scss";
import AddNewPet from "./AddNewPet";
import dayjs from "dayjs";

const currentUser = {
  pets: [],
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
        title="Xóa thông tin thú cưng"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa thông tin thú cưng?</p>
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
              justifyContent: "space-between",
            }}
          >
            Ảnh
            <div>
              <h3 className="title" style={{ marginBottom: "26px" }}>
                Danh sách thú cưng
              </h3>
              <button
                style={{ border: 0 }}
                className="add-btn"
                onClick={() => {
                  setPopupShow(true);
                }}
              >
                + Thêm thú cưng
              </button>
            </div>
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
                <input type="text" placeholder="Tạ Hoàng An" />
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
                      accentColor: "#911a1d",
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
                      accentColor: "#911a1d",
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
                      accentColor: "#911a1d",
                    }}
                  />
                  Khác
                </label>
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="tahoangan@gmail.com" />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Số điện thoại</label>
                <input type="text" placeholder="0921334999" />
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
                  defaultValue={dayjs("06-06-1992", "DD-MM-YYYY")}
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
                      accentColor: "#911a1d",
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
                      accentColor: "#911a1d",
                    }}
                  />
                  Không kích hoạt
                </label>
              </div>
            </div>
          </form>
        </div>
        <div>
          <AddNewPet popupShow={popupShow} setPopupShow={setPopupShow} />
          <div className="list-pets">
            {currentUser?.pets?.length === 0 ? (
              <p>Bạn hiện chưa thêm thông tin thú cưng nào</p>
            ) : (
              <>
                <div className="table">
                  <div className="table-row  pet-table table-row--brown">
                    <div className="table-col">Stt</div>
                    <div className="table-col">Hình ảnh</div>
                    <div className="table-col">Tên thú cưng</div>
                    <div className="table-col">Chủng loại</div>
                    <div className="table-col">Giới tính</div>
                    <div className="table-col">Giống loài</div>
                    <div className="table-col">Hành động</div>
                  </div>
                  {currentUser &&
                    currentUser?.pets?.map((pet, index) => {
                      return (
                        <div className="table-row  pet-table" key={pet.id}>
                          <div className="table-col">{index + 1}</div>
                          <div className="table-col">
                            <img
                              src={pet.petImg}
                              alt=""
                              style={{
                                width: 130,
                                height: 86,
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div className="table-col">{pet.petName}</div>
                          <div className="table-col">{pet.petSpecies}</div>
                          <div className="table-col">
                            {pet.petGender ? "Đực" : "Cái"}
                          </div>
                          <div className="table-col">{pet.petType}</div>
                          <div
                            className="table-col"
                            style={{ display: "flex", gap: "8px" }}
                          >
                            <img
                              src="/icon/tabler_edit.svg"
                              alt=""
                              style={{ width: "30px" }}
                              onClick={() => {
                                setEditShowData(pet);
                                setPopupEditShow(true);
                              }}
                            />
                            <img
                              src="/icon/mdi_trash.svg"
                              alt=""
                              style={{ width: "30px" }}
                              onClick={showModal}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </>
            )}
          </div>
        </div>
        <div
          className=""
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <button
            style={{
              width: "200px",
              height: "45px",
              border: "1px solid #911A1D",
              borderRadius: "7px",
              background: "#911A1D",
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
              border: "1px solid #911A1D",
              borderRadius: "7px",
              background: "white",
              fontWeight: "600",
              color: "#911A1D",
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
