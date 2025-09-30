import { Layout } from "../components/Layout";
import { Button, HeroSection, CTASection, SocialButton } from "../components/ui";
import { useAccordion } from "../hooks";
import { SVG_ICONS } from "../lib/icons";

export function meta() {
  return [
    { title: "FAQ - Raffiner" },
    { name: "description", content: "Perguntas frequentes sobre nossos serviços de locação de louças, modalidades, pagamento e muito mais." },
  ];
}

export default function FAQ() {
  const { toggleItem, isOpen } = useAccordion();

  return (
    <Layout>
      <HeroSection
        title="PERGUNTAS FREQUENTES"
        subtitle="Tire suas dúvidas sobre nossos serviços e modalidades"
        highlightText="FREQUENTES"
        background="gradient"
      />

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-gradient-to-r from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <button 
                onClick={() => toggleItem(0)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(63_9_22)] to-[rgb(100_20_40)] rounded-full flex items-center justify-center mr-6 shadow-lg ring-2 ring-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Vocês entregam e retiram os itens?</span>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isOpen(0) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={SVG_ICONS.chevronDown} />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen(0) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">Sim! Oferecemos entrega e retirada com taxa adicional, conforme distância e volume.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <button 
                onClick={() => toggleItem(1)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(63_9_22)] to-[rgb(100_20_40)] rounded-full flex items-center justify-center mr-6 shadow-lg ring-2 ring-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Posso retirar as peças pessoalmente?</span>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isOpen(1) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen(1) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">Sim. Você pode agendar a retirada em nosso showroom e aproveitar a modalidade "Monte você mesma", que adoramos cultivar.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl overflow-hidden border-2 border-[rgb(221_218_212)]">
              <button 
                onClick={() => toggleItem(2)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(63_9_22)] to-[rgb(100_20_40)] rounded-full flex items-center justify-center mr-6 shadow-lg ring-2 ring-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Como funciona a modalidade "Monte você mesma"?</span>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isOpen(2) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen(2) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-700 font-medium">Você escolhe as peças, retira higienizadas e embaladas com todo cuidado, monta sua mesa com autonomia e devolve no prazo. Essa é a modalidade preferida de Renata—prático, charmoso e super econômico!</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <button 
                onClick={() => toggleItem(3)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(63_9_22)] to-[rgb(100_20_40)] rounded-full flex items-center justify-center mr-6 shadow-lg ring-2 ring-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Vocês participam de eventos corporativos?</span>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isOpen(3) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen(3) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">Sim. Participamos de eventos corporativos com locação, montagem e ambientação, se desejado.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <button 
                onClick={() => toggleItem(4)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(63_9_22)] to-[rgb(100_20_40)] rounded-full flex items-center justify-center mr-6 shadow-lg ring-2 ring-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Vocês atendem eventos fora da cidade?</span>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isOpen(4) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen(4) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">Sim. Atendemos outras cidades mediante consulta de disponibilidade e taxa de deslocamento.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <button 
                onClick={() => toggleItem(5)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(63_9_22)] to-[rgb(100_20_40)] rounded-full flex items-center justify-center mr-6 shadow-lg ring-2 ring-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Como saber se os itens estão disponíveis?</span>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isOpen(5) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen(5) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">Após sua seleção, nossa equipe confirma a disponibilidade em até 24h. Se necessário, sugerimos substituições similares.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <button 
                onClick={() => toggleItem(6)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(63_9_22)] to-[rgb(100_20_40)] rounded-full flex items-center justify-center mr-6 shadow-lg ring-2 ring-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">As peças são entregues limpas? Preciso devolver limpas?</span>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isOpen(6) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen(6) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">Sim. Todas as peças são entregues limpas e embaladas. A devolução também deve ser feita da mesma forma, com exceção das roupas de mesa—essas nós lavamos para você.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <button 
                onClick={() => toggleItem(7)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(63_9_22)] to-[rgb(100_20_40)] rounded-full flex items-center justify-center mr-6 shadow-lg ring-2 ring-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">E se eu quebrar ou perder alguma peça?</span>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isOpen(7) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen(7) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">Cada item tem um valor de encomenda descrito no contrato. Em caso de avaria ou perda, o valor correspondente é cobrado.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <button 
                onClick={() => toggleItem(8)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(63_9_22)] to-[rgb(100_20_40)] rounded-full flex items-center justify-center mr-6 shadow-lg ring-2 ring-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Vocês montam a mesa no local?</span>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isOpen(8) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen(8) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">Sim. Oferecemos o serviço de montagem, cobrado à parte. Solicite no momento da contratação.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <button 
                onClick={() => toggleItem(9)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(63_9_22)] to-[rgb(100_20_40)] rounded-full flex items-center justify-center mr-6 shadow-lg ring-2 ring-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Vocês fazem a decoração completa do ambiente?</span>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isOpen(9) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen(9) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">Sim. Em parceria com profissionais da área, podemos montar todo o ambiente para seu evento.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <button 
                onClick={() => toggleItem(10)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(63_9_22)] to-[rgb(100_20_40)] rounded-full flex items-center justify-center mr-6 shadow-lg ring-2 ring-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Posso montar meu próprio composição?</span>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isOpen(10) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen(10) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">Claro! Você pode escolher livremente as peças que mais combinam com seu estilo ou se inspire em composições do nosso Instagram.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <button 
                onClick={() => toggleItem(11)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(63_9_22)] to-[rgb(100_20_40)] rounded-full flex items-center justify-center mr-6 shadow-lg ring-2 ring-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Como é feito o pagamento?</span>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isOpen(11) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen(11) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">50% no momento da reserva e 50% até um dia antes da retirada. Aceitamos PIX e cartão de crédito.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <button 
                onClick={() => toggleItem(12)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(63_9_22)] to-[rgb(100_20_40)] rounded-full flex items-center justify-center mr-6 shadow-lg ring-2 ring-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Vocês emitem nota fiscal?</span>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isOpen(12) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen(12) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">Sim. Emitimos nota fiscal para pessoa física e jurídica.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <button 
                onClick={() => toggleItem(13)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(63_9_22)] to-[rgb(100_20_40)] rounded-full flex items-center justify-center mr-6 shadow-lg ring-2 ring-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">É possível cancelar após uma reserva?</span>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isOpen(13) ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen(13) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600">Sim. Consulte as condições e prazos no contrato. Pode haver cobrança de taxas de cancelamento conforme a antecedência.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ainda tem dúvidas?"
        subtitle="Entre em contato conosco e tire todas as suas dúvidas sobre nossos serviços"
        background="gradient"
      >
        <SocialButton 
          platform="whatsapp"
          href="https://wa.me/5547999240805"
          size="md"
          className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 max-w-xs mx-auto"
        />
      </CTASection>
    </Layout>
  );
}
