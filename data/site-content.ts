// ─────────────────────────────────────────────────────────────────────────────
// SG Automotive — Static Spanish content (ES)
// Replaces next-intl for the /es static route.
// All text is hardcoded in Spanish; EN/PT locales continue to use next-intl.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_URL = "https://sgautomotive.com";
export const SITE_NAME = "SG Automotive";
export const WHATSAPP_NUMBER = "34662625953";
export const WHATSAPP_DISPLAY = "+34 662 62 59 53";
export const EMAIL_ADDRESS = "sgautomotive.es@gmail.com";

export function waUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_GENERAL = waUrl(
  "Hola, me gustaría obtener más información sobre vuestros servicios."
);
export const WA_CONSULT = waUrl(
  "Hola, me interesa solicitar una consulta sobre importación de vehículos. ¿Podéis darme más información?"
);
export const WA_IMPORT = waUrl(
  "Hola, me interesa el servicio de importación completa de vehículos a España. ¿Podéis darme más información?"
);

// ─── Nav ─────────────────────────────────────────────────────────────────────

export const nav = {
  links: [
    { anchor: "#veiculos", label: "Vehículos" },
    { anchor: "#importacao", label: "Importación" },
    { anchor: "#servicos", label: "Servicios" },
    { anchor: "#sobre", label: "Nosotros" },
    { anchor: "#contato", label: "Contacto" },
  ] as const,
  cta: "Solicitar consulta",
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
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
};

// ─── Vehicles / Catalog ───────────────────────────────────────────────────────

export const vehiclesContent = {
  title: "Vehículos disponibles",
  subtitle: "Unidades verificadas, con historial comprobado y documentación en regla.",
  empty: "Próximamente nuevos vehículos disponibles. Contáctanos para más información.",
  contactVehicle: "Consultar por WhatsApp",
  fuel: {
    diesel: "Diésel",
    gasoline: "Gasolina",
    hybrid: "Híbrido",
    electric: "Eléctrico",
    plugin_hybrid: "Híbrido enchufable",
  } as Record<string, string>,
  transmission: {
    automatic: "Automático",
    manual: "Manual",
  } as Record<string, string>,
  tagColors: {
    "iva-recuperable": "bg-trust/15 text-trust-light border-trust/30",
    garantia: "bg-accent/15 text-accent border-accent/30",
    "pronto-entrega": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  } as Record<string, string>,
  tagLabels: {
    "iva-recuperable": "IVA recuperable",
    garantia: "Con garantía",
    "pronto-entrega": "Pronta entrega",
  } as Record<string, string>,
};

// ─── Services ─────────────────────────────────────────────────────────────────

export const services = {
  title: "Lo que hacemos",
  subtitle:
    "Servicios diseñados para quienes compran o importan vehículos con criterio y sin sorpresas.",
  items: [
    {
      icon: "car" as const,
      title: "Venta de vehículos seleccionados",
      description:
        "Ofrecemos unidades con historial verificado, análisis técnico completo y documentación en regla. Nada llega a nuestro catálogo sin pasar por nuestro filtro.",
    },
    {
      icon: "search" as const,
      title: "Asesoría de compra",
      description:
        "Buscamos, analizamos y comparamos el vehículo que necesitas en el mercado europeo. Recibes un informe claro antes de tomar cualquier decisión.",
    },
    {
      icon: "ship" as const,
      title: "Importación completa",
      description:
        "Gestionamos todo el proceso: compra, transporte, despacho aduanero, homologación, ITV y matrícula en España. Sin estrés, sin burocracia.",
    },
    {
      icon: "file-text" as const,
      title: "Apoyo documental",
      description:
        "Gestionamos toda la documentación necesaria: cambio de titularidad, alta de vehículo, ITV, seguro temporal y trámites ante la DGT.",
    },
    {
      icon: "truck" as const,
      title: "Transporte y logística",
      description:
        "Coordinamos el transporte del vehículo desde cualquier punto de Europa hasta tu dirección en España, con seguimiento y seguro incluidos.",
    },
    {
      icon: "shield-check" as const,
      title: "Consultoría de riesgo",
      description:
        "Si tienes dudas sobre una oferta, analizamos el vehículo, el vendedor y el proceso antes de que asumas cualquier riesgo. Evita estafas y vehículos problemáticos.",
    },
  ],
};

// ─── Import Section ────────────────────────────────────────────────────────────

export const importSection = {
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
};

// ─── Plans ───────────────────────────────────────────────────────────────────

export const plans = {
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
};

// ─── How It Works ─────────────────────────────────────────────────────────────

export const howItWorks = {
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
      title: "Compra, transporte y trámites",
      description:
        "Gestionamos la compra, el transporte desde origen y todos los trámites de importación y regularización.",
    },
    {
      number: "05",
      title: "Entrega y regularización",
      description:
        "El vehículo llega matriculado, con ITV, documentación en regla y listo para circular en España.",
    },
  ],
};

// ─── Differentials ────────────────────────────────────────────────────────────

export const differentials = {
  title: "Por qué SG Automotive",
  subtitle:
    "No somos una concesionaria. Somos un operador especializado que trabaja para el comprador.",
  items: [
    {
      icon: "bar-chart-2" as const,
      title: "Análisis técnico y financiero",
      description:
        "Cada vehículo es analizado en detalle: historial, precio de mercado, coste real de propiedad y riesgo técnico.",
    },
    {
      icon: "eye" as const,
      title: "Transparencia total",
      description:
        "Sin comisiones ocultas. Sabes exactamente cuánto cuesta cada paso y por qué tomamos cada decisión.",
    },
    {
      icon: "shield" as const,
      title: "Foco en el riesgo",
      description:
        "Identificamos señales de alerta antes de la compra: fraudes, vehículos accidentados, deudas pendientes y problemas técnicos.",
    },
    {
      icon: "globe" as const,
      title: "Atención multilingüe",
      description:
        "Operamos en español, inglés y portugués. Sin barreras idiomáticas para comprar en cualquier país de Europa.",
    },
    {
      icon: "wifi" as const,
      title: "Operación 100% online",
      description:
        "Todo el proceso se gestiona de forma remota. Sin necesidad de desplazamientos innecesarios.",
    },
    {
      icon: "map-pin" as const,
      title: "Basados en Costa del Sol",
      description:
        "Presencia local en Fuengirola, Málaga. Conocemos el mercado español y los trámites de la región.",
    },
  ],
};

// ─── About ───────────────────────────────────────────────────────────────────

export const about = {
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
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const faq = {
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
        "Algunos vehículos provienen de operaciones comerciales y permiten recuperar el IVA si eres autónomo o empresa con derecho a deducción. Es una ventaja fiscal significativa. Te indicamos cuáles aplican en cada caso.",
    },
    {
      question: "¿Los vehículos tienen garantía?",
      answer:
        "Depende del vehículo y su procedencia. Los que aparecen con etiqueta 'Con garantía' incluyen garantía de fabricante vigente o garantía contractual. En otros casos podemos gestionar seguros de garantía adicionales.",
    },
    {
      question: "¿Puedo contrataros solo para la parte documental si ya tengo el coche?",
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
};

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contact = {
  title: "Contáctanos",
  subtitle: "Cuéntanos lo que necesitas. La primera consulta es gratuita.",
  whatsappLabel: "Escríbenos por WhatsApp",
  emailLabel: "Envíanos un correo",
  location: "Fuengirola, Málaga, España",
  responseTime: "Tiempo de respuesta: menos de 24h",
};

// ─── Footer ───────────────────────────────────────────────────────────────────

export const footer = {
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
};

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const meta = {
  title: "SG Automotive — Importación y compra de vehículos en Europa",
  description:
    "Empresa online especializada en importación de coches a España, asesoría de compra en Europa y gestión documental. Costa del Sol, Fuengirola, Málaga.",
  keywords: [
    "importación de coches a España",
    "comprar coche en Europa",
    "asesoría importación vehículos España",
    "vehículos seleccionados Costa del Sol",
    "compra de coches en Alemania para España",
    "importación coches Fuengirola",
    "gestión automotiva España",
  ],
};
