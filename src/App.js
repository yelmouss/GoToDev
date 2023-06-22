import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componnents/pages/Home";
import Header from "./componnents/Layout/Header";
import Footer from "./componnents/Layout/Footer";
import Expertise from "./componnents/pages/Expertise";

import  About from "./componnents/pages/About";
import { useState,useEffect  } from "react";
function App() {
  const [dark, updateDark] = useState(null);
  const ModeDark = JSON.parse(localStorage.getItem("dark"));

  useEffect(() => {
    if (ModeDark) {
      updateDark(ModeDark);
    }
  }, [ModeDark]);

  return (
    <>
      <div     className={`App flex-shrink-0 d-flex flex-column min-vh-100 ${dark ? "bg-dark text-light" : " bg-light"}`}>
        <BrowserRouter>
          <Header dark={dark} updateDark={updateDark}  />
          <Routes>
            {/* */}
            <Route path="/" element={<Home  dark={dark} updateDark={updateDark} />} />
            <Route path="/Expertise" element={<Expertise  dark={dark} updateDark={updateDark} />} />
            <Route path="/About" element={<About  dark={dark} updateDark={updateDark} />}>
            
              {/* <Route index element={<Home />} /> */}
              <Route path="*" element={<Home dark={dark} updateDark={updateDark}  />} />
            </Route>
          </Routes>
          <Footer  dark={dark} updateDark={updateDark}  />
        </BrowserRouter>

      </div>
    
    </>
  );
}

export default App;
