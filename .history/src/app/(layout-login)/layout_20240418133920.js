import Header from "@/components/Header/Header";
import "./global.scss";
import MenuAdmin from "@/components/MenuAdmin/Menu";
import { Button, ConfigProvider, Space } from "antd";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
