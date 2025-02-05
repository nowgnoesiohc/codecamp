"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // 컴포넌트가 마운트된 후에 라우팅 수행
  useEffect(() => {
    router.push("/boards/list");
  }, [router]); // router가 변경될 때만 실행

  return null; // 화면에 아무것도 렌더링하지 않음
}
