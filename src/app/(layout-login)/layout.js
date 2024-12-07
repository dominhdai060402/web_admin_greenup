import ToastifyContainer from "../ToastifyContainer";
import "./global.scss";

export const metadata = {
  title: "Web-Admin-Greenup",
  description: "Greenup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastifyContainer />
        {children}
      </body>
    </html>
  );
}