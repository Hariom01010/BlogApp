import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";

function App() {
  const [progress, setProgress] = useState(0)
  const theme = useSelector((state) => {
    return state.themeReducer.theme
  });


  useEffect(() => {
    document.querySelector("body").classList.remove("light", "dark")
    const html = document.querySelector("html")
    html.classList.remove("light", "dark")
    html.classList.add(theme)
    if(theme == "dark"){
      document.querySelector("body").classList.add("dark:bg-[#212121]", "dark:text-slate-50")
    }
  }, [theme]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
