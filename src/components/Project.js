import React from 'react'

function Project({project}) {
  return (
    <div className='project' id='projects'>
        <div className='project-left'>
            <img src={project.pic}></img>
        </div>
        <div className='project-right'>
            <h4>{project.name}</h4>
            <p>{project.description.map((desc, ind) => <p key={ind}><span style={{fontSize: "1.1rem", marginRight: "5px"}}>*</span>{desc}</p>)}</p>

            <div className='tech-stack'>
                {
                    project.tech_stack.map((tech, index) => <button key={index}>{tech}</button>)
                }
            </div>
            {
                (project.frontend) ? <div style={{display:"flex", justifyContent: "space-around", "margin" : "14px 0"}}>
                                               <a style={{flex: ".45"}} href={project.frontend} target="_blank">Frontend</a>
                                               <a style={{flex: ".45"}} href={project.backend} target="_blank">Backend</a></div> 
                                                : <a href={project.github}>Github</a>
            }
            <a href={project.siteUrl} target="_blank">Live Site</a>
        </div>
    </div>
  )
}

export default Project