import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */

const nextConfig = {
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    basePath: "/savinqkr.github.io", // GitHub Pages에서 사용될 경로 설정
    assetPrefix: "/savinqkr.github.io/", // 정적 파일 경로 설정
  }),
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

export default nextConfig;
