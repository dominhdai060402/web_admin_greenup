"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import {
  FileTextOutlined,
  CalendarOutlined,
  BookOutlined,
  TeamOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Menu, DatePicker } from "antd";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Thống kê", "1", <FileTextOutlined />),
  getItem("Quản lý lịch đặt", "sub1", <CalendarOutlined />, [
    getItem("Lịch thăm khám", "2"),
    getItem("Lịch spa-grooming", "3"),
    getItem("Khách sạn thú cưng", "4"),
  ]),
  getItem("Quản lý bài viết", "5", <BookOutlined />),
  getItem("Quản lý tài khoản", "sub2", <TeamOutlined />, [
    getItem("Tài khoản nhân viên", "6"),
    getItem("Tài khoản người dùng", "7"),
  ]),
  getItem("Quản lý dịch vụ", "8", <ProductOutlined />),
];

export default function MenuAdmin() {
  const router = useRouter();
  const pathname = usePathname();

  const [currentSelect, setCurrentSelect] = useState("1");

  useEffect(() => {
    if (pathname === "/") {
      setCurrentSelect("1");
    }
    if (pathname.match(/quan-li-lich-dat\/lich-tham-kham/)) {
      setCurrentSelect("2");
    }
    if (pathname.match(/quan-li-lich-dat\/spa-grooming/)) {
      setCurrentSelect("3");
    }
    if (pathname.match(/quan-li-lich-dat\/khach-san-thu-cung/)) {
      setCurrentSelect("4");
    }
  }, []);

  const onClick = (e) => {
    if (e.key === "1") {
      router.push("/");
    }
    if (e.key === "2") {
      router.push("/quan-li-lich-dat/lich-tham-kham");
    }
    if (e.key === "3") {
      router.push("/quan-li-lich-dat/spa-grooming");
    }
    if (e.key === "4") {
      router.push("/quan-li-lich-dat/khach-san-thu-cung");
    }
  };
  return (
    <div>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        // selectedKeys={[{ currentSelect }]}
        defaultOpenKeys={["sub1", "sub2"]}
        mode="inline"
        items={items}
      />
    </div>
  );
}
