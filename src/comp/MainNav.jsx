import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "./img/logo-etherscan.svg";
import user from "./img/circle-user.svg";
import downIcon from "./img/down.svg";

const MainNavComp = () => {
  return (
    <MainNavBox>
      <div className="inner">
        <Link to="/">
          <span>
            <img src={logo} alt="" />
          </span>
        </Link>
        <div className="subinner">
          <ul className="subnav">
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>
              Blockchain
              <img src={downIcon} alt="" />
            </li>
            <li>
              Token
              <img src={downIcon} alt="" />
            </li>
            <li>
              NFTs
              <img src={downIcon} alt="" />
            </li>
            <li>
              Resources
              <img src={downIcon} alt="" />
            </li>
            <li>
              Developers
              <img src={downIcon} alt="" />
            </li>
            <li>
              More
              <img src={downIcon} alt="" />
            </li>{" "}
            |{" "}
            <li className="user">
              <img src={user} alt="" />
            </li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    </MainNavBox>
  );
};

export default MainNavComp;

const MainNavBox = styled.div`
  width: 100%;
  height: 50px;
  padding-top: 50px;
  border-bottom: 1px solid lightgray;
  .inner {
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  span {
    img {
      width: 150px;
    }
  }
  .subinner {
    width: 62%;
  }
  .subnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      list-style-type: none;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 13px;
        margin-left: 10px;
      }
    }
    .user {
      img {
        margin: 0;
        width: 18px;
      }
    }
  }
`;
