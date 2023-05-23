import styled from "styled-components";

import mineIcon from "./img/minecart.svg";
import wallet from "./img/wallet.svg";
import coin from "./img/coin.svg";
import unlockIcon from "./img/unlock.svg";
import moving from "./img/moving.gif";
import { useState } from "react";

const MineComp = ({ account, mining, stop, get, bal, unlock, send }) => {
  // console.log(account);
  const [select, setSelect] = useState("");
  const [selectFr, setSelectFr] = useState("");
  const [selectTo, setSelectTo] = useState("");
  const [inputEth, setInputEth] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [importAc, setImportAc] = useState("");

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };
  const handleSelectFr = (e) => {
    setSelectFr(e.target.value);
  };
  const handleSelectTo = (e) => {
    setSelectTo(e.target.value);
  };
  const importSelect = (e) => {
    console.log(e.target);
    setImportAc(e.target.value);
  };

  return (
    <HistoryBox>
      <div className="inner">
        <div className="content-inner">
          <div className="content">
            <div>
              <h3>
                <span>
                  <img src={mineIcon} alt="" />
                </span>
                ETHER MINING
              </h3>
            </div>
            <div>
              <select id="select-account" onChange={handleSelect}>
                <option>---- ACCCOUNT SELECT ----</option>
                {account.map((item, idx) => {
                  // console.log(item);
                  return (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <button
                id="start"
                onClick={() => {
                  mining(select);
                }}
              >
                MINE START
              </button>
              <button
                id="stop"
                onClick={() => {
                  stop();
                }}
              >
                MINE STOP
              </button>
            </div>
          </div>
          <div className="content">
            <div>
              <h3>
                <span>
                  <img src={wallet} alt="" />
                </span>
                SEND TRANSACTIONS
              </h3>
            </div>
            <div className="from">
              <div>
                <span>From :</span>
                <select id="select-account" onChange={handleSelectFr}>
                  <option>
                    -------------------------- ACCCOUNT SELECT
                    --------------------------
                  </option>
                  {account.map((item, idx) => {
                    return (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <span>To :</span>
                <select id="select-account" onChange={handleSelectTo}>
                  <option>
                    -------------------------- ACCCOUNT SELECT
                    --------------------------
                  </option>
                  {account.map((item, idx) => {
                    return (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="pass">
                <input
                  type="password"
                  placeholder="From Unlock Password"
                  onInput={setInputPw}
                />
                <button
                  onClick={() => {
                    unlock(selectFr, inputPw);
                  }}
                ></button>
              </div>

              <div>
                <span>ETH :</span>
                <input
                  type="text"
                  id="eth"
                  placeholder="Send Ether"
                  step="0.001"
                  onInput={setInputEth}
                />
                <button
                  id="send"
                  onClick={() => {
                    send(selectFr, selectTo, inputEth);
                  }}
                >
                  Send Ether{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="content">
            <div>
              <h3>
                <span>
                  <img src={coin} alt="" />
                </span>
                Account
              </h3>
            </div>
            <div className="input">
              <div className="check">
                <select id="select-account" onChange={importSelect}>
                  <option>-------- ACCCOUNT SELECT --------</option>
                  {account.map((item, idx) => {
                    return (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
                <button
                  id="send"
                  onClick={() => {
                    get(importAc);
                  }}
                >
                  Check
                </button>
              </div>
              <h4>Selected Account :</h4>
              <span className="blue_txt">{importAc}</span>
              <h4>Balance :</h4>
              <span className="red_txt">{bal} </span>
              <span>ETH</span>
            </div>
          </div>
          {/* <div className="content">
            <span className="move">
              <img src={moving} alt="" />
              <img src={moving} alt="" />
            </span>
            <span className="move">
              <img src={moving} alt="" />
              <img src={moving} alt="" />
            </span>
          </div> */}
        </div>
      </div>
    </HistoryBox>
  );
};

export default MineComp;

const HistoryBox = styled.div`
  .inner {
    width: 95%;
    margin: auto;
    background-color: white;
    border: 1px solid #eeee;
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: space-between;
    top: -30px;
  }
  span {
    margin: 0 10px 0 0;
  }
  .content {
    width: 30%;
    display: block;
    padding: 0px 30px;
    margin: 30px 0 30px 0;
    border-right: 1px solid #eeee;
  }
  h3 {
    margin: 0;
  }
  .content:nth-child(1) {
    width: 20%;
  }
  .content:nth-child(2) {
    width: 40%;
  }
  .content:nth-child(3) {
    width: 35%;
  }
  .content > div {
    margin-bottom: 10px;
  }
  .pass {
    input {
      width: 90%;
      padding: 5px;
    }
    button {
      width: 30px;
      height: 30px;
      background-image: url(${unlockIcon});
      background-size: 20px 20px;
      background-position: center;
      background-repeat: no-repeat;
      background-color: #0784c3;
      border: 1px solid #0784c3;
      border-radius: 3px;
    }
  }
  .content-inner {
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
  #start,
  #stop {
    padding: 10px;
    margin: 0 10px 0 0;
  }
  .move {
    display: flex;
    img {
      width: 50%;
    }
  }
  .from > div {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 10px 0;
  }
  .from > span {
    width: 20%;
  }
  .check {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .blue_txt {
    color: #0784c3;
    font-weight: bold;
  }
  .red_txt {
    color: #ff2e2eeb;
    font-weight: bold;
    font-size: 19px;
  }
  #send {
    margin-left: 10px;
    padding: 7px 10px;
    background-color: #0784c3;
    border: #0784c3;
    color: white;
    border-radius: 5px;
  }
  #eth {
    width: 50%;
    padding: 5px;
  }
  #select-account {
    text-align: center;
    width: 80%;
    margin-top: 5px;
    padding: 4px;
    color: #898888ec;
  }
`;
