import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white lg:pt-32 md:pt-20 sm:pt-14 mx-auto xs:pt-10">
      <section className="footer-top bg-[#0A2640] blue-bg lg:py-32 md:py-32 sm:py-10 xs:py-6 mx-auto lg:rounded-md lg:w-[1024px] relative top-0 bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0   "
          width="734"
          height="239"
          viewBox="0 0 734 239"
          fill="none"
        >
          <circle cx="646.5" cy="-407.5" r="646.5" fill="#1C3D5B" />
        </svg>
        <div className="input-section mx-auto sm:px-8 xs:px-8 relative top-0 bottom-0 left-0 right-0 ">
          <h5 className="text-white lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl sm:text-center xs:text-center manrope">
            An enterprise template to ramp up your company website
          </h5>
          <div className="lg:mt-12 md:mt-12 sm:mt-8 xs:mt-8 flex justify-center align-middle xs:flex-row xs:flex-wrap xs:justify-center">
            <input
              className="rounded-full h-10 w-full sm:max-w-xs px-4 text-sm outline-none text-black sm:mb-2 xs:mb-2"
              type="text"
              placeholder="Your email address"
            />
            <button className="rounded-full h-10 w-52 sm:w-32 ml-4 px-6 text-sm bg-[#69E6A6] text-[#0A2640] hover:bg-gray-200 transition-colors duration-300">
              <span className="bg-transparent font-bold">Start now</span>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white lg:mt-20 md:mt-16 sm:mt-10 xs:mt-8">
        <div className="container mx-auto">
          <div className="max-w-screen-xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div>
                <ul className="grey-color font-medium text-[#777777]">
                  <li className="mb-8">
                    <a href="#" className="flex align-middle">
                      <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="logo mr-2 mt-1"
                        width="150"
                        height="150"
                      />
                    </a>
                  </li>
                  <li className="mb-14 openSans text-neutral-500 text-[16px] font-normal leading-7">
                    <a href="#">
                      Social media validation business model canvas graphical
                      user interface launch party creative facebook iPad
                      twitter.
                    </a>
                  </li>
                  <li className="mb-4 openSans">
                    <a
                      href="#"
                      className="hover:underline text-neutral-500 text-[20px] font-normal leading-loose"
                    >
                      All rights reserved.
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-extrabold text-1xl uppercase font-color openSans mb-12 ">
                  Landings
                </h2>
                <ul className="text-[#777777] font-medium">
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline text-neutral-500 text-[20px] font-normal leading-loose"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline text-neutral-500 text-[20px] font-normal leading-loose"
                    >
                      Products
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline text-neutral-500 text-[20px] font-normal leading-loose"
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-extrabold text-1xl uppercase font-color openSans mb-12">
                  Company
                </h2>
                <ul className="grey-color font-medium openSans text-[#777777]">
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline text-neutral-500 text-[20px] font-normal leading-loose"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline text-neutral-500 text-[20px] font-normal leading-loose"
                    >
                      Careers
                      <span className="hiring-badge font-bold ml-2 w-180 bg-[#65e4a3] rounded-full px-2 py-2">
                        Hiring!
                      </span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline text-neutral-500 text-[20px] font-normal leading-loose"
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-extrabold text-1xl uppercase font-color openSans mb-12">
                  Resources
                </h2>
                <ul className="grey-color font-medium openSans text-[#777777]">
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline text-neutral-500 text-[20px] font-normal leading-loose"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline text-neutral-500 text-[20px] font-normal leading-loose"
                    >
                      Products
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline text-neutral-500 text-[20px] font-normal leading-loose"
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
