import { useEffect, useState } from "react";
import LatestComp from "../comp/Latest";

import { numberAll } from "../api";

const LatestContainer = () => {
  const [block, setBlock] = useState("");
  const [tx, setTx] = useState("");

  const blockData = async () => {
    const result = await numberAll();
    // console.log(result);
    const block = result.blockData;
    setBlock(block);
    // console.log("blockData :", block);
  };
  const txData = async () => {
    const result = await numberAll();
    const txDb = result.txData;
    // console.log(txDb);
    setTx(txDb);
    // console.log("blockData :", block);
  };

  useEffect(() => {
    blockData();
    txData();
  }, []);

  return block && <LatestComp block={block} tx={tx} />;
};

export default LatestContainer;
