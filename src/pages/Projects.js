import React, { useState } from 'react';
import Project from '../components/Project';
import data from '../data.js';

function Projects() {
    console.log(data);
    const [projects, setProjects] = useState(data);
  return (
    <div className='projects'>
        <h3>PROJECTS</h3>
        {
            projects && projects.map(project => {
                const {id} = project;

                return <Project key={id} project={project}/>
            })
        }
    </div>
  )
}

export default Projects