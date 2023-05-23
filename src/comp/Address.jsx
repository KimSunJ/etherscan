import styled from "styled-components";
import copyIcon from "./img/paste.svg";
import { TdTag } from "./Tag";

const AddressComp = ({ from, address }) => {
  // console.log(address);
  return (
    <AddressBox>
      <div className="inner">
        <div className="head">
          <div>
            <h4>Address</h4>
            <span>{address}</span>
            <button
              className="copy"
              onClick={() => navigator.clipboard.writeText(`${address}`)}
            ></button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Transaction Hash</th>
              <th>Block</th>
              <th className="blue_text">Age</th>
              <th>From</th>
              <th>To</th>
              <th>Value</th>
            </tr>
          </thead>
          {from ? (
            from.map((item, idx) => {
              // console.log(item);
              return (
                <tbody key={`${idx}`}>
                  <tr>
                    <TdTag to={`/tx/${item.hash}`}>
                      {item.hash.slice(0, 20)}...
                    </TdTag>
                    {item.blockNumber ? (
                      <TdTag to={`/block/${item.blockNumber}`}>
                        {item.blockNumber}
                      </TdTag>
                    ) : (
                      <div>없음</div>
                    )}

                    <td>age</td>
                    <td>{item.from.slice(0, 20)}...</td>
                    <td>{item.to.slice(0, 20)}...</td>
                    <td>{item.value / Math.pow(10, 18)} ETH</td>
                  </tr>
                </tbody>
              );
            })
          ) : (
            <></>
          )}
        </table>
      </div>
    </AddressBox>
  );
};

export default AddressComp;

const AddressBox = styled.div`
  width: 100%;
  .inner {
    width: 95%;
    margin: auto;
  }
  .head {
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #eeee;
    div {
      width: 40%;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
  .copy {
    background-color: white;
    background-image: url(${copyIcon});
    background-position: center;
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    border: none;
    cursor: pointer;
  }

  td {
    height: 40px;
  }
  tbody > tr:hover {
    background-color: #eeee;
  }
  .blue_text {
    color: #0784c3;
  }
`;
