import { useEffect, useState } from "react";

import BlockComp from "../comp/Block";
import { blockAll } from "../api";

const BlockContainer = () => {
  const [blockHeight, setBlockHeight] = useState([]);

  const [count, setCount] = useState(0); //아이템 총 개수
  const [currentpage, setCurrentpage] = useState(1); //현재페이지
  const [postPerPage] = useState(7); //페이지당 아이템 개수
  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState([]);

  const [currentTime, setcurrentTime] = useState("");

  const heightData = async () => {
    const result = await blockAll();

    // console.log(result);
    const blockDb = result.allData.map((item) => item);
    setBlockHeight(blockDb);
  };

  const testTime = async () => {
    const result = await blockAll();
    const end = new Date().getTime();
    // console.log(new Date());
    // console.log(end);
    const time = result.allData.map((item) => (end - item.timestamp) / 1000);
    // console.log(time);
    // const diff = (end - start) / 1000;

    const times = [
      { name: "일", milliSeconds: 1000 * 60 * 60 * 24 },
      { name: "시간", milliSeconds: 1000 * 60 * 60 },
      { name: "분", milliSeconds: 1000 * 60 },
      { name: "초", milliSeconds: 1000 },
    ];

    for (const value of times) {
      const betweenTime = time.map((item) =>
        Math.floor(item / value.milliSeconds)
      );
      // console.log(betweenTime);
      const map = betweenTime.map((item) => {
        if (item > 0) {
          return `${item}${value.name} 전`;
        }
      });
      setcurrentTime(map);
    }
    return "방금 전";
  };

  useEffect(() => {
    testTime();
    heightData();
  }, []);

  useEffect(() => {
    setCount(blockHeight.length);
    setIndexOfLastPost(currentpage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(blockHeight.slice(indexOfFirstPost, indexOfLastPost));
  }, [
    currentpage,
    indexOfFirstPost,
    indexOfLastPost,
    blockHeight,
    postPerPage,
  ]);

  const setPage = (e) => {
    setCurrentpage(e);
  };

  return (
    currentTime && (
      <BlockComp
        blockHeight={blockHeight}
        currentPosts={currentPosts}
        page={currentpage}
        count={count}
        setPage={setPage}
      />
    )
  );
};

export default BlockContainer;
