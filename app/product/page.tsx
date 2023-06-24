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
                <div className="p-0 flex-col justify-start items-start gap-[20px] flex">
                  <div className="p-0 flex-col justify-start items-start gap-[12px] flex">
                    <div className="p-0 justify-start items-start gap-[12px] inline-flex">
                      <div className="text-sky-950 text-[16px] font-bold leading-7">
                        Category
                      </div>
                      <div className="text-neutral-500 text-[16px] font-normal leading-7">
                        November 22, 2021
                      </div>
                    </div>
                  </div>
                  <div className="p-0 justify-start items-start gap-[12px] inline-flex">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/images/round-girl.png"
                      alt="Avatar"
                    />
                    <div className="w-[300px] h-8 text-black text-[16px] font-normal leading-7">
                      Chandler Bing
                    </div>
                  </div>
                </div>
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
      <div className="container mx-auto">
        <p className=" w-[442px]  text-black text-[48px] font-normal leading-10 mt-20">
          Latest news
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 container mx-auto mt-12">
        {/* Card 1 */}
        <div className="w-[300px] h-[424px] relative">
          <div className="w-[300px] h-[424px] p-0 left-0 top-0 absolute flex-col justify-start items-start gap-6 inline-flex">
            <Image
              className="self-stretch h-[209px] rounded-3xl"
              src="/images/rectangle-1270-1.png"
              alt="Card Image"
              width={300}
              height={209}
            />
            <div className="p-0 flex-col justify-start items-start gap-[20px] flex">
              <div className="p-0 flex-col justify-start items-start gap-[12px] flex">
                <div className="p-0 justify-start items-start gap-[12px] inline-flex">
                  <div className="text-sky-950 text-[16px] font-bold leading-7">
                    Category
                  </div>
                  <div className="text-neutral-500 text-[16px] font-normal leading-7">
                    November 22, 2021
                  </div>
                </div>
                <div className="w-[300px] h-[99px] text-black text-[20px] font-normal leading-loose">
                  Pitch termsheet backing validation focus release.
                </div>
              </div>
              <div className="p-0 justify-start items-start gap-[12px] inline-flex">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/images/round-girl.png"
                  alt="Avatar"
                />
                <div className="w-[300px] h-8 text-black text-[16px] font-normal leading-7">
                  Chandler Bing
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat the above code for the remaining five cards */}
        {/* Card 2 */}{" "}
        <div className="w-[300px] h-[424px] relative">
          <div className="w-[300px] h-[424px] p-0 left-0 top-0 absolute flex-col justify-start items-start gap-6 inline-flex">
            <Image
              className="self-stretch h-[209px] rounded-3xl"
              src="/images/rectangle-1270-2.png"
              alt="Card Image"
              width={300}
              height={209}
            />
            <div className="p-0 flex-col justify-start items-start gap-[20px] flex">
              <div className="p-0 flex-col justify-start items-start gap-[12px] flex">
                <div className="p-0 justify-start items-start gap-[12px] inline-flex">
                  <div className="text-sky-950 text-[16px] font-bold leading-7">
                    Category
                  </div>
                  <div className="text-neutral-500 text-[16px] font-normal leading-7">
                    November 22, 2021
                  </div>
                </div>
                <div className="w-[300px] h-[99px] text-black text-[20px] font-normal leading-loose">
                  Pitch termsheet backing validation focus release.
                </div>
              </div>
              <div className="p-0 justify-start items-start gap-[12px] inline-flex">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/images/round-girl.png"
                  alt="Avatar"
                />
                <div className="w-[300px] h-8 text-black text-[16px] font-normal leading-7">
                  Chandler Bing
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}{" "}
        <div className="w-[300px] h-[424px] relative">
          <div className="w-[300px] h-[424px] p-0 left-0 top-0 absolute flex-col justify-start items-start gap-6 inline-flex">
            <Image
              className="self-stretch h-[209px] rounded-3xl"
              src="/images/rectangle-1270-3.png"
              alt="Card Image"
              width={300}
              height={209}
            />
            <div className="p-0 flex-col justify-start items-start gap-[20px] flex">
              <div className="p-0 flex-col justify-start items-start gap-[12px] flex">
                <div className="p-0 justify-start items-start gap-[12px] inline-flex">
                  <div className="text-sky-950 text-[16px] font-bold leading-7">
                    Category
                  </div>
                  <div className="text-neutral-500 text-[16px] font-normal leading-7">
                    November 22, 2021
                  </div>
                </div>
                <div className="w-[300px] h-[99px] text-black text-[20px] font-normal leading-loose">
                  Pitch termsheet backing validation focus release.
                </div>
              </div>
              <div className="p-0 justify-start items-start gap-[12px] inline-flex">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/images/round-girl.png"
                  alt="Avatar"
                />
                <div className="w-[300px] h-8 text-black text-[16px] font-normal leading-7">
                  Chandler Bing
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 4 */}{" "}
        <div className="w-[300px] h-[424px] relative">
          <div className="w-[300px] h-[424px] p-0 left-0 top-0 absolute flex-col justify-start items-start gap-6 inline-flex">
            <Image
              className="self-stretch h-[209px] rounded-3xl"
              src="/images/rectangle-1270-4.png"
              alt="Card Image"
              width={300}
              height={209}
            />
            <div className="p-0 flex-col justify-start items-start gap-[20px] flex">
              <div className="p-0 flex-col justify-start items-start gap-[12px] flex">
                <div className="p-0 justify-start items-start gap-[12px] inline-flex">
                  <div className="text-sky-950 text-[16px] font-bold leading-7">
                    Category
                  </div>
                  <div className="text-neutral-500 text-[16px] font-normal leading-7">
                    November 22, 2021
                  </div>
                </div>
                <div className="w-[300px] h-[99px] text-black text-[20px] font-normal leading-loose">
                  Pitch termsheet backing validation focus release.
                </div>
              </div>
              <div className="p-0 justify-start items-start gap-[12px] inline-flex">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/images/round-girl.png"
                  alt="Avatar"
                />
                <div className="w-[300px] h-8 text-black text-[16px] font-normal leading-7">
                  Chandler Bing
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 5 */}{" "}
        <div className="w-[300px] h-[424px] relative">
          <div className="w-[300px] h-[424px] p-0 left-0 top-0 absolute flex-col justify-start items-start gap-6 inline-flex">
            <Image
              className="self-stretch h-[209px] rounded-3xl"
              src="/images/rectangle-1270-5.png"
              alt="Card Image"
              width={300}
              height={209}
            />
            <div className="p-0 flex-col justify-start items-start gap-[20px] flex">
              <div className="p-0 flex-col justify-start items-start gap-[12px] flex">
                <div className="p-0 justify-start items-start gap-[12px] inline-flex">
                  <div className="text-sky-950 text-[16px] font-bold leading-7">
                    Category
                  </div>
                  <div className="text-neutral-500 text-[16px] font-normal leading-7">
                    November 22, 2021
                  </div>
                </div>
                <div className="w-[300px] h-[99px] text-black text-[20px] font-normal leading-loose">
                  Pitch termsheet backing validation focus release.
                </div>
              </div>
              <div className="p-0 justify-start items-start gap-[12px] inline-flex">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/images/round-girl.png"
                  alt="Avatar"
                />
                <div className="w-[300px] h-8 text-black text-[16px] font-normal leading-7">
                  Chandler Bing
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 6 */}{" "}
        <div className="w-[300px] h-[424px] relative">
          <div className="w-[300px] h-[424px] p-0 left-0 top-0 absolute flex-col justify-start items-start gap-6 inline-flex">
            <Image
              className="self-stretch h-[209px] rounded-3xl"
              src="/images/rectangle-1270-6.png"
              alt="Card Image"
              width={300}
              height={209}
            />
            <div className="p-0 flex-col justify-start items-start gap-[20px] flex">
              <div className="p-0 flex-col justify-start items-start gap-[12px] flex">
                <div className="p-0 justify-start items-start gap-[12px] inline-flex">
                  <div className="text-sky-950 text-[16px] font-bold leading-7">
                    Category
                  </div>
                  <div className="text-neutral-500 text-[16px] font-normal leading-7">
                    November 22, 2021
                  </div>
                </div>
                <div className="w-[300px] h-[99px] text-black text-[20px] font-normal leading-loose">
                  Pitch termsheet backing validation focus release.
                </div>
              </div>
              <div className="p-0 justify-start items-start gap-[12px] inline-flex">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/images/round-girl.png"
                  alt="Avatar"
                />
                <div className="w-[300px] h-8 text-black text-[16px] font-normal leading-7">
                  Chandler Bing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className="flex mt-28 mb-auto">
          <div className="w-[219px] h-[60px] px-14 py-4 rounded-[56px] border border-sky-950 inline-flex items-center gap-2">
            <button className="text-sky-950 text-[20px] font-bold leading-7">
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
