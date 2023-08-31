import React from "react";
import "./Home.css";
import {ReactComponent as Moon} from "../../assets/icon-moon.svg";
import {ReactComponent as Sun} from "../../assets/icon-sun.svg";
import bgDark from "../../assets/bg-desktop-dark.jpg";
import bgLight from "../../assets/bg-desktop-light.jpg";
import Input from "../../components/input/Input";
import List from "../../components/list/List";

const Home = () => {
    const handleIcon = () =>{
let moon = document.querySelector("#moon");
let sun = document.querySelector("#sun");
let lightBg = document.querySelector("#light-bg");
let darkBg = document.querySelector("#dark-bg");
let theme = document.querySelector(".main-container");

moon.classList.toggle("hidden")
sun.classList.toggle("hidden")
theme.classList.toggle("dark")
lightBg.classList.toggle("hidden")
darkBg.classList.toggle("hidden")
    }
  return (
    <div className="home-page-container">
      <img
        className="home-page-image"
        id="light-bg"
        src={bgLight}
        alt="home-img"
      />
      <img
        className="home-page-image hidden"
        id="dark-bg"
        src={bgDark}
        alt="home-img"
      />
      <div className="todo-container">
        <div className="todo-wrapper">
          <h1 className="title">todo</h1>
          <div className="theme-icon">
            <Moon id="moon" onClick={()=>{handleIcon()}}/>
            <Sun id="sun" className="hidden" onClick={()=>{handleIcon()}}/>
          </div>
        </div>
        <Input/>
        <List/>
      </div>
    </div>
  );
};

export default Home;
