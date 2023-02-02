import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
};

export default App;
