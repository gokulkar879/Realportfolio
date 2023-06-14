import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

function Info() {
  return (
    <div className='info' id="info">
      <div className='info-left'>
        <h3>Hi, I'm Gokul Karki</h3>
        <p>Full Stack Web Developer with a keen to learning new tech</p>
        <div className='info-btns'>
          <a href=""><AiOutlineGithub /></a>
          <a href=""><AiOutlineLinkedin /></a>
        </div>
      </div>
      <div className='info-right'>
        <div className='center'>
        </div>
        <img src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=75"></img>
      </div>
    </div>
  )
}

export default Info