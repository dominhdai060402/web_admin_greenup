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
    title: "100293847",
    diem: "4400",
    ten: "Nguyễn Văn Tính",
    ngay: "26/06/2024",
    kl:
      "0.7",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    title: "100084839",
    diem: "2000",
    ten: "Trần Ngọc Linh",
    ngay: "26/06/2024",
    kl:
      "0.6",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    title: "100293847",
    diem: "4400",
    ten: "Nguyễn Văn Tính",
    ngay: "26/06/2024",
    kl:
      "0.7",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    title: "100293847",
    diem: "4400",
    ten: "Nguyễn Văn Tính",
    ngay: "26/06/2024",
    kl:
      "0.7",
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
        title="Xóa điểm thu nhận?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa mã đổi điểm không?</p>
      </Modal>
      <h1 className="section-heading">Quản lý thu nhận - tích điểm</h1>
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
            <label htmlFor="">Tìm kiếm mã đổi điểm</label>
            <Search
              placeholder="Nhập thông tin..."
              style={{ width: 400, height: 60 }}
              onSearch={handleSearch}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <Link href="/thu-nhan-tich-diem/them-loai-rac" className="add-new-btn">
          + Thêm mới
        </Link>
      </div>
      <div className="table">
        <div className="table-row table-heading">
          <div className="table-column">STT</div>
          <div className="table-column">Mã đổi điểm</div>
          <div className="table-column">Tên khách hàng</div>
          <div className="table-column">Khối lượng rác giao nộp (kg)</div>
          <div className="table-column">Số điểm thưởng nhận được</div>
          <div className="table-column">Ngày giao nộp</div>
          <div className="table-column">Thao tác</div>
        </div>
        {articleList.map((article, index) => {
          return (
            <div className="table-row" key={article.id}>
              <div className="table-column">{index + 1}</div>
              <div className="table-column">{article.title}</div>
              <div className="table-column">{article.ten}</div>
              <div className="table-column">{article.kl}</div>
              <div className="table-column">{article.diem}</div>
              <div className="table-column">{article.ngay}</div>
              <div className="table-column table-edit">
                <Image
                  src="/icon/tabler_edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                  onClick={() => {
                    router.push("/thu-nhan-tich-diem/chinh-sua-loai-rac");
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
