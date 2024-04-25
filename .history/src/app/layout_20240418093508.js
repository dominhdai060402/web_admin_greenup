import Header from "@/components/Header/Header";
import "./global.scss";
import MenuAdmin from "@/components/MenuAdmin/Menu";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <div className="main-wrapper">
            <div className="main-wrapper--left">
              <MenuAdmin />
            </div>
            <div className="main-wrapper--right">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
