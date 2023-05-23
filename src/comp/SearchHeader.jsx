import styled from "styled-components";
import { useState } from "react";
import gasIcon from "./img/fuel-pump.svg";
import ethIcon from "./img/ethereum-original.svg";
import brightIcon from "./img/brightness.svg";
import searchIcon from "./img/searchIcon.svg";

const SearchHeaderComp = ({ search }) => {
  const [inputTxt, setInputTxt] = useState("");

  return (
    <SearchHeaderBox>
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
        <SearchBox>
          <div className="form">
            <img src={searchIcon} alt="" />
            <input
              type="text"
              placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
              onInput={(e) => setInputTxt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (!setInputTxt) return;
                  search(inputTxt);
                }
              }}
            />
            <button
              id="search"
              onClick={() => {
                search(inputTxt);
              }}
            ></button>
          </div>
        </SearchBox>
        <div className="btn">
          <button className="bright"></button>
          <button className="eth"></button>
        </div>
      </div>
    </SearchHeaderBox>
  );
};

export default SearchHeaderComp;

const SearchHeaderBox = styled.div`
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

const SearchBox = styled.div`
  position: absolute;
  left: 50%;
  .form {
    width: 20%;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    img {
      width: 15px;
      position: absolute;
      top: 17px;
      left: 20px;
    }
  }
  input {
    width: 500px;
    padding: 5px 5px 5px 40px;
    border-radius: 8px;
    border-color: #eeee;
  }
  #search {
    display: none;
    width: 50px;
    height: 25px;
    border: none;
    border-radius: 8px;
    background-color: #0784c3;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
