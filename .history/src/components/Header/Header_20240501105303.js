"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "./style.scss";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [bellActive, setBellActive] = useState(false);

  useEffect(() => {
    if (getCookie("success-login")) {
      toast.success("Chào mừng bạn quay trở lại!");
      deleteCookie("success-login");
    }
  }, []);
  const handleLogout = () => {
    deleteCookie("isLogin");
    router.push("/dang-nhap");
  };
  return (
    <header>
      <div className="header-wrapper">
        <Image
          src="/icon/logo_duong_ban.svg"
          width={137}
          height={79}
          alt="image"
        />
        <div style={{ display: "flex", gap: "73px", alignItems: "center" }}>
          <div
            className="icon-bell"
            onClick={() => {
              setBellActive(true);
            }}
          >
            <Image src="/icon/Bell.svg" width={24} height={28} alt="image" />
            <div className={`number-bell`}>2</div>
            <div
              className={`overlay ${bellActive ? "overlay-active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                setBellActive(false);
                console.log(bellActive);
              }}
            ></div>
            <div
              className={`menu-bell ${bellActive ? "menu-bell-active" : ""}`}
            >
              <h3>Thông báo</h3>
              <div className="container">
                <a href="#" className="menu-item">
                  <span className="content">Hello</span>
                  <span className="time">12345</span>
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
              alt="image"
            />
            <p>Tạ hoàng an</p>
            <Image
              src="/icon/carret_down.svg"
              width={20}
              height={20}
              alt="image"
            />
            <ul className="doctor-submenu">
              <li className="doctor-submenu-item" onClick={handleLogout}>
                Đăng xuất
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
