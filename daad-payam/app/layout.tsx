import "@fontsource-variable/vazirmatn";
import "./globals.css";
import type { Metadata } from "next";
import AntdProvider from "@/components/AntdProvider";

export const metadata: Metadata = {
  title: "دادپیام | بنویس، گفت‌وگو کن، دیده شو",
  description:
    "دادپیام، پیام رسان و شبکه ای اجتماعی برای گفت وگو و اشتراک دیدگاه هاست. اینجا توانایی تو در دیده شدن پست هایت نقش دارد.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AntdProvider>{children}</AntdProvider>
      </body>
    </html>
  );
}
