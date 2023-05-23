import styled from "styled-components";
import { Link } from "react-router-dom";
import Top from "./Top";
import blockIcon from "./img/box.svg";
import paperIcon from "./img/file.svg";

const LatestComp = ({ block, tx }) => {
  // console.log(block);
  return (
    <LatestBox>
      <div className="inner">
        <div className="block">
          <p className="lastest">Lastest Blocks</p>
          {block ? (
            block.map((item, idx) => (
              <BlockUnitComp item={item} key={`${idx}`} />
            ))
          ) : (
            <></>
          )}
          <Link to="/blocks">
            <p className="view">VIEW ALL BLOCKS</p>
          </Link>
          <Top />
        </div>
        <div className="transaction">
          <p className="lastest">Latest Transactions</p>
          {tx ? (
            tx.map((item, idx) => <TxUnitComp item={item} key={`${idx}`} />)
          ) : (
            <></>
          )}
          <Link to={"/txns"}>
            <p className="view">VIEW ALL TRANSACTIONS</p>
          </Link>
          <Top />
        </div>
      </div>
    </LatestBox>
  );
};

const BlockUnitComp = ({ item }) => {
  return (
    <div className="unit">
      <p className="block_icon"></p>
      <p>
        <Link to={`/block/${item.number}`}>
          <span title="Block Height" className="blue_text">
            {item.number}
          </span>
        </Link>
        <Top />
        <span> {item.timestamp} secs ago</span>
      </p>
      <p>
        <span>Fee Recipient</span>
        <Link to={`/address/${item.miner}`}>
          <span className="blue_text" title={item.miner}>
            {item.miner.slice(0, 8)}...{item.miner.slice(-8)}
          </span>
        </Link>
        <Top />
        <span className="txn">{item.transactions.length} txns</span>
      </p>
      <p className="eth_text">50 Eth</p>
    </div>
  );
};

const TxUnitComp = ({ item }) => {
  return (
    <div className="unit">
      <p className="txt_icon"></p>
      <p>
        <Link to={`/tx/${item.hash}`}>
          <span title="Transaction Hash" className="blue_text">
            {item.hash.slice(0, 14)}
          </span>
        </Link>
        <Top />
        <span>{item.Block.timestamp} secs ago</span>
      </p>
      <div className="from_to">
        <p>
          <span>From</span>
          <Link to={`/address/${item.from}`}>
            <span className="blue_text">
              {item.from.slice(0, 8)}...{item.from.slice(-8)}
            </span>
          </Link>
          <Top />
        </p>
        <p>
          <span>To</span>
          <Link to={`/address/${item.to}`}>
            <span className="blue_text">
              {item.to.slice(0, 8)}...{item.to.slice(-8)}
            </span>
          </Link>
          <Top />
        </p>
      </div>
      <p className="eth_text">{item.value / Math.pow(10, 18)} Eth</p>
    </div>
  );
};

export default LatestComp;

const LatestBox = styled.div`
  width: 100%;
  .inner {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .unit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eeee;
    padding: 0 30px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
  .block,
  .transaction {
    width: 50%;
    border: 1px solid #eeee;
    border-radius: 10px;
    margin: 10px;
  }
  .txn {
    display: block;
    margin: 0;
    color: #0784c3;
  }
  .lastest {
    width: 97%;
    height: 50px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eeee;
    font-size: 15px;
    font-weight: bold;
    margin: 0;
  }
  .block_icon {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: #edededec;
    background-image: url(${blockIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px;
  }
  .txt_icon {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: #edededec;
    background-image: url(${paperIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px;
  }
  .unit > p:nth-child(2) {
    margin: 0 10px;
    span {
      display: block;
    }

    span:nth-child(2) {
      font-size: 14px;
      color: #929292eb;
    }
  }
  .blue_text {
    color: #0784c3;
    font-weight: 500;
  }
  .unit > p:nth-child(3) {
    width: 56%;
    span:first-child {
      margin: 0 10px 0 0;
    }
  }
  .from_to {
    display: block;
    width: 56%;
    margin: 0 0 0 10px;
    p {
      margin: 9px 0;
    }
    span {
      margin: 0 10px 0 0;
    }
  }
  .eth_text {
    font-size: 12px;
    font-weight: bold;
  }
  .view {
    width: 100%;
    height: 50px;
    font-size: 12px;
    font-weight: bold;
    color: #818181ec;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eeee;
    margin: 0;
    cursor: pointer;
  }
  .view:hover {
    color: #0784c3;
  }
`;
