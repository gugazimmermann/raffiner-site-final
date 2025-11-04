import { Layout } from "../components/Layout";
import { Button, HeroSection, CTASection, SocialButton, ImageCarousel } from "../components/ui";
import { LatestYouTubeVideo } from "../components/ui/LatestYouTubeVideo";
import { SOCIAL_LINKS } from "../lib/constants";
import { SVG_ICONS } from "../lib/icons";

export function meta() {
  return [
    { title: "Raffiner - Momentos Únicos, Criados com Exclusividade" },
    { name: "description", content: "Mais do que uma locadora de louças, a Raffiner transforma o seu evento em um momento inesquecível. Soluções completas em mesa posta e decoração." },
  ];
}

export default function Home() {
  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-[rgb(28_30_33)] mb-6">
                Momentos únicos, <span className="text-[rgb(63_9_22)]">criados com exclusividade</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Mais do que uma locadora de louças, a Raffiner transforma o seu evento em um momento inesquecível. 
                Com sofisticação, criatividade e um atendimento personalizado, oferecemos soluções completas em mesa posta e decoração para pequenos eventos.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Cada detalhe importa e cada composição é pensada para encantar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SocialButton 
                  platform="whatsapp"
                  href="https://wa.me/5547999240805"
                  size="lg"
                  className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                />
                <Button 
                  href="https://www.alugueraffiner.com.br/"
                  external
                  variant="outline"
                  size="lg"
                  className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Catálogo
                </Button>
              </div>
            </div>
            <ImageCarousel
              images={[
                "/photos/home-1.jpeg",
                "/photos/home-2.jpeg",
                "/photos/home-3.jpeg",
                "/photos/home-4.jpeg",
              ]}
              alt="Mesa linda em destaque"
              autoPlay={true}
              autoPlayInterval={5000}
            />
          </div>
        </div>
      </section>

{/*       <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[rgb(28_30_33)] mb-4">Receba nossas novidades e inspirações</h2>
          <p className="text-lg text-gray-600 mb-8">Cadastre seu e-mail e fique por dentro das últimas tendências em mesa posta</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[rgb(63_9_22)]"
            />
            <Button 
              variant="primary"
              size="md"
              className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Cadastrar
            </Button>
          </div>
        </div>
      </section> */}

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-[rgb(28_30_33)] mb-16">Nosso Último Vídeo</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <LatestYouTubeVideo channelId={SOCIAL_LINKS.youtubeChannelId} />
            <div>
              <h3 className="text-2xl font-bold text-[rgb(28_30_33)] mb-4">Inspire-se com nossos vídeos</h3>
              <p className="text-gray-600 mb-6">
                Acompanhe nosso canal no YouTube e descubra dicas, tutoriais e inspirações 
                para criar a mesa perfeita para seu evento. Confira nosso último vídeo e 
                fique por dentro das novidades!
              </p>
              <Button 
                href={SOCIAL_LINKS.youtube} 
                variant="primary"
                size="lg"
                external
                className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>Ver Canal Completo</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Monte sua mesa sozinha com a Raffiner"
        subtitle="Escolha suas peças, retire higienizadas e embaladas, monte com autonomia e devolva no prazo. Prático, charmoso e super econômico!"
        background="gradient"
      >
        <Button 
          to="/como-funciona" 
          variant="primary"
          size="md"
          className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 max-w-xs mx-auto"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={SVG_ICONS.check} />
          </svg>
          <span>Saiba Como Funciona</span>
        </Button>
      </CTASection>
    </Layout>
  );
}