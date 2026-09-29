import React from "react";

const AboutMe = () =>{
    return(
        <section className="w-full min-h-screen bg-black text-white px-6 sm:px-10 md:px-20 py-16 flex flex-col">
      {/* Title */}
      <div className="flex items-center text-3xl font-bold text-white mt-0 mb-12">
        <span className="text-purple-500">&lt;</span>
        <h2 className="mx-2">About Me</h2>
        <span className="text-purple-500">&gt;</span>
        <div className="flex-grow ml-4 border-t border-purple-600"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 flex-grow">
        {/* Image */}
        <div className="w-52 md:w-64 flex-shrink-0">
          <img
            src="/myprofile.jpg" // <-- Ensure this file is in public folder
            alt="About Illustration"
            className="object-contain rounded-full "
          />
        </div>

        {/* Text */}
        <div className="border-l-2 border-purple-600 text-justify pl-4 sm:pl-6 max-w-3xl space-y-4 text-lg">
          <h3 className="text-2xl font-semibold">
            Hey! <span role="img" aria-label="wave">👋</span>
          </h3>
          <p>
            I'm Sanjana, a full stack web developer with a strong passion for crafting digital realms that captivate and inspire.
          </p>
          <p>
            I specialize in creating dynamic and interactive UI/UX experiences. I stay up to date with the latest tools and techniques and work on a wide range of projects, from personal websites to large-scale applications, sharpening my problem-solving skills and fostering creativity.
          </p>
          <p>
            If you're seeking a dedicated and passionate web developer, I'm eager to collaborate with you. Let's bring your ideas to life!
          </p>
        </div>
      </div>
    </section>
    )
}

export default AboutMe;