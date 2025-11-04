export const SITE_CONFIG = {
  name: "Raffiner",
  description: "Especialistas em locação de louças e artigos para festas. Crie momentos inesquecíveis conosco.",
  phone: "(47) 99924-0805",
  whatsapp: "5547999240805",
  email: "contato@raffiner.com.br",
  instagram: "@raffiner.mesaposta",
  website: "www.raffiner.com.br",
  founded: "2018",
} as const;

export const SHOWROOM_LOCATION = {
  address: "R. Alexandre Fleming, 289 - Centro - Itajaí / SC",
  latitude: -26.908794,
  longitude: -48.666733,
} as const;

type NavigationItem = {
  path: string;
  label: string;
  external?: boolean;
  children?: Array<{
    path: string;
    label: string;
    external?: boolean;
  }>;
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { path: "/", label: "Home" },
  { path: "/quem-somos", label: "Quem Somos" },
  { 
    path: "/servicos", 
    label: "Serviços",
    children: [
      { path: "/o-que-fazemos", label: "O Que Fazemos" },
      { path: "/diferenciais", label: "Diferenciais" },
      { path: "/como-funciona", label: "Como Funciona" },
    ]
  },
  { path: "https://www.alugueraffiner.com.br/", label: "Catálogo", external: true },
  { path: "/seja-um-parceiro", label: "Parceiros" },
  { path: "/faq", label: "FAQ" },
  { path: "/contato", label: "Contato" },
];

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${SITE_CONFIG.whatsapp}`,
  instagram: "https://instagram.com/raffiner.mesaposta",
  youtube: "https://www.youtube.com/@raffiner.mesaposta",
  youtubeChannelId: "UC5rj-dlZG5HjRP5u3SQ5zzA",
  email: `mailto:${SITE_CONFIG.email}`,
} as const;

type ContactInfo = {
  type: string;
  label: string;
  value: string;
  icon: string;
  color: string;
  href?: string;
};

export const CONTACT_INFO: ContactInfo[] = [
  {
    type: "location",
    label: "Endereço",
    value: "R. Alexandre Fleming, 289 - Centro - Itajaí / SC",
    icon: "location",
    color: "rose",
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("R. Alexandre Fleming, 289 - Centro - Itajaí / SC")}`,
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    value: `${SITE_CONFIG.phone}`,
    icon: "whatsapp",
    color: "green",
    href: SOCIAL_LINKS.whatsapp,
  },
  {
    type: "email",
    label: "E-mail",
    value: SITE_CONFIG.email,
    icon: "email",
    color: "blue",
    href: SOCIAL_LINKS.email,
  },
  {
    type: "instagram",
    label: "Instagram",
    value: SITE_CONFIG.instagram,
    icon: "instagram",
    color: "purple",
    href: SOCIAL_LINKS.instagram,
  },
  {
    type: "youtube",
    label: "YouTube",
    value: "@raffiner.mesaposta",
    icon: "youtube",
    color: "red",
    href: SOCIAL_LINKS.youtube,
  },
];


export const COMPANY_VALUES = [
  {
    title: "Amor pelos Detalhes",
    description: "Cada composição é pensada com carinho e atenção aos mínimos detalhes",
    icon: "heart",
  },
  {
    title: "Criatividade",
    description: "Soluções inovadoras e únicas para cada ocasião especial",
    icon: "lightning",
  },
  {
    title: "Excelência",
    description: "Compromisso com a qualidade e satisfação total do cliente",
    icon: "check",
  },
] as const;

export const COMPANY_ADVANTAGES = [
  {
    title: "Atendimento Personalizado",
    description: "Atendimento feito diretamente por Renata, fundadora e especialista em mesa postagem",
    icon: "user",
  },
  {
    title: "Peças Exclusivas",
    description: "Peças exclusivas, sofisticadas e em perfeito estado",
    icon: "check",
  },
  {
    title: "Experiência do Cliente",
    description: "Foco na experiência do cliente: cada montagem é pensada com carinho e intuição",
    icon: "heart",
  },
  {
    title: "Entrega e Retirada",
    description: "Entrega e retirada com todo o cuidado e praticidade",
    icon: "arrowUpDown",
  },
  {
    title: "Higienização Profissional",
    description: "Higienização profissional e embalagem individual de cada item",
    icon: "lightbulb",
  },
  {
    title: "Experiência Afetiva",
    description: "Experiência afetiva e personalizada, com composições que contam histórias",
    icon: "heart",
  },
] as const;

export const PARTNER_SOLUTIONS = [
  {
    title: "Locação para eventos terceirizados",
    description: "Você pode retirar os itens diretamente em nosso depósito ou solicitar entrega com taxas adicionais.",
    icon: "box",
    features: [
      "Retirada direta no depósito",
      "Entrega com taxa adicional",
      "Condições especiais para parceiros"
    ] as string[]
  },
  {
    title: "Contratação com montagem",
    description: "Além da locação, oferecemos a montagem completa, garantindo praticidade e um resultado impecável para o seu evento.",
    icon: "building",
    features: [
      "Montagem profissional",
      "Resultado impecável",
      "Praticidade total"
    ] as string[]
  },
  {
    title: "Indicação de clientes",
    description: "Se o seu cliente precisa de mesa posta e você não consegue atender, indique ao Raffiner e garanta que ele terá o padrão de qualidade que você confia.",
    icon: "users",
    features: [
      "Padrão de qualidade garantido",
      "Comissão por indicação",
      "Parceria de confiança"
    ] as string[]
  }
] as const;

export const PARTNER_EXAMPLES = [
  {
    title: "Cerimonialistas",
    description: "Para casamentos e eventos especiais, oferecemos louças sofisticadas que complementam perfeitamente a decoração.",
    icon: "calendar"
  },
  {
    title: "Decoradores",
    description: "Amplie seu portfólio oferecendo soluções completas em mesa posta para seus clientes.",
    icon: "building"
  },
  {
    title: "Assessores de Eventos",
    description: "Parceria estratégica para oferecer serviços premium e aumentar a satisfação dos clientes.",
    icon: "users"
  }
] as const;