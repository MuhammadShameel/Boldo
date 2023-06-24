import Image from "next/image";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <header className="home-head h-473 bg-secondary text-primary">
        <Navbar />
        <div className="lg:container mx-auto">
          <div className="header-bottom grid sm:grid-cols-1 xs:flex-row mx-auto lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:p-10 xs:p-8 mt-20 pb-20 md:mt-10 md:pb-10 sm:mt-6 sm:pb-10 xs:mt-6 xs:pb-10">
            <div className="p-1 sm:p-4 sm:text-center xs:text-center xs-p-2">
              <div className="about-text text-left openSans font-color mb-4 md:mx-auto sm:mx-auto lg:mx-0 xs:mx-auto xs:mb-1">
                About
              </div>
              <div className="xs:text-4xl main-title">
                <p className="lg:text-5xl sub-title md:text-5xl sm:text-4xl xs:text-4xl text-left text-black text-[48px] font-normal leading-10">
                  We love to make great things, things that matter.
                </p>
              </div>
            </div>
            <div className="p-4">
              <p className="font-color font-light openSans text-lg lg:p-10 text-left lg:mt-0 md:mt-12 leading-[1.8]">
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className="py-16 my-16">
        <div className="container mx-auto">
          <div className="center-heading text-primary bg-white lg:h-96 z-10 w-1200">
            <p className="flex justify-center items-center  mx-auto text-3xl whitespace-normal text-center font-normal">
              Our Members
            </p>
            <p className="flex justify-center items-center whitespace-normal  text-center text-primary text-[48px] font-normal leading-15">
              Handshake infographic mass market <br /> crowdfunding iteration.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-20 mt-20 space-x-4">
              <div className="flex flex-col items-center py-141">
                <p className=" text-primary-300 lg:text-[96px] md:text-[75px]  sm:text-[65px] xs:text-[65px] font-normal lg:leading-20 md:leading-20 sm:leading-20 xs:leading-10 lg:text-7xl md:text-5xl sm:text-4xl text-center">
                  120m
                </p>
                <p className="CoolFeatureTitle text-primary-100 lg:text-[24px] md:text-[24px] sm:text-[24px] xs:text-[24px] font-normal leading-9 ">
                  Cool feature title
                </p>
              </div>
              <div className="flex flex-col items-center py-141">
                <p className="text-primary-300 lg:text-[96px] md:text-[75px]  sm:text-[65px] xs:text-[65px] font-normal lg:leading-20 md:leading-20 sm:leading-20 xs:leading-10  lg:text-7xl md:text-5xl sm:text-4xl text-center">
                  10.000
                </p>
                <p className="CoolFeatureTitle text-primary-100 lg:text-[24px] md:text-[24px] sm:text-[24px] xs:text-[24px] font-normal leading-9 ">
                  Cool feature title
                </p>
              </div>
              <div className="flex flex-col items-center py-141">
                <p className="text-primary-300 lg:text-[96px] md:text-[75px]  sm:text-[65px] xs:text-[65px] font-normal lg:leading-20 md:leading-20 sm:leading-20 xs:leading-10  lg:text-7xl md:text-5xl sm:text-4xl text-center">
                  240
                </p>
                <p className="CoolFeatureTitle text-primary-100 lg:text-[24px] md:text-[24px] sm:text-[24px] xs:text-[24px] font-normal leading-9 ">
                  Cool feature title
                </p>
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
    </div>
  );
};

export default Home;
