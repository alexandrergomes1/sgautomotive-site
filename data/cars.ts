export type CarTag = "iva-recuperable" | "garantia" | "pronto-entrega";
export type FuelType =
  | "diesel"
  | "gasoline"
  | "hybrid"
  | "electric"
  | "plugin_hybrid";
export type TransmissionType = "automatic" | "manual";

export interface Car {
  id: string;
  make: string;
  model: string;
  version: string;
  year: number;
  km: number;
  fuel: FuelType;
  transmission: TransmissionType;
  power: number;
  price: number;
  currency: "EUR";
  origin: string;
  image: string;
  tags: CarTag[];
  featured: boolean;
  color: string;
  doors: number;
}

export const cars: Car[] = [
  {
    id: "bmw-320d-2022",
    make: "BMW",
    model: "320d",
    version: "Sport Line",
    year: 2022,
    km: 28000,
    fuel: "diesel",
    transmission: "automatic",
    power: 190,
    price: 38900,
    currency: "EUR",
    origin: "Alemania",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    tags: ["iva-recuperable", "garantia"],
    featured: true,
    color: "Blanco mineral",
    doors: 4,
  },
  {
    id: "mercedes-c200-2021",
    make: "Mercedes-Benz",
    model: "C 200",
    version: "Avantgarde",
    year: 2021,
    km: 41000,
    fuel: "hybrid",
    transmission: "automatic",
    power: 204,
    price: 42500,
    currency: "EUR",
    origin: "Alemania",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    tags: ["garantia", "pronto-entrega"],
    featured: true,
    color: "Gris grafito",
    doors: 4,
  },
  {
    id: "audi-a4-2021",
    make: "Audi",
    model: "A4",
    version: "2.0 TDI S line",
    year: 2021,
    km: 35000,
    fuel: "diesel",
    transmission: "automatic",
    power: 163,
    price: 36200,
    currency: "EUR",
    origin: "Alemania",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a705b?w=800&q=80",
    tags: ["iva-recuperable"],
    featured: true,
    color: "Negro brillante",
    doors: 4,
  },
  {
    id: "vw-golf-2022",
    make: "Volkswagen",
    model: "Golf",
    version: "1.5 eTSI Style",
    year: 2022,
    km: 19000,
    fuel: "plugin_hybrid",
    transmission: "automatic",
    power: 150,
    price: 29800,
    currency: "EUR",
    origin: "Alemania",
    image:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80",
    tags: ["pronto-entrega", "garantia"],
    featured: true,
    color: "Plata reflex",
    doors: 5,
  },
  {
    id: "bmw-x5-2021",
    make: "BMW",
    model: "X5",
    version: "xDrive30d",
    year: 2021,
    km: 52000,
    fuel: "diesel",
    transmission: "automatic",
    power: 286,
    price: 64900,
    currency: "EUR",
    origin: "Alemania",
    image:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
    tags: ["iva-recuperable", "garantia"],
    featured: false,
    color: "Azul mediterráneo",
    doors: 5,
  },
  {
    id: "mercedes-glc-2020",
    make: "Mercedes-Benz",
    model: "GLC 300",
    version: "4MATIC AMG Line",
    year: 2020,
    km: 61000,
    fuel: "gasoline",
    transmission: "automatic",
    power: 258,
    price: 47500,
    currency: "EUR",
    origin: "Bélgica",
    image:
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80",
    tags: ["garantia"],
    featured: false,
    color: "Blanco polar",
    doors: 5,
  },
  {
    id: "audi-q5-2022",
    make: "Audi",
    model: "Q5",
    version: "40 TDI quattro S line",
    year: 2022,
    km: 24000,
    fuel: "diesel",
    transmission: "automatic",
    power: 204,
    price: 56800,
    currency: "EUR",
    origin: "Países Bajos",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    tags: ["iva-recuperable", "pronto-entrega"],
    featured: false,
    color: "Gris daytona",
    doors: 5,
  },
  {
    id: "tesla-model3-2022",
    make: "Tesla",
    model: "Model 3",
    version: "Long Range AWD",
    year: 2022,
    km: 31000,
    fuel: "electric",
    transmission: "automatic",
    power: 351,
    price: 43900,
    currency: "EUR",
    origin: "Países Bajos",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    tags: ["garantia", "pronto-entrega"],
    featured: false,
    color: "Rojo multicoat",
    doors: 4,
  },
];

export const featuredCars = cars.filter((car) => car.featured);
