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
    img: "/img/articles/article-10.png",
    phone: "0398457822",
    title: "Tổ chức thu nhận rác tái chế quận Đống Đa",
    adress:
      "81 Thái Thịnh, Đống Đa, Hà Nội",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-13.png",
    phone: "0389213688",
    title: "Điểm thu gom Cầu Giấy",
    adress:
      "200 Hoàng Quốc Việt, Nghĩa Tân, Cầu Giấy, Hà Nội",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-14.png",
    phone: "0394932044",
    title: "Tổ chức thu nhận rác tái chế quận Hoàng Mai",
    adress:
      "Khu đô thị Tây Nam Linh Đàm, Hoàng Liệt, Hoàng Mai, Hà Nội",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-15.png",
    phone: "0957853445",
    title: "Tổ chức thu nhận rác tái chế quận Thanh Xuân",
    adress:
      "72A Nguyễn Trãi, Thanh Xuân, Hà Nội",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-16.png",
    phone: "0345858562",
    title: "Điểm thu nhận vỏ chai nhựa, lon nhôm",
    adress:
      "14/2/23 ngõ 62 Nguyễn Chí Thanh, Láng Thượng, Đống Đa, Hà Nội",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-17.png",
    phone: "0958477533",
    title: "Thu gom rác tái chế GreenUp",
    adress:
      "96 Định Công, Hoàng Mai, Hà Nội",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-18.png",
    phone: "0958475734",
    title:"Tổ chức thu nhận rác tái chế quận Hà Đông",
    adress:
      "12 ngõ 39 Vạn Phúc, Hà Đông, Hà Nội",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-19.png",
    phone: "0333484856",
    title: "Điểm thu gom Hai Bà Trưng",
    adress:
      "66 ngõ 295, Bạch Mai, Hai Bà Trưng, Hà Nội",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-20.png",
    phone: "0384765294",
    title: "Tổ chức thu nhận rác tái chế Dấu Chân Xanh",
    adress:
      "25 ngõ 133 Thái Hà, Đống Đa, Hà Nội",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-21.png",
    phone: "0575388784",
    title: "Điểm thu nhận quần áo cũ",
    adress:
      "76 Phạm Huy Thông, Ngọc Khánh , Ba Đình , Hà Nội.",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-9.png",
    phone: "0398457822",
    title: "Tổ chức thu nhận rác tái chế Dấu Chân Xanh",
    adress:
      "76 Phạm Huy Thông, Ngọc Khánh , Ba Đình , Hà Nội.",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-20.png",
    phone: "0398457822",
    title: "Điểm thu gom Hai Bà Trưng",
    adress:
      "76 Phạm Huy Thông, Ngọc Khánh , Ba Đình , Hà Nội.",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
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
        <p>Bạn có chắc chắn muốn xóa điểm thu nhận không?</p>
      </Modal>
      <h1 className="section-heading">Quản lý điểm thu nhận</h1>
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
            <label htmlFor="">Tìm kiếm điểm thu nhận</label>
            <Search
              placeholder="Nhập thông tin..."
              style={{ width: 400, height: 60 }}
              onSearch={handleSearch}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <Link href="/quan-li-diem-thu-nhan/them-moi" className="add-new-btn">
        + Thêm điểm thu 
        </Link>
      </div>
      <div className="table">
        <div className="table-row table-heading">
          <div className="table-column">Stt</div>
          <div className="table-column">Hình ảnh</div>
          <div className="table-column">Tên điểm thu gom</div>
          <div className="table-column">Địa chỉ điểm thu gom</div>
          <div className="table-column">Số điện thoại liên hệ</div>
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
              <div className="table-column">{article.adress}</div>
              <div className="table-column">{article.phone}</div>
              <div className="table-column table-edit">
                <Image
                  src="/icon/tabler_edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                  onClick={() => {
                    router.push("/quan-li-diem-thu-nhan/chinh-sua-bai-viet");
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
