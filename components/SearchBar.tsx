"use client";

import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-4 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="maginifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Plase fill in the search bar");
    }

    updateSearchParams(
      model.toLocaleLowerCase(),
      manufacturer.toLocaleLowerCase()
    );
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  return (
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl bg-gray-50 px-2.5"
      onSubmit={handleSearch}>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />

        <SearchButton otherClasses="sm:hidden cursor-pointer" />
      </div>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <Image
          src="/model-icon.png"
          alt="modal icon"
          width={25}
          height={25}
          className="absolute w-[25px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
        />
        <SearchButton otherClasses="sm:hidden cursor-pointer" />
      </div>
      <SearchButton otherClasses="max-sm:hidden cursor-pointer" />
    </form>
  );
};

export default SearchBar;
