"use client";
import React from "react";
import "./style.scss";
import {
  FileTextOutlined,
  BookOutlined,
  LockOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu, DatePicker } from "antd";
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
  getItem("Quản lý lịch đặt", "sub1", <BookOutlined />, [
    getItem("Lịch chờ khám", "2"),
    getItem("Lịch chờ đón", "3"),
    getItem("Lịch đã khám", "4"),
    getItem("Lịch đã hủy", "5"),
  ]),
  getItem("Thay đổi mật khẩu", "6", <LockOutlined />),
  getItem("Đăng xuất", "7", <LogoutOutlined />),
];

export default function MenuAdmin() {
  const onClick = (e) => {
    if (e.key === "1") {
      window.location.href = "/";
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
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
}
