"use client";
import React from "react";
import "./style.scss";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <div className="overlay"></div>
      <section className="login-section">
        <Image src="/icon/logo_duong_ban.svg" />
      </section>
    </main>
  );
}
