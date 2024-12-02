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
  getItem("Quản lý đổi thưởng", "sub1", <CalendarOutlined />, [
    getItem("Thu nhận - tích điểm", "2"),
    getItem("Đổi quà", "3"),
  ]),
  getItem("Quản lý điểm thu nhận", "4", <BookOutlined />),
  getItem("Quản lý loại rác", "5", <BookOutlined />),
  getItem("Quản lý phần quà", "6", <BookOutlined />),
  getItem("Quản lý tin tức", "7", <BookOutlined />),
  getItem("Quản lý tài khoản", "sub2", <TeamOutlined />, [
    getItem("Tài khoản admin", "8"),
    getItem("Tài khoản user", "9"),
  ]),
];

export default function MenuAdmin() {
  const router = useRouter();
  const pathname = usePathname();

  const [currentSelect, setCurrentSelect] = useState("1");

  useEffect(() => {
    if (pathname === "/") {
      setCurrentSelect("1");
    }
    if (pathname.match(/thu-nhan-tich-diem/)) {
      setCurrentSelect("2");
    }
    if (pathname.match(/doi-qua/)) {
      setCurrentSelect("3");
    }
    if (pathname.match(/quan-li-diem-thu-nhan/)) {
      setCurrentSelect("4");
    }
    if (pathname.match(/quan-li-loai-rac/)) {
      setCurrentSelect("5");
    }
    if (pathname.match(/quan-li-phan-qua/)) {
      setCurrentSelect("6");
    }
    if (pathname.match(/quan-li-tin-tuc/)) {
      setCurrentSelect("7");
    }
    if (pathname.match(/quan-li-tai-khoan\/tai-khoan-admin/)) {
      setCurrentSelect("8");
    }
    if (pathname.match(/quan-li-tai-khoan\/tai-khoan-user/)) {
      setCurrentSelect("9");
    }

  }, []);

  const onClick = (e) => {
    if (e.key === "1") {
      setCurrentSelect("1");
      router.push("/");
    }
    if (e.key === "2") {
      setCurrentSelect("2");
      router.push("/thu-nhan-tich-diem");
    }
    if (e.key === "3") {
      setCurrentSelect("3");
      router.push("/doi-qua");
    }
    if (e.key === "4") {
      setCurrentSelect("4");
      router.push("/quan-li-diem-thu-nhan");
    }
    if (e.key === "5") {
      setCurrentSelect("5");
      router.push("/quan-li-loai-rac");
    }
    if (e.key === "6") {
      setCurrentSelect("6");
      router.push("/quan-li-phan-qua");
    }
    if (e.key === "7") {
      setCurrentSelect("7");
      router.push("/quan-li-tin-tuc");
    }
    if (e.key === "8") {
      setCurrentSelect("8");
      router.push("/quan-li-tai-khoan/tai-khoan-admin");
    }
    if (e.key === "9") {
      setCurrentSelect("9");
      router.push("/quan-li-tai-khoan/tai-khoan-user");
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
        selectedKeys={[`${currentSelect}`]}
        defaultOpenKeys={["sub1", "sub2"]}
        mode="inline"
        items={items}
      />
    </div>
  );
}
