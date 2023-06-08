import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="about">
      {/* Navigation */}
      <header className="home-head bg-[#65e4a3] h-473">
        <nav className="navbar bg-transparent text-black p-4 m-53 mr-106 mb-77 ml-107 w-1187">
          <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-2xl font-bold">
              <Image
                src="/images/logo.png"
                alt="Logo"
                className="logo fill-[#84d117]"
                width={160.46}
                height={42}
              />
            </a>
            <ul className="hidden sm:flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
              <li className="inline-block">
                <a
                  href="#"
                  className="text-primary no-underline pr-2 sm:pr-4 md:pr-6 lg:pr-8"
                >
                  Product
                </a>
              </li>
              <li className="inline-block">
                <a
                  href="#"
                  className="text-primary no-underline pr-2 sm:pr-4 md:pr-6 lg:pr-8"
                >
                  Services
                </a>
              </li>
              <li className="inline-block">
                <a
                  href="#"
                  className="text-primary no-underline pr-2 sm:pr-4 md:pr-6 lg:pr-8"
                >
                  About
                </a>
              </li>
              <li className="inline-block">
                <a
                  href="#"
                  className="text-primary no-underline pr-2 sm:pr-4 md:pr-6 lg:pr-8 border-2 border-gray-900 rounded-full px-4 sm:px-6 md:px-8 py-2"
                >
                  Log In
                </a>
              </li>
            </ul>
            <button className="sm:hidden text-primary border-2 border-gray-900 rounded-full px-4 py-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        <div className="container mx-auto">
          <section className="bg-[#65e4a3] text-black py-16 mt-77">
            <div className="container mx-auto">
              <section className="about-intro flex flex-col md:flex-row">
                <div className="about-intro-heading md:mr-16 ml-84">
                  <p className="about-heading text-xl leading-loose">About</p>
                  <p className="about-text text-5xl font-normal leading-72 h-144 w-600 my-10">
                    We love to make great things, things that matter.
                  </p>
                </div>

                <div className="about-intro-paragraph ml-145">
                  <p className="about-text-2 text-base line-height-28 lg:mt-32 md:mt-32 w-455 h-64 font-normal">
                    Funding handshake buyer business-to-business metrics iPad
                    partnership. First mover advantage innovator success
                    deployment non-disclosure.
                  </p>
                </div>
              </section>
            </div>
          </section>
        </div>
      </header>
      {/* Content Section */}

      <section className="py-16 my-16">
        <div className="container mx-auto">
          <div className="center-heading text-[#0A2640] bg-white lg:h-96 z-10 w-1200">
            <p className="flex justify-center items-center my-10 mx-auto text-3xl whitespace-normal text-center font-norma">
              Our Members
            </p>
            <p className="flex justify-center items-center text-5xl leading-[72px] whitespace-normal text-center font-normal">
              Handshake infographic mass market <br /> crowdfunding iteration.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="column">
                <p className="lg:text-8xl md:text-7xl sm:text-6xl xs:text-5xl text-center">
                  120m
                </p>
                <p className="text-center lg:text-2xl">cool feature title</p>
              </div>
              <div className="column">
                <p className="lg:text-8xl md:text-7xl sm:text-6xl xs:text-5xl text-center">
                  10.000
                </p>
                <p className="text-center lg:text-2xl">cool feature title</p>
              </div>
              <div className="column">
                <p className="lg:text-8xl md:text-7xl sm:text-6xl xs:text-5xl text-center">
                  240
                </p>
                <p className="text-center lg:text-2xl">cool feature title</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-story  bg-[#0A2640]  text-white">
        <div className="our-story-text header-top pt-32 pb-32 px-8 md:px-0 max-w-screen-md mx-auto">
          <p className="our-story-paragraph text-xl leading-loose font-normal">
            Our story
          </p>
          <p className="our-story-text-1 text-5xl font-normal my-12">
            Handshake infographic mass market crowdfunding iteration.
          </p>
          <p className="our-story-text-2 text-xl leading-8">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
            Sales user experience branding growth hacking holy grail
            monetization conversion prototype stock network effects. Learning
            curve network effects return on investment bootstrapping
            business-to-consumer.
          </p>
        </div>
      </section>
      <section className="our-story  bg-white  text-[#0A2640]">
        <div className="our-story-text header-top pt-32 pb-32 px-8 md:px-0 max-w-screen-md mx-auto">
          <p className="our-story-paragraph text-xl leading-loose font-normal">
            Our team
          </p>
          <p className="our-story-text-1 text-5xl font-normal my-12">
            The people behind the work
          </p>
          <p className="our-story-text-2 text-xl leading-8 text-[#777777]">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-20">
            <div className="column">
              <Image
                src="/images/rectangle.png"
                alt="Logo"
                className="logo fill-[#84d117]"
                width={160.46}
                height={42}
              />
              <p className="text-1xl font-semibold ">Michael Scott</p>
              <p className=" text-[#777777] text-sm">General Manager</p>
            </div>
            <div className="column">
              <Image
                src="/images/rectangle.png"
                alt="Logo"
                className="logo fill-[#84d117]"
                width={160.46}
                height={42}
              />
              <p className="text-1xl font-semibold ">Michael Scott</p>
              <p className=" text-[#777777] text-sm">General Manager</p>
            </div>
            <div className="column">
              <Image
                src="/images/rectangle.png"
                alt="Logo"
                className="logo fill-[#84d117] "
                width={160.46}
                height={42}
              />
              <p className="text-1xl font-semibold ">Michael Scott</p>
              <p className=" text-[#777777] text-sm">General Manager</p>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-10">
            <div className="column  mt-20">
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src="/images/rectangle-small.png"
                    alt="Example Image"
                    className="logo fill-[#84d117]"
                    width={120}
                    height={120}
                  />
                </div>
                <div>
                  <p className="text-xl">Pam Beetsley </p>
                  <p className="text-sm text-[#777777]">General Manager</p>
                </div>
              </div>
            </div>
            <div className="column  mt-20">
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src="/images/rectangle-small.png"
                    alt="Example Image"
                    className="logo fill-[#84d117]"
                    width={120}
                    height={120}
                  />
                </div>
                <div>
                  <p className="text-xl">Pam Beetsley </p>
                  <p className="text-sm text-[#777777]">General Manager</p>
                </div>
              </div>
            </div>
            <div className="column  mt-10">
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src="/images/rectangle-small.png"
                    alt="Example Image"
                    className="logo fill-[#84d117]"
                    width={120}
                    height={120}
                  />
                </div>
                <div>
                  <p className="text-xl">Pam Beetsley </p>
                  <p className="text-sm text-[#777777]">General Manager</p>
                </div>
              </div>
            </div>
            <div className="column  mt-10">
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src="/images/rectangle-small.png"
                    alt="Example Image"
                    className="logo fill-[#84d117]"
                    width={120}
                    height={120}
                  />
                </div>
                <div>
                  <p className="text-xl">Pam Beetsley </p>
                  <p className="text-sm text-[#777777]">General Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-story  bg-[#0A2640]  text-white">
        <div className="our-story-text header-top pt-32 pb-32 px-8 md:px-0 max-w-screen-md mx-auto">
          <p className="flex justify-center items-center my-10 mx-auto text-1xl whitespace-normal text-center font-norma">
            Our Blog
          </p>
          <p className="flex justify-center items-center my-10 mx-auto text-4xl whitespace-normal text-center font-norma">
            Value proposition accelerator product management venture
          </p>
          <hr className="w-1099 bg-white h-0.1"></hr>
          <div className="grid grid-cols-2 grid-rows-3 gap-4 my-20">
            <div className="col-span-1">
              <p className="text-3xl">
                We are <span className="text-[#69E6A6]">commited.</span>
              </p>
            </div>
            <div className="col-span-1">
              <p className="text-[#F1F1F1]">
                Conversion angel investor entrepreneur first mover advantage.
                Handshake infographic mass market crowdfunding iteration.{" "}
              </p>
            </div>
            <div className="col-span-1">
              <p className="text-3xl">
                We are <span className="text-[#69E6A6]">responsible.</span>
              </p>
            </div>
            <div className="col-span-1">
              <p className="text-[#F1F1F1]">
                Mass market iPhone buzz conversion analytics stock iteration
                responsive web design user experience business plan handshake.
                Return on investment seed round MVP backing supply chain.{" "}
              </p>
            </div>
            <div className="col-span-1">
              <p className="text-3xl">
                We aim for <span className="text-[#69E6A6]">progress.</span>
              </p>
            </div>
            <div className="col-span-1">
              <p className="text-[#F1F1F1]">
                Bootstrapping rockstar first mover advantage business model
                canvas alpha deployment launch party beta facebook metrics
                gamification growth hacking customer focus.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent text-black container mx-auto my-32">
        <section className="footer-top bg-[#0A2640] blue-bg lg:py-32 md:py-32 sm:py-10 xs:py-6 mx-auto lg:rounded-xl rounded-tr-xl md:rounded-xl lg:w-[1024px] relative top-0 bottom-0 left-0 right-0 h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0 sm:hidden xs:hidden md:block lg:block "
            width="734"
            height="239"
            viewBox="0 0 734 239"
            fill="none"
          >
            <circle cx="646.5" cy="-407.5" r="646.5" fill="#1C3D5B" />
          </svg>
          <div className="input-section mx-auto sm:px-8 xs:px-8 relative top-0 bottom-0 left-0 right-0">
            <h5 className="text-white lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl sm:text-center xs:text-center manrope leading-[72px]">
              An enterprise template to ramp up your company website
            </h5>
            <div className="lg:mt-12 md:mt-12 sm:mt-8 xs:mt-8 flex justify-center align-middle xs:flex-row xs:flex-wrap xs:justify-center">
              <input
                className="rounded-full h-10 w-370 px-4 text-sm outline-none text-black"
                type="text"
                placeholder="Your email address"
              />
              <button className="rounded-full h-10 w-210 ml-4 px-6 text-sm bg-[#69E6A6] text-[#0A2640] hover:bg-gray-200 transition-colors duration-300">
                Start now
              </button>
            </div>
          </div>
        </section>
        <div className="container mx-auto py-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            <div className="footer-column">
              <Image
                src="/images/logo.png"
                alt="Logo"
                className="logo fill-[#84d117]  mb-10"
                width={160.46}
                height={42}
              />
              <ul className="space-y-10 mb-120 ">
                <li>
                  <a
                    href="#"
                    className="text-[#777777] hover:text-gray-400  mb-10"
                  >
                    Social media validation business model canvas graphical user
                    interface launch party creative facebook iPad twitter.
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#777777] hover:text-gray-400">
                    <p className="text-gray-400">&copy; All rights reserved.</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <ul className="space-y-10 mb-120 ">
                <h3 className="text-xl font-bold mb-4  ">Landing</h3>
                <li>
                  <a href="#" className="text-[#777777] hover:text-gray-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#777777] hover:text-gray-400">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#777777] hover:text-gray-400">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <ul className="space-y-10 mb-120 ">
                <h3 className="text-xl font-bold mb-4 ">Company</h3>
                <li>
                  <a href="#" className="text-[#777777] hover:text-gray-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#777777] hover:text-gray-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#777777] hover:text-gray-400">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <ul className="space-y-10 mb-120 ">
                <h3 className="text-xl font-bold mb-4 ">Resources</h3>
                <li>
                  <a href="#" className="text-[#777777] hover:text-gray-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#777777] hover:text-gray-400">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#777777] hover:text-gray-400">
                    Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
