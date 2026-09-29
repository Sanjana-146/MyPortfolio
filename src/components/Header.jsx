import { useState ,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload , faBars , faTimes  } from '@fortawesome/free-solid-svg-icons';

const Header = () =>{
    const [menuOpen, setMenuOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
     // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // if scrolled more than 20px
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return(
        <>
        <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 transition-all duration-300 ${
          scrolled
            ? 'bg-black/40 backdrop-blur-md shadow-md'
            : 'bg-black'
        } text-white`}
      >
            <h1 className="text-2xl font-bold text-pink-500">
                Portfolio<span className="text-purple-500">.</span>
            </h1>

            <ul className="hidden md:flex gap-8 text-lg font-medium ">
                <li className="cursor-pointer">ABOUT</li>
                <li className="cursor-pointer">SKILLS</li>
                <li className="cursor-pointer">PROJECTS</li>
                <li className="cursor-pointer">CONTACT</li>
            </ul>
            <a href="./resume.pdf"
            className="flex items-center gap-2 px-5 py-2 border border-pink-500  rounded-md  text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-colors duration-300">
                RESUME 
                <FontAwesomeIcon icon={faDownload} style={{ color: "#f5f5f5" }} />
            </a>
            {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden text-2xl cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
        </nav>
        {/* Sidebar Overlay (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] sm:w-[50%] bg-black text-white z-40 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
      >
        <ul className="flex flex-col items-start p-8 text-lg gap-6 font-medium">
          <li className="cursor-pointer hover:text-pink-400 transition" onClick={() => setMenuOpen(false)}>ABOUT</li>
          <li className="cursor-pointer hover:text-pink-400 transition" onClick={() => setMenuOpen(false)}>SKILLS</li>
          <li className="cursor-pointer hover:text-pink-400 transition" onClick={() => setMenuOpen(false)}>PROJECTS</li>
          <li className="cursor-pointer hover:text-pink-400 transition" onClick={() => setMenuOpen(false)}>CONTACT</li>
        </ul>
      </div>
      </>
    )
}

export default Header;