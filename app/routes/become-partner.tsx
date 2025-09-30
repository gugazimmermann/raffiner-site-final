import { Layout } from "../components/Layout";
import { Button, HeroSection, FeatureCard, CTASection, SocialButton, PartnerSolutionCard } from "../components/ui";
import { PARTNER_SOLUTIONS, PARTNER_EXAMPLES } from "../lib/constants";
import { SVG_ICONS } from "../lib/icons";

export function meta() {
  return [
    { title: "Seja um Parceiro - Raffiner" },
    { name: "description", content: "Profissionais de eventos, cerimonialistas, decoradores e assessores: a Raffiner é a parceira ideal para agregar valor e sofisticação ao seu serviço." },
  ];
}

export default function BecomePartner() {
  return (
    <Layout>
      <HeroSection
        title="SEJA UM PARCEIRO"
        subtitle="Profissionais de eventos, cerimonialistas, decoradores e assessores: a Raffiner é a parceira ideal para agregar valor e sofisticação ao seu serviço."
        highlightText="PARCEIRO"
        background="gradient"
      />

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Nossas Soluções para Parceiros</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {PARTNER_SOLUTIONS.map((solution, index) => (
              <PartnerSolutionCard
                key={index}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
                features={solution.features}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Exemplos de Uso por Parceiros</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARTNER_EXAMPLES.map((example, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-[rgb(63_9_22)] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={SVG_ICONS[example.icon as keyof typeof SVG_ICONS]} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{example.title}</h3>
                <p className="text-gray-600">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Torne-se nosso parceiro"
        subtitle="Junte-se à nossa rede de parceiros e ofereça soluções sofisticadas em mesa posta para seus clientes"
        background="white"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <SocialButton 
            platform="whatsapp"
            href="https://wa.me/5547999240805"
            text="Falar Conosco"
            size="lg"
            className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          />
          <Button 
            variant="primary"
            size="lg"
            className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={SVG_ICONS.download} />
            </svg>
            <span>Baixar PDF de Condições</span>
          </Button>
        </div>
      </CTASection>
    </Layout>
  );
}
