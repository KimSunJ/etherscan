import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import imgBack from "./img/error.svg";
import moving from "./img/moving.gif";

const NotFoundComp = () => {
  const inputTx = useLocation();
  const query = inputTx.search.split("?").slice(1);

  return (
    <NotFoundBox>
      <img src={imgBack} alt="not" />
      <div className="inner">
        <div className="text">
          <h1>Search not found</h1>
          <p>
            <span>Oops! The search string you entered was:</span>
            <span className="query">{decodeURI(query)}</span>
          </p>
          <p>Sorry! This is an invalid search string.</p>
          <p>If you think this is a problem with us, please tell us.</p>
          <img src={moving} alt="" />
          <Link to={"/"}>
            <p className="home"> Back Home</p>
          </Link>
        </div>
      </div>
    </NotFoundBox>
  );
};

export default NotFoundComp;

const NotFoundBox = styled.div`
  margin: 0;
  width: 100%;
  /* height: 100vh;
  background-image: url(${imgBack});
  background-repeat: no-repeat;
  background-size: cover; */
  .inner {
    width: 95%;
    margin: auto;
  }
  .text {
    position: absolute;
    top: 200px;
  }
  h1 {
    font-weight: 500;
    margin: 0;
    color: #0784c3;
  }
  p {
    color: #6c757d;
  }
  .home {
    width: 30%;
    text-align: center;
    background-color: #0784c3;
    padding: 10px;
    border-radius: 10px;
    color: white;
    margin: 50px 0 0 0;
  }
  .query {
    font-weight: 600;
    margin-left: 10px;
  }
`;
