import styled from "styled-components";
import SearchContainer from "../containers/Search";
import back from "./img/blockchain.jpeg";
import search from "./img/search.svg";

const MainSearchComp = () => {
  return (
    <SearchBox>
      <div className="inner">
        <h3>The Ethereum Blockchain Explorer</h3>
        <SearchContainer />
        <p>Featured: Build Precise & Reliable Apps with Etherscan APIs.</p>
      </div>
    </SearchBox>
  );
};

export default MainSearchComp;

const SearchBox = styled.div`
  width: 100%;
  height: 280px;
  background-image: url(${back});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.9;
  display: flex;
  align-items: center;
  .inner {
    width: 95%;
    margin: auto;
    display: inline-block;
  }
  input {
    width: 100%;
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
  }
  h3 {
    color: white;
  }
  #search {
    width: 45px;
    height: 35px;
    border: none;
    border-radius: 8px;
    background-color: #0784c3;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: center;
  }
  p {
    color: white;
    font-size: 14px;
  }
`;
