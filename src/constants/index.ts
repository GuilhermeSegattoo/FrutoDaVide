// NAVIGATION
export const NAV_LINKS = [
  { href: '#home', key: 'home', label: 'Home' },
  { href: '#sobre', key: 'how_hilink_work', label: 'Sobre nós' },
  { href: '#produtos', key: 'pricing ', label: 'Produtos' },
  { href: '#contato', key: 'contact_us', label: 'Contato' },
];

// CAMP SECTION


// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Lençóis',
    icon: '/cobertor.png',
    variant: 'green',
    description:
      'Lençóis de alta qualidade para transformar o conforto de seus hóspedes.',
  },
  {
    title: 'Toalhas',
    icon: '/book.png',
    variant: 'green',
    description:
      'Toalhas macias de alta qualidade para aumentar o nível de conforto do seu hóspede.',
  },
  {
    title: 'Enxovais',
    icon: '/cm.png',
    variant: 'green',
    description:
      "Criamos camas elegantes e aconchegantes com roupas de cama sob medida.",
  },
  {
    title: 'Travesseiros',
    icon: '/travesseiros.png',
    variant: 'green',
    description:
      "Travesseiros perfeitos com muito conforto.",
  },
  {
    title: 'Cortinas',
    icon: '/cort.png',
    variant: 'green',
    description:
      'Cortinas sob medida para trazer o equilíbrio perfeito entre beleza e funcionalidade.',
  },
  {
    title: 'Persianas',
    icon: '/cego.png',
    variant: 'green',
    description:
      'Persianas sob medida para seu apartamento ou flat.',
  },
  {
    title: 'Bancadas',
    icon: '/mesa-redonda.png',
    variant: 'orange',
    description:
      'Soluções únicas para bancadas ao seu gosto.',
  },
  {
    title: 'Sofás',
    icon: '/sofa.png',
    variant: 'orange',
    description:
      'Sofás que combinam design e praticidade do ambiente.',
  },
];

// FOOTER SECTION
type FooterLink = 
  | { label: string; href?: string; key?: string }
  | string;

export const FOOTER_LINKS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'mais opções',
    links: [
      { label: 'Sobre', href: '#sobre' },
      { label: 'Produtos', href: '#produtos' },
      { label: 'Política de Privacidade', key: 'privacy' },
      { label: 'Termos de Uso', key: 'terms' },
      { label: 'Contato', href: '#contato' },
    ],
  },
  {
    title: 'Contate-nos',
    links: ['+55 (61) 99982-1919', 'frutodavide.compras@gmail.com',  'Brasília - DF', '59625-900', 'CNPJ: 37.109.394/0001-20'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Já atendemos....',
  links: [
    { label: 'Praça do Bicalho - Taguatinga, DF', value: 'Loja' },
    { label: 'Avenida Comercial - Taguatinga, DF', value: 'Loja' },
    { label: 'Rua 10 - Vicente Pires, DF', value: 'Loja' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/whatsapp.png',
  ],
};