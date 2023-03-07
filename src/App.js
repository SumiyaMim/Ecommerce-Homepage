import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
       <Route path="/"element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
