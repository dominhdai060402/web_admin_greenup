import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section className="section">
      <h1 className="section-heading">Quản lý bài viết/ Thêm bài viết</h1>
      <h3>Chọn ảnh nền</h3>
      <Image src="/img/grey-img-3.svg" width={221} height={221} />
    </section>
  );
}
