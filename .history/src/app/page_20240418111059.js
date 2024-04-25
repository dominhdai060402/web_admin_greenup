import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <h1>THỐNG KÊ</h1>
      <div>
        <div>
          <div>
            <p>Lượng người truy cập</p>
            <h3>5,123</h3>
          </div>
          <div>
            <img src="/icon/dash_broad_1.svg" alt="" />
          </div>
        </div>
        <div>
          <Image src="/icon/ic-trending-up-24px.svg" width={26} height={26} />
          <p>
            <span>8.5%</span> so với ngày hôm qua
          </p>
        </div>
      </div>
    </div>
  );
}
