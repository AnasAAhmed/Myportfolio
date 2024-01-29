import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import de from "../assets/png.png"


const Home = ({ ratio }) => {




  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    img: {
      initial: {
        y: "+100%",
        opacity: 0
      },
      whileInView: {
        y: "0",
        opacity: 1
      },
      transition:{ 
        duration: 0.5,
        delay:0.1
      }
},
  };
  return (
    <>
      <div id="home">
        <section>
          <div>
            <motion.h1 {...animations.h1}>
              Hi, I Am <br /> Anas Ahmed
            </motion.h1>

            <Typewriter
              options={{
                strings: ["A Developer", "A Designer", "A Creator"],
                cursor: "",
                autoStart: true,
                loop: true,
                wrapperClassName: "typewriterpara",
              }}
            />
            <motion.p {...animations.img}>Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level [Web Development] position. Ready to help team achieve company goals.</motion.p>
          <motion.aside {...animations.img }>
            <article className="artsvg">
            <a href="https://linkedin.com" target={"blank"}>
            <AiFillLinkedin />
          </a>
         
            <a href="https://instagram.com" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/AnasAAhmed" target={"blank"}>
            <AiFillGithub />
          </a>
            </article>
          </motion.aside>
              <motion.div {...animations.img}>
              <a href="#contact">Hire Me</a>
              <a href="#work">
                Projects <BsArrowUpRight />
              </a>
            </motion.div>

            
          </div>
        </section>
        <motion.section {...animations.img}>
          <img src={de} id="loop" alt="Anas"
          />
        </motion.section>
       
      </div>
    </>
  );
};

export default Home;
