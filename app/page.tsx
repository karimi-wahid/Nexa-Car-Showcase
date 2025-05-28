import {
  CarCard,
  CustomeFilter,
  Hero,
  SearchBar,
  ShowMore,
  Loading,
} from "@/components";

import { fuels, yearsOfProduction } from "@/constant";
import { SearchParamsProps } from "@/types";
import { fetchCars } from "@/utils";
import { Suspense } from "react";
type PageProps = {
  searchParams?: Promise<any>;
};
export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const {
    manufacturer = "",
    model = "",
    year = "",
    fuel = "",
    limit = 10,
  } = params || {};

  // Filter the cars
  const filteredCars = fetchCars.filter(
    (car) =>
      (manufacturer
        ? car.make.toLowerCase().includes(manufacturer.toLowerCase())
        : true) &&
      (model ? car.model.toLowerCase().includes(model.toLowerCase()) : true) &&
      (year ? String(car.year) === String(year) : true) &&
      (fuel ? car.fuel_type.toLowerCase().includes(fuel.toLowerCase()) : true)
  );

  const isDataEmpty =
    !Array.isArray(filteredCars) || filteredCars.length < 1 || !filteredCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div
        className="mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto"
        id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="mt-12 w-full flex justify-between items-center flex-wrap gap-5">
          <SearchBar />

          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomeFilter title="fuel" options={fuels} />
            <CustomeFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {filteredCars.slice(0, Number(limit)).map((car, i) => (
                <Suspense fallback={<Loading />} key={i}>
                  <CarCard car={car} />
                </Suspense>
              ))}
            </div>

            <ShowMore
              pageNumber={Number(limit) / 10}
              isNext={Number(limit) < filteredCars.length}
            />
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-2xl font-bold">Oops, no results</h2>
            <p>Sorry</p>
          </div>
        )}
      </div>
    </main>
  );
}
