import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import Gk from '../gk.jpg';

function Info() {
  return (
    <div className='info' id="info">
      <div className='info-left'>
        <h3>Hi, I'm Gokul Karki</h3>
        <p>Full Stack Web Developer with a keen to learning new tech</p>
        <div className='info-btns'>
          <a href="https://github.com/gokulkar879"><AiOutlineGithub /></a>
          <a href="https://www.linkedin.com/in/gokul-karki-05973817a/"><AiOutlineLinkedin /></a>
        </div>
      </div>
      <div className='info-right'>
        <div className='center'>
        </div>
        <img src={Gk}></img>
      </div>
    </div>
  )
}

export default Info