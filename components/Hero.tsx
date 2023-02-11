import Image from "next/image";
import React from "react";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section>
      <div className="container">
        {/* header text */}
        <div className="text-center">
          <h1 className="text-4xl font-semibold font-amiri text-gray-700">
            Ashik Mahmud <br /> Web & MERN Stack Developer <br />
            based in Bangladesh
          </h1>
          <p className="text-gray-500 text-lg">a full-stack web developer</p>
        </div>

        {/* main hero content */}
        <div className="flex items-center justify-between gap-4 mt-10">
          {/* left side */}
          <div className="">
            <div className="card">1st card</div>
          </div>
          {/* middle side */}
          <div className="middle-side border-[1rem] shadow rounded-[15rem] w-80 h-[30rem] overflow-hidden outline outline-1 outline-offset-1 border-white outline-gray-400">
            <Image
              src="/assets/images/me.jpg"
              alt="me"
              width={600}
              height={700}
              className="h-full object-cover object-[31%] scale-110"
            />
          </div>
          {/* right side */}
          <div className="">
            <div className="card">2nd card</div>
          </div>
        </div>
        {/* end of */}
      </div>
    </section>
  );
};

export default Hero;
