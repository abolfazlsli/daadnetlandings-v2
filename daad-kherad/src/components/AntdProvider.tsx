"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider } from "antd";
import faIR from "antd/locale/fa_IR";
import type { ReactNode } from "react";

const FONT = '"Vazirmatn Variable", Vazirmatn, Tahoma, sans-serif';

export default function AntdProvider({ children }: { children: ReactNode }) {
  return (
    // `layer` puts antd's css-in-js into @layer antd so Tailwind utilities and CSS modules can override it
    <AntdRegistry layer>
      <ConfigProvider
        direction="rtl"
        locale={faIR}
        theme={{
          token: {
            fontFamily: FONT,
            colorPrimary: "#1692FA",
            colorText: "#181818",
            colorBorder: "#D0D0D0",
            borderRadius: 12,
          },
          components: {
            Input: { paddingBlockLG: 13, inputFontSizeLG: 14 },
            Button: { fontWeight: 700 },
          },
        }}
      >
        <App>{children}</App>
      </ConfigProvider>
    </AntdRegistry>
  );
}
