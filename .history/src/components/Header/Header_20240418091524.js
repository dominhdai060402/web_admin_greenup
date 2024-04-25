import Image from "next/image";
import React from "react";
import "./style.scss";

export default function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <Image src="/icon/logo_duong_ban.svg" width={137} height={79} />
        <div style={{ display: "flex", gap: "73px", alignItems: "center" }}>
          <div
            className="icon-bell"
            onClick={() => {
              setBellActive(true);
            }}
          >
            <Image src="/icon/Bell.svg" width={24} height={28} />

            <div className={`number-bell`}>2</div>
            <div
              className={`overlay  `}
              onClick={(e) => {
                e.stopPropagation();
                setBellActive(false);
                console.log(bellActive);
              }}
            ></div>
            <div className={`menu-bell `}>
              <h3>Thông báo</h3>
              <div className="container">
                <a href={noti.link} className="menu-item" key={index}>
                  <span className="content">{noti.content}</span>
                  <span className="time">{noti.date}</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="doctor"
            style={{ display: "flex", gap: "9px", alignItems: "center" }}
          >
            <Image
              src="/img/doctor/hoang_an.jpg"
              width={62}
              height={62}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            <p>Tạ hoàng an</p>
            <Image src="/icon/carret_down.svg" width={20} height={20} />
            <ul className="doctor-submenu">
              <li className="doctor-submenu-item">Đăng xuất</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
