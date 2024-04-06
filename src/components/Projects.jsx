import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Projects = () => {
  const { Projects } = content;

  // Number of cards per page
  const cardsPerPage = 4;

  // Calculate the number of pages
  const numPages = Math.ceil(Projects.project_content.length / cardsPerPage);

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(0);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="bg-black" id="projects">
      <div className="md:container px-5 pt-14 flex flex-col">
        <div>
          <h2 className="title  text-white" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle  text-white" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {Projects.project_content
            .slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)
            .map((content, i) => (
              <div key={i} className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit">
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end">READ MORE</button>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-5">
          {/* <div className="flex items-center">
            {[...Array(numPages)].map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full mx-1 cursor-pointer ${
                  index === currentPage ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => handlePageChange(index)}
              ></div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;