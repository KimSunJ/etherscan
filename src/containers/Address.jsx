import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { txFrTo } from "../api";
import AddressComp from "../comp/Address";

const AddressContainer = () => {
  const [txFr, setTxFr] = useState([]);
  const [address, setAddress] = useState("");

  const minerAddress = useParams().address;
  const addressContents = async () => {
    const result = await txFrTo(minerAddress);

    const fromDb = result.fromData;
    const toDb = result.toData;
    const txFrom = fromDb.map((item) => item);
    const txTo = toDb.map((item) => item);
    const tempArr = txFrom.concat(txTo);
    // const tempSort = tempArr.map((item) => item.blockNumber);
    // console.log(tempSort.sort());
    setTxFr(tempArr);
    setAddress(minerAddress);
  };

  useEffect(() => {
    addressContents();
  }, []);

  return <AddressComp from={txFr} address={address} />;
};

export default AddressContainer;
