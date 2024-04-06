import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-white">
      <div className="md:container px-5 pt-14">
        <h2 className="title  text-black" data-aos="fade-down ">
          {Hireme.title}
        </h2>
        <h4 className="subtitle text-black" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <div
            data-aos="fade-left"
            className="max-w-sm p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem] position-relative"
            style={{ animation: "slideFromRight 1.5s forwards" }} 
          >
            <p className="leading-7  text-black">{Hireme.para}</p>
            <br />
            <button className="btn bg-black text-white">
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
