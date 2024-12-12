"use client";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleModal = (key: string) => {
    if (key === 'privacy') {
      setModalContent('Política de Privacidade');
    } else if (key === 'terms') {
      setModalContent('Termos de Uso');
    }
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="flexCenter mb-10">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <h1 className="text-2xl font-normal">
              FrutoDa<span className="font-bold text-primary">Vide</span>
            </h1>
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
  {FOOTER_LINKS.map((columns, i) => (
    <FooterColumn title={columns.title} key={i}>
      <ul className="regular-14 flex flex-col gap-4 text-gray-30">
        {columns.links.map((link, index) => {
          if (typeof link === 'string') {
            // Caso o link seja uma string simples
            return (
              <li key={index} className="text-blue-500 underline">
                {link}
              </li>
            );
          } else if (link.href) {
            // Caso o link seja um objeto com `href`
            return (
              <li key={index}>
                <Link href={link.href} className="text-blue-500 underline">
                  {link.label}
                </Link>
              </li>
            );
          } else {
            // Caso o link seja um objeto com `key`
            return (
              <li key={index}>
                <button
                  onClick={() => handleModal(link.key!)}
                  className="text-blue-500 underline"
                >
                  {link.label}
                </button>
              </li>
            );
          }
        })}
      </ul>
    </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <div
                    key={index}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </div>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link, index) => (
                    <li key={index}>
                      <Link href="/" className="flex items-center">
                        <Image src={link} alt="logo" width={24} height={24} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2025 DaVide Decorações | Todos os direitos reservados.
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">{modalContent}</h2>
            <p className="text-gray-600 mb-4">
              {modalContent === 'Política de Privacidade'
                ? '1. Introdução da Política de Privacidade: A Fruto Da Vide Decorações  valoriza a privacidade de seus usuários e clientes, bem como a integridade do conteúdo disponibilizado nesta plataforma. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos as informações pessoais fornecidas pelos usuários e descreve os termos de uso dos conteúdos presentes nesta página.   2. Coleta e Uso de Informações: Ao navegar na nossa página, podemos coletar informações pessoais dos usuários, como nome, e-mail, número de telefone e endereço, fornecidos através da conversa com os atendentes.  3.  Proteção de Dados: Garantimos que as informações pessoais fornecidas serão armazenadas de maneira segura e nunca serão compartilhadas com terceiros sem o consentimento explícito do usuário.  4. Direitos de Propriedade Intelectual  4.1 Conteúdo da Página: Todo o conteúdo disponível nesta landing page, incluindo textos, imagens, logotipos, design, e layout, é propriedade exclusiva da Fruto Da Vide Decorações e está protegido pelas leis brasileiras de direitos autorais (Lei nº 9.610/1998).  4.2 Proibição de Cópia ou Reprodução: É expressamente proibida a cópia, reprodução, distribuição, modificação ou qualquer outro uso do conteúdo desta página sem autorização prévia e por escrito da Fruto Da Vide Decorações. O descumprimento desta cláusula poderá resultar em medidas legais.  5. Contato: Se vocé tiver alguma duvida ou sugestão sobre nossa Política de Privacidade, por favor entre em contato conosco atraves do e-mail: Frutodavide.compras@gmail.com'
                : '1. Aceitação dos Termos: Ao utilizar esta landing page, o usuário concorda com os termos estabelecidos nesta Política de Privacidade e com as condições de uso aqui descritas. 2. Atualizações da Política: Esta Política de Privacidade pode ser atualizada periodicamente. Qualquer alteração será publicada nesta página, e recomendamos que os usuários revisem regularmente o documento.'}
            </p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
