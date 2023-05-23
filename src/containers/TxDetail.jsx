import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TxDetailComp from "../comp/TxDetail";

import { txAll } from "../api";

const TxDetailContainer = () => {
  const [tx, setTx] = useState("");

  const blockNumb = useParams().txHash;
  // console.log(blockNumb);

  const txContent = async () => {
    const result = await txAll(blockNumb);
    // console.log(result.txData);
    const txDb = result.txData;
    setTx(txDb);
  };

  useEffect(() => {
    txContent();
  }, []);

  return tx && <TxDetailComp tx={tx} />;
};

export default TxDetailContainer;
