"use client";
import React from "react";
import "./style.scss";
import {
  FileTextOutlined,
  CalendarOutlined,
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
  getItem("Quản lý lịch đặt", "sub1", <CalendarOutlined />, [
    getItem("Lịch thăm khám", "2"),
    getItem("Lịch spa-grooming", "3"),
    getItem("Khách sạn thú cưng", "4"),
  ]),
  getItem("Quản lý bài viết", "5", <BookOutlined />),
  getItem("Quản lý tài khoản", "sub2", <BookOutlined />, [
    getItem("Tài khoản nhân viên", "6"),
    getItem("Tài khoản người dùng", "7"),
  ]),
  getItem("Quản lý dịch vụ", "8", <LogoutOutlined />),
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
