import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layout/detailLayout/Navbar";
import Sidebar from "./layout/detailLayout/Sidebar";
import { RouterProvider } from "react-router-dom";
import BookRuang from "./pages/BookRuang";

function App() {
  const [count, setCount] = useState(0);

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
