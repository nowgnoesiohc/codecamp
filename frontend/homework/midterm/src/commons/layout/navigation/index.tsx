"use client";

import styles from "./styles.module.css";
import { useNavigation } from "./hook";
import { usePathname } from "next/navigation";
import Link from "next/link";
const IMAGE_SRC = {
  talkIcon: {
    src: require("@/assets/ic_conversation.png"),
    alt: "아이콘이미지",
  },
  listIcon: {
    src: require("@/assets/ic_list.png"),
    alt: "리스트이미지",
  },
  newTalkIcon: {
    src: require("@/assets/ic_new.png"),
    alt: "글추가이미지",
  },
  listIcon_1: {
    src: require("@/assets/ic_list-1.png"),
    alt: "리스트이미지1",
  },
  newTalkIcon_1: {
    src: require("@/assets/ic_new-1.png"),
    alt: "글추가이미지1",
  },
};

import Image from "next/image";

export default function Navigation() {
  const { menuRoute } = useNavigation();
  const pathname = usePathname();
  let current = true;
  if (pathname === "/boards/list") current = true;
  else current = false;
  // console.log("🍁", pathname);

  return (
    <div className={styles.navigationFrame}>
      <div className={styles.navigationBody}>
        <div className={styles.navigationMenu}>
          <Link className={styles.logo} href="/boards/list">
            <Image src={IMAGE_SRC.talkIcon.src} alt={IMAGE_SRC.talkIcon.alt} />
            <div>TALKKR</div>
          </Link>
          <hr
            style={{
              color: "gray",
              height: "1px",
              width: "160px",
              margin: "10px 0px",
            }}
          />
          <Link
            href="/boards/list"
            className={current ? styles.selected_menu : styles.menu}
          >
            <Image
              src={current ? IMAGE_SRC.listIcon.src : IMAGE_SRC.listIcon_1.src}
              alt={IMAGE_SRC.listIcon.alt}
            />
            전체 글 보기
          </Link>
          <Link
            href="/boards/new"
            className={!current ? styles.selected_menu : styles.menu}
          >
            <Image
              src={
                !current
                  ? IMAGE_SRC.newTalkIcon.src
                  : IMAGE_SRC.newTalkIcon_1.src
              }
              alt={IMAGE_SRC.newTalkIcon.alt}
            />
            새 글 작성
          </Link>
        </div>
      </div>
    </div>
  );
}
