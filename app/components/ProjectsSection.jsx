"use client";
import React from 'react';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { EyeIcon } from '@heroicons/react/24/outline';


const projectsData = [
    {
        id: 1,
        title: "Movie Search Application",
        image: "/images/movie-search_thumb.jpg",
        description:  "A Movie Search Application using React, Next.js 14.3, and Tailwind CSS. This project will allow users to search for movies, view details about each movie, and save their favorite movies to a Favorites list",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/emontas/movie-search",
        previewURL: "https://movie-search-psi-eight.vercel.app/",
        target:"_blank",
    },
    {
        id: 2,
        title: "React Music Library Site",
        image: "/images/react-music-library.jpg",
        description: "The React Music Library Website offers music enthusiasts a dynamic platform for exploring albums, tracks, and artists. With a React frontend and Node.js backend, users can enjoy a modern interface, interactive audio player with waveform visualization, and artist pages. Featuring MongoDB for data storage, it's a hub for music discovery. Utilizing Tailwind CSS, WaveSurfer.js, and Material-UI Icons, the site promises a responsive experience. Future plans include authentication, search, and social features. A go-to destination for music lovers, it aims to curate an immersive journey through diverse genres and artists.",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/emontas/music-library",
        previewURL: "https://reactmusiclibrary.netlify.app/",
    },
    {
        id: 3,
        title: " React Product Details 3D Model Viewer",
        image: "/images/pdp.jpg",
        description:  "The React Product Details with 3D Model Viewer offers an immersive e-commerce experience. It includes product details, an image gallery, color selectors, sizes, and descriptions for personalized preferences. Its highlight is the 360-degree 3D viewer, powered by react-three-fiber, allowing users to rotate and customize products with real-time color updates. Featuring add-to-cart and wishlist buttons, this component is built with React, JavaScript, and Three.js, ensuring modern web practices. With focus on interactivity and visual customization, it empowers users to explore products in an engaging virtual space, making informed purchase decisions.",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/emontas/product-detail-page",
        previewURL: "https://3dpdppage.netlify.app/",
        target:"_blank",
    },
    
    {
        id: 4,
        title: "Next JS Portfolio Site",
        image: "/images/portfolio.jpg",
        description: "My current responsive portfolio website crafted with Next.js and Tailwind CSS. This dynamic site serves as a showcase for my projects, and accomplishments, embodying an elegant design that reflects professionalism and creativity. Leveraging the power of React.js and React Animation, the portfolio highlights a collection of skills and achievements, inviting visitors to explore a curated selection of projects in a visually captivating format. Powered by Next.js for server-side rendering and Tailwind CSS for a customizable CSS framework, this portfolio was a great Next JS learning experience.",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/emontas/em-portfolio/tree/master",
        previewURL: "/",
    },
    {
        id: 5,
        title: "ABSC Entertainment Marketing Service",
        image: "/images/asbc.jpg",
        description: "Leveraging the power of WordPress, I crafted a user-friendly and visually engaging website that showcased ABSC's services, expertise, and industry insights. The website served as a comprehensive platform for clients to learn about ABSC's offerings and approach, establishing a strong digital footprint for the consulting firm in the competitive entertainment market.",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewURL: "http://www.absc.net",
    },
   
    {
        id: 6,
        title: "proactiv",
        image: "/images/proactiv.png",
        description: "As a Front End Web Developer at The Proactiv Company in Santa Monica, CA, I developed and implemented  responsive, user-friendly interfaces for proactiv.com. Utilizing HTML5, CSS, JavaScript, XML, and JSON, I brought to life designs crafted by the Creative department. Working with platforms such as Demandware/Salesforce and later transitioning to Kibo, I integrated technologies like Vue.js, Svelte, Tailwind.css, and SASS. My responsibilities encompassed configuring product catalogs, managing image databases on AWS, optimizing image sizes, and enhancing product display pages (PDP) with new features. I collaborated with backend developers and web designers to enhance website usability and collaborated with the digital marketing team to implement SEO best practices.",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewURL: "https://proactiv.com",
    },
	
	{
        id: 7,
        title: "Restorative Elements",
        image: "/images/restorativeelements.png",
        description: "In this site from The Proactiv Company/Alchemee, we decided to develop the Front End with Vue, Node Js, Svelte outside of the Kibo ecommerce platform and then connect through API calls for transaction handling. This was my first experience with Node js and Tailwind Css.",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewURL: "https://restorativeelements.com",
    },
	
	
   
]

const ProjectSection = () => {
    return (
        <>
       <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <p className="flex text-center text-[#ADB7BE] sm:text-lg lg:text-xl mb-10">Here are some of my projects. They have a link to to the github source code <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] ml-2 mr-2" /> and also a preview link <EyeIcon className="h-6 w-6 text-[#ADB7BE] ml-2 mr-0" />.</p>
        <div id="projects" className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {projectsData.map((project) => (
            <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewURL}/>
        ))}</div>
        </>
     );
};
 
export default ProjectSection;