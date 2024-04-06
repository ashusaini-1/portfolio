import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">Influencer</span>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <button
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
              <button
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
              <button
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => scrollToSection("services")}
              >
                Services
              </button>
              <button
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </button>
              <button
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
              {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center">
                  <div className="flex flex-col space-y-4 text-white">
                    <button
                      className="text-white px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => {
                        scrollToSection("home");
                        toggleMenu();
                      }}
                    >
                      Home
                    </button>
                    <button
                      className="text-white px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => {
                        scrollToSection("about");
                        toggleMenu();
                      }}
                    >
                      About
                    </button>
                    <button
                      className="text-white px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => {
                        scrollToSection("services");
                        toggleMenu();
                      }}
                    >
                      Services
                    </button>
                    <button
                      className="text-white px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => {
                        scrollToSection("projects");
                        toggleMenu();
                      }}
                    >
                      Projects
                    </button>
                    <button
                      className="text-white px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => {
                        scrollToSection("contact");
                        toggleMenu();
                      }}
                    >
                      Contact
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import { useState } from "react";
// import { content } from "../Content";
// import { HiMenuAlt2 } from "react-icons/hi";
// import { createElement } from "react";

// const Navbar = () => {
//   const { nav } = content;
//   const [showMenu, setShowMenu] = useState(false);
//   const [active, setActive] = useState(0);

//   return (
//     <div className="w-full flex justify-center">
//       <div
//         className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2"
//         onClick={() => setShowMenu(!showMenu)}
//       >
//         <HiMenuAlt2 size={34} />
//       </div>
//       <nav
//         className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
//           showMenu ? "bottom-10" : "bottom-[-100%]"
//         }`}
//       >
//         {nav.map((item, i) => (
//           <a
//             href={item.link}
//             onClick={() => setActive(i)}
//             className={`text-xl p-2.5 rounded-full sm:cursor-pointer
//      ${i === active && "bg-dark_primary text-white"} `}
//           >
//             {createElement(item.icon)}
//           </a>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
