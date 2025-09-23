import React from "react";
import "./home.scss";
import NavBar from "../../Components/NavBar/NavBar";
import Hero from "../../Components/Hero/Hero";
import Skills from "../../Components/Skills/Skills";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div className="app-cont">
      <NavBar />
      <Hero />
      <Skills />
    </div>
  );
}

export default Home;
