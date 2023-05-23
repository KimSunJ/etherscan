import { useState } from "react";
import { TdTag } from "./Tag";
import styled from "styled-components";
import rightIcon from "./img/right.svg";
import copyIcon from "./img/paste.svg";
import leftIcon from "./img/left.svg";
import { Paging } from "./Paging";

const BlockComp = ({ blockHeight, currentPosts, page, count, setPage }) => {
  const [selected, setSelected] = useState("");
  const handleSelect = (e) => {
    console.log(e.target);
    setSelected(e.target.value);
  };
  // console.log(selected);
  return (
    <>
      <BlockBox>
        <div className="inner">
          <h4>Blocks</h4>
          <div className="box">
            <div className="box_head">
              <p>Total of {blockHeight?.length} blocks</p>
              {/* <label>
                Show rows:
                <select          
                  typeof="number"
                  value={selected}
                  onChange={({ target: { value } }) =>
                    handleSelect(Number(value))
                  }
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </label> */}
            </div>
            <p className="gray_txt">
              (Showing blocks between #&nbsp;
              {blockHeight[blockHeight.length - 1]?.number} to # &nbsp;
              {blockHeight[0]?.number} )
            </p>
            <TableComp currentPosts={currentPosts} />
            <div className="box_bottom">
              <Paging page={page} count={count} setPage={setPage} />
            </div>
          </div>
        </div>
      </BlockBox>
    </>
  );
};

const TableComp = ({ currentPosts }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Block</th>
          <th className="blue_text">Age</th>
          <th>Txn</th>
          <th className="fee">Fee Recipient</th>
          <th></th>
          <th>Gas Used</th>
          <th>Gas Limit</th>
          <th>Reward</th>
        </tr>
      </thead>
      <tbody>
        {currentPosts?.map((item, idx) => {
          return (
            <tr key={`${idx}`}>
              <TdTag className="blue_text" to={`/block/${item.number}`}>
                {item.number}
              </TdTag>
              <td>5 second ago</td>
              <td className="blue_text">{item.transactions.length} txn</td>
              <TdTag className="blue_text" to={`/address/${item.miner}`}>
                {item.miner.slice(0, 8)}...{item.miner.slice(-8)}
              </TdTag>
              <td>
                <button
                  className="copy"
                  onClick={() => navigator.clipboard.writeText(`${item.miner}`)}
                ></button>
              </td>
              <td>
                <span>{item.gasUsed}</span>
                <span className="percent">
                  ({((item.gasUsed / item.gasLimit) * 100).toFixed(2)} %)
                </span>
              </td>
              <td>{item.gasLimit}</td>
              <td>50 Eth</td>
            </tr>
          );
        })}
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

export default BlockComp;

const BlockBox = styled.div`
  width: 100%;
  .inner {
    width: 95%;
    margin: auto;
    border-bottom: 1px solid #eeee;
    box-sizing: border-box;
  }
  .fee {
    width: 10%;
  }
  .box {
    width: 100%;
    border: 1px solid #eeee;
    border-radius: 15px;
    p {
      margin-left: 10px;
    }
  }
  .gray_txt {
    color: #7c7c7ceb;
    font-size: 14px;
    position: absolute;
    font-weight: bold;
    left: 40px;
    top: 190px;
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
  .copy {
    background-color: transparent;
    background-image: url(${copyIcon});
    background-position: center;
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    border: none;
    cursor: pointer;
    margin-left: 10px;
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
