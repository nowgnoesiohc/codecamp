"use client";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Imagepage() {
  return (
    <>
      {/* 이미지고전방식 */}
      <img src="/images/sample-img1.png" />
      {/* 이미지 next 방식 */}
      <Image
        src="/images/sample-img1.png"
        alt="해파리이미지"
        className={styles.이미지를보여주자}
        width={0}
        height={0}
      />
    </>
  );
}
