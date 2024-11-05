"use client";
import "./style.css";
import { useParams, usePathname } from "next/navigation";

import Navigation from "./navigation";
import BannerList from "./banner";

const HIDDEN_HEADERS = ["/boards/new", "/boards/new/[boardId]"];

interface ILayout {
  children: React.ReactNode;
}
export default function Layout(props: ILayout) {
  // 게시글등록, 게시글수정 2개의 페이지에서는 배너를 노출시키지 않습니다.
  let pathname = usePathname();
  // console.log("pathname:::", pathname);

  function convertToDynamicPath() {
    const parts = pathname.split("/");
    // console.log("parts:::", parts);

    if (parts.length === 4 && parts[1] === "boards" && parts[2] === "new") {
      pathname = `/boards/new/[boardId]`;
    }
  }

  if (pathname.includes("new")) convertToDynamicPath();
  // console.log("convert후 pathname", pathname);

  const isHiddenHeader = HIDDEN_HEADERS.includes(pathname);
  // console.log("isHiddenHeader", isHiddenHeader);
  return (
    <div className="all">
      <div className="nav">
        <Navigation />
      </div>
      <div className="main">
        <div className="banner">{!isHiddenHeader && <BannerList />}</div>
        <div className={!isHiddenHeader ? "small_children" : "big_children"}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
