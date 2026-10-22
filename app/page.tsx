import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import { PremiumBackground } from "./components/premium-background";
import { SectionNavigation } from "./components/section-navigation";
import { DesktopZoom } from "./components/desktop-zoom";
import { DesktopLines } from "./components/desktop-lines";
import { SolutionLogos } from "./components/solution-logos";
import { PageMotion } from "./components/page-motion";
import { PageLoader } from "./components/page-loader";
import "./responsive.css";
import "./motion.css";
import "./loading-screen.css";
import "./brand-refinements.css";
import "./section-navigation.css";
import "./premium-background.css";

const pillars = [
  {
    number: "01",
    title: "Arquitetura Pessoal",
    subtitle: "Inteligente",
    image: "/imagens/tese/arquitetura-pessoal.png",
    description:
      "Clareza sobre quem você é, suas escolhas, seus objetivos e o caminho que deseja construir.",
  },
  {
    number: "02",
    title: "Arquitetura Relacional",
    subtitle: "Inteligente",
    image: "/imagens/tese/arquitetura-relacional.png",
    description:
      "Relações mais conscientes, conexões estratégicas e vínculos que favorecem o crescimento.",
  },
  {
    number: "03",
    title: "Arquitetura Organizacional",
    subtitle: "Inteligente",
    image: "/imagens/tese/arquitetura-organizacional.png",
    description:
      "Estratégia, estrutura e alinhamento para desenvolver organizações mais consistentes.",
  },
  {
    number: "04",
    title: "Arquitetura de Legado",
    subtitle: "Inteligente",
    image: "/imagens/tese/arquitetura-legado.png",
    description:
      "Construção de resultados duradouros, propósito e impacto que ultrapassam o presente.",
  },
];

const services = [
  {
    "number": "01",
    "titleLines": [
      "Palestras"
    ],
    "descriptionLines": [
      "Conteúdo autoral para",
      "congressos, convenções,",
      "empresas e instituições."
    ]
  },
  {
    "number": "02",
    "titleLines": [
      "Educação",
      "corporativa"
    ],
    "descriptionLines": [
      "Treinamentos, workshops,",
      "jornadas de conhecimento e",
      "formação de lideranças."
    ]
  },
  {
    "number": "03",
    "titleLines": [
      "Consultoria",
      "e mentoria"
    ],
    "descriptionLines": [
      "Diagnóstico, direcionamento",
      "e desenvolvimento de",
      "empresários, líderes e",
      "organizações."
    ]
  },
  {
    "number": "04",
    "titleLines": [
      "Conselho",
      "e estratégia"
    ],
    "descriptionLines": [
      "Apoio à tomada de decisão,",
      "estruturação empresarial,",
      "crescimento e desenvolvimento",
      "organizacional."
    ]
  }
];

const socialLinks = [
  { name: "WhatsApp", image: "/imagens/contato/whatsapp.png", position: "whatsapp" },
  { name: "Instagram", image: "/imagens/contato/instagram.png", position: "instagram" },
  { name: "Facebook", image: "/imagens/contato/facebook.png", position: "facebook" },
  { name: "LinkedIn", image: "/imagens/contato/linkedin.png", position: "linkedin" },
  { name: "YouTube", image: "/imagens/contato/youtube.png", position: "youtube" },
];

const goldButton =
  "gold-button inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-[#F2AD16] bg-[#F2AD16] px-5 text-[10px] uppercase tracking-[0.1em] transition-colors duration-200 hover:border-[#FFD46B] hover:bg-[#FFD46B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2AD16] sm:min-h-12 sm:px-6";

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 shrink-0"
      style={{ color: "#000000" }}
    >
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#F2AD16] sm:text-xs">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-[#f5f2eb]">
      <PageLoader />
      <DesktopZoom />
      <PageMotion />
      <SectionNavigation />
      {/* CABEÇALHO */}
      <header translate="no" className="relative z-30 bg-[#080808]">
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex min-h-[76px] max-w-[1368px] flex-wrap items-center justify-center gap-x-4 gap-y-3 px-4 py-4 sm:min-h-[82px] sm:gap-x-6 sm:px-10 lg:gap-x-8 lg:px-16"
        >
          <a
            href="#inicio"
            aria-current="page"
            className="inline-flex items-center gap-2 whitespace-nowrap text-[10px] uppercase tracking-[0.12em] text-[#F2AD16] transition-colors hover:text-[#FFD46B] lg:text-[11px]"
          >
            <span className="h-1 w-1 rounded-full bg-[#F2AD16]" />
            INÍCIO
          </a>

          <a
            href="#solucoes"
            className="inline-flex items-center gap-2 whitespace-nowrap text-[10px] uppercase tracking-[0.12em] text-white/70 transition-colors hover:text-[#F2AD16] lg:text-[11px]"
          >
            <span className="h-1 w-1 rounded-full bg-[#F2AD16]/60" />
            SOLUÇÕES
          </a>

          <a
            href="#tese"
            className="inline-flex items-center gap-2 whitespace-nowrap text-[10px] uppercase tracking-[0.12em] text-white/70 transition-colors hover:text-[#F2AD16] lg:text-[11px]"
          >
            <span className="h-1 w-1 rounded-full bg-[#F2AD16]/60" />
            TESE
          </a>

          <a
            href="#sobre"
            className="inline-flex items-center gap-2 whitespace-nowrap text-[10px] uppercase tracking-[0.12em] text-white/70 transition-colors hover:text-[#F2AD16] lg:text-[11px]"
          >
            <span className="h-1 w-1 rounded-full bg-[#F2AD16]/60" />
            QUEM SOU EU
          </a>

          <a
            href="#contato"
            className="inline-flex items-center gap-2 whitespace-nowrap text-[10px] uppercase tracking-[0.12em] text-white/70 transition-colors hover:text-[#F2AD16] lg:text-[11px]"
          >
            <span className="h-1 w-1 rounded-full bg-[#F2AD16]/60" />
            CONTATO
          </a>

          <a href="#contato" className={`${goldButton} px-3 sm:px-5`}>
            <span className="gold-button__label">AGENDAR</span>
            <ArrowUpRight />
          </a>
        </nav>
      </header>

      {/* PRIMEIRA DOBRA */}
      <section
        id="inicio"
        className="relative isolate min-h-[calc(100svh-76px)] overflow-hidden bg-[#080808] sm:min-h-[calc(100svh-82px)]"
      >
        <PremiumBackground />
        {/* Fundo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-30"
          style={{
            background:
              "radial-gradient(ellipse at 77% 43%, rgba(155,125,76,0.09) 0%, rgba(155,125,76,0.025) 30%, transparent 58%), #080808",
          }}
        />

        {/* LOBO */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
        >
          <img
            src="/imagens/lobo.png"
            alt=""
            className="absolute left-[25%] top-[9%] h-[33.6%] w-[43.2%] object-contain object-center opacity-[0.16] blur-[1px] sm:left-[28%] sm:top-[7%] sm:h-[40.8%] sm:w-[38.4%] sm:opacity-[0.18] lg:left-[30%] lg:top-[6%] lg:h-[45.6%] lg:w-[34.8%] lg:opacity-[0.18] lg:blur-[1.5px]"
            style={{
              transform: "translate(-30%, -20%) scale(1.08)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 30%, rgba(0,0,0,0.78) 55%, rgba(0,0,0,0.32) 75%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse at center, black 30%, rgba(0,0,0,0.78) 55%, rgba(0,0,0,0.32) 75%, transparent 100%)",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(8,8,8,0.02) 0%, rgba(8,8,8,0.08) 38%, rgba(8,8,8,0.72) 75%, #080808 100%), linear-gradient(180deg, #080808 0%, rgba(8,8,8,0.04) 20%, transparent 58%, #080808 100%)",
            }}
          />
        </div>

        {/* Integração do fundo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,8,8,0.12) 0%, rgba(8,8,8,0.04) 32%, rgba(8,8,8,0.18) 54%, rgba(8,8,8,0.55) 77%, #080808 100%), linear-gradient(180deg, #080808 0%, rgba(8,8,8,0.06) 16%, transparent 60%, #080808 100%)",
          }}
        />

        {/* Conteúdo principal */}
        <div className="hero-main-layout relative mx-auto grid min-h-[inherit] w-full max-w-[1368px] grid-cols-1 items-center px-6 pb-0 pt-9 sm:px-10 sm:pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-16 lg:py-0">
          {/* TEXTO */}
          <div className="hero-copy relative z-20">
            {/* LOGO NO LUGAR DO TÍTULO TEXTUAL */}
            <div className="mb-6" data-motion="reveal">
              <img
                src="/imagens/logo_andre.png"
                width={710}
                height={355}
                alt="André Cavalcanti"
                className="block h-auto w-[min(100%,420px)] object-contain object-left"
              />
            </div>

            {/* SUBTÍTULO COM DESTAQUE DOURADO */}
            <h2 data-motion="reveal" data-motion-delay="80" className="max-w-3xl text-xl font-medium leading-snug text-white sm:text-2xl lg:text-3xl">
              <DesktopLines lines={[
                "Estratégia, desenvolvimento e inteligência",
                <Fragment key="hero-desktop-results">aplicada a <span className="font-semibold text-[#F2AD16]">otimização de resultados</span></Fragment>,
                "pessoais e empresariais.",
              ]} mobileLines={[
                "Estratégia, desenvolvimento e inteligência aplicada a",
                <Fragment key="hero-mobile-results"><span className="font-semibold text-[#F2AD16]">otimização de resultados</span> pessoais e empresariais.</Fragment>,
              ]} />
            </h2>


          </div>

          {/* RETRATO */}
          <div data-motion="portrait" data-motion-delay="120" className="hero-portrait relative mx-auto mt-5 flex h-[min(62svh,500px)] min-h-[310px] w-full max-w-[520px] items-end justify-center sm:mt-7 sm:h-[min(70svh,600px)] sm:min-h-[390px] lg:mt-0 lg:h-[min(84svh,790px)] lg:max-w-none lg:self-end">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[5%] left-[12%] h-[68%] w-[80%]"
              style={{
                background:
                  "radial-gradient(ellipse at 52% 55%, rgba(190,151,81,0.12) 0%, rgba(190,151,81,0.035) 43%, transparent 73%)",
                filter: "blur(28px)",
              }}
            />

            <img
              src="/imagens/img01.png"
              width={1347}
              height={1168}
              alt="André Cavalcanti"
              className="relative z-10 block h-full w-full object-contain object-bottom lg:absolute lg:bottom-[1%] lg:right-[-2%] lg:h-[100%] lg:w-[108%]"
              style={{
                transform: "scale(var(--hero-portrait-scale, 1.08))",
                transformOrigin: "center bottom",
                WebkitMaskImage:
                  "radial-gradient(ellipse 76% 84% at 50% 44%, #000 48%, rgba(0,0,0,0.96) 59%, rgba(0,0,0,0.72) 72%, rgba(0,0,0,0.32) 86%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse 76% 84% at 50% 44%, #000 48%, rgba(0,0,0,0.96) 59%, rgba(0,0,0,0.72) 72%, rgba(0,0,0,0.32) 86%, transparent 100%)",
              }}
            />

            <div
              aria-hidden="true"
              className="hero-portrait-fade pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[10%]"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(8,8,8,0.25) 55%, #080808 100%)",
              }}
            />

            <div
              aria-hidden="true"
              className="hero-portrait-fade pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[18%]"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(8,8,8,0.4) 55%, #080808 100%)",
              }}
            />
          </div>
        </div>

        {/* CARROSSEL CONTÍNUO */}
        <div className="hero-marquee relative z-20 -mt-[2vh] bg-[#080808]/90">
          <div
            className="hero-marquee__viewport"
            aria-label="Empresário, Educador, Conselheiro, Palestrante e Autor"
          >
            <div className="hero-marquee__track">
              {Array.from({ length: 4 }).map((_, groupIndex) => (
                <div
                  key={groupIndex}
                  className="hero-marquee__group"
                  aria-hidden={groupIndex !== 0}
                >
                  <span>Empresário</span>
                  <span className="hero-marquee__separator">•</span>
                  <span>Educador</span>
                  <span className="hero-marquee__separator">•</span>
                  <span>Conselheiro</span>
                  <span className="hero-marquee__separator">•</span>
                  <span>Palestrante</span>
                  <span className="hero-marquee__separator">•</span>
                  <span>Autor</span>
                  <span className="hero-marquee__separator">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEGUNDA DOBRA: MARCAS PARCEIRAS */}
      <SolutionLogos />

      {/* TESE */}
      <section id="tese" className="thesis-showcase">
        <PremiumBackground />
        <div className="thesis-stage">
          <img
            className="thesis-reference-image"
            data-motion="reveal"
            src="/imagens/tese/terceira-dobra-clean.png"
            width={2800}
            height={1575}
            alt="Crescimento exige arquitetura. TAI - Teoria da Arquitetura Inteligente. Teoria com base em quatro pilares: Arquitetura Pessoal Inteligente, Arquitetura Relacional Inteligente, Arquitetura Organizacional Inteligente e Arquitetura de Legado Inteligente. Diagnóstico, direcionamento, ação e registro."
          />
          <img className="thesis-wolf" src="/imagens/lobo.png" alt="" aria-hidden="true" />



          <div className="thesis-content">
            <header className="thesis-heading">
              <p className="thesis-lead" data-motion="reveal"><DesktopLines lines={["Crescimento exige arquitetura..."]} /></p>
              <h2 className="thesis-title" data-motion="reveal" data-motion-delay="80"><DesktopLines lines={["TAI - Teoria da Arquitetura Inteligente"]} mobileLines={["TAI - Teoria da", "Arquitetura Inteligente"]} /></h2>
              <p className="thesis-subtitle" data-motion="reveal" data-motion-delay="160"><DesktopLines lines={["Teoria com base em quatro pilares..."]} /></p>
            </header>

            <div className="thesis-grid">
              {pillars.map((pillar) => {
                const pillarName = pillar.title.replace("Arquitetura ", "");

                return (
                  <article key={pillar.number} className="thesis-card" data-motion="reveal" data-motion-delay={(Number(pillar.number) - 1) * 70}>
                    <img className="thesis-card__logo" src={pillar.image} alt="" />
                    <h3 className="thesis-card__title">
                      <DesktopLines lines={["Arquitetura", <span className="thesis-card__highlight" key="name">{pillarName}</span>, "Inteligente"]} />
                    </h3>
                  </article>
                );
              })}
            </div>

            <div className="thesis-process" data-motion="reveal" aria-label="Diagnóstico, direcionamento, ação e registro">
              <span>Diagnóstico</span>
              <span aria-hidden="true">»</span>
              <span>Direcionamento</span>
              <span aria-hidden="true">»</span>
              <span>Ação</span>
              <span aria-hidden="true">»</span>
              <span>Registro</span>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="about-showcase" aria-label="Quem sou eu">
        <div className="about-desktop" data-motion="reveal">
          <PremiumBackground />
          <Image
            className="about-reference-image"
            src="/imagens/sobre/quarta-dobra-clean-hd.png"
            alt="André Cavalcanti apresenta sua atuação em palestras, educação corporativa, consultoria e mentoria, conselho e estratégia."
            width={5760}
            height={3240}
            sizes="(max-width: 1400px) 100vw, 1400px"
            unoptimized
          />
          <div className="about-desktop__name about-desktop__name--first" aria-hidden="true">
            <span className="about-name__word">André</span>
          </div>
          <div className="about-desktop__name about-desktop__name--last" aria-hidden="true">
            <span className="about-name__word">Cavalcanti</span>
          </div>
          <svg
            className="about-desktop__frame"
            viewBox="0 0 1920 1080"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient id="about-frame-gold" x1="156" y1="46" x2="1338" y2="1047" gradientUnits="userSpaceOnUse">
                <stop stopColor="#eac454" />
                <stop offset="0.48" stopColor="#9c731c" />
                <stop offset="1" stopColor="#e8b43e" />
              </linearGradient>
            </defs>
            <rect x="156" y="46" width="1182" height="1001" rx="26" stroke="url(#about-frame-gold)" strokeWidth="1.15" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        <div className="about-mobile">
          <PremiumBackground />
          <div className="about-mobile__profile" data-motion="portrait">
            <Image
              src="/imagens/img02.png"
              alt="André Cavalcanti sentado em uma poltrona azul."
              width={1101}
              height={1429}
              className="about-mobile__portrait"
              sizes="(max-width: 767px) 100vw, 0px"
            />
            <p className="about-mobile__name">
              <span className="about-name__word about-mobile__name--first">André</span>{" "}
              <span className="about-name__word about-mobile__name--last">Cavalcanti</span>
            </p>
          </div>

          <div className="about-mobile__bio" data-motion="reveal">
            <p className="about-mobile__eyebrow">Quem sou eu</p>
            <h2><DesktopLines lines={[
              "Estratégia, educação e",
              "gestão para transformar",
              "organizações.",
            ]} mobileLines={[
              "Estratégia, educação e gestão",
              "para transformar organizações.",
            ]} /></h2>
            <p><DesktopLines lines={[
              <Fragment key="bio-name"><strong>MSc. André Cavalcanti</strong> é empreendedor,</Fragment>,
              "educador, conselheiro, palestrante internacional",
              "e autor. Mestre em Ciências da Educação,",
              "especialista em Didática e Metodologia do",
              "Ensino Superior, bacharel em Administração,",
              "pedagogo, tecnólogo e técnico em Segurança",
              "do Trabalho.",
            ]} /></p>
            <p><DesktopLines lines={[
              "Atua na concepção, implantação e condução de",
              "projetos empresariais, educacionais e",
              "tecnológicos; em palestras e programas de",
              "desenvolvimento de líderes; e em consultoria",
              "voltada a planejamento estratégico, diagnóstico",
              "organizacional, gestão de processos, riscos",
              "ocupacionais e psicossociais, cultura,",
              "comunicação e inovação.",
            ]} /></p>
          </div>

          <div className="about-mobile__services">
            {services.map((service) => (
              <article key={service.number} className="about-mobile__card" data-motion="reveal" data-motion-delay={(Number(service.number) - 1) * 70}>
                <span>{service.number}</span>
                <div>
                  <h3><DesktopLines lines={service.titleLines} /></h3>
                  <p><DesktopLines lines={service.descriptionLines} /></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="contact-showcase" aria-label="Vamos conversar">
        <div className="contact-artboard">
          <PremiumBackground />
          <Image
            className="contact-wolf"
            src="/imagens/contato/lobo-pdf.png"
            alt=""
            aria-hidden="true"
            width={1104}
            height={1280}
          />
          <Image
            className="contact-copy-art"
            data-motion="reveal"
            src="/imagens/contato/texto-pdf.png"
            alt="Qual construção precisa começar. Projetos diferentes exigem soluções diferentes. O primeiro passo é compreender onde você está, onde pretende chegar e o que precisa ser construído entre esses dois pontos. Vamos conversar?"
            width={710}
            height={240}
          />
          <Image
            className="contact-brand-art"
            data-motion="reveal"
            data-motion-delay="160"
            src="/imagens/contato/logo-andre-pdf.png"
            alt="André Cavalcanti"
            width={533}
            height={267}
          />
          <Image
            className="contact-icons-art"
            data-motion="reveal"
            data-motion-delay="80"
            src="/imagens/contato/icones-pdf.png"
            alt=""
            aria-hidden="true"
            width={1338}
            height={753}
          />

          <nav className="contact-social-hotspots" aria-label="Redes sociais">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className={`contact-social-hotspot contact-social-hotspot--${social.position}`}
              />
            ))}
          </nav>

          <div className="contact-legal contact-legal--desktop" data-motion="reveal" data-motion-delay="160">
            <p><DesktopLines lines={["@2026 André Cavalcanti. Todos os direitos reservados"]} /></p>
            <p><DesktopLines lines={["Desnvolvido por Blend Creative Design Studio."]} /></p>
          </div>
        </div>

        <div className="contact-mobile">
          <PremiumBackground />
          <Image
            className="contact-mobile__wolf"
            src="/imagens/lobo.png"
            alt=""
            width={1000}
            height={1200}
            aria-hidden="true"
          />

          <div className="contact-mobile__copy">
            <h2 data-motion="reveal"><DesktopLines lines={["Qual construção precisa começar"]} mobileLines={["Qual construção", "precisa começar"]} /></h2>
            <p className="contact-mobile__lead" data-motion="reveal" data-motion-delay="80">
              <DesktopLines lines={["Projetos diferentes exigem soluções diferentes."]} />
            </p>
            <p data-motion="reveal" data-motion-delay="160">
              <DesktopLines lines={[
                "O primeiro passo é compreender onde você está, onde",
                "pretende chegar e o que precisa ser construído entre esses dois pontos.",
              ]} />
            </p>
            <h3 data-motion="reveal"><DesktopLines lines={["Vamos conversar?"]} /></h3>
          </div>

          <nav className="contact-mobile__socials" data-motion="reveal" data-motion-delay="80" aria-label="Redes sociais">
            {socialLinks.map((social) => (
                <a key={social.name} href="#" aria-label={social.name}>
                <Image src={social.image} alt="" width={600} height={600} />
              </a>
            ))}
          </nav>

          <footer className="contact-mobile__footer" data-motion="reveal" data-motion-delay="160">
            <Image
              src="/imagens/contato/logo-andre-pdf.png"
              alt="André Cavalcanti"
              width={533}
              height={267}
              className="contact-mobile__logo"
            />
            <div className="contact-legal">
              <p><DesktopLines lines={["@2026 André Cavalcanti. Todos os direitos reservados"]} /></p>
              <p><DesktopLines lines={["Desnvolvido por Blend Creative Design Studio."]} /></p>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
