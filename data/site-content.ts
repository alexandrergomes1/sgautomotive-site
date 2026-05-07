// ─────────────────────────────────────────────────────────────────────────────
// SG Automotive — Static trilingual content (ES · EN · PT)
// No next-intl. No getTranslations. No JSON dictionaries.
// Each locale is a plain TypeScript object — tree-shaken at build time.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_URL = "https://sgautomotive.com";
export const SITE_NAME = "SG Automotive";
export const WHATSAPP_NUMBER = "34662625953";
export const WHATSAPP_DISPLAY = "+34 662 62 59 53";
export const EMAIL_ADDRESS = "sgautomotive.es@gmail.com";

export type Locale = "es" | "en" | "pt";

export function waUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavLink {
  anchor: string;
  label: string;
}

export interface SiteContent {
  brand: { name: string; tagline: string };
  navigation: { links: NavLink[]; cta: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaVehicles: string;
    ctaConsult: string;
    trust: [string, string, string];
  };
  vehicles: {
    title: string;
    subtitle: string;
    empty: string;
    contactVehicle: string;
    photosLabel: string;
    fuel: Record<string, string>;
    transmission: Record<string, string>;
    tagLabels: Record<string, string>;
    tagColors: Record<string, string>;
  };
  services: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; description: string }[];
  };
  importSection: {
    badge: string;
    title: string;
    subtitle: string;
    includedTitle: string;
    included: string[];
    cta: string;
    steps: { number: string; title: string; description: string }[];
  };
  plans: {
    title: string;
    subtitle: string;
    badge: string;
    cta: string;
    items: {
      name: string;
      description: string;
      price: string;
      features: string[];
      featured: boolean;
    }[];
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: { number: string; title: string; description: string }[];
  };
  differentials: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; description: string }[];
  };
  about: {
    title: string;
    subtitle: string;
    body: string;
    body2: string;
    cta: string;
    stats: { value: string; label: string }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    whatsappLabel: string;
    emailLabel: string;
    location: string;
    responseTime: string;
  };
  footer: {
    tagline: string;
    location: string;
    navTitle: string;
    navLinks: { label: string; href: string }[];
    privacy: string;
    terms: string;
    copyright: string;
  };
  whatsapp: {
    general: string;
    consult: string;
    import: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogLocale: string;
  };
}

// ─── Shared tag colors (same across locales) ─────────────────────────────────

const TAG_COLORS: Record<string, string> = {
  "iva-recuperable": "bg-trust/15 text-trust-light border-trust/30",
  garantia: "bg-accent/15 text-accent border-accent/30",
  "pronto-entrega": "bg-blue-500/15 text-blue-400 border-blue-500/30",
};

// ─────────────────────────────────────────────────────────────────────────────
// ESPAÑOL
// ─────────────────────────────────────────────────────────────────────────────

const es: SiteContent = {
  brand: {
    name: "SG Automotive",
    tagline: "Compra y importación de vehículos en Europa con gestión profesional.",
  },
  navigation: {
    links: [
      { anchor: "#veiculos", label: "Vehículos" },
      { anchor: "#importacao", label: "Importación" },
      { anchor: "#servicos", label: "Servicios" },
      { anchor: "#sobre", label: "Nosotros" },
      { anchor: "#contato", label: "Contacto" },
    ],
    cta: "Solicitar consulta",
  },
  hero: {
    badge: "Costa del Sol · Fuengirola · Málaga",
    title: "Compra y importación de vehículos en Europa con gestión profesional.",
    subtitle:
      "Vehículos seleccionados, análisis técnico y gestión completa o parcial del proceso de compra, importación y regularización en España.",
    ctaVehicles: "Ver vehículos disponibles",
    ctaConsult: "Solicitar consulta",
    trust: [
      "Operación 100% online",
      "Atención en español, inglés y portugués",
      "Basados en Costa del Sol",
    ],
  },
  vehicles: {
    title: "Vehículos disponibles",
    subtitle: "Unidades verificadas, con historial comprobado y documentación en regla.",
    empty: "Próximamente nuevos vehículos disponibles. Contáctanos para más información.",
    contactVehicle: "Consultar por WhatsApp",
    photosLabel: "Solicitar más fotos",
    fuel: {
      diesel: "Diésel",
      gasoline: "Gasolina",
      hybrid: "Híbrido",
      electric: "Eléctrico",
      plugin_hybrid: "Híbrido enchufable",
    },
    transmission: { automatic: "Automático", manual: "Manual" },
    tagLabels: {
      "iva-recuperable": "IVA recuperable",
      garantia: "Con garantía",
      "pronto-entrega": "Pronta entrega",
    },
    tagColors: TAG_COLORS,
  },
  services: {
    title: "Lo que hacemos",
    subtitle:
      "Servicios diseñados para quienes compran o importan vehículos con criterio y sin sorpresas.",
    items: [
      {
        icon: "car",
        title: "Venta de vehículos seleccionados",
        description:
          "Ofrecemos unidades con historial verificado, análisis técnico completo y documentación en regla. Nada llega a nuestro catálogo sin pasar por nuestro filtro.",
      },
      {
        icon: "search",
        title: "Asesoría de compra",
        description:
          "Buscamos, analizamos y comparamos el vehículo que necesitas en el mercado europeo. Recibes un informe claro antes de tomar cualquier decisión.",
      },
      {
        icon: "ship",
        title: "Importación completa",
        description:
          "Gestionamos todo el proceso: compra, transporte, despacho aduanero, homologación, ITV y matrícula en España. Sin estrés, sin burocracia.",
      },
      {
        icon: "file-text",
        title: "Apoyo documental",
        description:
          "Gestionamos toda la documentación necesaria: cambio de titularidad, alta de vehículo, ITV, seguro temporal y trámites ante la DGT.",
      },
      {
        icon: "truck",
        title: "Transporte y logística",
        description:
          "Coordinamos el transporte del vehículo desde cualquier punto de Europa hasta tu dirección en España, con seguimiento y seguro incluidos.",
      },
      {
        icon: "shield-check",
        title: "Consultoría de riesgo",
        description:
          "Si tienes dudas sobre una oferta, analizamos el vehículo, el vendedor y el proceso antes de que asumas cualquier riesgo. Evita estafas y vehículos problemáticos.",
      },
    ],
  },
  importSection: {
    badge: "Servicio completo",
    title: "Importación de vehículos a España",
    subtitle:
      "Gestionamos todo el proceso, desde la selección del vehículo en Europa hasta la entrega con matrícula española.",
    includedTitle: "Qué incluye el servicio",
    included: [
      "Análisis técnico y verificación de historial",
      "Negociación y gestión de la compra",
      "Transporte puerta a puerta con seguro",
      "Despacho aduanero y homologación",
      "ITV y matrícula española",
      "Documentación completa en regla",
    ],
    cta: "Solicitar gestión de importación",
    steps: [
      {
        number: "01",
        title: "Origen",
        description:
          "Seleccionamos y verificamos el vehículo en el país de origen: Alemania, Francia, Países Bajos y más.",
      },
      {
        number: "02",
        title: "Transporte",
        description:
          "Coordinamos el traslado hasta España con seguro de transporte incluido y seguimiento en tiempo real.",
      },
      {
        number: "03",
        title: "Regularización",
        description:
          "Homologación, ITV, matrícula y entrega con toda la documentación en regla y lista para circular.",
      },
    ],
  },
  plans: {
    title: "Planes de asesoría",
    subtitle:
      "Elige el nivel de soporte que necesitas para tu proceso de compra o importación.",
    badge: "Más popular",
    cta: "Solicitar plan",
    items: [
      {
        name: "Documental",
        description: "Para quienes ya tienen el vehículo y necesitan apoyo burocrático.",
        price: "Desde €290",
        features: [
          "Gestión de matrícula en España",
          "Trámites ITV y homologación",
          "Cambio de titularidad",
          "Alta en DGT",
          "Soporte por correo y WhatsApp",
        ],
        featured: false,
      },
      {
        name: "Parcial",
        description: "Soporte en etapas clave del proceso sin gestión total.",
        price: "Desde €490",
        features: [
          "Análisis del vehículo seleccionado",
          "Verificación de historial",
          "Negociación y compra",
          "Coordinación de transporte",
          "Gestión documental básica",
          "Soporte continuo",
        ],
        featured: true,
      },
      {
        name: "Completo",
        description: "Gestión total desde la búsqueda hasta la entrega.",
        price: "Desde €890",
        features: [
          "Búsqueda personalizada en Europa",
          "Análisis técnico y financiero",
          "Negociación, compra y pago",
          "Importación con despacho aduanero",
          "Transporte puerta a puerta",
          "Matrícula, ITV y documentación",
          "Soporte prioritario dedicado",
        ],
        featured: false,
      },
    ],
  },
  howItWorks: {
    title: "Cómo funciona",
    subtitle: "Un proceso claro, transparente y sin sorpresas. De principio a fin.",
    steps: [
      {
        number: "01",
        title: "Briefing",
        description:
          "Nos cuentas qué vehículo buscas, tu presupuesto y tus requisitos. Sin compromiso inicial.",
      },
      {
        number: "02",
        title: "Búsqueda y análisis",
        description:
          "Identificamos opciones en el mercado europeo, analizamos historial, precio de mercado y estado técnico.",
      },
      {
        number: "03",
        title: "Presentación y decisión",
        description:
          "Recibes un informe claro con opciones recomendadas. Tú decides con información completa.",
      },
      {
        number: "04",
        title: "Compra y gestión",
        description:
          "Gestionamos la compra, el transporte desde origen y todos los trámites de importación y regularización.",
      },
      {
        number: "05",
        title: "Entrega",
        description:
          "El vehículo llega matriculado, con ITV, documentación en regla y listo para circular en España.",
      },
    ],
  },
  differentials: {
    title: "Por qué SG Automotive",
    subtitle:
      "No somos una concesionaria. Somos un operador especializado que trabaja para el comprador.",
    items: [
      {
        icon: "bar-chart-2",
        title: "Análisis técnico y financiero",
        description:
          "Cada vehículo es analizado en detalle: historial, precio de mercado, coste real de propiedad y riesgo técnico.",
      },
      {
        icon: "eye",
        title: "Transparencia total",
        description:
          "Sin comisiones ocultas. Sabes exactamente cuánto cuesta cada paso y por qué tomamos cada decisión.",
      },
      {
        icon: "shield",
        title: "Foco en el riesgo",
        description:
          "Identificamos señales de alerta antes de la compra: fraudes, vehículos accidentados, deudas pendientes y problemas técnicos.",
      },
      {
        icon: "globe",
        title: "Atención multilingüe",
        description:
          "Operamos en español, inglés y portugués. Sin barreras idiomáticas para comprar en cualquier país de Europa.",
      },
      {
        icon: "wifi",
        title: "Operación 100% online",
        description:
          "Todo el proceso se gestiona de forma remota. Sin necesidad de desplazamientos innecesarios.",
      },
      {
        icon: "map-pin",
        title: "Basados en Costa del Sol",
        description:
          "Presencia local en Fuengirola, Málaga. Conocemos el mercado español y los trámites de la región.",
      },
    ],
  },
  about: {
    title: "Quiénes somos",
    subtitle:
      "SG Automotive es una operación automotiva online, profesional y sin intermediarios innecesarios.",
    body: "Somos una empresa basada en Fuengirola, Costa del Sol, especializada en la compra, venta, importación y asesoría de vehículos en Europa. Trabajamos de forma completamente remota, lo que nos permite operar con eficiencia y sin los costes de una concesionaria tradicional.",
    body2:
      "Nuestro enfoque es técnico, transparente y orientado al cliente. No vendemos por volumen: analizamos cada caso en detalle, identificamos los riesgos y acompañamos al comprador en cada etapa del proceso.",
    cta: "Hablar con nosotros",
    stats: [
      { value: "Costa del Sol", label: "Base de operaciones" },
      { value: "ES · EN · PT", label: "Idiomas de atención" },
      { value: "100%", label: "Gestión online" },
      { value: "EU", label: "Mercado de actuación" },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    subtitle: "Todo lo que necesitas saber antes de empezar.",
    items: [
      {
        question: "¿Tienen tienda física o showroom?",
        answer:
          "No. SG Automotive opera completamente de forma online y remota. Toda la comunicación, análisis y gestión se realiza por correo electrónico, WhatsApp y videollamada. Esto nos permite trabajar con mayor eficiencia y menor coste para el cliente.",
      },
      {
        question: "¿Puedo importar un coche desde Alemania, Francia u otro país europeo?",
        answer:
          "Sí. Gestionamos la importación de vehículos desde cualquier país de la Unión Europea hacia España, incluyendo la compra, transporte, homologación, despacho y matrícula.",
      },
      {
        question: "¿Qué documentación necesito para importar un vehículo?",
        answer:
          "En la mayoría de los casos necesitarás tu DNI o NIE, comprobante de domicilio en España y los documentos del vehículo (título de propiedad, ficha técnica y certificado de conformidad). Te guiamos en cada paso.",
      },
      {
        question: "¿El precio que veo incluye todos los impuestos y trámites?",
        answer:
          "El precio de los vehículos en nuestro catálogo es el precio de coste. Los gastos de importación, IVA, impuesto de matriculación, ITV y transporte se detallan por separado en función del tipo de vehículo y origen.",
      },
      {
        question: "¿Qué significa IVA recuperable en los vehículos?",
        answer:
          "Algunos vehículos provienen de operaciones comerciales y permiten recuperar el IVA si eres autónomo o empresa con derecho a deducción. Es una ventaja fiscal significativa.",
      },
      {
        question: "¿Los vehículos tienen garantía?",
        answer:
          "Depende del vehículo y su procedencia. Los que aparecen con etiqueta 'Con garantía' incluyen garantía de fabricante vigente o garantía contractual. En otros casos podemos gestionar seguros de garantía adicionales.",
      },
      {
        question: "¿Puedo contrataros solo para la parte documental?",
        answer:
          "Sí. Ofrecemos el Plan Documental, específicamente diseñado para gestionar la matrícula, ITV, cambio de titularidad y demás trámites si ya has adquirido el vehículo por tu cuenta.",
      },
      {
        question: "¿Cuánto tiempo tarda el proceso de importación?",
        answer:
          "El proceso completo suele tomar entre 3 y 6 semanas desde la compra del vehículo hasta la entrega matriculada en España, dependiendo del país de origen y la carga administrativa vigente.",
      },
      {
        question: "¿Atienden a clientes de toda España?",
        answer:
          "Sí. Aunque estamos basados en Fuengirola, Málaga, operamos en remoto y podemos gestionar la importación y entrega en cualquier punto de España.",
      },
      {
        question: "¿Cómo empiezo?",
        answer:
          "Simplemente escríbenos por WhatsApp o correo electrónico con tus necesidades. Haremos una consulta inicial gratuita para entender tu caso y explicarte las opciones más adecuadas.",
      },
    ],
  },
  contact: {
    title: "Contáctanos",
    subtitle: "Cuéntanos lo que necesitas. La primera consulta es gratuita.",
    whatsappLabel: "Escríbenos por WhatsApp",
    emailLabel: "Envíanos un correo",
    location: "Fuengirola, Málaga, España",
    responseTime: "Tiempo de respuesta: menos de 24h",
  },
  footer: {
    tagline: "Compra y importación de vehículos en Europa con gestión profesional.",
    location: "Fuengirola, Costa del Sol, Málaga, España",
    navTitle: "Navegación",
    navLinks: [
      { label: "Vehículos", href: "#veiculos" },
      { label: "Importación", href: "#importacao" },
      { label: "Servicios", href: "#servicos" },
      { label: "Nosotros", href: "#sobre" },
      { label: "Contacto", href: "#contato" },
    ],
    privacy: "Política de privacidad",
    terms: "Términos de uso",
    copyright: "SG Automotive. Todos los derechos reservados.",
  },
  whatsapp: {
    general: waUrl("Hola, me gustaría obtener más información sobre vuestros servicios."),
    consult: waUrl(
      "Hola, me interesa solicitar una consulta sobre importación de vehículos. ¿Podéis darme más información?"
    ),
    import: waUrl(
      "Hola, me interesa el servicio de importación completa de vehículos a España. ¿Podéis darme más información?"
    ),
  },
  seo: {
    title: "SG Automotive — Importación y compra de vehículos en Europa",
    description:
      "Empresa online especializada en importación de coches a España, asesoría de compra en Europa y gestión documental. Costa del Sol, Fuengirola, Málaga.",
    keywords: [
      "importación de coches a España",
      "comprar coche en Europa",
      "asesoría importación vehículos España",
      "vehículos seleccionados Costa del Sol",
      "importación coches Fuengirola",
      "gestión automotiva España",
    ],
    ogLocale: "es_ES",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────────────────────────

const en: SiteContent = {
  brand: {
    name: "SG Automotive",
    tagline: "Buy and import vehicles in Europe with professional management.",
  },
  navigation: {
    links: [
      { anchor: "#veiculos", label: "Vehicles" },
      { anchor: "#importacao", label: "Import" },
      { anchor: "#servicos", label: "Services" },
      { anchor: "#sobre", label: "About" },
      { anchor: "#contato", label: "Contact" },
    ],
    cta: "Request consultation",
  },
  hero: {
    badge: "Costa del Sol · Fuengirola · Málaga",
    title: "Buy and import vehicles in Europe with professional management.",
    subtitle:
      "Selected vehicles, technical analysis and complete or partial management of the purchase, import and registration process in Spain.",
    ctaVehicles: "View available vehicles",
    ctaConsult: "Request consultation",
    trust: [
      "100% online operation",
      "Support in Spanish, English and Portuguese",
      "Based on Costa del Sol",
    ],
  },
  vehicles: {
    title: "Available vehicles",
    subtitle: "Verified units with confirmed history and documentation in order.",
    empty: "New vehicles coming soon. Contact us for more information.",
    contactVehicle: "Enquire on WhatsApp",
    photosLabel: "Request more photos",
    fuel: {
      diesel: "Diesel",
      gasoline: "Petrol",
      hybrid: "Hybrid",
      electric: "Electric",
      plugin_hybrid: "Plug-in Hybrid",
    },
    transmission: { automatic: "Automatic", manual: "Manual" },
    tagLabels: {
      "iva-recuperable": "VAT reclaimable",
      garantia: "With warranty",
      "pronto-entrega": "Ready to deliver",
    },
    tagColors: TAG_COLORS,
  },
  services: {
    title: "What we do",
    subtitle:
      "Services designed for those who buy or import vehicles with criteria and no surprises.",
    items: [
      {
        icon: "car",
        title: "Selected vehicle sales",
        description:
          "We offer units with verified history, complete technical analysis and documentation in order. Nothing reaches our catalogue without passing our filter.",
      },
      {
        icon: "search",
        title: "Purchase advisory",
        description:
          "We search, analyse and compare the vehicle you need in the European market. You receive a clear report before making any decision.",
      },
      {
        icon: "ship",
        title: "Complete importation",
        description:
          "We manage the entire process: purchase, transport, customs clearance, homologation, ITV and registration in Spain. No stress, no bureaucracy.",
      },
      {
        icon: "file-text",
        title: "Document support",
        description:
          "We handle all necessary documentation: ownership transfer, vehicle registration, ITV, temporary insurance and DGT procedures.",
      },
      {
        icon: "truck",
        title: "Transport and logistics",
        description:
          "We coordinate vehicle transport from any point in Europe to your address in Spain, with tracking and insurance included.",
      },
      {
        icon: "shield-check",
        title: "Risk consultancy",
        description:
          "If you have doubts about an offer, we analyse the vehicle, the seller and the process before you assume any risk. Avoid scams and problematic vehicles.",
      },
    ],
  },
  importSection: {
    badge: "Complete service",
    title: "Vehicle importation to Spain",
    subtitle:
      "We manage the entire process, from vehicle selection in Europe to delivery with Spanish registration.",
    includedTitle: "What the service includes",
    included: [
      "Technical analysis and history verification",
      "Negotiation and purchase management",
      "Door-to-door transport with insurance",
      "Customs clearance and homologation",
      "ITV and Spanish registration",
      "Complete documentation in order",
    ],
    cta: "Request import management",
    steps: [
      {
        number: "01",
        title: "Origin",
        description:
          "We select and verify the vehicle in the country of origin: Germany, France, Netherlands and more.",
      },
      {
        number: "02",
        title: "Transport",
        description:
          "We coordinate the transfer to Spain with included transport insurance and real-time tracking.",
      },
      {
        number: "03",
        title: "Registration",
        description:
          "Homologation, ITV, registration and delivery with all documentation in order and ready to drive.",
      },
    ],
  },
  plans: {
    title: "Advisory plans",
    subtitle: "Choose the level of support you need for your purchase or import process.",
    badge: "Most popular",
    cta: "Request plan",
    items: [
      {
        name: "Documentary",
        description: "For those who already have the vehicle and need bureaucratic support.",
        price: "From €290",
        features: [
          "Registration management in Spain",
          "ITV and homologation procedures",
          "Ownership transfer",
          "DGT registration",
          "Support via email and WhatsApp",
        ],
        featured: false,
      },
      {
        name: "Partial",
        description: "Support at key stages of the process without total management.",
        price: "From €490",
        features: [
          "Analysis of selected vehicle",
          "History verification",
          "Negotiation and purchase",
          "Transport coordination",
          "Basic document management",
          "Ongoing support",
        ],
        featured: true,
      },
      {
        name: "Complete",
        description: "Total management from search to delivery.",
        price: "From €890",
        features: [
          "Personalised search in Europe",
          "Technical and financial analysis",
          "Negotiation, purchase and payment",
          "Importation with customs clearance",
          "Door-to-door transport",
          "Registration, ITV and documentation",
          "Dedicated priority support",
        ],
        featured: false,
      },
    ],
  },
  howItWorks: {
    title: "How it works",
    subtitle: "A clear, transparent process with no surprises. From start to finish.",
    steps: [
      {
        number: "01",
        title: "Briefing",
        description:
          "Tell us what vehicle you are looking for, your budget and requirements. No initial commitment.",
      },
      {
        number: "02",
        title: "Search and analysis",
        description:
          "We identify options in the European market, analysing history, market price and technical condition.",
      },
      {
        number: "03",
        title: "Presentation and decision",
        description:
          "You receive a clear report with recommended options. You decide with complete information.",
      },
      {
        number: "04",
        title: "Purchase and management",
        description:
          "We manage the purchase, transport from origin and all import and registration procedures.",
      },
      {
        number: "05",
        title: "Delivery",
        description:
          "The vehicle arrives registered, with ITV, documentation in order and ready to drive in Spain.",
      },
    ],
  },
  differentials: {
    title: "Why SG Automotive",
    subtitle:
      "We are not a dealership. We are a specialist operator working for the buyer.",
    items: [
      {
        icon: "bar-chart-2",
        title: "Technical and financial analysis",
        description:
          "Each vehicle is analysed in detail: history, market price, real ownership cost and technical risk.",
      },
      {
        icon: "eye",
        title: "Total transparency",
        description:
          "No hidden commissions. You know exactly how much each step costs and why we make each decision.",
      },
      {
        icon: "shield",
        title: "Risk focus",
        description:
          "We identify warning signs before purchase: fraud, accident-damaged vehicles, outstanding debts and technical problems.",
      },
      {
        icon: "globe",
        title: "Multilingual service",
        description:
          "We operate in Spanish, English and Portuguese. No language barriers for buying in any European country.",
      },
      {
        icon: "wifi",
        title: "100% online operation",
        description:
          "The entire process is managed remotely. No need for unnecessary travel.",
      },
      {
        icon: "map-pin",
        title: "Based on Costa del Sol",
        description:
          "Local presence in Fuengirola, Málaga. We know the Spanish market and regional procedures.",
      },
    ],
  },
  about: {
    title: "Who we are",
    subtitle:
      "SG Automotive is an online automotive operation, professional and without unnecessary intermediaries.",
    body: "We are a company based in Fuengirola, Costa del Sol, specialised in the purchase, sale, import and advisory of vehicles in Europe. We work completely remotely, which allows us to operate with efficiency and without the costs of a traditional dealership.",
    body2:
      "Our approach is technical, transparent and customer-oriented. We do not sell by volume: we analyse each case in detail, identify the risks and accompany the buyer at every stage of the process.",
    cta: "Talk to us",
    stats: [
      { value: "Costa del Sol", label: "Base of operations" },
      { value: "ES · EN · PT", label: "Languages" },
      { value: "100%", label: "Online management" },
      { value: "EU", label: "Operating market" },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    subtitle: "Everything you need to know before getting started.",
    items: [
      {
        question: "Do you have a physical shop or showroom?",
        answer:
          "No. SG Automotive operates completely online and remotely. All communication, analysis and management takes place by email, WhatsApp and video call. This allows us to work with greater efficiency and at lower cost to the client.",
      },
      {
        question: "Can I import a car from Germany, France or other European countries?",
        answer:
          "Yes. We manage vehicle importation from any EU country to Spain, including purchase, transport, homologation, customs clearance and registration.",
      },
      {
        question: "What documentation do I need to import a vehicle?",
        answer:
          "In most cases you will need your ID or NIE, proof of address in Spain and the vehicle documents (title deed, technical sheet and certificate of conformity). We guide you at every step.",
      },
      {
        question: "Does the price I see include all taxes and procedures?",
        answer:
          "The prices of vehicles in our catalogue are the purchase price. Import costs, VAT, registration tax, ITV and transport are detailed separately depending on the vehicle type and origin.",
      },
      {
        question: "What does VAT reclaimable mean on vehicles?",
        answer:
          "Some vehicles come from commercial operations and allow VAT to be reclaimed if you are self-employed or a company with the right to deduction. It is a significant tax advantage.",
      },
      {
        question: "Do the vehicles have a warranty?",
        answer:
          "It depends on the vehicle and its origin. Those marked 'With warranty' include a valid manufacturer's warranty or contractual warranty. In other cases we can arrange additional warranty insurance.",
      },
      {
        question: "Can I hire you just for the document side?",
        answer:
          "Yes. We offer the Documentary Plan, specifically designed to manage registration, ITV, ownership transfer and other procedures if you have already acquired the vehicle on your own.",
      },
      {
        question: "How long does the import process take?",
        answer:
          "The complete process usually takes between 3 and 6 weeks from vehicle purchase to registered delivery in Spain, depending on the country of origin and current administrative workload.",
      },
      {
        question: "Do you serve clients from all over Spain?",
        answer:
          "Yes. Although we are based in Fuengirola, Málaga, we operate remotely and can manage importation and delivery anywhere in Spain.",
      },
      {
        question: "How do I start?",
        answer:
          "Simply write to us on WhatsApp or email with your needs. We will do a free initial consultation to understand your case and explain the most suitable options.",
      },
    ],
  },
  contact: {
    title: "Contact us",
    subtitle: "Tell us what you need. The first consultation is free.",
    whatsappLabel: "Write to us on WhatsApp",
    emailLabel: "Send us an email",
    location: "Fuengirola, Málaga, Spain",
    responseTime: "Response time: under 24 hours",
  },
  footer: {
    tagline: "Buy and import vehicles in Europe with professional management.",
    location: "Fuengirola, Costa del Sol, Málaga, Spain",
    navTitle: "Navigation",
    navLinks: [
      { label: "Vehicles", href: "#veiculos" },
      { label: "Import", href: "#importacao" },
      { label: "Services", href: "#servicos" },
      { label: "About", href: "#sobre" },
      { label: "Contact", href: "#contato" },
    ],
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    copyright: "SG Automotive. All rights reserved.",
  },
  whatsapp: {
    general: waUrl("Hello, I'd like to get more information about your services."),
    consult: waUrl(
      "Hello, I'm interested in requesting a consultation about vehicle importation. Could you give me more information?"
    ),
    import: waUrl(
      "Hello, I'm interested in the complete vehicle import service to Spain. Could you give me more information?"
    ),
  },
  seo: {
    title: "SG Automotive — Vehicle import and purchase in Europe",
    description:
      "Online company specialised in vehicle importation to Spain, purchase advisory in Europe and document management. Costa del Sol, Fuengirola, Málaga.",
    keywords: [
      "import car to Spain",
      "buy car in Europe",
      "vehicle import advisory Spain",
      "selected vehicles Costa del Sol",
      "car import from Germany to Spain",
      "vehicle management Spain",
    ],
    ogLocale: "en_GB",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PORTUGUÊS
// ─────────────────────────────────────────────────────────────────────────────

const pt: SiteContent = {
  brand: {
    name: "SG Automotive",
    tagline: "Compra e importação de veículos na Europa com gestão profissional.",
  },
  navigation: {
    links: [
      { anchor: "#veiculos", label: "Veículos" },
      { anchor: "#importacao", label: "Importação" },
      { anchor: "#servicos", label: "Serviços" },
      { anchor: "#sobre", label: "Sobre" },
      { anchor: "#contato", label: "Contacto" },
    ],
    cta: "Solicitar consulta",
  },
  hero: {
    badge: "Costa del Sol · Fuengirola · Málaga",
    title: "Compra e importação de veículos na Europa com gestão profissional.",
    subtitle:
      "Veículos selecionados, análise técnica e gestão completa ou parcial do processo de compra, importação e regularização em Espanha.",
    ctaVehicles: "Ver veículos disponíveis",
    ctaConsult: "Solicitar consulta",
    trust: [
      "Operação 100% online",
      "Atendimento em espanhol, inglês e português",
      "Baseados na Costa del Sol",
    ],
  },
  vehicles: {
    title: "Veículos disponíveis",
    subtitle: "Unidades verificadas, com historial comprovado e documentação em ordem.",
    empty:
      "Brevemente novos veículos disponíveis. Contacte-nos para mais informações.",
    contactVehicle: "Consultar pelo WhatsApp",
    photosLabel: "Solicitar mais fotos",
    fuel: {
      diesel: "Diesel",
      gasoline: "Gasolina",
      hybrid: "Híbrido",
      electric: "Elétrico",
      plugin_hybrid: "Híbrido plug-in",
    },
    transmission: { automatic: "Automático", manual: "Manual" },
    tagLabels: {
      "iva-recuperable": "IVA recuperável",
      garantia: "Com garantia",
      "pronto-entrega": "Entrega imediata",
    },
    tagColors: TAG_COLORS,
  },
  services: {
    title: "O que fazemos",
    subtitle:
      "Serviços concebidos para quem compra ou importa veículos com critério e sem surpresas.",
    items: [
      {
        icon: "car",
        title: "Venda de veículos selecionados",
        description:
          "Oferecemos unidades com historial verificado, análise técnica completa e documentação em ordem. Nada chega ao nosso catálogo sem passar pelo nosso filtro.",
      },
      {
        icon: "search",
        title: "Consultoria de compra",
        description:
          "Pesquisamos, analisamos e comparamos o veículo que precisa no mercado europeu. Recebe um relatório claro antes de tomar qualquer decisão.",
      },
      {
        icon: "ship",
        title: "Importação completa",
        description:
          "Gerimos todo o processo: compra, transporte, despacho aduaneiro, homologação, ITV e matrícula em Espanha. Sem stress, sem burocracia.",
      },
      {
        icon: "file-text",
        title: "Apoio documental",
        description:
          "Tratamos de toda a documentação necessária: mudança de titularidade, alta do veículo, ITV, seguro temporário e trâmites junto da DGT.",
      },
      {
        icon: "truck",
        title: "Transporte e logística",
        description:
          "Coordenamos o transporte do veículo desde qualquer ponto da Europa até à sua morada em Espanha, com rastreamento e seguro incluídos.",
      },
      {
        icon: "shield-check",
        title: "Consultoria de risco",
        description:
          "Se tiver dúvidas sobre uma oferta, analisamos o veículo, o vendedor e o processo antes de assumir qualquer risco. Evite fraudes e veículos problemáticos.",
      },
    ],
  },
  importSection: {
    badge: "Serviço completo",
    title: "Importação de veículos para Espanha",
    subtitle:
      "Gerimos todo o processo, desde a seleção do veículo na Europa até à entrega com matrícula espanhola.",
    includedTitle: "O que inclui o serviço",
    included: [
      "Análise técnica e verificação de historial",
      "Negociação e gestão da compra",
      "Transporte porta a porta com seguro",
      "Despacho aduaneiro e homologação",
      "ITV e matrícula espanhola",
      "Documentação completa em ordem",
    ],
    cta: "Solicitar gestão de importação",
    steps: [
      {
        number: "01",
        title: "Origem",
        description:
          "Selecionamos e verificamos o veículo no país de origem: Alemanha, França, Países Baixos e mais.",
      },
      {
        number: "02",
        title: "Transporte",
        description:
          "Coordenamos o traslado até Espanha com seguro de transporte incluído e rastreamento em tempo real.",
      },
      {
        number: "03",
        title: "Regularização",
        description:
          "Homologação, ITV, matrícula e entrega com toda a documentação em ordem e pronta para circular.",
      },
    ],
  },
  plans: {
    title: "Planos de consultoria",
    subtitle:
      "Escolha o nível de suporte que precisa para o seu processo de compra ou importação.",
    badge: "Mais popular",
    cta: "Solicitar plano",
    items: [
      {
        name: "Documental",
        description:
          "Para quem já tem o veículo e precisa de apoio burocrático.",
        price: "A partir de €290",
        features: [
          "Gestão de matrícula em Espanha",
          "Trâmites ITV e homologação",
          "Mudança de titularidade",
          "Alta na DGT",
          "Suporte por email e WhatsApp",
        ],
        featured: false,
      },
      {
        name: "Parcial",
        description: "Suporte em etapas-chave do processo sem gestão total.",
        price: "A partir de €490",
        features: [
          "Análise do veículo selecionado",
          "Verificação de historial",
          "Negociação e compra",
          "Coordenação de transporte",
          "Gestão documental básica",
          "Suporte contínuo",
        ],
        featured: true,
      },
      {
        name: "Completo",
        description: "Gestão total desde a pesquisa até à entrega.",
        price: "A partir de €890",
        features: [
          "Pesquisa personalizada na Europa",
          "Análise técnica e financeira",
          "Negociação, compra e pagamento",
          "Importação com despacho aduaneiro",
          "Transporte porta a porta",
          "Matrícula, ITV e documentação",
          "Suporte prioritário dedicado",
        ],
        featured: false,
      },
    ],
  },
  howItWorks: {
    title: "Como funciona",
    subtitle: "Um processo claro, transparente e sem surpresas. Do início ao fim.",
    steps: [
      {
        number: "01",
        title: "Briefing",
        description:
          "Conte-nos que veículo procura, o seu orçamento e os seus requisitos. Sem compromisso inicial.",
      },
      {
        number: "02",
        title: "Pesquisa e análise",
        description:
          "Identificamos opções no mercado europeu, analisando historial, preço de mercado e estado técnico.",
      },
      {
        number: "03",
        title: "Apresentação e decisão",
        description:
          "Recebe um relatório claro com opções recomendadas. Decide com informação completa.",
      },
      {
        number: "04",
        title: "Compra e gestão",
        description:
          "Gerimos a compra, o transporte desde a origem e todos os trâmites de importação e regularização.",
      },
      {
        number: "05",
        title: "Entrega",
        description:
          "O veículo chega matriculado, com ITV, documentação em ordem e pronto para circular em Espanha.",
      },
    ],
  },
  differentials: {
    title: "Porquê SG Automotive",
    subtitle:
      "Não somos uma concessionária. Somos um operador especializado que trabalha para o comprador.",
    items: [
      {
        icon: "bar-chart-2",
        title: "Análise técnica e financeira",
        description:
          "Cada veículo é analisado em detalhe: historial, preço de mercado, custo real de propriedade e risco técnico.",
      },
      {
        icon: "eye",
        title: "Transparência total",
        description:
          "Sem comissões ocultas. Sabe exatamente quanto custa cada passo e por que tomamos cada decisão.",
      },
      {
        icon: "shield",
        title: "Foco no risco",
        description:
          "Identificamos sinais de alerta antes da compra: fraudes, veículos acidentados, dívidas pendentes e problemas técnicos.",
      },
      {
        icon: "globe",
        title: "Atendimento multilingue",
        description:
          "Operamos em espanhol, inglês e português. Sem barreiras linguísticas para comprar em qualquer país da Europa.",
      },
      {
        icon: "wifi",
        title: "Operação 100% online",
        description:
          "Todo o processo é gerido de forma remota. Sem necessidade de deslocações desnecessárias.",
      },
      {
        icon: "map-pin",
        title: "Baseados na Costa del Sol",
        description:
          "Presença local em Fuengirola, Málaga. Conhecemos o mercado espanhol e os trâmites da região.",
      },
    ],
  },
  about: {
    title: "Quem somos",
    subtitle:
      "A SG Automotive é uma operação automóvel online, profissional e sem intermediários desnecessários.",
    body: "Somos uma empresa sediada em Fuengirola, Costa del Sol, especializada na compra, venda, importação e consultoria de veículos na Europa. Trabalhamos de forma completamente remota, o que nos permite operar com eficiência e sem os custos de uma concessionária tradicional.",
    body2:
      "A nossa abordagem é técnica, transparente e orientada para o cliente. Não vendemos por volume: analisamos cada caso em detalhe, identificamos os riscos e acompanhamos o comprador em cada etapa do processo.",
    cta: "Falar connosco",
    stats: [
      { value: "Costa del Sol", label: "Base de operações" },
      { value: "ES · EN · PT", label: "Idiomas de atendimento" },
      { value: "100%", label: "Gestão online" },
      { value: "EU", label: "Mercado de atuação" },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    subtitle: "Tudo o que precisa de saber antes de começar.",
    items: [
      {
        question: "Têm loja física ou showroom?",
        answer:
          "Não. A SG Automotive opera completamente de forma online e remota. Toda a comunicação, análise e gestão é feita por email, WhatsApp e videochamada. Isto permite-nos trabalhar com maior eficiência e menor custo para o cliente.",
      },
      {
        question: "Posso importar um carro da Alemanha, França ou outro país europeu?",
        answer:
          "Sim. Gerimos a importação de veículos de qualquer país da União Europeia para Espanha, incluindo a compra, transporte, homologação, despacho e matrícula.",
      },
      {
        question: "Que documentação preciso para importar um veículo?",
        answer:
          "Na maioria dos casos precisará do seu BI/NIE, comprovativo de morada em Espanha e os documentos do veículo (título de propriedade, ficha técnica e certificado de conformidade). Guiamo-lo em cada passo.",
      },
      {
        question: "O preço que vejo inclui todos os impostos e trâmites?",
        answer:
          "O preço dos veículos no nosso catálogo é o preço de custo. As despesas de importação, IVA, imposto de matriculação, ITV e transporte são detalhadas separadamente em função do tipo de veículo e origem.",
      },
      {
        question: "O que significa IVA recuperável nos veículos?",
        answer:
          "Alguns veículos provêm de operações comerciais e permitem recuperar o IVA se for trabalhador independente ou empresa com direito a dedução. É uma vantagem fiscal significativa.",
      },
      {
        question: "Os veículos têm garantia?",
        answer:
          "Depende do veículo e da sua procedência. Os que aparecem com etiqueta 'Com garantia' incluem garantia de fabricante vigente ou garantia contratual. Noutros casos podemos gerir seguros de garantia adicionais.",
      },
      {
        question: "Posso contratar apenas a parte documental?",
        answer:
          "Sim. Oferecemos o Plano Documental, especificamente concebido para gerir a matrícula, ITV, mudança de titularidade e demais trâmites se já adquiriu o veículo por conta própria.",
      },
      {
        question: "Quanto tempo demora o processo de importação?",
        answer:
          "O processo completo costuma demorar entre 3 e 6 semanas desde a compra do veículo até à entrega matriculada em Espanha, dependendo do país de origem e da carga administrativa vigente.",
      },
      {
        question: "Atendem clientes de toda a Espanha?",
        answer:
          "Sim. Embora estejamos sediados em Fuengirola, Málaga, operamos remotamente e podemos gerir a importação e entrega em qualquer ponto de Espanha.",
      },
      {
        question: "Como começo?",
        answer:
          "Simplesmente escreva-nos pelo WhatsApp ou email com as suas necessidades. Faremos uma consulta inicial gratuita para entender o seu caso e explicar as opções mais adequadas.",
      },
    ],
  },
  contact: {
    title: "Contacte-nos",
    subtitle: "Conte-nos o que precisa. A primeira consulta é gratuita.",
    whatsappLabel: "Escreva-nos pelo WhatsApp",
    emailLabel: "Envie-nos um email",
    location: "Fuengirola, Málaga, Espanha",
    responseTime: "Tempo de resposta: menos de 24 horas",
  },
  footer: {
    tagline: "Compra e importação de veículos na Europa com gestão profissional.",
    location: "Fuengirola, Costa del Sol, Málaga, Espanha",
    navTitle: "Navegação",
    navLinks: [
      { label: "Veículos", href: "#veiculos" },
      { label: "Importação", href: "#importacao" },
      { label: "Serviços", href: "#servicos" },
      { label: "Sobre", href: "#sobre" },
      { label: "Contacto", href: "#contato" },
    ],
    privacy: "Política de privacidade",
    terms: "Termos de utilização",
    copyright: "SG Automotive. Todos os direitos reservados.",
  },
  whatsapp: {
    general: waUrl("Olá, gostaria de obter mais informações sobre os vossos serviços."),
    consult: waUrl(
      "Olá, tenho interesse em solicitar uma consulta sobre importação de veículos. Podem dar-me mais informações?"
    ),
    import: waUrl(
      "Olá, tenho interesse no serviço de importação completa de veículos para Espanha. Podem dar-me mais informações?"
    ),
  },
  seo: {
    title: "SG Automotive — Importação e compra de veículos na Europa",
    description:
      "Empresa online especializada em importação de carros para Espanha, consultoria de compra na Europa e gestão documental. Costa del Sol, Fuengirola, Málaga.",
    keywords: [
      "importação de carros para Espanha",
      "comprar carro na Europa",
      "consultoria importação veículos Espanha",
      "veículos selecionados Costa del Sol",
      "importação carros Fuengirola",
      "gestão automóvel Espanha",
    ],
    ogLocale: "pt_PT",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Export
// ─────────────────────────────────────────────────────────────────────────────

export const siteContent: Record<Locale, SiteContent> = { es, en, pt };

// Vehicle WhatsApp message — built per locale in the component
export function buildVehiclePhotosWaHref(
  car: { make: string; model: string; version: string; year: number; id: string },
  locale: Locale
): string {
  if (locale === "en") {
    return waUrl(
      `Hello, I would like to see more photos of the ${car.make} ${car.model} ${car.version} (${car.year}) — ref: ${car.id}.`
    );
  }
  if (locale === "pt") {
    return waUrl(
      `Olá, gostaria de ver mais fotos do ${car.make} ${car.model} ${car.version} (${car.year}) — ref: ${car.id}.`
    );
  }
  return waUrl(
    `Hola, me gustaría ver más fotos del ${car.make} ${car.model} ${car.version} (${car.year}) — ref: ${car.id}.`
  );
}

export function buildVehicleWaHref(
  car: { make: string; model: string; version: string; year: number; id: string },
  kmFormatted: string,
  locale: Locale
): string {
  if (locale === "en") {
    return waUrl(
      `Hello, I'm interested in the ${car.make} ${car.model} ${car.version} (${car.year}, ${kmFormatted}) — ref: ${car.id}. Could you give me more information?`
    );
  }
  if (locale === "pt") {
    return waUrl(
      `Olá, tenho interesse no ${car.make} ${car.model} ${car.version} (${car.year}, ${kmFormatted}) — ref: ${car.id}. Podem dar-me mais informações?`
    );
  }
  return waUrl(
    `Hola, me interesa el ${car.make} ${car.model} ${car.version} (${car.year}, ${kmFormatted}) — ref: ${car.id}. ¿Podéis darme más información?`
  );
}
