import React, { useState, useEffect } from 'react';
import './Projects.css';
import Image1 from '../assets/mayayadetal.png';
import Image2 from '../assets/image2.png';


const projectImages = [
  {
    name: 'Mayaya Dental Studios',
    image: Image1,
    title: 'Mayaya Dental Studios', // Add a title for the project
    link: 'https://mayayadental.com', // Add a valid link for the project with "https://"
  },
  {
    name: 'MUT Co-operative Education',
    image: Image2,
    title: 'MUT Co-operative Education', // Add a title for the project
    // link: 'https://mayayadental.com', // Add a valid link for the project with "https://"
  },
  // Add more project image objects as needed
];

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the time interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">Featured Projects</h1>
      <p className="projects-para">
       I've had the privilege of working on a diverse range of projects 
      that showcase my skills and dedication to crafting meaningful and impactful solutions.
      My portfolio is a curated collection of some of my  work. Each project represents a unique challenge I've embraced,
      demonstrating my ability to adapt, innovate, and deliver results.I've poured my energy and expertise into every endeavor.
      </p>
      <div className="projects-container">
        {projectImages.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-card">
              <h3
              style={{color: 'white'}}>{project.title}</h3> {/* Add the project title */}
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
                style={{ width: '290px', height: '219px' }}
              />
               <h4
              style={{color: 'white'}}>{project.link}</h4> 
              <p className="view-project">View Project</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
