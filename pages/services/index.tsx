import SectionTitle from "@/components/SectionTitle";
import Head from "next/head";
import React from "react";
import {
  BsBrushFill,
  BsCode,
  BsCodeSquare,
  BsLaptop,
  BsPhoneLandscape,
  BsPieChart,
} from "react-icons/bs";

type Props = {};

const Services = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Offers - Ashik Portfolio</title>
      </Head>
      <div className="container">
        <SectionTitle title="What I Offers?" />

        <div className="services-content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
          <div className="service-item bg-[#ffffff4e] backdrop-blur-sm border p-4 rounded hover:shadow transition-shadow">
            <div className="service-icon">
              <BsLaptop size={30} />
            </div>
            <div className="service-title text-medium my-2 text-lg">
              <h3>Web Development</h3>
            </div>
            <div className="service-desc text-gray-500 text-sm">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae. This is what I do. Lorem ipsum dolor sit amet
                <span className="cursor-pointer text-green-600">
                  {""} see more
                </span>
              </p>
            </div>
          </div>
          <div className="service-item bg-[#ffffff4e] backdrop-blur-sm border p-4 rounded hover:shadow transition-shadow">
            <div className="service-icon">
              <BsCodeSquare size={30} />
            </div>
            <div className="service-title text-medium text-lg my-2">
              <h3>Mobile Development</h3>
            </div>
            <div className="service-desc text-gray-500 text-sm">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae. This is what I do. Lorem ipsum dolor sit amet
                <span className="cursor-pointer text-green-600">
                  {""} see more
                </span>
              </p>
            </div>
          </div>
          <div className="service-item bg-[#ffffff4e] backdrop-blur-sm border p-4 rounded hover:shadow transition-shadow">
            <div className="service-icon">
              <BsBrushFill size={30} />
            </div>
            <div className="service-title text-medium text-lg my-2">
              <h3>UI/UX Design</h3>
            </div>
            <div className="service-desc text-gray-500 text-sm">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae. This is what I do. Lorem ipsum dolor sit amet
                <span className="cursor-pointer text-green-600">
                  {""} see more
                </span>
              </p>
            </div>
          </div>
          <div className="service-item bg-[#ffffff4e] backdrop-blur-sm border p-4 rounded hover:shadow transition-shadow">
            <div className="service-icon">
              <BsPieChart size={30} />
            </div>
            <div className="service-title text-medium text-lg my-2">
              <h3>Digital Marketing</h3>
            </div>
            <div className="service-desc text-gray-500 text-sm">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae. This is what I do. Lorem ipsum dolor sit amet
                <span className="cursor-pointer text-green-600">
                  {""} see more
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
