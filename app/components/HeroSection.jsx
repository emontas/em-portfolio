"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";


    
  

const HeroSection = () => {
    return (
        <section className="lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-12">

            <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-5xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-800">Hello, I'm {""}</span>
                <br />
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Edgar Montas',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'HTML,CSS, Javascript',
        1000,
        'React, Node.js',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    /></h1>
            <p className=" text-[#ADB7BE] sm:text-lg lg:text-xl mb-6">Welcome to my portfolio site! I've been building websites since 2005 using tables🤣. Forward to the present and I'm excited to use all the new Front End frameworks and stacks. This website was created as a Next JS application and features various projects and experiments I'm using to stay up to date with the current technologies.</p>
            
            <div>
                <button className="px-6 py-3 w-full sm:w-fit  rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-purple-800 via-blue-500  to-blue-800">Contact Me</button>
                <button className="px-1 py-1 w-full sm:w-fit rounded-full  text-white  mt-3 border border-color-white">
                    <span className="block bg[#121212] border-white  hover:bg-gradient-to-br  from-purple-800 via-blue-500  to-blue-800 bg-transparent rounded-full px-5 py-2"><Link href="EdgarMontas-Resume20240.pdf" target="_blank">Download Resume</Link></span>
                    </button>
            
            </div>
            </div>

            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image 
                    src="/images/webDeveloper.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                   />
               </div>  

            </div>

        </div>
        </section>
    );

};

export default HeroSection;