import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header>
      <Image src="/icon/logo_duong_ban.svg" width={137} height={79} />
      <div>
        <Image src="/icon/Bell.svg" width={24} height={28} />
      </div>
    </header>
  );
}
