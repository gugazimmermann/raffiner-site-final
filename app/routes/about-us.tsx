import { Layout } from "../components/Layout";
import { HeroSection, FeatureCard, ImagePlaceholder } from "../components/ui";
import { COMPANY_VALUES } from "../lib/constants";
import { SVG_ICONS } from "../lib/icons";

export function meta() {
  return [
    { title: "Quem Somos - Raffiner" },
    { name: "description", content: "Conheça a história da Raffiner e da Renata Kauling, fundadora especialista em mesa posta e decoração." },
  ];
}

export default function AboutUs() {
  return (
    <Layout>
      <HeroSection
        title="CONHEÇA A RAFFINER"
        subtitle="Da comunicação à mesa posta: a história por trás da marca"
        highlightText="RAFFINER"
        background="gradient"
      />

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa História</h2>
              <p className="text-lg text-gray-600 mb-6">
                Raffiner nasceu do desejo de criar mesas impactantes sem precisar comprar mais louças. 
                Ao ver a falta de variedade no mercado de locação, Renata Kauling uniu sua experiência 
                em marketing e decoração para transformar uma paixão em um propósito.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Formada em Relações Públicas, com dois MBAs em Marketing e especializações em etiqueta 
                e recepção, Renata assina cada composição de Raffiner com olhar apurado, cuidado extremo 
                e amor pelos detalhes.
              </p>
              <p className="text-lg text-gray-600">
                Hoje, a marca é reconhecida por criar experiências sofisticadas, afetivas e inesquecíveis.
              </p>
            </div>
            <ImagePlaceholder 
              icon={SVG_ICONS.user}
              text="Foto da Renata"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)]">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Nossa Missão</h2>
            <p className="text-xl text-gray-700 font-medium mb-8">
              "Da escolha das peças ao último detalhe, nossa missão é transformar sua mesa em um momento inesquecível, 
              unindo criatividade, praticidade e sofisticação."
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
              <div className="flex items-center justify-center space-x-6">
                <div className="w-24 h-24 bg-[rgb(63_9_22)] rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <svg className="w-12 h-12 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-gray-800">Desde 2018</p>
                  <p className="text-gray-600">Transformando eventos em momentos únicos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {COMPANY_VALUES.map((value, index) => (
              <FeatureCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
