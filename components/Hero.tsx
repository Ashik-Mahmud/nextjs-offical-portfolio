import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section>
      <div className="container">
        {/* header text */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold font-amiri text-gray-700">
            <span className="text-5xl">Ashik Mahmud</span> <br />
            <span className="text-gray-600">
              Web & MERN Stack Developer <br />
              based in Bangladesh
            </span>
          </h1>
        </div>

        {/* main hero content */}
        <div className="flex items-center justify-between gap-4 mt-10">
          {/* left side */}
          <div className="w-1/5 flex flex-col items-start gap-6">
            {/* 1st card */}
            <div className="card">
              <span className="uppercase text-gray-400 font-bold">
                Biography
              </span>
              <h4 className="mt-4 text-xl font-semibold">
                Doing work for money and love. Being consider to take otherwise
                and more expensive way
              </h4>
            </div>
            {/* 2st card */}
            <div className="card">
              <span className="uppercase text-gray-400 font-bold">Contact</span>
              <h4 className="mt-4 text-xl font-semibold">
                Dhaka, Bangladesh <br />
                ashikmahmud187@gmail.com <br />
                +8801610849175
              </h4>
            </div>
            {/* 3rd card */}
            <div className="card">
              <span className="uppercase text-gray-400 font-bold">
                Services
              </span>
              <h4 className="mt-4 text-xl font-semibold">
                Frontend Development, Backend Development, Full Stack
                Development, Web App Developer
              </h4>
            </div>
          </div>
          {/* middle side */}
          <div className="middle-side border-[1rem] shadow rounded-[15rem] w-96 h-[35rem] overflow-hidden outline outline-1 outline-offset-1 border-white outline-gray-400">
            <Image
              src="/assets/images/me.jpg"
              alt="me"
              width={600}
              height={700}
              className="h-full object-cover object-[31%] scale-110"
            />
          </div>
          {/* right side */}
          <div className="flex flex-col items-start gap-6 w-1/5">
            {/* 1st card */}
            <div className="card text-right">
              <span className="uppercase text-gray-400 font-bold text-rig">
                Years of <br /> Experiences
              </span>
              <h4 className="mt-4 text-4xl font-semibold">2 +</h4>
            </div>
            {/* 2st card */}
            <div className="card text-right">
              <span className="uppercase text-gray-400 font-bold">
                Satisfied Client
              </span>
              <h4 className="mt-4 text-4xl font-semibold">100%</h4>
            </div>
            {/* 3rd card */}
            <div className="card text-right">
              <span className="uppercase text-gray-400 font-bold">
                Client in <br /> Worldwide
              </span>
              <h4 className="mt-4 text-4xl font-semibold">80+</h4>
            </div>
            {/* 4th card */}
            <div className="card text-right">
              <span className="uppercase text-gray-400 font-bold">
                Project <br /> Done
              </span>
              <h4 className="mt-4 text-4xl font-semibold">605</h4>
            </div>
          </div>
        </div>
        {/* end of */}
      </div>
    </section>
  );
};

export default Hero;
