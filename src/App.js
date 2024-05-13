import React from "react";
import Home from "./component/page/js/home";
import Header from "./component/header";
import Login from "./component/page/js/login";
import Member from "./component/page/js/Member";
import NewPage from "./component/page/js/NewPage";
import RegisterService from "./component/page/js/registerService";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/Member" element={<Member />} />
          <Route path="/your-new-page" element={<NewPage/>} />
          <Route path="/registerService" element={<RegisterService />} />
        </Routes>       
      </BrowserRouter>
    </div>
  );
}

export default App; 