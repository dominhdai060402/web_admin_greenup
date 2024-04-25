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
          <Image />
        </div>
      </div>
    </div>
  );
}
