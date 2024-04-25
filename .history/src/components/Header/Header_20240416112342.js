import Image from "next/image";
import React from "react";
import "./style.scss";

export default function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <Image src="/icon/logo_duong_ban.svg" width={137} height={79} />
        <div>
          <Image src="/icon/Bell.svg" width={24} height={28} />
          <div>
            <Image
              src="/img/doctor/hoang_an.jpg"
              width={62}
              height={62}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            <p>Tạ hoàng an</p>
          </div>
        </div>
      </div>
    </header>
  );
}
