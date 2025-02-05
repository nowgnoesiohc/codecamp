"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_BOARD, FETCH_BOARD, UPDATE_BOARD } from "../../queries";
import Image from "next/image";
const IMAGE_SRC = {
  plusIcon: {
    src: require("@/assets/ic_plus.png"),
    alt: "아이콘이미지",
  },
};
export default function NewForm({ isEdit }) {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();
  const params = useParams();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: params.boardId },
    skip: !isEdit,
  });
  console.log(data);
  const [inputValue, setInputValue] = useState(
    isEdit
      ? {
          author: data?.fetchBoard?.writer,
          password: "",
          title: data?.fetchBoard?.title,
          content: data?.fetchBoard?.contents,
        }
      : {
          author: "",
          password: "",
          title: "",
          content: "",
        }
  );

  const onChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
    console.log(inputValue);
  };

  const onClickSubmit = async () => {
    try {
      console.log("GraphQL 쿼리 실행");
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: inputValue.author,
            title: inputValue.title,
            password: inputValue.password,
            contents: inputValue.content,
          },
        },
      });
      console.log("등록성공:", result.data);
      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error) {
      console.error("GraphQL 요청 오류:", error);
    }
  };

  const onClickUpdate = async () => {
    // [x] : updateInput
    const updateInput: any = {};
    if (
      inputValue.title.trim() &&
      inputValue.title !== data?.fetchBoard?.title
    ) {
      updateInput.title = inputValue.title;
    }

    if (
      inputValue.content.trim() &&
      inputValue.content !== data?.fetchBoard?.contents
    ) {
      updateInput.contents = inputValue.content;
    }

    if (Object.keys(updateInput).length > 0) {
      console.log("수정된 항목만 날아가고있나? ::: updateInput", updateInput);
      try {
        const result = await updateBoard({
          variables: {
            updateBoardInput: updateInput,
            password: inputValue.password,
            boardId: params.boardId,
          },
        });

        if (result.data) {
          console.log("기존의 글을 수정하는 경우:::", result);
          alert("게시글이 성공적으로 수정되었습니다!");
        } else {
          alert("수정에 실패했습니다.");
        }
        // 수정이 완료되면 상세 화면으로 이동하기
        router.push(`/boards/${params.boardId}`);
      } catch (error) {
        console.error("GraphQL 요청 오류:", error);
      }
    } else {
      alert("수정된 내용이 없습니다.");
    }
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="boxx prose-b_14_20">
        <div className="prose-b_18_20">
          {!isEdit ? "새 글 작성" : "게시물 수정"}
        </div>
        <hr />
        <div className="flex flex-col w-full h-full items-center justify-evenly">
          <div className="input_area">
            <div>제목</div>
            <input
              id="title"
              defaultValue={inputValue.title}
              onChange={onChangeInputValue}
            />
          </div>
          <div className="input_area">
            <div>내용</div>
            <textarea
              id="content"
              defaultValue={inputValue.content}
              onChange={onChangeInputValue}
            />
          </div>
          <div className="input_area">
            <div>이미지</div>
            <div id="image_area">
              <div id="image_box">
                <Image
                  src={IMAGE_SRC.plusIcon.src}
                  alt={IMAGE_SRC.plusIcon.alt}
                />
              </div>
              <div id="image_box">
                {" "}
                <Image
                  src={IMAGE_SRC.plusIcon.src}
                  alt={IMAGE_SRC.plusIcon.alt}
                />
              </div>
              <div id="image_box">
                {" "}
                <Image
                  src={IMAGE_SRC.plusIcon.src}
                  alt={IMAGE_SRC.plusIcon.alt}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full gap-8">
            <div className="input_area">
              <div>작성자</div>
              <input
                id="author"
                defaultValue={inputValue.author}
                disabled={isEdit && true}
                onChange={onChangeInputValue}
              />
            </div>
            <div className="input_area">
              <div>비밀번호</div>
              <input
                id="password"
                defaultValue={inputValue.password}
                onChange={onChangeInputValue}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button
          className="prose-b_12_20 bora_button"
          onClick={!isEdit ? onClickSubmit : onClickUpdate}
        >
          {!isEdit ? "등록" : "수정"}
        </button>
        <button
          className="prose-b_12_20 grey_button"
          onClick={() => {
            isEdit ? router.back() : router.push("/boards/list");
          }}
        >
          취소
        </button>
      </div>
    </div>
  );
}
