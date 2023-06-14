import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiMongodb, DiJavascript1 } from 'react-icons/di';
import { SiFirebase, SiExpress, SiAppwrite, SiE } from 'react-icons/si';

function Tech() {
  return (
    <div className='techs' id="tech">
        <h3>TECH-STACK</h3>
        <div className='techs-center'>
          <button><FaReact /></button>
          <button><FaNodeJs /></button>
          <button><DiMongodb /></button>
          <button><SiFirebase /></button>
          <button><SiExpress /></button>
          <button><SiAppwrite /></button>
          <button><DiJavascript1 /></button>
        </div>
    </div>
  )
}

export default Tech