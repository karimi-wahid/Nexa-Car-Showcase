"use client";
import { ShowMoreProps } from "@/types";
import { UpdateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = UpdateSearchParams("limit", newLimit.toString());

    router.push(newPathName, { scroll: false });
  };
  return (
    <div className="w-full flex items-center justify-center gap-5 mt-10">
      {isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
