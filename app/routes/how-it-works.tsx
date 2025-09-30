import { Layout } from "../components/Layout";
import { Button, HeroSection, CTASection, StepCard, SocialButton } from "../components/ui";
import { SVG_ICONS } from "../lib/icons";

export function meta() {
  return [
    { title: "Como Funciona - Raffiner" },
    { name: "description", content: "Você escolhe como quer viver a experiência Raffiner. Conheça nossas modalidades: retirada e montagem feita por você ou montagem completa com nossa equipe." },
  ];
}

export default function HowItWorks() {
  return (
    <Layout>
      <HeroSection
        title="COMO FUNCIONA"
        subtitle="Você escolhe como quer viver a experiência Raffiner"
        highlightText="FUNCIONA"
        background="gradient"
      />

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl p-8 border-2 border-[rgb(221_218_212)]">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-[rgb(63_9_22)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Retirada e montagem feita por você</h2>
                <div className="bg-[rgb(221_218_212)] rounded-full px-4 py-2 inline-block">
                  <span className="text-[rgb(63_9_22)] font-semibold">Modalidade Preferida</span>
                </div>
              </div>

              <div className="space-y-6">
                <StepCard
                  step={1}
                  title="Escolha suas peças"
                  description="Você escolhe suas peças em nosso catálogo online ou com a ajuda da Renata."
                />
                <StepCard
                  step={2}
                  title="Retire tudo pronto"
                  description="Retira tudo embalado, higienizado e pronto para usar."
                />
                <StepCard
                  step={3}
                  title="Monte com autonomia"
                  description="Monta sua mesa com autonomia e criatividade."
                />
                <StepCard
                  step={4}
                  title="Devolva no prazo"
                  description="Devolve no prazo combinado."
                />
              </div>

              <div className="mt-8 p-4 bg-[rgb(221_218_212)] rounded-xl">
                <p className="text-[rgb(63_9_22)] font-medium text-center">
                  Essa é uma das formas preferidas pelos nossos clientes!
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Montagem completa com nossa equipe</h2>
                <div className="bg-gray-200 rounded-full px-4 py-2 inline-block">
                  <span className="text-gray-700 font-semibold">Serviço Completo</span>
                </div>
              </div>

              <div className="space-y-6">
                <StepCard
                  step={1}
                  title="Conte sua ocasião"
                  description="Você escolhe uma ocasião e nos conta o que deseja."
                  className="[&>div:first-child]:bg-gray-500"
                />
                <StepCard
                  step={2}
                  title="Sugestões personalizadas"
                  description="Nós sugerimos as peças e composições ideais."
                  className="[&>div:first-child]:bg-gray-500"
                />
                <StepCard
                  step={3}
                  title="Montagem profissional"
                  description="Montamos tudo, com amor e profissionalismo."
                  className="[&>div:first-child]:bg-gray-500"
                />
                <StepCard
                  step={4}
                  title="Aproveite o momento"
                  description="Você recebe elogios a cada instante."
                  className="[&>div:first-child]:bg-gray-500"
                />
              </div>

              <div className="mt-8 p-4 bg-gray-100 rounded-xl">
                <p className="text-gray-700 font-medium text-center">
                  Serviço completo para você relaxar e aproveitar seu evento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Quero montar minha mesa com a Raffiner"
        subtitle="Escolha a modalidade que mais combina com você e transforme seu evento em um momento inesquecível"
        background="gradient"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            href="https://www.estoquenow.com.br/raffiner"
            external
            variant="primary"
            size="lg"
            className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={SVG_ICONS.check} />
            </svg>
            <span>Monte Você Mesma</span>
          </Button>
          <SocialButton 
            platform="whatsapp"
            href="https://wa.me/5547999240805"
            text="Montagem Completa"
            size="lg"
            className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          />
        </div>
      </CTASection>
    </Layout>
  );
}
