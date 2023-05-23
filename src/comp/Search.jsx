import { useState } from "react";
import styled from "styled-components";

const SearchComp = ({ search }) => {
  const [inputTxt, setInputTxt] = useState("");
  return (
    <SearchBox>
      <div className="form">
        <select>
          <option>All Filters</option>
        </select>
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
  );
};

export default SearchComp;

const SearchBox = styled.div`
  .form {
    width: 55%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
  }
  .form > select {
    border: none;
  }
`;
