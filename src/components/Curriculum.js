import React from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";

function Curriculum() {
  return (
    <div className="my-24 h-auto">
      <Heading heading={"Curriculum"} />
      <Subheading
        subheading={
          "5 IDEAS TO GET YOUR STUDENTS CREATING"
        }
      />
      <div className="flex justify-between items-center mx-16 lg:mx-40 gap-3 pt-12">
        <div>
          <header className="text-sm text-slate-500">
            The following subjects are covered extensibly.
          </header>
          <ul className="mt-4 list-outside flex flex-col gap-1">
            <li>Practice Design Thinking</li>
            <li>Chemistry</li>
            <li>Design Your Own Lesson Plan</li>
            <li>Discover Other Educators Lesson Plan</li>
            <li>Help Students Create Learning Portfolio</li>
            <li>Create Presentations And Videos</li>
            <li>Build A Brand For Your Classroom</li>
            <li>Ask Students To Create Learning Plans</li>
            <li>Make Group Projects More Appealing</li>
          </ul>
        </div>
        <div className=" hidden md:block ">
          <img
            className="rounded-md max-w-md"
            src="https://media.istockphoto.com/photos/group-of-elementary-students-having-computer-class-with-their-teacher-picture-id1358014313?b=1&k=20&m=1358014313&s=170667a&w=0&h=t_bvZVk1eQhR1SiiuRphbJ3kljcJJ46QAsOQ8EnuLbA="
            alt="classroom"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Curriculum;