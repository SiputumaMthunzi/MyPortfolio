import React, { useEffect } from 'react';
import './Projects.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchProjects } from '../store/ProjectsSlice';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">featuRed pRojecTs</h1>
      <p className="projects-para">
      Over the years, I've had the privilege of working on a diverse range of projects 
      that showcase my skills and dedication to crafting meaningful and impactful solutions.
      My portfolio is a curated collection of some of my most notable work. Each project represents a unique challenge I've embraced,
      demonstrating my ability to adapt, innovate, and deliver results.I've poured my energy and expertise into every endeavor.
      </p>
      <div className="projects-container">
        {
          projects.map((project, id) => (
            <ProjectCard

              image={project.image_url}
              title={project.project_name}
              description={project.description}
              stacks={project.tech_stack}
              source_link={project.source_link}

            />
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
