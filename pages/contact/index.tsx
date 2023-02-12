import SectionTitle from "@/components/SectionTitle";
import Head from "next/head";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Contact - Ashik Portfolio</title>
      </Head>
      <div className="container">
        <SectionTitle title="Ping Me for Works/Query" />
        <div className="contact-content grid grid-cols-2 gap-10 mt-5 font-amiri">
          <div className="contact-form">
            <form
              action=""
              className="flex flex-col  gap-2 p-10 pb-2 bg-[#ffffff69] backdrop-blur-sm"
            >
              <div className="form-control">
                <label htmlFor="name" className="font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded
                  border border-gray-300 outline-none focus:border-green-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-control">
                <label htmlFor="email" className="font-medium">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="w-full p-3 rounded
                  border border-gray-300 outline-none focus:border-green-500"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-control">
                <label htmlFor="phone" className="font-medium">
                  Phone
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded
                  border border-gray-300 outline-none focus:border-green-500"
                  id="phone"
                  placeholder="Your Phone"
                />
              </div>
              <div className="form-control">
                <label htmlFor="message" className="font-medium">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="w-full p-3 rounded
                  border border-gray-300 outline-none focus:border-green-500"
                  cols={30}
                  rows={4}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button className="btn p-3 px-6 bg-green-600 text-white cursor-pointer self-start">
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-info flex flex-col items-start gap-4">
            <h3 className="text-xl font-medium mb-3">Contact Info</h3>
            <div className="info-item">
              <span className="text-green-500">Email</span>
              <p>
                <a href="mailto:ashikmamud187@gmail.com">
                  ashikmahmud187@gmail.com
                </a>
              </p>
            </div>
            <div className="info-item">
              <span className="text-green-500">Phone</span>
              <p>
                <a href="tel:+880 1711 000 000">+880 1711 000 000</a>
              </p>
            </div>

            <div className="info-item">
              <span className="text-green-500">Address</span>
              <p>
                <a href="https://goo.gl/maps/6Z8Z1Z1Z1Z1Z1Z1Z9">
                  Dhaka, Bangladesh
                </a>
              </p>
            </div>
            <div className="info-item">
              <span className="text-green-500">Skype</span>
              <p>
                <a href="skype:live:.cid.5f9f9f9f9f9f9f9f">
                  live:.cid.5f9f9f9f9f9f9f9f
                </a>
              </p>
            </div>

            {/* whatsapp */}
            <div className="info-item">
              <span className="text-green-500">Whatsapp</span>
              <p>
                <a href="https://wa.me/8801711000000">+880 1711 000 000</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
