import styled from "styled-components";
import { Link } from "react-router-dom";
import rightIcon from "./img/right.svg";
import leftIcon from "./img/left.svg";
import copyIcon from "./img/paste.svg";
import { useEffect } from "react";

const BlockDetailComp = ({ block }) => {
  // const reload = location.reload();

  return (
    <DetailBox>
      <div className="inner">
        <div className="txt">
          <h3>Block</h3>
          <span># {block.number}</span>
        </div>
        <table>
          <tbody>
            <tr>
              <td className="title">Block Height:</td>
              <td className="content">
                {block.number}
                <Link to={`/block/${block.number - 1}`}>
                  <button className="left"></button>
                </Link>
                <Link to={`/block/${block.number + 1}`}>
                  <button className="right"></button>
                </Link>
              </td>
            </tr>
            <tr>
              <td className="title">Timestamp:</td>
              <td className="content">{block.timestamp}</td>
            </tr>
            <tr className="dr">
              <td className="title">Transactions:</td>
              <td className="content">
                {block.transactions.length} transactions in this block
              </td>
            </tr>

            <tr>
              <td className="title">Fee Recipient:</td>
              <td className="content">
                <Link to={`/address/${block.miner}`}>
                  <span className="blue_text">{block.miner}</span>
                </Link>
                <button
                  className="copy"
                  onClick={() =>
                    navigator.clipboard.writeText(`${block.miner}`)
                  }
                ></button>
              </td>
            </tr>
            <tr>
              <td className="title">Block Reward:</td>
              <td className="content">50 ETH</td>
            </tr>
            <tr>
              <td className="title">Total Difficulty:</td>
              <td className="content">{block.totalDifficulty}</td>
            </tr>
            <tr>
              <td className="title">Size:</td>
              <td className="content">{block.size} bytes</td>
            </tr>
            <tr>
              <td className="title">Gas Used:</td>
              <td className="content">{block.gasUsed}</td>
            </tr>
            <tr>
              <td className="title">Gas Limit:</td>
              <td className="content">{block.gasUsed}</td>
            </tr>
            <tr>
              <td className="title">Extra Data:</td>
              <td className="content">{block.extraData}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td className="title">Hash:</td>
              <td className="content">{block.hash}</td>
            </tr>
            <tr>
              <td className="title">Parent Hash:</td>
              <td className="content">{block.parentHash}</td>
            </tr>
            <tr>
              <td className="title">StateRoot:</td>
              <td className="content">{block.stateRoot}</td>
            </tr>
            <tr>
              <td className="title">Nonce:</td>
              <td className="content">{block.nonce}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DetailBox>
  );
};

export default BlockDetailComp;

const DetailBox = styled.div`
  width: 100%;
  .inner {
    width: 95%;
    margin: auto;
  }
  .blue_text {
    color: #0784c3;
    font-weight: 500;
  }
  .txt {
    display: flex;
    align-items: center;
    margin: 10px 0 20px 0;
    padding: 0 0 10px 0;
    border-bottom: 1px solid #eeee;
    span {
      color: #6c757d;
      margin-left: 10px;
      font-size: 14px;
    }
  }
  table {
    width: 100%;
    border: 1px solid #eeee;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    padding: 10px;
    margin-bottom: 20px;
  }
  .left,
  .right {
    width: 25px;
    height: 25px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 6px;
    border: 1px solid #eeee;
    border-radius: 5px;
    margin-left: 10px;
  }
  .left {
    background-image: url(${leftIcon});
  }
  .right {
    background-image: url(${rightIcon});
  }
  .title {
    width: 30%;
    color: #6c757d;
  }
  .content {
    width: 70%;
    display: flex;
    align-items: center;
  }
  .copy {
    background-color: transparent;
    background-image: url(${copyIcon});
    background-position: center;
    background-repeat: no-repeat;
    width: 17px;
    height: 17px;
    border: none;
    cursor: pointer;
    margin-left: 10px;
  }

  tr {
    display: flex;
    align-items: center;
    height: 50px;
  }

  tr > td {
    padding: 10px 0 10px 0;
  }

  .dr {
    border-collapse: collapse;
    border-bottom: 1px solid #eeee;
  }
`;
