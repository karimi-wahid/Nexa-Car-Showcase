import { footerLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-baseline gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col md:flex-row justify-start items-start gap-6">
          <div className="flex flex-col gap-5 w-1/3">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="logo"
                width={118}
                height={18}
                className="object-contain"
              />
              <span className="text-3xl tracking-[5px] ml-5 font-semibold text-pretty italic">
                Nexa
              </span>
            </div>
            <p className="text-base text-gray-700">
              Nexa Cars is a leading automotive company dedicated to providing
              innovative and high-quality vehicles that enhance the driving
              experience. Our commitment to excellence ensures that every car we
              produce meets the highest standards of performance, safety, and
              luxury.
            </p>
          </div>
          <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
            {footerLinks.map((link) => (
              <div
                key={link.title}
                className="flex flex-col gap-6 text-base min-w-[170px]">
                <h3 className="font-bold">{link.title}</h3>
                {link.links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="text-gray-500">
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-300 mx-5 sm:px-16 px-6 py-10">
        <p>{new Date().getFullYear()} &copy; Nexa Car All Rights Reserved</p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href={"/"} className="text-gray-500 ">
            Privacy Policy
          </Link>
          <Link href={"/"} className="text-gray-500 ">
            Term of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
