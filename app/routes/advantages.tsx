import { Layout } from "../components/Layout";
import { Button, HeroSection, FeatureCard, CTASection, SocialButton, ImagePlaceholder } from "../components/ui";
import { YouTubeVideosSection } from "../components/ui/YouTubeVideosSection";
import { SOCIAL_LINKS, COMPANY_ADVANTAGES } from "../lib/constants";
import { SVG_ICONS } from "../lib/icons";

export function meta() {
  return [
    { title: "Diferenciais - Raffiner" },
    { name: "description", content: "Por que escolher a Raffiner? Conheça nossos diferenciais: atendimento personalizado, peças exclusivas e experiência afetiva." },
  ];
}

export default function Advantages() {
  return (
    <Layout>
      <HeroSection
        title="Por que escolher a Raffiner?"
        subtitle="Descubra o que nos torna únicos no mercado de locação de louças e decoração"
        highlightText="Raffiner?"
        background="gradient"
      />

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY_ADVANTAGES.map((advantage, index) => (
              <FeatureCard
                key={index}
                icon={advantage.icon}
                title={advantage.title}
                description={advantage.description}
                className="hover:shadow-lg transition-shadow"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ImagePlaceholder 
              icon={SVG_ICONS.image}
              text="Imagem emocional"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Mais que um serviço, uma experiência</h2>
              <p className="text-lg text-gray-600 mb-6">
                Na Raffiner, não entregamos apenas louças e decoração. Criamos memórias, 
                despertamos emoções e transformamos momentos simples em ocasiões especiais.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Cada composição é uma história única, pensada especialmente para você e seus convidados.
              </p>
              <SocialButton 
                platform="whatsapp"
                href="https://wa.me/5547999240805"
                text="Viva essa experiência"
                size="lg"
                className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Nossos Vídeos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Confira nossos últimos vídeos e descubra dicas, inspirações e novidades sobre mesa postagem e decoração
          </p>
          <YouTubeVideosSection 
            channelId={SOCIAL_LINKS.youtubeChannelId} 
            maxResults={3} 
          />
          <div className="text-center mt-12">
            <SocialButton 
              platform="youtube"
              href={SOCIAL_LINKS.youtube}
              text="Ver todos os vídeos no YouTube"
              size="md"
              className="inline-flex"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
