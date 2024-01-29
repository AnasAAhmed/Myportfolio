import React from "react";
import {time} from "../assets/data";
import { motion } from "framer-motion";
import {
    BsChevronUp,
    BsChevronDown
  } from "react-icons/bs";
const Timeline = () => {

    return (
        <div id="timeline">
  <h2>About</h2>
  <div className="paradiv"> 

  {/* <p className="para">"Goal-oriented Web Developer brings strong commitment to collaboration and solutions-oriented problem-solving. Use various web design packages to develop custom-crafted, customer-focused websites and designs.</p> */}
  </div>
           
  <div className="psvg"> 

  <BsChevronUp  color="black" size="3rem"/>
  </div>
          <div className="timelineBox">
                {time.map((item, index) => (
                    <TimelineItem
                        heading={item.titled}
                        tag={item.tag}
                        text={item.date}
                        index={index}
                        key={item.titled}
                    />
                ))}
            </div>      
            <div className="psvg"> 

            <BsChevronDown  color="black" size="3rem"/>
            </div>
        </div>
    );
};

const TimelineItem = ({ heading, text, index,tag }) => {

    const animations = {
        h1: {
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
        delay:0.2
      }
        }
    }
    return (
        <div
            className={`timelineItem ${index % 2 === 0 ? "leftTimeline" : "rightTimeline"
                }`}
        >
            <motion.div {...animations.h1} >
                 <h2>{tag}</h2>
                <p style={{color:"black"}}>{heading}</p>
                <p>{text}</p>
            </motion.div>
        </div>
    )
}

export default Timeline;


