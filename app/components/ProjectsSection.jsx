"use client";
import React from 'react';
import ProjectCard from './ProjectCard';
import Link from 'next/link';


const projectsData = [
    {
        id: 1,
        title: "React Music Library Site",
        image: "/images/react-music-library.jpg",
        description: "A custom audio player for a Production music website",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/emontas/music-library",
        previewURL: "/",
    },
    {
        id: 2,
        title: "Product Display Page",
        image: "/images/pdp.jpg",
        description: "A React Customizable Product Display Component",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/emontas/product-detail-page",
        previewURL: "/",
    },
    {
        id: 3,
        title: "Next JS Portfolio Site",
        image: "/images/portfolio.jpg",
        description: "A portfolio webiste made with Next JS",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/emontas/em-portfolio/tree/master",
        previewURL: "/",
    },
   
    {
        id: 4,
        title: "proactiv",
        image: "/images/proactiv.png",
        description: "Front End Development with Demandware and Kibo",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewURL: "https://proactiv.com",
    },
	
	{
        id: 5,
        title: "Restorative Elements",
        image: "/images/restorativeelements.png",
        description: "Front End Development with Vue, Node Js, Svelte",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewURL: "https://restorativeelements.com",
    },
	
	{
        id: 6,
        title: "ABSC Entertainment Marketing Service",
        image: "/images/asbc.jpg",
        description: "Wordpress site development for client",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewURL: "http://www.absc.net",
    },
   
]

const ProjectSection = () => {
    return (
        <>
       <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
        <div id="projects" className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {projectsData.map((project) => (
            <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewURL}/>
        ))}</div>
        </>
     );
};
 
export default ProjectSection;