import React from 'react'

import { MdOutlineWeb } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";


const Services = () => { 
  return (
<> 
    <div id='services'>
      <h2 className='servh2'>services</h2>
      
                
                <div className="Boxes">

                    <div className="Box" >
                        <div className="BoxNum"> 4+</div>

                        <div className="BoxText">Months Experience.</div>
                    </div>
                    <div className="Box" >
                        <div className="BoxNum"> <FaReact color="#008cff" size="3rem" /></div>
                        <div className="BoxText">React-Js UI/UX (Front-end)</div>
                    </div>
                    <div className="Box" >
                        <div className="BoxNum"><FiDatabase  color="#008cff" size="3rem" /></div>
                        <div className="BoxText">Beginner with MERN </div>
                    </div>
                    <div className="Box">
                        <div className="BoxNum"><MdOutlineWeb color="#008cff" size="3rem"/></div>
                        <div className="BoxText">Expereinced with Reactjs & Nextjs</div>
                    </div>

                </div>
            
    
    </div>
</>
  )
}
export default Services;
