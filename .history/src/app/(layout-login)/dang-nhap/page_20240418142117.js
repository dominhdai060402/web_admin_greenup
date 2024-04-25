"use client";
import React, { useState } from "react";
import "./style.scss";
import Image from "next/image";

export default function Page() {
  const [eye, setEye] = useState(false);
  return (
    <main>
      <div className="overlay"></div>
      <section className="login-section">
        <Image src="/icon/logo_duong_ban.svg" width={184} height={121} />
        <h1 className="login-section-heading">ĐĂNG NHẬP</h1>
        <form action="" className="form">
          <div className="input-group">
            <label htmlFor="">Nhập email:</label>
            <input type="text" placeholder="Nhập email" />
          </div>
          <div className="input-group">
            <label htmlFor="">Nhập mật khẩu:</label>
            <div className="custom-eye">
              <input
                type={eye ? "text" : "password"}
                placeholder="Nhập mật khẩu..."
              />
              <img
                src={eye ? `/icon/eye-btn-close.svg` : `/icon/eye-btn.svg`}
                alt=""
                onClick={() => {
                  setEye(!eye);
                }}
              />
            </div>
          </div>
          <button>Đăng nhập</button>
        </form>
      </section>
    </main>
  );
}
