import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Typewriter } from "react-simple-typewriter";


const HeroSection = () => {
    return (
    <section 
    className="
    min-h-screen 
    flex flex-col-reverse md:flex-row 
    items-center 
    justify-end md:justify-between
    gap-3 sm:gap-6 md:gap-0 
    px-4 sm:px-6 md:px-20 
    pt-2 pb-8 sm:py-8 md:py-12
    bg-black
    text-text-main
    "
    >
      
      {/* Left Content (Text below on small screens) */}
      <div 
      className="
      w=full
      space-y-3 sm:space-y-4
      max-w-2xl 
      text-center md:text-left 
      mt-0 md:mt-0 md:order-1
      "
      >
        <p className="text-2xl sm:text-2xl md:text-3xl text-gray-400">
          Hi! my name is,
        </p>

        <h1 className="
        text-4xl 
        sm:text-5xl 
        md:text-8xl 
        lg:text-8xl 
        font-extrabold 
        leading-tight 
        text-transparent 
        bg-clip-text 
        bg-gradient-to-r from-primary to-secondary
        ">
          Sanjana
          <span className="text-purple-glow text-4xl sm:text-5xl">.</span>
        </h1>

        <div
          className="
            min-h-[65px]
            sm:min-h-[45px]
            md:min-h-0
            flex
            items-center
            justify-center
            md:justify-start
          "
        >
        <p className="text-2xl 
        sm:text-2xl 
        md:text-3xl 
        text-gray-400">
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
        </div>

        <p className="text-lg 
        sm:text-lg 
        md:text-xl
        leading-relaxed
        max-w-[350px]
        sm:max-w-md
        md:max-w-none
        mx-auto
        md:mx-0
        ">
          Bringing ideas to life through clean and creative code.
        </p>

        {/* Social Links */}
        <div className="
        flex 
        justify-center
        md:justify-start 
        gap-7 
        text-2xl 
        sm:text-3xl
        pt-2
        md:pt-4">
          <a href="https://github.com/Sanjana-146"  target="_blank" rel="noreferrer" className="
                w-11 h-11
                flex items-center justify-center
                rounded-full
                border border-purple-500/50
                text-xl
                hover:bg-purple-600
                hover:border-purple-400
                hover:-translate-y-1
                hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
                transition-all duration-300
              "
            >
            <FontAwesomeIcon icon={faGithub}  style={{ color: "#fafafa" }} />
          </a>
          <a href="https://www.linkedin.com/in/sanjana146/" target="_blank" rel="noreferrer" className="
                w-11 h-11
                flex items-center justify-center
                rounded-full
                border border-purple-500/50
                text-xl
                hover:bg-purple-600
                hover:border-purple-400
                hover:-translate-y-1
                hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
                transition-all duration-300
              ">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#fafafa" }} />
          </a>
          <a href="https://leetcode.com/u/sanjana_7/" target="_blank" rel="noreferrer" className="
                w-11 h-11
                flex items-center justify-center
                rounded-full
                border border-purple-500/50
                text-xl
                hover:bg-purple-600
                hover:border-purple-400
                hover:-translate-y-1
                hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
                transition-all duration-300
              ">
            <FontAwesomeIcon icon={faCode} style={{ color: "#fafafa" }} />
          </a>
        </div>
      </div>

      {/* Right Content (Image above on small screens) */}
      <div className="
      flex 
      items-center 
      justify-center 
      md:justify-end 
      w-full 
      md:w-[55%] 
      md:order-2 
      mt-15
      mb-10
      mr-14
      md:mt-2">
        <img
          src="/homepagepic.png"
          alt="Hero Illustration"
          className="w-[90%]
          max-w-[330px]
      min-[400px]:max-w-[360px]

            sm:w-[85%]
            sm:max-w-[450px]

            md:w-[100%]
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