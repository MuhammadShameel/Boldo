import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white lg:pt-32 md:pt-20 sm:pt-14 xs:pt-10">
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
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <ul className="grey-color font-medium lg:pr-20">
                <li className="mb-8">
                  <a href="#" className="flex align-middle">
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      className="logo mr-2 mt-1"
                      width={150}
                      height={150}
                    />{" "}
                  </a>
                </li>
                <li className="mb-14 openSans">
                  <a href="#">
                    Social media validation business model canvas graphical user
                    interface launch party creative facebook iPad twitter.
                  </a>
                </li>
                <li className="mb-4 openSans">
                  <a href="#" className="hover:underline">
                    All rights reserved.
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-extrabold text-1xl uppercase font-color openSans mb-12">
                Landings
              </h2>
              <ul className="grey-color font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Products
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-extrabold text-1xl uppercase font-color openSans mb-12">
                Company
              </h2>
              <ul className="grey-color font-medium openSans">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                    <span className=" hiring-badge font-bold ml-2 w-180 bg-[#65e4a3] rounded-full px-2 py-2">
                      Hiring!
                    </span>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-extrabold text-1xl uppercase font-color openSans mb-12">
                Resources
              </h2>
              <ul className="grey-color font-medium openSans">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Products
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
