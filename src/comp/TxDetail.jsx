import styled from "styled-components";
import rightIcon from "./img/right.svg";
import leftIcon from "./img/left.svg";
import copyIcon from "./img/paste.svg";

const TxDetailComp = ({ tx }) => {
  console.log(tx);

  return (
    <TxDetailBox>
      <div className="inner">
        <div className="txt">
          <h3>Transaction Details</h3>
        </div>
        <table>
          <tbody>
            <tr>
              <td className="title">Transaction Hash:</td>
              <td className="content">
                {tx[0]?.hash}
                <button className="left"></button>
                <button className="right"></button>
              </td>
            </tr>
            <tr>
              <td className="title">Block:</td>
              <td className="content">{tx[0]?.blockNumber}</td>
            </tr>
            <tr className="dr">
              <td className="title">Timestamp:</td>
              <td className="content">{tx[0]?.Block.timestamp}</td>
            </tr>

            <tr>
              <td className="title">From:</td>
              <td className="content">{tx[0]?.from}</td>
            </tr>
            <tr>
              <td className="title">To:</td>
              <td className="content">{tx[0]?.to}</td>
            </tr>
            <tr>
              <td className="title">Value:</td>
              <td className="content">{tx[0]?.value / Math.pow(10, 18)} ETH</td>
            </tr>
            <tr>
              <td className="title">Gas Price:</td>
              <td className="content">
                <span> {tx[0]?.gasPrice} Gwei</span>
                <span> {tx[0]?.gasPrice} ETH</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td className="title">Gas Limit:</td>
              <td className="content">{tx[0]?.Block.gasLimit}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </TxDetailBox>
  );
};

export default TxDetailComp;

const TxDetailBox = styled.div`
  width: 100%;
  .inner {
    width: 95%;
    margin: auto;
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
    background-color: white;
    background-image: url(${copyIcon});
    background-position: center;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    border: none;
    cursor: pointer;
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
