import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Typewriter } from "react-simple-typewriter";


const HeroSection = () => {
    return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-black text-text-main">
      
      {/* Left Content (Text below on small screens) */}
      <div className="space-y-4 max-w-2xl text-center md:text-left mt-2 md:mt-0 md:order-1">
        <p className="text-2xl sm:text-2xl md:text-3xl text-gray-400">
          Hi! my name is,
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-8xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Sanjana
          <span className="text-purple-glow text-4xl sm:text-5xl">.</span>
        </h1>

        <p className="text-4xl sm:text-2xl md:text-3xl text-gray-400">
          I'm a {" "}
          <span className="text-primary font-bold">
            <Typewriter
              words={['Frontend Developer', 'Backend Developer', 'Mern Developer']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </span>
        </p>

        <p className="text-3xl sm:text-lg md:text-xl">
          Bringing ideas to life through clean and creative code.
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 text-3xl pt-4">
          <a href="https://github.com/Sanjana-146" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} style={{ color: "#fafafa" }} />
          </a>
          <a href="https://www.linkedin.com/in/sanjana146/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#fafafa" }} />
          </a>
          <a href="https://leetcode.com/u/sanjana_7/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faCode} style={{ color: "#fafafa" }} />
          </a>
        </div>
      </div>

      {/* Right Content (Image above on small screens) */}
      <div className="flex items-center justify-center md:justify-end w-full md:w-[55%] md:order-2 mt-2 md:mt-0">
        <img
          src="/homepagepic.png"
          alt="Hero Illustration"
          className="w-[95%]
          max-w-[390px]
      sm:w-[85%]
      sm:max-w-[450px]
      md:w-[110%]
      md:max-w-none
      lg:w-[115%]
      xl:w-[120%]
      2xl:w-[125%]
      h-auto
      object-contain
      drop-shadow-[0_0_30px_rgba(168,85,247,0.25)]"
        />
      </div>
    </section>
    )
}

export default HeroSection;