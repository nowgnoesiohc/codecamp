"use client";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { FETCH_BOARD, FETCH_BOARDS } from "../queries";
import "./style.css";

import InfiniteScroll from "react-infinite-scroll-component";
import { FetchBoardsDocument } from "@/commons/graphql/graphql";

export default function BoardsList() {
  const router = useRouter();
  // const [hasMore, setHasMore] = useState(true);
  // const [page, setPage] = useState(1); // 현재 페이지 상태 추가
  const { data, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
    fetchPolicy: "no-cache",
    notifyOnNetworkStatusChange: true,
  });

  // console.log(data);

  const onNext = () => {
    console.log("시작");
    if (!data) {
      // console.log("sdlkfjsdlkfj");
      return;
    }
    // console.log(data.fetchBoards);

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchBoards.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          console.log("마지막입니다");
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        console.log(
          `🦦🦦${Math.ceil(data.fetchBoards.length / 10) + 1}🦦🦦`,
          fetchMoreResult.fetchBoards
        );
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  const onClickDetail = async (event: React.MouseEvent<HTMLDivElement>) => {
    // console.log("🦄 : ", event.currentTarget.id);
    event.stopPropagation();
    try {
      router.push(`/boards/${event.currentTarget.id}`);
    } catch (error) {
      console.error("안돼,,,");
    }
  };

  const getDate = (el) => {
    const date = new Date(el.createdAt);
    const dateString = `${date.getFullYear()}.${String(
      date.getMonth() + 1
    ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}. ${String(
      date.getHours()
    ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
    return dateString;
  };

  return (
    <div id="list_main" className="list_main">
      <InfiniteScroll
        next={onNext}
        hasMore={true}
        loader={<div className="my-4">로딩중입니다...</div>}
        dataLength={data?.fetchBoards.length ?? 0}
        endMessage={<div className="my-4">마지막입니다</div>}
        className="flex flex-col gap-4"
        scrollableTarget="list_main"
      >
        {data?.fetchBoards.map((el, idx) => (
          <div key={idx} id={el._id} className="block" onClick={onClickDetail}>
            <div className="title_text">{el.title}</div>
            <div className="date_text">{getDate(el)}</div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
