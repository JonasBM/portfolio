import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "#/public/assets/contact.jpg";
import VirtualPage from "../VirtualPage";
import LinkedInAnchor from "../Shared/LinkedInAnchor";
import ResumeAnchor from "../Shared/ResumeAnchor";
import BlogAnchor from "../Shared/BlogAnchor";
import GitHubAnchor from "../Shared/GitHubAnchor";

const Contact = () => {
  return (
    <VirtualPage sectionId="contact" title="Contact" description="Get In Touch">
      <div className="max-w-[1240px] m-auto px-2 w-full">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image className="rounded-xl hover:scale-105 ease-in duration-300" src={ContactImg} alt="/" />
              </div>
              <div>
                <h2 className="py-2">Jonas Burigo</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <LinkedInAnchor />
                  <GitHubAnchor />
                  {/* <BlogAnchor /> */}
                  <ResumeAnchor />
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/f4dfee74-cfb3-4c12-a4dc-8dc81b4441bd"
                method="POST"
                encType="multipart/form-data"
              >
                <input type="hidden" name="_gotcha" className="hidden" />
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone Number</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone" />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject" />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea className="border-2 rounded-lg p-3 border-gray-300" rows={10} name="message"></textarea>
                </div>
                <button className="button-styled w-full p-4 text-gray-100 mt-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link legacyBehavior href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </VirtualPage>
  );
};

export default Contact;
