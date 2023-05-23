import { useState } from "react";
import { TdTag } from "./Tag";
import styled from "styled-components";
import rightIcon from "./img/right.svg";
import leftIcon from "./img/left.svg";
import { Paging } from "./Paging";

const TxComp = ({ txContent, currentPosts, page, count, setPage }) => {
  return (
    <TxBox>
      <div className="inner">
        <div>
          <h4>Transactions</h4>
          <div className="box">
            <div className="box_head">
              <p>Total {txContent.length} transactions found</p>
              {/* <PageComp /> */}
            </div>
            <TableComp txContent={txContent} currentPosts={currentPosts} />
            <div className="box_bottom">
              <Paging page={page} count={count} setPage={setPage} />
            </div>
          </div>
        </div>
      </div>
    </TxBox>
  );
};

const TableComp = ({ txContent, currentPosts }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Txn Hash</th>
          <th>Block</th>
          <th className="blue_text">Age</th>
          <th>From</th>
          <th>To</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {currentPosts ? (
          currentPosts.map((item, idx) => {
            return (
              <tr key={`${idx}`}>
                <TdTag to={`/tx/${item.hash}`}>
                  {item.hash.slice(0, 20)}...
                </TdTag>
                <TdTag to={`/block/${item.blockNumber}`}>
                  {item.blockNumber}
                </TdTag>
                <td className="blue_text">secs ago</td>
                <td>
                  {item.from.slice(0, 8)}...{item.from.slice(-8)}
                </td>
                <td>
                  {item.to.slice(0, 8)}...{item.to.slice(-8)}
                </td>
                <td>{item.value / Math.pow(10, 18)} Eth</td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
};

// const PageComp = () => {
//   return (
//     <div>
//       <button>First</button>
//       <button className="left"></button>
//       <span>Page 1 of 100</span>
//       <button className="right"></button>
//       <button>Last</button>
//     </div>
//   );
// };

export default TxComp;

const TxBox = styled.div`
  width: 100%;
  .inner {
    width: 95%;
    margin: auto;
    border-bottom: 1px solid #eeee;
    box-sizing: border-box;
  }
  .box {
    width: 100%;
    border: 1px solid #eeee;
    border-radius: 15px;
    p {
      margin-left: 10px;
    }
  }
  .box_head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    div {
      width: 20%;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      span {
        padding: 7px;
        background-color: #eeee;
        border-radius: 5px;
        font-size: 15px;
      }
      button {
        height: 30px;
      }
    }
  }
  .box_bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }
  .percent {
    color: #a1a1a1ec;
    margin-left: 10px;
  }
  .left,
  .right {
    width: 30px;
    height: 30px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid #eeee;
    border-radius: 5px;
  }
  .left {
    background-image: url(${leftIcon});
  }
  .right {
    background-image: url(${rightIcon});
  }
  table {
    width: 100%;
    margin: 10px 0 10px 0;
    border-collapse: collapse;
    font-size: 13px;
  }

  th {
    height: 40px;
    text-align: left;
    border-bottom: 1px solid #eeee;
  }
  tr {
    border-bottom: 1px solid #eeee;
  }

  td {
    height: 40px;
  }
  tbody tr:hover {
    background-color: #eeee;
  }
  .blue_text {
    color: #0784c3;
  }
`;
