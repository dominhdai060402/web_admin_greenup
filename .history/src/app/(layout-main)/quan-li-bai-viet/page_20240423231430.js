"use client";
import React, { useState } from "react";
import "./style.scss";
import { Input, Space, Select, Pagination } from "antd";
import Link from "next/link";
import Image from "next/image";

const { Search } = Input;
const data = [
  {
    img: "/img/articles/article-1.jpg",
    date: "20/04/2024",
    author: "Bùi Quang Trưởng",
    title: "Bật mí cho bạn cách chăm sóc mèo con chu đáo nhất",
    detail:
      "Quá trình nuôi cũng như là chăm sóc thú cưng là quá trình diễn ra trong cả một thời gian dài. Và quá trình nuôi mèo con với nh...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-3.jpg",
    date: "08/12/2023",
    author: "Bùi Quang Trưởng",
    title: "Top các cách huấn luyện chó con hiệu quả",
    detail:
      "Chó là vật nuôi trung thành. Khi mới là chó con, chúng đang phát triển tư duy, dễ dàng tiếp thu những điều bạn dạy chúng. Vì thế nếu biết cách huấn...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-5.jpg",
    date: "07/11/2023",
    author: "Bùi Quang Trưởng",
    title: "Cấp cứu chó mèo: những điều bạn cần biết",
    detail:
      "Sự hiểu biết về cách cấp cứu chó mèo có thể giúp bạn bảo vệ người bạn nhỏ bốn chân của mình trong những tình huống nguy cấp. Tropicpet sẽ chỉ cho bạn...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-2.jpg",
    date: "01/10/2023",
    author: "Bùi Quang Trưởng",
    title: "Mách bạn cách diệt ve chó tại nhà hiệu quả",
    detail:
      "Ve chó (rận chó), bọ chét đang là nỗi đau đầu của nhiều gia đình, ảnh hưởng đến sức khỏe thú cưng và gia đình. Vì vậy, tiêu diệt ...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-8.jpg",
    date: "11/09/2023",
    author: "Bùi Quang Trưởng",
    title: "Cách dạy chó đi vệ sinh đúng chỗ",
    detail:
      "Chó từ lâu đã là vật nuôi thân quan và trở thành một người bạn thân thiết trong đời sống của loài người chúng ta. Trải qua hàng ngàn năm sinh sống...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-9.jpg",
    date: "11/09/2023",
    author: "Bùi Quang Trưởng",
    title: "Chia sẻ cho bạn 10 lệnh huấn luyện chó hiệu quả nhất ",
    detail:
      "Nếu bạn có một chú cún cưng, ngoài việc quan tâm chăm sóc về dinh dưỡng ra thì cần phải lưu tâm trong quá trình huấn luyê...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-10.jpg",
    date: "10/08/2023",
    author: "Bùi Quang Trưởng",
    title:
      "Nguyên tắc bảo vệ sức khỏe thú cưng toàn diện SEN nào cũng cần biết",
    detail:
      "Nuôi dưỡng, chăm sóc thú cưng là việc không hề đơn giản! Nếu bạn dành rất nhiều tình yêu cho thú cưng vậy thì đừng quên ...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-11.jpg",
    date: "06/03/2023",
    author: "Bùi Quang Trưởng",
    title: "Mèo chửa mấy tháng thì đẻ và những lưu ý khi chăm sóc chúng",
    detail:
      "Mèo là thú cưng yêu thích của nhiều người. Khi mèo mang thai, hầu hết chúng đều có thể tự sinh con mà không cần có sự can...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-14.jpg",
    date: "11/05/2023",
    author: "Bùi Quang Trưởng",
    title: "Bệnh nấm chó mèo là gì? Giải pháp cho bệnh nấm chó mèo",
    detail:
      "Nấm chó mèo ở thú cưng là một loại bệnh khá phổ biến. Khi vị trí bị nấm mới xuất hiện sẽ không có ảnh hưởng mấy nhưng thời gi...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-16.jpg",
    date: "10/05/2023",
    author: "Bùi Quang Trưởng",
    title: "Lý giải nguyên nhân tại sao chó bỏ ăn",
    detail:
      "Chó là vật nuôi được nhiều gia đình chọn lựa. Nó được coi như một thành viên trong nhà nên khi chó bỏ ăn, không ít gia đình lo lắng, muốn đưa chó đi...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-18.jpg",
    date: "10/03/2023",
    author: "Bùi Quang Trưởng",
    title: "Mèo Bị Co Giật: Nguyên Nhân, Triệu Chứng và Cách Điều Trị",
    detail:
      "Mèo bị co giật không chỉ là một biểu hiện đáng lo ngại, mà còn là một dấu hiệu cảnh báo về sức khỏe thú cưng của bạn...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-20.jpg",
    date: "10/02/2023",
    author: "Bùi Quang Trưởng",
    title: "Tìm mua thuốc trị tiêu chảy cho mèo hiệu quả nhất năm 2022",
    detail:
      "Những con vật nuôi trong nhà như mèo thường gặp các triệu chứng tiêu chảy, đi phân lỏng có mùi tanh hôi khi chúng nhưn...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-21.jpg",
    date: "09/01/2023",
    author: "Bùi Quang Trưởng",
    title: "Tiêm phòng thú cưng và trọn bộ những điều cần lưu ý!",
    detail:
      "Thú cưng cần được tiêm phòng những loại vaccine nào? Để bảo vệ thú cưng luôn khỏe mạnh và phòng chống được các bệnh ng...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-19.jpg",
    date: "12/12/2022",
    author: "Bùi Quang Trưởng",
    title: "Tại sao cần thiến mèo đực? Cách chăm sóc mèo đực sau thiến",
    detail:
      "Triệt sản hay thiến mèo là một trong những phương pháp mà người nuôi thú cưng thường sử dụng để bảo vệ cho mèo cũn...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-22.jpg",
    date: "01/12/2022",
    author: "Bùi Quang Trưởng",
    title: "Những lợi ích to lớn khi triệt sản mèo đực có thể bạn chưa biết",
    detail:
      "Đối với những người nuôi mèo chắc hẳn không còn xa lạ gì với cụm từ triệt sản cho mèo, đặc biệt là các bạn mèo đực. Việc na...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
  {
    img: "/img/articles/article-6.jpg",
    date: "11/11/2022",
    author: "Bùi Quang Trưởng",
    title: "Các xử lý khi chó mèo bị tiêu chảy?",
    detail:
      "Trong cuộc sống hàng ngày thi con người như động vật việc hệ tiêu hóa gặp vấn đề...",
    link: "/danh-sach-bai-viet/chi-tiet-bai-viet",
  },
];

export default function Page() {
  const [articleList, setArticleList] = useState(data);
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
  return (
    <section className="section">
      <h1 className="section-heading">Quản lý bài viết</h1>
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
            <label htmlFor="">Tìm kiếm bài viết</label>
            <Search
              placeholder="Nhập tiêu đề bài viết"
              style={{ width: 328, height: 36 }}
              onSearch={handleSearch}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <Link
          href="/quan-li-lich-dat/khach-san-thu-cung/them-lich-dat"
          className="add-new-btn"
        >
          + Thêm bài viết
        </Link>
      </div>
      <div className="table">
        <div className="table-row table-heading">
          <div className="table-column">Stt</div>
          <div className="table-column">Hình ảnh</div>
          <div className="table-column">Tiêu đề</div>
          <div className="table-column">Nội dung</div>
          <div className="table-column">Ngày đăng</div>
          <div className="table-column">Người viết</div>
          <div className="table-column">Tùy chọn</div>
        </div>
        {articleList.map((article, index) => {
          return (
            <div className="table-row" key={article.id}>
              <div className="table-column">{index + 1}</div>
              <div className="table-column">
                <Image
                  src={article.img}
                  width={40}
                  height={26}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="table-column">{article.title}</div>
              <div className="table-column">{article.detail}</div>
              <div className="table-column">{article.date}</div>
              <div className="table-column">{article.author}</div>
              <div className="table-column table-edit">
                <Image
                  src="/icon/tabler_edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                />
                <Image
                  src="/icon/mdi_trash.svg"
                  alt="trash"
                  width={24}
                  height={24}
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
