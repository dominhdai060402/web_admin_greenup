"use client";
import React from "react";
import "./style.scss";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <div className="overlay"></div>
      <section className="login-section">
        <div>
          <Image src="/icon/logo_duong_ban.svg" width={184} height={121} />
          <h1 className="">ĐĂNG NHẬP</h1>
        </div>
      </section>
    </main>
  );
}
