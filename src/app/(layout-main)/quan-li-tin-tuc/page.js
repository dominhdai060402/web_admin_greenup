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
    img: "/img/articles/article-1.jpg",
    date: "26/06/2024",
    author: "Thái Dương",
    title: "Để phân loại rác tại nguồn sớm trở thành lối sống xanh, bền vững",
    detail:
      "Để chính sách phân loại chất rắn sinh hoạt tại nguồn được triển khai hiệu...",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/articles/article-2.png",
    date: "16/12/2021",
    author: "Bảo Châu",
    title: "Các vấn đề về môi trường trong 5 năm tới",
    detail:
      "Theo Bộ TN&MT, trong 5 năm 2021-2025, môi trường Việt Nam sẽ...",
      link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/articles/article-3.png",
    date: "10/07/2024",
    author: "KangTa",
    title: "Nguyên nhân gây ô nhiễm và giải pháp khắc phục hậu quả",
    detail:
      "Trước những biến động của môi trường, việc nhận biết những nguyên nhân..",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/articles/article-4.png",
    date: "18/06/2021",
    author: "Nguyễn Bích Ngọc",
    title: "Công khai, minh bạch thông tin trong công tác bảo vệ môi trường",
    detail:
      "Công khai thông tin là nội dung quan trọng trong thực hiện công tác...",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/articles/article-5.png",
    date: "29/12/2021",
    author: "Minh Nguyệt ",
    title: "Bảo vệ môi trường trong bối cảnh công nghiệp hóa - hiện đại hóa",
    detail:
      "Ô nhiễm môi trường không khí tiếp tục là một trong những vấn đề nóng...",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/articles/article-6.png",
    date: "13/09/2024",
    author: "Đội Cleanipedia",
    title: "Tầm quan trọng và lợi ích của bảo vệ môi trường ",
    detail:
      "Với sự gia tăng của biến đổi khí hậu, ô nhiễm và suy giảm tài nguyên thiên..",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/articles/article-7.png",
    date: "17/11/2024",
    author: "Xuân Hương",
    title:
      "Đa dạng hình thức truyền thông về bảo vệ môi trường",
    detail:
      "Trong những năm qua, công tác truyền thông về bảo vệ môi trường được các...",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/articles/article-8.png",
    date: "05/01/2023",
    author: "Minh Tú",
    title: "Kiến thức về môi trường và chức năng của môi trường",
    detail:
      "Chúng ta đã quá quen thuộc với hai từ “Môi trường” nhưng ít ai biết đến..",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/articles/article-9.png",
    date: "27/08/2024",
    author: "Vũ Thị Duyên",
    title: "Vì sao phát triển kinh tế phải gắn chặt với bảo vệ môi trường?",
    detail:
      "Phát triên kinh tế và vấn đề môi trường có mối tương quan qua lại lẫn nhau..",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/articles/article-10.png",
    date: "24/04/2024",
    author: "Phạm Oanh",
    title: "Khôi phục môi trường rừng, phát triển tín dụng xanh",
    detail:
      "Thực hiện pháp luật về bảo vệ môi trường, trong thời gian tới, Bộ TN...",
    link: "/danh-sach-tin-tuc/chi-tiet-tin-tuc",
  },
  {
    img: "/img/articles/article-11.png",
    date: "24/04/2024",
    author: "Phạm Oanh",
    title: "Khôi phục môi trường rừng, phát triển tín dụng xanh",
    detail:
      "Thực hiện pháp luật về bảo vệ môi trường, trong thời gian tới, Bộ TN...",
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
        title="Xóa tin tức?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Đồng ý"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa tin tức không?</p>
      </Modal>
      <h1 className="section-heading">Quản lý tin tức</h1>
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
            <label htmlFor="">Tìm kiếm tin tức</label>
            <Search
              placeholder="Nhập thông tin..."
              style={{ width: 400, height: 60 }}
              onSearch={handleSearch}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <Link href="/quan-li-tin-tuc/them-tin-tuc" className="add-new-btn">
          + Thêm tin tức
        </Link>
      </div>
      <div className="table">
        <div className="table-row table-heading">
          <div className="table-column">Stt</div>
          <div className="table-column">Hình ảnh</div>
          <div className="table-column">Tiêu đề tin tức</div>
          <div className="table-column">Nội dung tin tức</div>
          <div className="table-column">Tác giả</div>
          <div className="table-column">Ngày đăng</div>
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
              <div className="table-column">{article.detail}</div>
              <div className="table-column">{article.author}</div>
              <div className="table-column">{article.date}</div>

              <div className="table-column table-edit">
                <Image
                  src="/icon/tabler_edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                  onClick={() => {
                    router.push("/quan-li-tin-tuc/chinh-sua-tin-tuc");
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
