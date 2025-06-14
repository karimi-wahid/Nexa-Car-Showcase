"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 sm:px-16 px-6">
        <h1 className="2xl:text-[62px] sm:text-[50px] text-[40px] font-extrabold">
          Discover, reserve, or rent your ideal car effortlessly today!
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5">
          Experience a seamless car rental with our easy and quick booking
          process.
        </p>

        <CustomButton
          title="Explore cars"
          btnType={"button"}
          containerStyles="text-white bg-primary rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image
            src="/hero.png"
            alt="hero image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
