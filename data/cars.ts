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
  power: number;         // cv / hp
  price: number;
  currency: "EUR";
  origin: string;        // país de origem (ex: "Alemania")
  color: string;
  doors: number;
  image: string;         // URL da imagem principal
  tags: CarTag[];
  available: boolean;    // false = vendido / ocultar do catálogo
  description?: string;  // texto breve opcional para o card
}

// ─── CATÁLOGO ATIVO ──────────────────────────────────────────────────────────
// Substituir pelos dados reais ao receber os anúncios.
// Manter available: false para ocultar sem apagar o registo.

export const cars: Car[] = [
  {
    id: "carro-1",
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
    color: "Blanco mineral",
    doors: 4,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    tags: ["iva-recuperable", "garantia"],
    available: true,
  },
  {
    id: "carro-2",
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
    color: "Gris grafito",
    doors: 4,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    tags: ["garantia", "pronto-entrega"],
    available: true,
  },
  {
    id: "carro-3",
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
    color: "Negro brillante",
    doors: 4,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a705b?w=800&q=80",
    tags: ["iva-recuperable"],
    available: true,
  },
];

export const availableCars = cars.filter((c) => c.available);
