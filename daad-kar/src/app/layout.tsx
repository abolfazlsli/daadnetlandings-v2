import "@fontsource-variable/vazirmatn";
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import AntdProvider from "@/components/AntdProvider";

export const metadata: Metadata = {
  title: "دادکار | کار برای همه",
  description: "استعدادت را بشناس، مسیر شغلی ات را بساز؛ شغل مناسب پیدا کن یا نیروی موردنیازت را جذب کن.",
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
