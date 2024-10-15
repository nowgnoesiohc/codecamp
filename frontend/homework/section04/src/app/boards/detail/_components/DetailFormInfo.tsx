"use client";
import Image from "next/image";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdInsertLink } from "react-icons/md";

export default function DetailFormInfo() {
  return (
    <div className="flex-col gap-3 items-center">
      <div className="flex justify-between">
        <div>홍길동</div>
        <div>2024.11.11</div>
      </div>
      <hr />
      <div className="flex justify-end gap-1">
        <MdInsertLink />
        <MdOutlineLocationOn />
      </div>
    </div>
  );
}
