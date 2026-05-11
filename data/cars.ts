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
  description?: string;  // texto breve — uma linha
  highlights?: string[]; // equipamento e estado — lista expandível
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
    description: "Diésel económico y práctico, revisado y listo para entrega.",
    highlights: [
      "Motor 1.5 Diésel 100/102CV — bajo consumo",
      "ITV vigente hasta 2027 · 2 Llaves",
      "Vehículo nacional · Etiqueta medioambiental C",
      "Apple CarPlay / Android Auto · Bluetooth / USB",
      "Control y limitador de velocidad de crucero",
      "Aire acondicionado · Elevalunas eléctricos",
      "Neumáticos en muy buen estado en las 4 ruedas",
      "Interior limpio y cuidado · Revisado y listo para entrega",
      "IVA deducible para empresa o autónomo",
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
    description: "Gasolina ágil y económico, ideal para ciudad y carretera.",
    highlights: [
      "Motor 1.2 PureTech 83CV — ágil y económico",
      "ITV vigente hasta 2027 · 2 Llaves",
      "Vehículo nacional · Etiqueta medioambiental C",
      "Neumáticos Goodyear 7mm en las 4 ruedas — muy buen estado",
      "Climatizador automático · Control de velocidad",
      "Apple CarPlay / Android Auto · GPS/Navegador · Bluetooth",
      "Sensores de aparcamiento traseros",
      "Volante de cuero · Llantas de aluminio",
      "IVA deducible para empresa o autónomo",
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
    description: "SUV diésel compacto, cómodo y bien equipado. Listo para usar.",
    highlights: [
      "Motor 1.5 BlueHDi 110CV — diésel eficiente",
      "ITV vigente hasta 09/05/2027 · 2 Llaves",
      "Acabado Allure Pack · Historial de mantenimiento disponible",
      "Vehículo nacional · Etiqueta medioambiental C",
      "Apple CarPlay / Android Auto · Pantalla multimedia",
      "Control de crucero · Sensores de aparcamiento",
      "Llantas de aleación · Aire acondicionado",
      "Cambio de aceite y filtro realizados recientemente",
      "Neumáticos en excelente estado — 7mm en las 4 ruedas",
      "IVA deducible para empresa o autónomo",
    ],
  },
];

export const availableCars = cars.filter((c) => c.available);
