import "./App.css";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import BlockPage from "./pages/BlockPage";
import TxPage from "./pages/TxPage";
import BlockDetailPage from "./pages/BlockDetailPage";
import TxDetailPage from "./pages/TxDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddressDetailPage from "./pages/AddressDetailPage";

function App() {
  return (
    <>
      <AppBox>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blocks" element={<BlockPage />} />
          <Route path="/txns" element={<TxPage />} />
          <Route path="/search?" element={<NotFoundPage />} />
          <Route path="/block/:blockHeight" element={<BlockDetailPage />} />
          <Route path="/tx/:txHash" element={<TxDetailPage />} />
          <Route path="/address/:address" element={<AddressDetailPage />} />
        </Routes>
      </AppBox>
    </>
  );
}

export default App;

const AppBox = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  a {
    text-decoration: none;
    color: #0784c3;
    font-weight: 500;
  }
`;
