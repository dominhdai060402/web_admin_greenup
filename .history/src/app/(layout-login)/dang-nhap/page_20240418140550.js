"use client";
import React from "react";
import "./style.scss";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <div className="overlay"></div>
      <section className="login-section">
        <Image src="/icon/logo_duong_ban.svg" width={184} height={121} />
        <h1 className="">ĐĂNG NHẬP</h1>
        <form action="">
          <div className="input-group">
            <label htmlFor="">Nhập email:</label>
            <input type="text" placeholder="Nhập email" />
          </div>
          <div className="input-group">
            <label htmlFor="">Nhập email:</label>
            <input type="text" placeholder="Nhập email" />
          </div>
        </form>
      </section>
    </main>
  );
}
