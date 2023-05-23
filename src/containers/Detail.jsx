import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BlockDetailComp from "../comp/Detail";

import { blockFind } from "../api";

const BlockDetailContainer = () => {
  const [block, setBlock] = useState("");
  const [blockUrl, setBlockUrl] = useState(1);
  // const [url, setUrl] = useState({ url: "" });
  const blockNumb = useParams().blockHeight;
  console.log(blockNumb);
  const navigate = useNavigate();

  const blockContent = async () => {
    const result = await blockFind(blockNumb);
    // const blockResult = blockDb.map((item) => item.number);
    const blockDb = result.numberData;
    setBlock(blockDb);
    // console.log("blockResult :", blockDb);
  };

  useEffect(() => {
    blockContent();
  }, [blockNumb]);

  // const copy = (text) => {
  //   try {
  //     navigator.clipboard.writeText(text);
  //     alert("클립보드에 복사되었습니다.");
  //   } catch (error) {
  //     alert("클립보드 복사에 실패하였습니다.");
  //   }
  // };

  return block && <BlockDetailComp blockNumb={blockNumb} block={block} />;
};

export default BlockDetailContainer;
