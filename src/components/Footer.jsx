import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* Gradient top line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-purple-600 to-pink-500" />

      {/* Background glow */}
      <div className="absolute left-1/2 bottom-[-150px] -translate-x-1/2 w-[600px] h-[300px] bg-purple-700/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 pt-14 pb-6">

        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center">

          {/* Logo */}
          <div
            className="
              flex items-center justify-center
              w-16 h-16
              rounded-2xl
              bg-gradient-to-br from-pink-500 to-purple-700
              text-3xl font-extrabold
              shadow-[0_0_30px_rgba(168,85,247,0.35)]
              mb-4
            "
          >
            S
          </div>

          {/* Name */}
          <h2 className="text-2xl font-bold">
            Sanjana<span className="text-purple-500">.</span>
          </h2>

          {/* Small description */}
          <p className="text-gray-400 mt-2 max-w-md text-sm sm:text-base">
            Building creative, responsive and meaningful web experiences.
          </p>
    

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-5 mt-8">

            <a
              href="https://github.com/Sanjana-146"
              target="_blank"
              rel="noreferrer"
              className="
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
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://www.linkedin.com/in/sanjana146/"
              target="_blank"
              rel="noreferrer"
              className="
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
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="https://leetcode.com/u/sanjana_7/"
              target="_blank"
              rel="noreferrer"
              className="
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
              <FontAwesomeIcon icon={faCode} />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-purple-500/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 text-sm text-gray-500">

          <p>
            © 2026 Sanjana. All rights reserved.
          </p>

          <p>
            Designed & Built with{" "}
            <span className="text-pink-500">♥</span>{" "}
            by{" "}
            <span className="text-purple-400 font-medium">
              Sanjana
            </span>
          </p>

        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          absolute
          right-5 sm:right-8
          bottom-20 sm:bottom-16
          w-11 h-11
          flex items-center justify-center
          rounded-full
          border border-purple-500
          bg-black
          text-purple-400
          hover:bg-purple-600
          hover:text-white
          hover:-translate-y-1
          hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
          transition-all duration-300
        "
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>

    </footer>
  );
};

export default Footer;