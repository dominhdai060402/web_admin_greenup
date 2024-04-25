import Header from "@/components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <div className="main-wrapper">
            <div className="main-wrapper--left">Menu</div>
            <div className="main-wrapper--right">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
