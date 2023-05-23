import { useEffect, useState } from "react";

import TxCompt from "../comp/Tx";
import { blockAll } from "../api";

const TxContainer = () => {
  const [txContent, setTxContent] = useState([]);

  const [count, setCount] = useState(0); //아이템 총 개수
  const [currentpage, setCurrentpage] = useState(1); //현재페이지
  const [postPerPage] = useState(7); //페이지당 아이템 개수
  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState([]);

  const txData = async () => {
    const result = await blockAll();
    const txDb = result.allTxData.map((item) => item);
    setTxContent(txDb);
    // console.log("heightData :", txDb);
  };

  useEffect(() => {
    txData();
  }, []);

  useEffect(() => {
    setCount(txContent.length);
    setIndexOfLastPost(currentpage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(txContent.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentpage, indexOfFirstPost, indexOfLastPost, txContent, postPerPage]);

  const setPage = (e) => {
    setCurrentpage(e);
  };

  return (
    <TxCompt
      txContent={txContent}
      currentPosts={currentPosts}
      page={currentpage}
      count={count}
      setPage={setPage}
    />
  );
};

export default TxContainer;
