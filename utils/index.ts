// const fetch = require('node-fetch');

import { CarProps } from "@/types";

// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-key': 'be25ebba46mshb10b378d44dd980p17b49djsne6ec6ccf107d',
//     'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

export const fetchCars: CarProps[] = [
  {
    city_mpg: 28,
    class: "Compact",
    combination_mpg: 31,
    cylinders: 4,
    displacement: 2.0,
    drive: "FWD",
    fuel_type: "Gasoline",
    highway_mpg: 36,
    make: "Toyota",
    model: "Corolla",
    transmission: "Automatic",
    year: 2022,
  },
  {
    city_mpg: 25,
    class: "Midsize",
    combination_mpg: 28,
    cylinders: 4,
    displacement: 2.5,
    drive: "FWD",
    fuel_type: "Gasoline",
    highway_mpg: 34,
    make: "Honda",
    model: "Accord",
    transmission: "Automatic",
    year: 2021,
  },
  {
    city_mpg: 20,
    class: "SUV",
    combination_mpg: 23,
    cylinders: 6,
    displacement: 3.5,
    drive: "AWD",
    fuel_type: "Gasoline",
    highway_mpg: 27,
    make: "Ford",
    model: "Explorer",
    transmission: "Automatic",
    year: 2020,
  },
  {
    city_mpg: 52,
    class: "Compact",
    combination_mpg: 50,
    cylinders: 4,
    displacement: 1.8,
    drive: "FWD",
    fuel_type: "Hybrid",
    highway_mpg: 48,
    make: "Toyota",
    model: "Prius",
    transmission: "CVT",
    year: 2022,
  },
  {
    city_mpg: 15,
    class: "Pickup",
    combination_mpg: 17,
    cylinders: 8,
    displacement: 5.7,
    drive: "4WD",
    fuel_type: "Gasoline",
    highway_mpg: 20,
    make: "Ram",
    model: "1500",
    transmission: "Automatic",
    year: 2019,
  },
  {
    city_mpg: 30,
    class: "Compact",
    combination_mpg: 33,
    cylinders: 4,
    displacement: 1.5,
    drive: "FWD",
    fuel_type: "Gasoline",
    highway_mpg: 37,
    make: "Hyundai",
    model: "Elantra",
    transmission: "Automatic",
    year: 2023,
  },
  {
    city_mpg: 22,
    class: "Luxury",
    combination_mpg: 25,
    cylinders: 6,
    displacement: 3.0,
    drive: "AWD",
    fuel_type: "Gasoline",
    highway_mpg: 29,
    make: "BMW",
    model: "5 Series",
    transmission: "Automatic",
    year: 2021,
  },
  {
    city_mpg: 18,
    class: "Sports",
    combination_mpg: 20,
    cylinders: 8,
    displacement: 5.0,
    drive: "RWD",
    fuel_type: "Gasoline",
    highway_mpg: 24,
    make: "Ford",
    model: "Mustang",
    transmission: "Manual",
    year: 2020,
  },
  {
    city_mpg: 40,
    class: "Electric",
    combination_mpg: 120,
    cylinders: 0,
    displacement: 0,
    drive: "AWD",
    fuel_type: "Electric",
    highway_mpg: 112,
    make: "Tesla",
    model: "Model 3",
    transmission: "Automatic",
    year: 2023,
  },
  {
    city_mpg: 24,
    class: "SUV",
    combination_mpg: 26,
    cylinders: 4,
    displacement: 2.0,
    drive: "AWD",
    fuel_type: "Gasoline",
    highway_mpg: 29,
    make: "Mazda",
    model: "CX-5",
    transmission: "Automatic",
    year: 2022,
  },
  {
    city_mpg: 21,
    class: "SUV",
    combination_mpg: 23,
    cylinders: 6,
    displacement: 3.5,
    drive: "AWD",
    fuel_type: "Gasoline",
    highway_mpg: 27,
    make: "Toyota",
    model: "Highlander",
    transmission: "Automatic",
    year: 2022,
  },
  {
    city_mpg: 16,
    class: "Truck",
    combination_mpg: 18,
    cylinders: 6,
    displacement: 3.3,
    drive: "RWD",
    fuel_type: "Gasoline",
    highway_mpg: 21,
    make: "Ford",
    model: "F-150",
    transmission: "Automatic",
    year: 2021,
  },
  {
    city_mpg: 22,
    class: "Sedan",
    combination_mpg: 25,
    cylinders: 4,
    displacement: 2.0,
    drive: "AWD",
    fuel_type: "Gasoline",
    highway_mpg: 30,
    make: "Audi",
    model: "A4",
    transmission: "Automatic",
    year: 2022,
  },
  {
    city_mpg: 34,
    class: "Compact",
    combination_mpg: 36,
    cylinders: 4,
    displacement: 1.6,
    drive: "FWD",
    fuel_type: "Gasoline",
    highway_mpg: 40,
    make: "Kia",
    model: "Forte",
    transmission: "Automatic",
    year: 2021,
  },
  {
    city_mpg: 60,
    class: "Electric",
    combination_mpg: 132,
    cylinders: 0,
    displacement: 0,
    drive: "FWD",
    fuel_type: "Electric",
    highway_mpg: 108,
    make: "Nissan",
    model: "Leaf",
    transmission: "Automatic",
    year: 2020,
  },

  {
    city_mpg: 27,
    class: "Sedan",
    combination_mpg: 30,
    cylinders: 4,
    displacement: 2.0,
    drive: "FWD",
    fuel_type: "Gasoline",
    highway_mpg: 36,
    make: "Chevrolet",
    model: "Malibu",
    transmission: "Automatic",
    year: 2022,
  },
  {
    city_mpg: 18,
    class: "Luxury SUV",
    combination_mpg: 21,
    cylinders: 6,
    displacement: 3.6,
    drive: "AWD",
    fuel_type: "Gasoline",
    highway_mpg: 25,
    make: "Cadillac",
    model: "XT5",
    transmission: "Automatic",
    year: 2020,
  },
  {
    city_mpg: 29,
    class: "Compact",
    combination_mpg: 32,
    cylinders: 4,
    displacement: 2.0,
    drive: "FWD",
    fuel_type: "Gasoline",
    highway_mpg: 38,
    make: "Volkswagen",
    model: "Jetta",
    transmission: "Automatic",
    year: 2023,
  },
  {
    city_mpg: 53,
    class: "Hybrid Sedan",
    combination_mpg: 52,
    cylinders: 4,
    displacement: 2.0,
    drive: "FWD",
    fuel_type: "Hybrid",
    highway_mpg: 51,
    make: "Hyundai",
    model: "Ioniq",
    transmission: "Automatic",
    year: 2021,
  },
  {
    city_mpg: 17,
    class: "Truck",
    combination_mpg: 19,
    cylinders: 6,
    displacement: 4.0,
    drive: "4WD",
    fuel_type: "Gasoline",
    highway_mpg: 22,
    make: "Nissan",
    model: "Frontier",
    transmission: "Automatic",
    year: 2020,
  },
  {
    city_mpg: 50,
    class: "Electric",
    combination_mpg: 120,
    cylinders: 0,
    displacement: 0,
    drive: "AWD",
    fuel_type: "Electric",
    highway_mpg: 105,
    make: "Ford",
    model: "Mustang Mach-E",
    transmission: "Automatic",
    year: 2022,
  },
  {
    city_mpg: 44,
    class: "Hybrid",
    combination_mpg: 46,
    cylinders: 4,
    displacement: 2.5,
    drive: "FWD",
    fuel_type: "Hybrid",
    highway_mpg: 47,
    make: "Honda",
    model: "Insight",
    transmission: "Automatic",
    year: 2021,
  },
  {
    city_mpg: 21,
    class: "SUV",
    combination_mpg: 24,
    cylinders: 4,
    displacement: 2.4,
    drive: "AWD",
    fuel_type: "Gasoline",
    highway_mpg: 28,
    make: "Subaru",
    model: "Outback",
    transmission: "Automatic",
    year: 2022,
  },
  {
    city_mpg: 35,
    class: "Compact",
    combination_mpg: 38,
    cylinders: 4,
    displacement: 1.5,
    drive: "FWD",
    fuel_type: "Gasoline",
    highway_mpg: 42,
    make: "Mitsubishi",
    model: "Mirage",
    transmission: "Automatic",
    year: 2023,
  },
  {
    city_mpg: 19,
    class: "SUV",
    combination_mpg: 21,
    cylinders: 6,
    displacement: 3.8,
    drive: "AWD",
    fuel_type: "Gasoline",
    highway_mpg: 26,
    make: "Kia",
    model: "Telluride",
    transmission: "Automatic",
    year: 2022,
  },
  {
    city_mpg: 45,
    class: "Electric",
    combination_mpg: 130,
    cylinders: 0,
    displacement: 0,
    drive: "AWD",
    fuel_type: "Electric",
    highway_mpg: 115,
    make: "BMW",
    model: "i4",
    transmission: "Automatic",
    year: 2023,
  },
  {
    city_mpg: 23,
    class: "Luxury Sedan",
    combination_mpg: 25,
    cylinders: 4,
    displacement: 2.0,
    drive: "RWD",
    fuel_type: "Gasoline",
    highway_mpg: 31,
    make: "Mercedes-Benz",
    model: "C-Class",
    transmission: "Automatic",
    year: 2021,
  },
  {
    city_mpg: 46,
    class: "Electric",
    combination_mpg: 122,
    cylinders: 0,
    displacement: 0,
    drive: "FWD",
    fuel_type: "Electric",
    highway_mpg: 102,
    make: "Chevrolet",
    model: "Bolt EV",
    transmission: "Automatic",
    year: 2022,
  },
  {
    city_mpg: 25,
    class: "Hatchback",
    combination_mpg: 27,
    cylinders: 4,
    displacement: 2.0,
    drive: "FWD",
    fuel_type: "Gasoline",
    highway_mpg: 30,
    make: "Volkswagen",
    model: "Golf",
    transmission: "Manual",
    year: 2021,
  },
  {
    city_mpg: 20,
    class: "Luxury SUV",
    combination_mpg: 22,
    cylinders: 6,
    displacement: 3.0,
    drive: "AWD",
    fuel_type: "Gasoline",
    highway_mpg: 26,
    make: "Lexus",
    model: "RX 350",
    transmission: "Automatic",
    year: 2022,
  },
];

export const calculateCarRent = (city_mpg: number = 12, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append("customer", "img");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const UpdateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
