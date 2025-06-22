import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  return (
    <div>
      <h1 className="hero-first">Helping you to build modern <br /> <span>Web Applications</span></h1>
      <div className="links">
        <a href="https://github.com/lucasmsaluno" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/lucasmirandalm/" target="_blank">Linkedin</a>
      </div>
    </div>
  );
};

export default HeroText;
