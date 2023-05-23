import styled from "styled-components";
import ethlogo from "./img/ethereum-original.svg";
import map from "./img/map.png";
import topIcon from "./img/up.svg";

const Footer = () => {
  const OnTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <FooterBox>
      <div className="inner">
        <div className="top">
          <button
            className="topBtn"
            onClick={() => {
              OnTop();
            }}
          ></button>
          <span>Back On Top</span>
        </div>
        <div className="map">
          <p>
            <img src={ethlogo} alt="" />
            <span>Powered by Ethereum</span>
          </p>
          <p>
            Etherscan is a Block Explorer and Analytics Platform for Ethereum, a
            decentralized smart contracts platform.
          </p>
          <img src={map} alt="" />
        </div>
        <div className="list">
          <ul>
            <li>
              <h4>Company</h4>
            </li>
            <li>About Us</li>
            <li>Brand Assets</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Terms of Service</li>
            <li>Bug Bounty</li>
          </ul>
          <ul>
            <li>
              <h4>Community</h4>
            </li>
            <li>API Documentation</li>
            <li>Knowledge Base</li>
            <li>Network Status</li>
            <li>Newsletters</li>
            <li>Disqus Comments</li>
          </ul>
          <ul>
            <li>
              <h4>Products & Services</h4>
            </li>
            <li>Advertise</li>
            <li>Explorer-as-a-Service (EaaS)</li>
            <li>API Plans</li>
            <li>Blockscan</li>
            <li>Blockscan Chat</li>
          </ul>
        </div>
      </div>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: black;
  background-color: rgb(239, 239, 239);
  .inner {
    width: 95%;
    margin: 20px auto;
    display: flex;
  }
  .top {
    display: flex;
    width: 7%;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 90%;
    font-weight: bold;
    font-size: 14px;
    margin: 0 0 10px 0;
  }
  .topBtn {
    width: 40px;
    height: 40px;
    background-image: url(${topIcon});
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    border: none;
  }
  .topBtn:hover {
    border-radius: 100%;
    background-color: white;
    cursor: pointer;
  }
  .map {
    width: 30%;
    p:first-child {
      display: flex;
      align-items: center;
      span {
        font-size: 16px;
      }
    }
    p:nth-child(2) {
      font-size: 12px;
    }
    img {
      width: 15px;
      margin: 0 10px 0 0;
    }
    img:last-child {
      width: 80%;
    }
  }
  .list {
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    li {
      h4 {
        font-size: 14px;
      }
      list-style-type: none;
      margin: 10px 0;
      font-size: 13px;
    }
  }
`;
