import React from "react";
import Heading from "./Heading";

function About() {
  return (
    <div className=" h-[500px] mt-16 md:container mx-auto lg:max-w-5xl">
      <Heading heading={"HI THERE"} />
      <Heading heading={"Nice To Meet You"} />
      
      <p className="m-10 text-center">
      Have you recently started a new business and need a
      cohesive look and feel for your brand? Or does your
      existing business need a refresh? It is never too late to
      give your brand a great new look.
      </p>
      <p className="m-10 text-center">
      Create social media posts, lead magnets and graphics
      with only a few clicks. Wow new visitors on your website
      and turn them into customers.
      </p>
      
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
               SEE MORE
      </button>
      
      
    </div>
  );
}

export default About;