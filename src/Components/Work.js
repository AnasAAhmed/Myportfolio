import React, { useState } from 'react'
import { FaCode, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { 
   projects, 
   projectsmore, 
  projectsagainmore
   } from "../assets/data"

const Work = () => {
  const [projData, setProjData] = useState(projects)
  const [active1, setActive1] = useState(true)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(false)


  const onClick1 = () => {
    setActive1(true)
    setActive2(false)
     setActive3(false)
    setProjData(projects)
  }
  const onClick2 = () => {
    setActive1(false)
     setActive3(false)
    setActive2(true)
    setProjData(projectsmore)
  }
   const onClick3 = () => {
    setActive1(false)
   setActive2(false)
    setActive3(true)
    setProjData(projectsagainmore)
  }
const animations = {
    card: {
      initial: {
        opacity: 0,
      },
      whileInView: {
        opacity: 1,
      },
      transition:{ 
        duration: 0.5,
        delay:0.2
      }
    },
}
  return (
    <div>
      <div id='work'>
        <h2 className='head2'>WORK</h2>  
     <ul className="nav nav-pills d-flex justify-content-center">
  <li className="nav-item">
    <button className={`workbtn ${active1 ? "workactive" : ""}`} aria-current="page" onClick={onClick1}>Tab1</button>
  </li>
  <li className="nav-item">
    <button className={`workbtn ${active2 ? "workactive" : ""}`} onClick={onClick2} >Tab2</button>
  </li>
  <li className="nav-item">
    <button className={`workbtn ${active3 ? "workactive" : ""}`}  onClick={onClick3}>Tab3 </button>
  </li>
</ul>
        <div className="container">
          <div className="row">
            {projData.map(({ title, image, tags, source, visit, id }) => (
              <motion.div className="col-md-6" key={id} {...animations.card}>
                <div className="my-3"  >
                  <div className="card border-0" >
                    <div className='imghover'>
                      <img src={image} height={220} className="card-img-top" alt="project" />
                    </div>
                    <div className="pp my-2"><div className='mt-2'><b >Created With :</b><br />{tags}</div>
   
                    </div>
                    <div className='card-body '>
                      <div className="d-flex justify-content-between" >
   <a href={visit} target='main' className="iconbtn " ><FaEye /></a>

                     <h5 className="card-title ">{title}</h5>
                        <a href={source} target='main' className="iconbtn "><FaCode /></a>
                         
                      </div>

                    </div>

                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}


export default Work
