import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

const Product = () => {
  return (
    <div className="about">
      <header>
        <Navbar />
        <div className="center-heading text-[#0A2640] bg-white z-10 w-1200">
          <p className="flex justify-center items-center my-10 mx-auto text-1xl whitespace-normal text-center font-normal">
            Blog
          </p>
          <p className="flex justify-center items-center text-6xl leading-[72px] whitespace-normal text-center font-normal">
            Thoughts and words
          </p>
          <div className="lg:container mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-center mt-32">
              <div className="lg:w-1/2 lg:px-20">
                <Image
                  src="/images/rectangle-house.png"
                  alt="Image"
                  width={550}
                  height={386}
                  className="md:mb-10 sm:mb-10 xs:mb-10"
                />
              </div>
              <div className="lg:w-1/2 lg:px-4">
                <h2 className="text-lg font-bold ">
                  Category
                  <span className="text-[#777777] text-lg font-light">
                    November 22, 2021
                  </span>
                </h2>
                <p className="lg:text-5xl sub-title font-normal md:text-5xl sm:text-4xl xs:text-4xl text-left mt-10">
                  Pitch termsheet backing validation focus release.
                </p>
                <span className="text-md font-normal text-black flex mt-10">
                  <Image
                    src="/images/round-girl.png"
                    alt="Image"
                    width={32}
                    height={32}
                    className="mr-5"
                  />
                  Chandler Bing
                </span>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <hr className="bg-primary mx-auto mt-20 h-1" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Product;
