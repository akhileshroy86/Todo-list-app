import "./globals.css";
import NavHeader from "./components";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-backgroundDark">
        <NavHeader />
        <div className="flex justify-center items-center">
          <div className="w-1/2 block">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
