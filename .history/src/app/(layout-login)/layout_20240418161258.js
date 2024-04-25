import ToastifyContainer from "../ToastifyContainer";
import "./global.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ToastifyContainer />
      <body>{children}</body>
    </html>
  );
}
