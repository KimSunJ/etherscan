import MineComp from "../comp/Mine";
import { useEffect, useState } from "react";
import { accountAll } from "../api";
import axios from "axios";

const MineContainer = () => {
  const [acc, setAcc] = useState("");
  const [bal, setBal] = useState(0);
  const [unlocked, setUnlocked] = useState("");

  const request = axios.create({
    method: "POST",
    baseURL: "http://localhost:8080",
    headers: {
      "content-type": "application/json",
    },
  });

  const accData = async () => {
    // const acResult = await accountAll();
    // const acData = acResult.data.map((item) => item);
    // console.log(acResult);
    const {
      data: { result },
    } = await request({
      data: {
        id: 1337,
        jsonrpc: "2.0",
        method: "eth_accounts",
      },
    });
    // const acData = result.forEach((item) => {
    //   item;
    // });
    setAcc(result);
  };

  const mining = async (select) => {
    console.log(select);
    await request({
      data: {
        id: 1337,
        jsonrpc: "2.0",
        method: "miner_setEtherbase",
        params: [{ select }],
      },
    });
    await request({
      data: {
        id: 1337,
        jsonrpc: "2.0",
        method: "miner_start",
      },
    });
  };

  const stop = async () => {
    await request({
      data: {
        id: 1337,
        jsonrpc: "2.0",
        method: "miner_stop",
      },
    });
  };

  const get = async (acct) => {
    const balance = await request({
      data: {
        id: 1337,
        jsonrpc: "2.0",
        method: "eth_getBalance",
        params: [acct, "latest"],
      },
    });
    const tempBal = +balance.data.result / Math.pow(10, 18);
    setBal(tempBal);
  };

  const unlock = async (selectFr, inputPw) => {
    const lock = await request({
      data: {
        id: 1337,
        jsonrpc: "2.0",
        method: "personal_unlockAccount",
        params: [selectFr, inputPw.target.value],
      },
    });
    if (lock.data.error) {
      alert(lock.data.error.message);
    } else {
      alert("계정이 풀렸따리~");
    }
  };

  const send = async (selectFr, selectTo, inputEth) => {
    const wait = await request({
      data: {
        id: 1337,
        jsonrpc: "2.0",
        method: "eth_sendTransaction",
        params: [
          {
            from: selectFr,
            to: selectTo,
            value:
              "0x" + (inputEth.target.value * Math.pow(10, 18)).toString(16),
          },
        ],
      },
    });
    if (wait.data.error) {
      alert(wait.data.error.message);
    } else {
      alert("거래해따리~ 깡!해야해~");
    }
    // console.log(selectFr);
    // console.log(selectTo);
    // console.log(typeof inputEth.target.value);
    console.log(wait);
  };

  useEffect(() => {
    accData();
  }, []);

  return (
    acc && (
      <MineComp
        bal={bal}
        account={acc}
        unlock={unlock}
        get={get}
        mining={mining}
        stop={stop}
        send={send}
      />
    )
  );
};

export default MineContainer;
