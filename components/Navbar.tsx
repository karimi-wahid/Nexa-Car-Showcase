import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-[10px]">
        <Link className="flex justify-center items-center" href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={5}
            className="object-contain h-16"
          />
          <span className="text-3xl tracking-[5px] font-semibold text-pretty italic">
            Nexa
          </span>
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary rounded-full bg-white min-w-[130px  border border-amber-500"
        />
      </nav>
    </header>
  );
};

export default Navbar;
