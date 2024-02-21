"use client";
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import ButtonMailto from "./ButtonMailto";


const ContactSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
    return ( 
        <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            
           

            <div className="z-10">
              <div className="flex-row flex items-center">
            <Image src="/images/contact_section.png" width={90} height={90} />
                <h5 className='text-xl text-white font-bold text-whte my-2 pl-2'>Let's Connect</h5>
                </div> 
                <p className='text-[#ADB7BE] m-4 max-w-md'>
                   
                    I'm currently looking for new opportunities, my inbox is always open.
                    Don't hesitate to reach out!

                    </p>
                    <div className='socials flex flex-row gap-2 mt-4'>
                        <Link href="https://www.linkedin.com/in/edgarmontas/">
                            <Image src="/images/linkedin-icon.svg" alt='Linkedin Icon' width={60} height={60} />
                        </Link>
                    </div>

                    

            </div>


            <div className='flex text-[#ADB7BE] flex-row gap-2'>

            
          
          <Link  href="mailto:emontas@sbcglobal.net">
          <Image src="/images/email-icon-121.png" alt='EmailIcon' width={60} height={60} />
           
         Send an email to my main address
          
          </Link>

                   

               {/*<form className='flex flex-col'>
                    <div className='mb-6'>
                    <label htmlFor='mail' className='text-white block m-b-1 text-sm font-medium'>Your email</label>
                    <input type='email' id='email' required placeholder='you@email.com'
                     className='bg-[#18191E] p-2.5 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full'/>
                    </div>

                    <div className='mb-6'>
                    <label htmlFor='subject' className='text-white block m-mb-1 text-sm font-medium'>Subject</label>
                    <input type='text' id='subject' required 
                     className='bg-[#18191E] p-2.5 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full'/>
                    </div>

                    <div className='mb-6'>
                    <label htmlFor='message' className='text-white block m-mb-1 text-sm font-medium'>Message</label>
                    <textarea type='text' id='message' 
                     className='bg-[#18191E] p-2.5 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full'/>  
                    </div>
                    <button type='submit' className='bg-purple-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                    </button>
    </form> */}
            </div>

        </section>
     );
};
 
export default ContactSection;