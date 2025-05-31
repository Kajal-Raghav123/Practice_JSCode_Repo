import React from "react";

function ProjectSection() {
  return (
    <div className="project-section">
     
        <div className="project-heading">
          <h2>My Projects</h2>
          <p>
            Here are some of my hand crafted projects I have worked on over the
            years. Each one is unique and has its own special features and
            style.
          </p>
        
      </div>
      <div className="projects">
        <div>
          <img src="/project1.png" alt="Image is loading" />
        </div>
        <div>
          <img src="/project2.png" alt="Image is loading" />
        </div>
        <div>
          <img src="/project3.png" alt="Image is Loading" />
        </div>
        
      </div>
      <button>Load More</button>
    
      
    </div>
  );
}

export default ProjectSection;
