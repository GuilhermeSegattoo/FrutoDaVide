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
    title: 'Toalhas  & Lençóis',
    icon: '/book.png',
    variant: 'green',
    description:
      'Toalhas macias e lençóis de alta qualidade para transformar o conforto de seus ambientes.',
  },
  {
    title: 'Roupas de Cama & Travesseiros',
    icon: '/bed.png',
    variant: 'green',
    description:
      "Criamos camas elegantes e aconchegantes com roupas de cama sob medida e travesseiros perfeitos.",
  },
  {
    title: 'Cortinas & Persianas',
    icon: '/cortina.png',
    variant: 'green',
    description:
      'Cortinas e persianas sob medida para trazer o equilíbrio perfeito entre beleza e funcionalidade.',
  },
  {
    title: 'Bancadas & Sofás',
    icon: '/sofa.png',
    variant: 'orange',
    description:
      'Soluções únicas para bancadas e sofás que combinam design e praticidade.',
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