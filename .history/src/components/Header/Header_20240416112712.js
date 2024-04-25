import Image from "next/image";
import React from "react";
import "./style.scss";

export default function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <Image src="/icon/logo_duong_ban.svg" width={137} height={79} />
        <div style={{ display: "flex", gap: "73px", alignItems: "center" }}>
          <Image src="/icon/Bell.svg" width={24} height={28} />
          <div style={{ display: "flex", gap: "9px", alignItems: "center" }}>
            <Image
              src="/img/doctor/hoang_an.jpg"
              width={62}
              height={62}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            <p>Tạ hoàng an</p>
            <Image src="/icon/carret_down.svg" width={20} height={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
