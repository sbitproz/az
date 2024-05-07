import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// eslint-disable-next-line no-empty-pattern
export default ({}) => {
  return defineConfig({
    plugins: [react({ jsxImportSource: "@emotion/react" })],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
        "@store": path.resolve(__dirname, "./src/store"),
        "@domains": path.resolve(__dirname, "./src/domains"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@common": path.resolve(__dirname, "./src/common"),
        "@utils": path.resolve(__dirname, "./src/common/utils"),
        "@styles": path.resolve(__dirname, "./src/common/styles"),
        "@hooks": path.resolve(__dirname, "./src/common/hooks"),
        "@components": path.resolve(__dirname, "./src/common/components"),
      },
    },
  });
};
