import "@fontsource-variable/vazirmatn";
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import AntdProvider from "@/components/AntdProvider";

export const metadata: Metadata = {
  title: "دادرای | عدالت برای همه",
  description:
    "متن حقوقی بگیر، وکیل درخواست کن یا رایگان مشاوره بگیر؛ دادرای کمک می‌کند از همان قدم اول مسیر مناسب را انتخاب کنی.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AntdProvider>{children}</AntdProvider>
      </body>
    </html>
  );
}
