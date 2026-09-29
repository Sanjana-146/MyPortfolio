import React from "react";
import {TechStackData} from "./TechStackData";

const TechCategory = ({ title, items }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <h3 className="text-2xl font-bold text-center mb-6 text-white">
      {title} <span className="text-purple-600">()</span>
    </h3>
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
      {items.map((tech) => (
        <div
          key={tech.name}
          className="bg-[#1f1f1f] rounded-xl p-4 flex flex-col items-center shadow-md hover:scale-105 transition-transform"
        >
          <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-2 text-center " />
          <p className="text-white text-sm text-center">{tech.name}</p>
        </div>
      ))}
    </div>
  </div>
);

const TechStack = () =>{
    return(
        <section className="w-full min-h-screen bg-black text-white px-6 sm:px-10 md:px-20 py-16">
      <div className="flex items-center text-3xl font-bold text-white mb-12 justify-center">
        <div className="flex-grow ml-4 border-t border-purple-600"></div>
        <span className="text-purple-500">&lt;</span>
        <h2 className="mx-2">Tech Stack</h2>
        <span className="text-purple-500">&gt;</span>
        <div className="flex-grow  border-t border-purple-600"></div>
      </div>

      <div className="flex flex-wrap justify-around gap-10">
        <TechCategory title="Front-End" items={TechStackData.frontend} />
        <TechCategory title="Back-End" items={TechStackData.backend} />
        <TechCategory title="Programming" items={TechStackData.programming} />
        <TechCategory title="Tech & Tools" items={TechStackData.tools} />
      </div>
    </section>
    )
}
export default TechStack;