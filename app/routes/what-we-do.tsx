import { Layout } from "../components/Layout";
import { Button, HeroSection, ContentSection, SocialButton } from "../components/ui";
import { SVG_ICONS } from "../lib/icons";

export function meta() {
  return [
    { title: "O Que Fazemos - Raffiner" },
    { name: "description", content: "Soluções completas para quem deseja receber bem. Locação de louças, montagem de mesa posta, organização de eventos e cursos." },
  ];
}

export default function WhatWeDo() {
  return (
    <Layout>
      <HeroSection
        title="O QUE FAZEMOS"
        subtitle="Soluções completas para quem deseja receber bem"
        highlightText="FAZEMOS"
        background="gradient"
      />

      <ContentSection
        title="Locação de itens para mesa posta"
        description={[
          "Louças lindas, sem precisar comprar nada.",
          "Louças, talheres, taças, sousplats, jogos americanos e muito mais. Itens exclusivos, selecionados com bom gosto e qualidade."
        ]}
        imageIcon={SVG_ICONS.box}
        imageText="Foto das louças"
        background="white"
      >
        <div className="bg-[rgb(221_218_212)] rounded-2xl p-6 mb-6">
          <p className="text-2xl font-bold text-[rgb(63_9_22)]">Valores a partir de R$ 1,00 por item</p>
        </div>
        <Button 
          href="https://alugueraffiner.estoquenow.site/"
          external
          variant="primary"
          size="lg"
          className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
        >
          <span>Ver Catálogo</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={SVG_ICONS.creditCard} />
          </svg>
        </Button>
      </ContentSection>

      <ContentSection
        title="Montagem de mesa posta e decoração"
        description={[
          "Composições pensadas com exclusividade, sob medida para seu momento.",
          "Transformamos o ambiente com composições personalizadas. Participamos também restaurantes e buffets, com serviço de montagem no local."
        ]}
        imageIcon={SVG_ICONS.grid}
        imageText="Foto da montagem"
        background="gradient"
        reverse={true}
      >
        <Button 
          to="/contato" 
          variant="secondary"
          size="lg"
          className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
        >
          <span>Solicitar Orçamento</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={SVG_ICONS.check} />
          </svg>
        </Button>
      </ContentSection>

      <ContentSection
        title="Organização de pequenos eventos"
        description={[
          "Celebrações intimistas com charme e zero preocupação.",
          "Chás, aniversários, almoços em casa ou celebrações afetivas. Cuidamos de tudo para que você aproveite cada momento."
        ]}
        imageIcon={SVG_ICONS.calendar}
        imageText="Foto de evento organizado"
        background="white"
      >
        <SocialButton 
          platform="whatsapp"
          href="https://wa.me/5547999240805"
          text="Falar Conosco"
          size="lg"
          className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
        />
      </ContentSection>

      <ContentSection
        title="Cursos e mentorias sobre mesa posta e etiqueta"
        description={[
          "Compartilhamos o que vivemos: bom gosto, acolhimento e beleza.",
          "Workshops presenciais, mentorias individuais, treinamentos para equipes (copeiras, garçons, atendimento) e empresas (etiqueta corporativa)."
        ]}
        imageIcon={SVG_ICONS.book}
        imageText="Foto do curso"
        background="gradient"
        reverse={true}
      >
        <Button 
          to="/contato" 
          variant="outline"
          size="lg"
          className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2"
        >
          <span>Saiba Mais</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={SVG_ICONS.book} />
          </svg>
        </Button>
      </ContentSection>
    </Layout>
  );
}
