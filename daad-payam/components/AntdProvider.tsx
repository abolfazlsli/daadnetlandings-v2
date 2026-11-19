"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider } from "antd";
import faIR from "antd/locale/fa_IR";
import type { ReactNode } from "react";

const FONT = '"Vazirmatn Variable", Vazirmatn, Tahoma, sans-serif';

export default function AntdProvider({ children }: { children: ReactNode }) {
  return (
    // `layer` puts antd's css-in-js into @layer antd so Tailwind utilities can override it
    <AntdRegistry layer>
      <ConfigProvider
        direction="rtl"
        locale={faIR}
        theme={{
          token: {
            fontFamily: FONT,
            colorPrimary: "#FB0200",
            colorText: "#181818",
            borderRadius: 10,
          },
        }}
      >
        <App>{children}</App>
      </ConfigProvider>
    </AntdRegistry>
  );
}
