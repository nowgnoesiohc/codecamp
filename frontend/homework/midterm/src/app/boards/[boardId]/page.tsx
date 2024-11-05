"use client";
import React from "react";
import "./style.css";
// import DetailFormInfo from "./DetailFormInfo";
// import DetailFormContent from "./DetailFormContent";
// import DetailFormLike from "./DetailFormLike";
// import DetailFormButton from "./DetailFormButton";
import { useParams, useRouter } from "next/navigation";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_BOARD, DELETE_BOARD, FETCH_BOARDS } from "../queries";
import Image from "next/image";

// API에서 받은 이미지 경로에 호스트 URL 추가
const getImageUrl = (path) => `https://storage.googleapis.com/${path}`;

const IMAGE_SRC = {
  img1: {
    src: require("@/assets/image01.png"),
    alt: "이미지1",
  },
  img2: {
    src: require("@/assets/image02.png"),
    alt: "이미지2",
  },
  img3: {
    src: require("@/assets/image03.png"),
    alt: "이미지3",
  },
  avatar: {
    src: require("@/assets/ic_account_circle.png"),
    alt: "사용자아이콘",
  },
};

export default function BoardsDetail() {
  const params = useParams();
  // console.log(params);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: params.boardId },
  });
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  console.log(data?.fetchBoard);

  const images = data?.fetchBoard?.images;

  const onClickDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log("🦄 : ", params.boardId);
    event.stopPropagation();
    try {
      const response = await deleteBoard({
        variables: { boardId: params.boardId },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
      // console.log("🦄🦄 :", response.data.deleteBoard);
      router.push("/boards/list");
    } catch (error) {
      console.log("실패");
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="box">
        <div className="prose-b_18_20">{data?.fetchBoard?.title}</div>
        <hr />
        <div className="flex gap-2 w-full overflow-auto ${images?'h-[125px]':'h-0'}">
          {data?.fetchBoard?.images?.map((el, idx) =>
            el ? (
              <Image
                key={idx}
                src={getImageUrl(el)}
                alt={`이미지 ${idx + 1}`}
                width={220}
                height={220}
                style={{ objectFit: "cover" }}
              />
            ) : null
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 prose-b_14_20">
            <Image src={IMAGE_SRC.avatar.src} alt={IMAGE_SRC.avatar.alt} />
            {data?.fetchBoard?.writer}
          </div>
          <div className="prose-r_16_24 w-[564px]">
            {data?.fetchBoard?.contents}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button
          className="prose-b_12_20 bora_button"
          onClick={() => {
            router.push("/boards/list");
          }}
        >
          글목록
        </button>
        <button
          className="prose-b_12_20 grey_button"
          onClick={() => {
            router.push(`/boards/new/${data?.fetchBoard?._id}`);
          }}
        >
          수정
        </button>
        <button className="prose-b_12_20 grey_button" onClick={onClickDelete}>
          삭제
        </button>
      </div>
    </div>
  );
}
