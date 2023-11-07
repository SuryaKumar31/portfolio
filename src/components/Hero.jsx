import React from "react";
import resume from "../resume/Resume-SURYAKUMAR.pdf";
import pic from "../assets/suryaPic.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Hero = () => {
  // typewriter
  const [text] = useTypewriter({
    words: ["HTML", "CSS", "JavaScript", "ReactJS", "TailwindCSS"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 90,
  });
  return (
    <div className="container" id="home">
      <section className="hero mt-5 md:mt-20">
        {/* heroHeading */}
        <h1 className="hero__title text-white md:text-white font-medium md:font-semibold text-2xl text-center md:text-left">
          Hi, I'm{" "}
          <span className="font-bold text-2xl md:text-3xl">SURYAKUMAR</span>
          . <br /> Passionate frontend developer with a love for crafting
          user-friendly and visually captivating web experiences🚀. <br />{" "}
          Proficient in{" "}
          <span className="font-bold  p-1 bg-yellow-400 text-slate-900  rounded">
            {text}
          </span>
          <span style={{ color: "black" }}>
            <Cursor />
          </span>{" "}
          , I bring ideas to life through elegant design and seamless
          functionality.
        </h1>
        {/* heroImage details */}
        <div className="hero__paragraph ">
          <p className="text-yellow-50 font-light hidden md:block">
            Enter a realm where code and creativity merge, giving life to
            captivating digital narratives. I'm dedicated to crafting web
            elegance. Explore my portfolio and join this journey of digital
            magic.
          </p>
          <p className="text-yellow-50 font-light flex items-center justify-center mb-3 md:mb-0 mt-0 md:mt-2">
            <a href={resume} download>
              <span className="font-semibold text-white card2 cursor-pointer flex items-center justify-center">
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </span>
            </a>
          </p>
        </div>
        {/* heroPic */}
        <div className="card picture">
          <img src={pic} alt="Suryapic" loading="lazy" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
