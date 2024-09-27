import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { renderToNodeStream } from "react-dom/server";
import { removeRequestMeta } from "next/dist/server/request-meta";

export const metadata: Metadata = {
  title: "철수의 홈페이지",
  description: "반갑습니다. 철수의 홈페이지에 오신 것을 환영합니다.ㄴ",
};

const 철수의폰트 = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const 글로벌폰트 = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={`${철수의폰트.variable} ${글로벌폰트.variable}`}>
        <div>====== 여기 위는 레이아웃 ======</div>
        {props.children}
        <div>====== 여기 아래는 레이아웃 ======</div>
      </body>
    </html>
  );
}
