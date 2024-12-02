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
    img: "/img/rac/rac1.png",
    date: "1.Dùng nước ấm và dầu rửa chén. Để làm sạch chai đựng nước, hãy đổ...",
    author: "2.200",
    title: "Chai nhựa ",
    detail:
      "Rác tái chế",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/rac/rac2.png",
    date: "Bó giấy theo chồng hoặc để trong thùng carton để thuận tiện cho việc...",
    author: "2.500",
    title: "Giấy báo",
    detail:
      "Rác tái chế",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/rac/rac3.png",
    date: "Mở tách bìa, phơi khô và xếp lại thành chồng. 2. Bảo quản tại nơi...",
    author: "1.750",
    title: "Bìa carton",
    detail:
      "Rác tái chế",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/rac/rac4.png",
    date: "Dùng nước ấm và dầu rửa chén. Để làm sạch chai đựng nước, hãy đổ...",
    author: "1.250",
    title: "Thủy tinh",
    detail:
      "Rác tái chế",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/rac/rac5.png",
    date: "Bỏ hết dung dịch trong lon. 2. Rửa sạch bằng nước và dung dịch rửa...",
    author: "1.150",
    title: "Lon nhôm",
    detail:
      "Rác tái chế",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/rac/rac6.png",
    date: "Cắt vỏ. Cắt dọc theo thân hộp và gỡ phẳng hộp sữa. 2. Làm sạch...",
    author: "3.350",
    title: "Vỏ hộp sữa",
    detail:
      "Rác tái chế",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/rac/rac7.png",
    date: "Bỏ các gói gia vị và vnj mì tôm còn sót lại trong vỏ. Bảo quản tại nơi khô ráo...",
    author: "6.000",
    title: "Vỏ mì tôm",
    detail:
      "Rác tái chế",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/rac/rac8.png",
    date: "Tách riêng rác điện tử với rác sinh hoạt khác, đảm bảo không để rác điện tử...",
    author: "0",
    title: "Rác điện tử",
    detail:
      "Rác tái chế",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/rac/rac9.png",
    date: "Cho vào túi rác màu xanh lục hoặc túi có nhãn dán chất thải hữu cơ...",
    author: "0",
    title: "Rác hữu cơ",
    detail:
      "Rác tái chế",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/rac/rac10.png",
    date: "Tách riêng rác không tái chế với rác tái chế và rác hữu cơ, sử dụng túi rác...",
    author: "0",
    title: "Rác không tái chế",
    detail:
      "Rác tái chế",
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
        title="Xóa loại rác?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa loại rác không?</p>
      </Modal>
      <h1 className="section-heading">Quản lý loại rác</h1>
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
            <label htmlFor="">Tìm kiếm loại rác</label>
            <Search
              placeholder="Nhập thông tin..."
              style={{ width: 400, height: 60 }}
              onSearch={handleSearch}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <Link href="/quan-li-loai-rac/them-loai-rac" className="add-new-btn">
          + Thêm lọai rác
        </Link>
      </div>
      <div className="table">
        <div className="table-row table-heading">
          <div className="table-column">STT</div>
          <div className="table-column">Hình ảnh</div>
          <div className="table-column">Tên loại rác</div>
          <div className="table-column">Cách xử lí</div>
          <div className="table-column">Chi tiết các loại rác</div>
          <div className="table-column">Số điểm thưởng tương ứng</div>
          <div className="table-column">Thao tác</div>
        </div>
        {articleList.map((article, index) => {
          return (
            <div className="table-row" key={article.id}>
              <div className="table-column">{index + 1}</div>
              <div className="table-column">
                <Image
                  src={article.img}
                  width={94}
                  height={44}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="table-column">{article.title}</div>
              <div className="table-column">{article.date}</div>
              <div className="table-column">{article.detail}</div>
              <div className="table-column">{article.author}</div>

              <div className="table-column table-edit">
                <Image
                  src="/icon/tabler_edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                  onClick={() => {
                    router.push("/quan-li-loai-rac/chinh-sua-loai-rac");
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
