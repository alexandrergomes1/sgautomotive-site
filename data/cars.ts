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
  highlights?: string[]; // equipamiento y estado — items individuales en grid expandible
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
    highlights: [
      "Motor 1.5 Diésel 100/102CV",
      "Cambio manual · 5 puertas",
      "ITV vigente hasta 2027",
      "Vehículo nacional · 2 Llaves",
      "Neumáticos buen estado (4 ruedas)",
      "Interior limpio y cuidado",
      "Apple CarPlay / Android Auto",
      "Bluetooth / USB",
      "Control y limitador de velocidad",
      "Volante multifunción",
      "Aire acondicionado",
      "Elevalunas eléctricos",
      "Cierre centralizado · Isofix",
      "Luces diurnas LED",
      "IVA deducible empresa/autónomo",
    ],
  },
  {
    id: "citroen-c3-2021",
    make: "Citroën",
    model: "C3",
    version: "PureTech 83 Feel Pack 5p",
    year: 2021,
    km: 77500,
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
    highlights: [
      "Motor 1.2 PureTech gasolina 83CV",
      "Manual 5v · 5 puertas",
      "ITV vigente hasta 2027",
      "Vehículo nacional · 2 Llaves",
      "Neumáticos Goodyear 7mm (4 ruedas)",
      "Interior limpio y cuidado",
      "Pantalla multimedia + GPS",
      "Apple CarPlay / Android Auto",
      "Climatizador automático",
      "Control de velocidad",
      "Volante de cuero",
      "Sensores aparcamiento traseros",
      "Llantas de aluminio",
      "Elevalunas delanteros · Isofix",
      "IVA deducible empresa/autónomo",
    ],
  },
  {
    id: "peugeot-2008-2021",
    make: "Peugeot",
    model: "2008",
    version: "Allure Pack BlueHDI 110 5p",
    year: 2021,
    km: 159900,
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
    highlights: [
      "Motor 1.5 BlueHDi 110CV diésel",
      "Manual 6v · SUV 5 puertas",
      "ITV hasta 09/05/2027",
      "Vehículo nacional · 2 Llaves",
      "Historial mantenimiento disponible",
      "Aceite y filtro cambiados recientemente",
      "Neumáticos 7mm · Interior higienizado",
      "Acabado Allure Pack",
      "Apple CarPlay / Android Auto",
      "Control de crucero",
      "Aire acondicionado",
      "Sensores de aparcamiento",
      "Llantas de aleación",
      "Cierre centralizado · Isofix",
      "IVA deducible empresa/autónomo",
    ],
  },
];

export const availableCars = cars.filter((c) => c.available);
