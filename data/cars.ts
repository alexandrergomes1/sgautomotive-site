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
  power: number;         // cv
  price: number;
  currency: "EUR";
  origin: string;
  color: string;
  doors: number;
  images: string[];      // first item = primary image
  tags: CarTag[];
  available: boolean;    // false = vendido / ocultar
  description?: string;  // texto breve opcional
}

export const cars: Car[] = [
  {
    id: "opel-corsa-2021",
    make: "Opel",
    model: "Corsa",
    version: "1.5D DT Edition 5p",
    year: 2021,
    km: 88000,
    fuel: "diesel",
    transmission: "manual",
    power: 102,
    price: 9980,
    currency: "EUR",
    origin: "España",
    color: "Blanco",
    doors: 5,
    images: [
      "/cars/car-opel-1.webp",
      "/cars/car-opel-2.webp",
      "/cars/car-opel-3.webp",
      "/cars/car-opel-4.webp",
      "/cars/car-opel-5.webp",
      "/cars/car-opel-6.webp",
      "/cars/car-opel-7.webp",
      "/cars/car-opel-8.webp",
      "/cars/car-opel-9.webp",
      "/cars/car-opel-10.webp",
    ],
    tags: ["iva-recuperable"],
    available: true,
    description: "ITV hasta 2027 · IVA recuperable · CarPlay/Android Auto",
  },
  {
    id: "citroen-c3-2021",
    make: "Citroën",
    model: "C3",
    version: "PureTech 83 Feel Pack 5p",
    year: 2021,
    km: 77000,
    fuel: "gasoline",
    transmission: "manual",
    power: 83,
    price: 9200,
    currency: "EUR",
    origin: "España",
    color: "Blanco",
    doors: 5,
    images: [
      "/cars/car-c3-1.webp",
      "/cars/car-c3-2.webp",
      "/cars/car-c3-3.webp",
      "/cars/car-c3-4.webp",
      "/cars/car-c3-5.webp",
      "/cars/car-c3-6.webp",
      "/cars/car-c3-7.webp",
      "/cars/car-c3-8.webp",
      "/cars/car-c3-9.webp",
      "/cars/car-c3-10.webp",
    ],
    tags: ["pronto-entrega"],
    available: true,
    description: "Neumáticos Goodyear nuevos · Sensores aparcamiento · Etiqueta medioambiental",
  },
  {
    id: "peugeot-2008-2021",
    make: "Peugeot",
    model: "2008",
    version: "Allure Pack BlueHDI 110 5p",
    year: 2021,
    km: 159980,
    fuel: "diesel",
    transmission: "manual",
    power: 110,
    price: 11480,
    currency: "EUR",
    origin: "España",
    color: "Blanco",
    doors: 5,
    images: [
      "/cars/car-2008-1.webp",
      "/cars/car-2008-2.webp",
      "/cars/car-2008-3.webp",
      "/cars/car-2008-4.webp",
      "/cars/car-2008-5.webp",
      "/cars/car-2008-6.webp",
      "/cars/car-2008-7.webp",
      "/cars/car-2008-8.webp",
      "/cars/car-2008-9.webp",
      "/cars/car-2008-10.webp",
    ],
    tags: ["iva-recuperable"],
    available: true,
    description: "ITV hasta 2027 · IVA recuperable · Control crucero · Llantas aleación",
  },
];

export const availableCars = cars.filter((c) => c.available);
