// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div >
      <Navbar />
      <Hero />
      {/* <Skills /> */}
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <Router>

        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
      {/* <footer className="p-3 text-center">
        <h6 className="mb-3">JOHN ALEX</h6>
        <p>codeaprogram © All CopyRights Reserved 2022</p>
      </footer> */}
    </div>
  );
};

export default App;
