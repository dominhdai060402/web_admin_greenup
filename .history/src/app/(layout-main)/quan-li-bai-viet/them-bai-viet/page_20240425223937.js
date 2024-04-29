"use client";
import "./style.scss";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";

const CustomEditor = dynamic(
  () => {
    return import("../../../../components/custom-editor");
  },
  { ssr: false }
);

export default function page() {
  return (
    <section className="section">
      <h1 className="section-heading">Quản lý bài viết/ Thêm bài viết</h1>
      <h3
        style={{
          marginBottom: "10px",
          fontSize: 20,
          fontWeight: 400,
          color: "#911A1D",
        }}
      >
        Chọn ảnh nền:
      </h3>
      <Image
        src="/img/grey-img-3.svg"
        width={221}
        height={221}
        style={{ borderRadius: "10px" }}
      />
      <label htmlFor="image" className="image-choose-custom">
        Chọn ảnh
      </label>
      <input type="file" id="image" />
      <div className="input-group">
        <label htmlFor="">Tiêu đề bài viết:</label>
        <input type="text" placeholder="Nhập vào tiêu đề bài viết" />
      </div>
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="">Tác giả:</label>
          <input type="text" placeholder="Nhập vào tiêu đề bài viết" />
        </div>
        <div className="input-group">
          <label htmlFor="">Ngày đăng:</label>
          <input type="text" placeholder="Nhập vào tiêu đề bài viết" />
        </div>
      </div>
      <label htmlFor="">Nội dung bài viết:</label>
      <CustomEditor
        initialData={`       <div className="content">
            <h2>Cách chăm sóc mèo con chu đáo nhất</h2>
            <h3 id="title-1">Giữ ấm mèo con</h3>
            <p>
              Đặc biệt với những mèo con ở giai đoạn dưới 6 tháng tuổi, người
              nuôi cần phải đặc biệt chú ý giữ ấm cho mèo. Để thân nhiệt của mèo
              không bị hạ đột ngột, bạn nên dùng nước ấm hay túi chườm nóng để
              đặt bên cạnh nơi mèo con nằm. 
            </p>
            <img src="/img/article-detail/img-1.png" alt="" />
            <p>
              Thế nhưng nhiệt độ nơi mèo con nằm cũng không được quá nóng bức
              hay là quá lạnh. Bạn nên duy trì mức nhiệt độ là 38 đến 39 độ C
              trong khoảng thời gian mèo đạt 4 đến 6 tuần tuổi. 
            </p>
            <p>
              Khi mèo con đủ 4 tuần tuổi, bạn có thể cho chúng ở những nơi mát
              mẻ, tự chúng tìm nơi ấm áp để nằm. Bạn hoàn toàn có thể ghép nhiều
              mèo con ở với cùng nhau để chúng tự sưởi ấm cho nhau. 
            </p>
            <p>
              Còn nếu bạn giữ ấm cho chúng ở trong lồng thì nên lót khăn dưới
              đáy và quây vải xung quanh để tránh bị gió lùa. 
            </p>
            <h2 id="title-2">Xây dựng chế độ dinh dưỡng phù hợp</h2>
            <p>
              Với việc có được chế độ dinh dưỡng phù hợp, mèo con sẽ được phát
              triển khỏe mạnh, tăng cân nhanh. Bạn nên cân mèo con thường xuyên
              để biết được cân nặng của chúng, từ đó sắp xếp lượng thức ăn mỗi
              bữa sao cho phù hợp nhất. 
            </p>
            <p>
              Còn với những bé mèo con mới đẻ, do đã quen ngậm vú mẹ nên mỗi
              lần cho mèo con uống sữa thì bạn chỉ nên cho uống một lượng sữa
              nhỏ, sẽ phù hợp với hệ thống đường tiêu hóa của chúng. Nếu mèo
              chậm lớn thì nên tăng lượng sữa cho mỗi lần uống lên. 
            </p>
            <img src="/img/article-detail/img-2.png" alt="" />
            <h2 id="title-3">Cho mèo con uống sữa như thế nào?</h2>
            <p>
              Khi cho mèo con uống sữa, cơ thể của chúng cần được giữ ấm nhằm
              tránh ảnh hưởng đến quá trình tiêu hóa sữa.
            </p>
            <p>
              Lượng sữa mỗi lần cho uống cũng cần phải phù hợp, không nên cho
              uống quá nhiều vì có thể bị sặc, sữa tràn vào trong phổi gây nguy
              hiểm tính mạng. Khi uống, chai sữa cũng cần được làm nóng, để
              nhiệt độ sữa khoảng 38 độ C.
            </p>
            <p>
              Tư thế uống không nên làm đó là nằm ngửa, vì khiến mèo con dễ bị
              sặc sữa. Tốt nhất là nên để chúng nằm sấp xuống, và chuẩn bị 1 tấm
              vải để lót dưới bụng cho mèo. Khi mà mèo động đậy tai thì chứng tỏ
              chúng đã no bụng rồi. 
            </p>
            <h2 id="title-4">Mèo con khi cai sữa cần chăm sóc như nào?</h2>
            <p>
              Khi mèo con bắt đầu cắn núm vú mạnh hơn, chứng tỏ bạn đã có thể
              cai sữa cho chúng được rồi đó. Thế nhưng thời gian đầu cai, bạn
              vẫn nên cho mèo con bú bình để đảm bảo chúng được cung cấp đủ
              lượng dinh dưỡng cần thiết cho việc phát triển.
            </p>
            <p>
              Tập cho mèo con cai sữa bằng cách cho chúng liếm thìa hoặc là ngón
              tay, giúp dễ dàng hơn trong quá trình cho mèo ăn bằng thìa. 
            </p>
            <p>
              Bạn nên tập cho chúng ăn thức ăn khô hoặc cháo, và khi chúng đã
              quen với loại thức ăn này thì giảm lượng sữa lại rồi cai sữa hoàn
              toàn cho chúng.
            </p>
            <img src="/img/article-detail/img-3.png" alt="" />
            <h2 id="title-5">Cách vệ sinh mèo con sao cho đúng</h2>
            <p>
              Nếu mèo con ở với mẹ thì chúng sẽ được mèo mẹ vệ sinh và chăm sóc.
              Nhưng nếu bạn là người thực hiện công việc này thì chúng sẽ cần
              phải có sự giúp đỡ để đi vệ sinh. 
            </p>
            <p>
              Để kích thích mèo con đi vệ sinh, bạn nên xoa nhẹ vào bụng chúng
              hoặc bộ phận sinh dục trước và sau khi mèo ăn xong bằng một chút
              bông nhúng với nước ấm. 
            </p>
            <p>
              Không chỉ dừng lại ở việc kích thích bài tiết ở mèo con, mà cách
              này còn giúp loại bổ những chất bẩn dính trên cơ thể chúng và giữ
              ấm. Lưu ý là mỗi ngày nên cho chúng đi đại tiện một lần. 
            </p>
            <h2 id="title-6">Tắm cho mèo con </h2>
            <p>
              Bạn cần tắm cho mèo con bằng nước ấm, khi tắm xong thì dùng khăn
              khô để lau, và sấy thật khô các ngóc ngách, giúp chúng không bị
              lạnh. Trong quá trình tắm cần loại bỏ thức ăn thừa hay phân dính
              trên cơ thể, tránh tạo điều kiện để vi khuẩn phát triển. 
            </p>
            <h2 id="title-7">Cho mèo làm quen với con người </h2>
            <p>
              Nên cho mèo làm quen với thành viên trong gia đình chủ nuôi, tạo
              mối liên kết và sự gần gũi. Ngoài ra cần cho mèo con tiếp xúc với
              những con mèo khác để chúng bớt nhút nhát, mạnh dạn hơn. 
            </p>
          </div>`}
      />
    </section>
  );
}
