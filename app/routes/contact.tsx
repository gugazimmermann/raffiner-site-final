import { Layout } from "../components/Layout";
import { Section, HeroSection, SocialButton } from "../components/ui";
import { ContactCard, ContactButton } from "../components/ui/ContactCard";
import { SimpleMap } from "../components/ui/SimpleMap";
import { YouTubeVideosSection } from "../components/ui/YouTubeVideosSection";
import { InstagramReelsSection } from "../components/ui/InstagramReelsSection";
import { CONTACT_INFO, SHOWROOM_LOCATION, SOCIAL_LINKS } from "../lib/constants";

export function meta() {
  return [
    { title: "Contato - Raffiner" },
    { name: "description", content: "Estamos prontos para criar momentos inesquecíveis ao seu lado. Entre em contato conosco via WhatsApp, Instagram ou e-mail." },
  ];
}

export default function Contact() {
  return (
    <Layout>
      <HeroSection
        title="CONTATO"
        subtitle="Estamos prontos para criar momentos inesquecíveis ao seu lado"
        background="gradient"
      />

      <Section background="white">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[rgb(28_30_33)] mb-8">Entre em Contato</h2>
              
              <div className="space-y-6">
              {CONTACT_INFO.map((contact) => (
                <ContactCard key={contact.type} contact={contact} />
              ))}
              </div>
            </div>

          <div>
            <h3 className="text-2xl font-bold text-[rgb(28_30_33)] mb-6">Localização do Showroom</h3>
            <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
              <SimpleMap 
                latitude={SHOWROOM_LOCATION.latitude}
                longitude={SHOWROOM_LOCATION.longitude}
                address={SHOWROOM_LOCATION.address}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </Section>

{/*       <Section background="gradient">
        <h2 className="text-4xl font-bold text-center text-[rgb(28_30_33)] mb-16">Últimos Reels do Instagram</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Acompanhe nosso Instagram e veja dicas, inspirações e bastidores dos nossos eventos
        </p>
        <InstagramReelsSection 
          username="raffiner.mesaposta" 
          maxResults={3} 
        />
        <div className="text-center mt-12">
          <SocialButton 
            platform="instagram"
            href={SOCIAL_LINKS.instagram}
            text="Seguir no Instagram"
            size="md"
            className="inline-flex"
          />
        </div>
      </Section> */}

      <Section background="white">
        <h2 className="text-4xl font-bold text-center text-[rgb(28_30_33)] mb-16">Nossos Vídeos</h2>
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
      </Section>
    </Layout>
  );
}
