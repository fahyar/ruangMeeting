//import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import BookRuang from "./pages/BookRuang";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pages/BookRuang" element={<BookRuang />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
