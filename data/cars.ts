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
  description?: string;  // párrafo de apertura — texto del anuncio
  highlights?: string[]; // equipamiento y estado — lista expandible en card
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
    description:
      "Opel Corsa diésel, manual, 5 puertas — muy económico y práctico. Ideal para uso diario, carretera y clientes que valoran el bajo consumo. Unidad con historial de mantenimiento documentado y kilometraje coherente.",
    highlights: [
      "Motor 1.5 Diésel 100/102CV · Cambio manual · 5 puertas / 5 plazas",
      "Color blanco · Etiqueta medioambiental C",
      "ITV vigente hasta 2027 · Vehículo nacional, no importado · 2 Llaves",
      "Revisado y listo para entrega · Neumáticos en muy buen estado (4 ruedas)",
      "Interior limpio y cuidado · Mecánica funcionando correctamente",
      "Pantalla multimedia · Apple CarPlay / Android Auto · Bluetooth / USB",
      "Control y limitador de velocidad · Volante multifunción",
      "Aire acondicionado · Elevalunas eléctricos · Cierre centralizado",
      "Isofix · Luces diurnas LED",
      "Precio con IVA incluido · IVA deducible para empresa o autónomo",
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
    description:
      "Vehículo nacional, gasolina, manual, 5 puertas y 5 plazas. Unidad muy equilibrada para ciudad, uso diario y trayectos en carretera. Motor 1.2 PureTech 83CV: cómodo, ágil y de bajo consumo.",
    highlights: [
      "Motor 1.2 PureTech gasolina 83CV · Cambio manual 5v · 5 puertas / 5 plazas",
      "Color blanco · Etiqueta medioambiental C",
      "ITV vigente hasta 2027 · Vehículo nacional, no importado · 2 Llaves",
      "Revisado y listo para entrega · Neumáticos Goodyear 7mm en las 4 ruedas",
      "Interior limpio y cuidado · Mecánica funcionando correctamente",
      "Pantalla multimedia grande · Navegador / GPS · Bluetooth / USB",
      "Apple CarPlay / Android Auto · Climatizador automático",
      "Control / regulador de velocidad · Volante multifunción · Volante de cuero",
      "Sensores de aparcamiento traseros · Elevalunas eléctricos delanteros",
      "Llantas de aluminio · Isofix",
      "Precio con IVA incluido · IVA deducible para empresa o autónomo",
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
    description:
      "SUV compacto diésel, cómodo, económico y con buen equipamiento. Motor 1.5 BlueHDi 110CV — ideal para quien busca un coche amplio, moderno y eficiente para uso diario o carretera.",
    highlights: [
      "Motor 1.5 BlueHDi diésel 110CV · Cambio manual 6v · SUV 5 puertas / 5 plazas",
      "Color blanco · Etiqueta medioambiental C",
      "ITV vigente hasta 09/05/2027 · Vehículo nacional, no importado · 2 Llaves",
      "Historial de mantenimiento disponible",
      "Revisado y listo para entrega · Neumáticos en muy buen estado (7mm · 4 ruedas)",
      "Interior limpio e higienizado · Mecánica funcionando perfectamente",
      "Cambio de aceite y filtro del motor realizados recientemente",
      "Acabado Allure Pack · Pantalla multimedia",
      "Apple CarPlay / Android Auto · Bluetooth / USB",
      "Control de crucero · Volante multifunción",
      "Aire acondicionado / climatización · Sensores de aparcamiento",
      "Llantas de aleación · Cierre centralizado · Isofix",
      "Precio con IVA incluido · IVA deducible para empresa o autónomo",
    ],
  },
];

export const availableCars = cars.filter((c) => c.available);
