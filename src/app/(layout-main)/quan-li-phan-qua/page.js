"use client";
import React, { useState } from "react";
import "./style.scss";
import { Input, Space, Select, Pagination, Modal } from "antd";
import Link from "next/link";
import { toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/navigation";

const { Search } = Input;
const data = [
  {
    img: "/img/qua/qua1.png",
    author: "10",
    title: "Túi Cói Xách Tay",
    detail:
      "10000",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/qua/qua2.png",
    author: "30",
    title: "Miếng Lót Ly Thâm Nước",
    detail:
      "7000",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/qua/qua3.png",
    author: "10",
    title: "Băng Đô Cài Tóc Rửa Mặt",
    detail:
      "3000",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/qua/qua4.png",
    author: "35",
    title: "Bông Tắm Sơ Mướp",
    detail:
      "3000",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/qua/qua5.png",
    author: "15",
    title: "Thớt Gỗ Tròn Lớn",
    detail:
      "17000",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/qua/qua6.png",
    author: "20",
    title: "Vỏ bọc sổ tay",
    detail:
      "8000",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/qua/qua7.png",
    author: "50",
    title: "Đũa dừa tự nhiên",
    detail:
      "5000",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/qua/qua8.png",
    author: "10",
    title: "Hộp trà đựng bằng tre",
    detail:
      "15000",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/qua/qua9.png",
    author: "10",
    title: "Cốc sử UNC Việt Nam",
    detail:
      "10000",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/qua/qua10.png",
    author: "10",
    title: "Kẹp sách đơn giản để bàn",
    detail:
      "12000",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },

  
];

export default function Page() {
  const router = useRouter();
  const [articleList, setArticleList] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    toast.success("Xóa thành công!");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangeNumberPet = (e) => {
    setNumberPet(+e.target.value);
  };

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
      <Modal
        title="Xóa phần quà?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa phần quà không?</p>
      </Modal>
      <h1 className="section-heading">QUẢN LÝ PHẦN QUÀ</h1>
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
            <label htmlFor="">Tìm kiếm phần quà</label>
            <Search
              placeholder="Nhập thông tin..."
              style={{ width: 400, height: 60 }}
              onSearch={handleSearch}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <Link href="/quan-li-phan-qua/them-phan-qua" className="add-new-btn">
          + Thêm mới
        </Link>
      </div>
      <div className="table">
        <div className="table-row table-heading">
          <div className="table-column">STT</div>
          <div className="table-column">Hình ảnh</div>
          <div className="table-column">Tên phần quà</div>
          <div className="table-column">Số điểm để đổi</div>
          <div className="table-column">Số lượng hiện có</div>
          <div className="table-column">Thao tác</div>
        </div>
        {articleList.map((article, index) => {
          return (
            <div className="table-row" key={article.id}>
              <div className="table-column">{index + 1}</div>
              <div className="table-column">
                <Image
                  src={article.img}
                  width={110}
                  height={44}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="table-column">{article.title}</div>
              <div className="table-column">{article.detail}</div>
              <div className="table-column">{article.author}</div>
              <div className="table-column table-edit">
                <Image
                  src="/icon/tabler_edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                  onClick={() => {
                    router.push("/quan-li-phan-qua/chinh-sua-phan-qua");
                  }}
                />
                <Image
                  src="/icon/mdi_trash.svg"
                  alt="trash"
                  width={24}
                  height={24}
                  onClick={showModal}
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
