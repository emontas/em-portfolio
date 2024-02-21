"use client";
import React from 'react';
import ProjectCard from './ProjectCard';
import Link from 'next/link';


const projectsData = [
    {
        id: 1,
        title: "Product Display Page",
        image: "/images/projects/nextjs.png",
        description: "A React customizable product display hero section",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewURL: "/",
    },
    {
        id: 2,
        title: "React Search API",
        image: "/images/searchBar.jpg",
        description: "A search component that fecthes names from an api",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewURL: "/",
    },
    {
        id: 3,
        title: "React Audio Player",
        image: "/images/projects/threejs.png",
        description: "A music player component",
        tag: ["All", "Web"],
        gitUrl: "/",
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
        image: "/images/asbc-01.jpg",
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