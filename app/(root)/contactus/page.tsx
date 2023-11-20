"use client";

import { RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

const ContactUs = () => {
  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse 
    flex gap-10 overflow-hidden mt-[104px]"
    >
      <div
        className="flex-[0.75] bg-transparent p-8 rounded-2xl "
        style={{
          backdropFilter: "blur(3px)",
          backgroundColor: "rgba(128, 128, 128, 0.09)",
        }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Get in touch
        </p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact.
        </h3>

        <form
          // ref={formRef}
          onSubmit={() => {}}
          className="mt-12 flex flex-col gap-8 "
        >
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4 ">Your name</span>
            <input
              type="text"
              name="name"
              // value={form.name}
              onChange={() => {}}
              placeholder="What's your name?"
              className="py-4  px-6 
            placeholder:text-secondary text-white 
            rounded-lg outlined-none border-none font-medium"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(128, 128, 128, 0.2)",
              }}
            />
          </label>

          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4 ">Your Email</span>
            <input
              type="email"
              name="email"
              // value={form.email}
              onChange={() => {}}
              placeholder="What's your email?"
              className="py-4  px-6 
            placeholder:text-secondary text-white 
            rounded-lg outlined-none border-none font-medium"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(128, 128, 128, 0.2)",
              }}
            />
          </label>

          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4 ">Your Message</span>
            <textarea
              rows={7}
              name="message"
              // value={form.message}
              onChange={() => {}}
              placeholder="What do you want to say?"
              className="py-4  px-6 
            placeholder:text-secondary text-white 
            rounded-lg outlined-none border-none font-medium"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(128, 128, 128, 0.2)",
              }}
            />
          </label>

          <div className=" flex justify-between ">
            <button
              type="submit"
              className="py-3 px-8 outline-none w-fit 
          text-white font-bold shadow-md shadow-primary rounded-xl"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(128, 128, 128, 0.2)",
              }}
            >
              {/* {loading ? "Sending..." : "Send"} */}
            </button>

            <nav className="flex justify-evenly flex-wrap px-2 ">
              <a href="https://github.com/DereckAn">
                {/* <Image src={} alt="logo2" className="w-[50px] mr-2"></Image> */}
                <RiInstagramLine />
              </a>
              <a href="https://www.linkedin.com/in/dereckan/">
                {/* <Image src={} alt="logo2" className="w-[50px]"></Image> */}
                <RiLinkedinLine />
              </a>
            </nav>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
