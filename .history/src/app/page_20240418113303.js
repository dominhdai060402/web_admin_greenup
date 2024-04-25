import React from "react";
import Image from "next/image";
import "./style.scss";

export default function page() {
  return (
    <section className="statistical-section">
      <h1 className="statistical-heading">THỐNG KÊ</h1>
      <div className="statistical-content-one">
        <div className="statistical-content-one-item">
          <div className="item-heading">
            <div className="item-heading-content">
              <p>Lượng người truy cập</p>
              <h3>5,123</h3>
            </div>
            <div className="item-heading-icon">
              <Image
                src="/icon/dash_broad_1.svg"
                alt=""
                width={35}
                height={26}
              />
            </div>
          </div>
          <div className="item-content">
            <Image src="/icon/ic-trending-up-24px.svg" width={26} height={26} />
            <p>
              <span>8.5%</span> so với ngày hôm qua
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
