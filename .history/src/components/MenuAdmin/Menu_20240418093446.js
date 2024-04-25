"use client";
import React from "react";
import {
  UserOutlined,
  BookOutlined,
  LockOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu, DatePicker } from "antd";

const items = [
  getItem("Thông tin tài khoản", "1", <UserOutlined />),
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
  return <div>mule</div>;
}
