"use client";
import "./style.scss";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

const CustomEditor = dynamic(
  () => {
    return import("../../../../components/custom-editor");
  },
  { ssr: false }
);

export default function Page() {
  const router = useRouter();

  return (
    <section className="section">
      <h1 className="section-heading">Quản lý tin tức/ Thêm tin tức</h1>
      <h3
        style={{
          marginBottom: "10px",
          fontSize: 20,
          fontWeight: 400,
          color: "#22AA56",
        }}
      >
        Chọn ảnh nền:
      </h3>
      <Image
        src="/img/articles/article-1.jpg"
        width={221}
        height={221}
        style={{ borderRadius: "10px" }}
      />
      <label htmlFor="image" className="image-choose-custom">
        Chọn ảnh
      </label>
      <input type="file" id="image" />
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Tiêu đề tin tức:</label>
        <input
          type="text"
          placeholder="Nhập vào tiêu đề tin tức "
          defaultValue={`Để phân loại rác tại nguồn sớm trở thành lối sống xanh, bền vững"`}
        />
      </div>
      <div className="input-row">
        <div className="input-group" style={{ width: 444 }}>
          <label htmlFor="">Tác giả:</label>
          <input
            type="text"
            placeholder="Nhập vào tên tác giả"
            defaultValue="Thái Dương"
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Ngày đăng:</label>
          <DatePicker
            style={{ height: 40, width: 327 }}
            placeholder="Chọn ngày"
            defaultValue={dayjs("2024-06-26")}
          />
        </div>
      </div>
      <div className="input-group" style={{ width: "792px" }}>
        <label htmlFor="">Nội dung tin tức:</label>
        <CustomEditor
          initialData={`  <div className="content">
            <h3>
              Để chính sách phân loại chất thải rắn sinh hoạt tại nguồn được triển khai hiệu quả trong cuộc sống từ ngày 31/12/2024, 
              công tác chuẩn bị cần phải nghiêm túc, đồng bộ từ các khâu thu gom tới xử lý trong tất cả các cấp, ngành địa phương sở tại 
              và cộng đồng
            </h3>
            <h5>
              Hiểu đúng để phân loại
            </h5>
            <p>
              Trong suốt quá trình thực tế và với vai trò là người phụ nữ, hàng ngày phải trực tiếp làm bếp và các công việc khác của gia đình và chứng kiến rất nhiều nơi công cộng (chợ, nhà hàng, khách sạn,..) thậm chí quan sát ở cả những nơi tập kết rác,… chúng tôi đều nhận thấy việc phân loại rác thải tại nguồn ở nước ta còn rất kém và chưa có một hệ thống bài bản.
              Theo Bộ Tài nguyên và Môi trường, để chính sách phân loại chất thải rắn sinh hoạt tại nguồn được triển khai hiệu quả trong cuộc sống từ ngày 31/12/2024, công tác chuẩn bị cần phải nghiêm túc, đồng bộ từ các khâu thu gom tới xử lý. Vậy phân loại như thế nào là đúng, trước tiên phải hiểu đúng thì người dân sẽ hành động đúng. Trước đây, người dân mới chỉ biết tới việc phân loại chất thải rắn sinh hoạt thành 2 loại là rác thải hữu cơ và rác thông thường. Tuy nhiên, trên thực tế, chất thải rắn sinh hoạt có rất nhiều loại khác nhau đòi hỏi việc phân loại đúng kỹ thuật để bảo đảm vệ sinh môi trường cũng như nâng cao hiệu quả xử lý.
              Theo Công văn Số 9368/BTNMT-KSONMT ngày 02/11/2023 của Bộ Tài nguyên và Môi trường, chất thải rắn sinh hoạt cần được phân loại thành 3 nhóm: Nhóm chất thải có khả năng tái sử dụng, tái chế; nhóm chất thải thực phẩm; nhóm chất thải sinh hoạt khác. Với tổng số 28 loại chất thải rắn khác nhau như: Giấy thải, nhựa thải, thiết bị điện tử, thức ăn thừa, chất thải nguy hại, chất thải cồng kềnh... Đối với mỗi loại chất thải thuộc mỗi nhóm khác nhau, cần được nhận dạng và thực hiện phân loại theo đúng hướng dẫn kỹ thuật của Bộ Tài nguyên và Môi trường.
            </p>
          </div>`}
        />
      </div>
      <div className="btn-group">
        <button
          className="btn btn-cancel"
          type="button"
          onClick={() => {
            router.push("/quan-li-tin-tuc");
          }}
        >
          Quay lại
        </button>
        <button
          className="btn btn-save"
          type="button"
          onClick={() => {
            toast.success("Lưu thành công");
          }}
        >
          Lưu
        </button>
      </div>
    </section>
  );
}
