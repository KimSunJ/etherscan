import styled from "styled-components";
import gasIcon from "./img/fuel-pump.svg";
import ethIcon from "./img/ethereum-original.svg";
import brightIcon from "./img/brightness.svg";

const HeaderComp = () => {
  return (
    <HeaderBox>
      <div className="inner">
        <div className="text">
          <p>
            <span>ETH Price</span>
            <span className="blueTxt"> $1,690.74 </span>
            <span className="greenTxt">(+9.10%)</span>
            <span>
              <img src={gasIcon} alt="" />
            </span>
            <span>Gas</span>
            <span className="blueTxt">Gwei</span>
          </p>
        </div>
        <div className="btn">
          <button className="bright"></button>
          <button className="eth"></button>
        </div>
      </div>
    </HeaderBox>
  );
};

export default HeaderComp;

const HeaderBox = styled.div`
  width: 100%;
  height: 45px;
  margin: 0;
  border-bottom: 1px solid #eaeaea;
  position: fixed;
  z-index: 999;
  background-color: white;
  .inner {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .text {
    display: flex;
    align-items: center;
  }
  p {
    display: flex;
    align-items: center;
  }
  span {
    margin: 0 10px 0 0;
    font-size: 13px;
    color: #6c757d;
    text-align: center;
  }
  span:nth-child(4) {
    display: flex;
    img {
      width: 14px;
    }
  }
  .blueTxt {
    margin: 0;
    color: #0784c3;
  }
  .greenTxt {
    color: #00a186;
  }
  .btn {
    display: flex;
    align-items: center;
  }
  button {
    background-color: white;
    width: 40px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 10px;
    margin: 0 3px;
  }
  button:hover {
    background-color: lightgray;
  }
  .bright {
    background-image: url(${brightIcon});
    background-size: 17px;
    background-repeat: no-repeat;
    background-position: center;
  }
  .eth {
    background-image: url(${ethIcon});
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
