import Header from "@/components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <div className="main-wrapper">
            <div className="left-col">Menu</div>
          </div>
        </main>
        {children}
      </body>
    </html>
  );
}
