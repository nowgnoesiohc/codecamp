import Link from "next/link";

export default function Aaa() {
  return (
    <>
      <div>AAA 페이지 입니다.</div>

      {/* 1. 리액트 이동방식 : 현재 페이지에서 JS로 태그만 바꿔치기 (SPA) */}
      <Link href="/section04/04-01-bbb">BBB페이지로 갈래요</Link>

      {/* 2. 고전 HTML 이동방식 : html페이지에서 새로 접속함. 느림 (MPA) */}
      <a href="/section04/04-01-bbb">BBB페이지로 갈래요</a>
    </>
  );
}
