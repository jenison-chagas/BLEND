import type { ReactNode } from "react";
import { ContactForm } from "./components/contact-form";

const GOLD = "#F2AD16";
const GOLD_HOVER = "#FFD46B";

const pillars = [
  {
    number: "01",
    title: "Arquitetura Pessoal",
    subtitle: "Inteligente",
    description:
      "Clareza sobre quem você é, suas escolhas, seus objetivos e o caminho que deseja construir.",
  },
  {
    number: "02",
    title: "Arquitetura Relacional",
    subtitle: "Inteligente",
    description:
      "Relações mais conscientes, conexões estratégicas e vínculos que favorecem o crescimento.",
  },
  {
    number: "03",
    title: "Arquitetura Organizacional",
    subtitle: "Inteligente",
    description:
      "Estratégia, estrutura e alinhamento para desenvolver organizações mais consistentes.",
  },
  {
    number: "04",
    title: "Arquitetura de Legado",
    subtitle: "Inteligente",
    description:
      "Construção de resultados duradouros, propósito e impacto que ultrapassam o presente.",
  },
];

const solutions = [
  {
    name: "conceo",
    category: "Consultoria Empresarial",
    description:
      "Estratégia e visão de negócio para transformar desafios em possibilidades de crescimento.",
  },
  {
    name: "SafeMind Pro",
    category: "Gestão de riscos psicossociais",
    description:
      "Inteligência aplicada à compreensão e à gestão de riscos psicossociais nas organizações.",
  },
];

const services = [
  {
    number: "01",
    title: "Palestras",
    description:
      "Conhecimento e inspiração para ampliar perspectivas e estimular novas possibilidades.",
  },
  {
    number: "02",
    title: "Educação corporativa",
    description:
      "Desenvolvimento de competências, pessoas e equipes para resultados consistentes.",
  },
  {
    number: "03",
    title: "Consultoria e mentoria",
    description:
      "Direcionamento estratégico para decisões mais conscientes e evolução contínua.",
  },
  {
    number: "04",
    title: "Conselho e estratégia",
    description:
      "Visão integrada para orientar decisões e construir resultados sustentáveis.",
  },
];

const goldButton =
  "gold-button inline-flex min-h-11 items-center justify-center gap-3 border border-[#F2AD16] bg-[#F2AD16] px-5 text-[10px] uppercase tracking-[0.1em] transition-colors duration-200 hover:border-[#FFD46B] hover:bg-[#FFD46B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2AD16] sm:min-h-12 sm:px-6";

const goldTextLink =
  "mt-8 inline-flex items-center gap-3 text-xs font-medium text-[#F2AD16] transition-colors hover:text-[#FFD46B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2AD16]";

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
        <div className="relative mx-auto grid min-h-[inherit] w-full max-w-[1368px] grid-cols-1 items-center px-6 pb-0 pt-9 sm:px-10 sm:pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-16 lg:py-0">
          {/* TEXTO */}
          <div className="relative z-20">
            {/* LOGO NO LUGAR DO TÍTULO TEXTUAL */}
            <div className="mb-6">
              <img
                src="/imagens/logo_andre.png"
                alt="André Cavalcanti"
                className="block h-auto w-[min(100%,420px)] object-contain object-left"
              />
            </div>

            {/* SUBTÍTULO COM DESTAQUE DOURADO */}
            <h2 className="max-w-3xl text-xl font-medium leading-snug text-white sm:text-2xl lg:text-3xl">
              Estratégia, desenvolvimento e inteligência
              <br />
              aplicada a{" "}
              <span className="font-semibold text-[#F2AD16]">
                otimização de resultados
              </span>
              <br />
              pessoais e empresariais.
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base lg:text-lg">
              Ajudo empresários, líderes e organizações a transformar
              <br className="hidden lg:block" />
              conhecimento em decisão, intenção em construção e
              <br className="hidden lg:block" />
              potencial em resultados sustentáveis.
            </p>
          </div>

          {/* RETRATO */}
          <div className="relative mx-auto mt-5 flex h-[min(62svh,500px)] min-h-[310px] w-full max-w-[520px] items-end justify-center sm:mt-7 sm:h-[min(70svh,600px)] sm:min-h-[390px] lg:mt-0 lg:h-[min(84svh,790px)] lg:max-w-none lg:self-end">
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
              alt="André Cavalcanti"
              className="relative z-10 block h-full w-full object-contain object-bottom lg:absolute lg:bottom-[1%] lg:right-[-2%] lg:h-[100%] lg:w-[108%]"
              style={{
                transform: "scale(1.08)",
                transformOrigin: "center bottom",
                WebkitMaskImage:
                  "radial-gradient(ellipse 76% 84% at 50% 44%, #000 48%, rgba(0,0,0,0.96) 59%, rgba(0,0,0,0.72) 72%, rgba(0,0,0,0.32) 86%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse 76% 84% at 50% 44%, #000 48%, rgba(0,0,0,0.96) 59%, rgba(0,0,0,0.72) 72%, rgba(0,0,0,0.32) 86%, transparent 100%)",
              }}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[10%]"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(8,8,8,0.25) 55%, #080808 100%)",
              }}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[18%]"
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

      {/* SOLUÇÕES */}
      <section
        id="solucoes"
        className="border-t border-white/[0.07] bg-[#0d0c0a] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <SectionEyebrow>Soluções e conexões</SectionEyebrow>
              <h2 className="mt-5 text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Inteligência que se transforma em{" "}
                <span className="text-[#F2AD16]">possibilidades.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/50 md:justify-self-end">
              Conheça iniciativas que conectam conhecimento, estratégia e
              desenvolvimento para responder aos desafios de pessoas e
              organizações.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {solutions.map((solution, index) => (
              <article
                key={solution.name}
                className="group relative overflow-hidden border border-white/10 bg-[#11100e] p-7 transition duration-300 hover:border-[#F2AD16]/50 sm:p-10"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#F2AD16]/10 transition duration-500 group-hover:scale-125"
                />

                <span className="text-xs tracking-[0.25em] text-[#F2AD16]">
                  0{index + 1}
                </span>

                <h3 className="mt-8 text-3xl font-light text-[#F2AD16]">
                  {solution.name}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/50">
                  {solution.category}
                </p>

                <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
                  {solution.description}
                </p>

                <a href="#contato" className={goldTextLink}>
                  Saiba mais <ArrowUpRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESE */}
      <section
        id="tese"
        className="border-t border-white/[0.08] bg-[#080808] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>A tese</SectionEyebrow>

            <h2 className="mt-5 text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
              Teoria da{" "}
              <span className="text-[#F2AD16]">
                Arquitetura Inteligente
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55">
              Uma abordagem integrada para compreender, estruturar e
              transformar pessoas, relações e organizações com consciência,
              estratégia e propósito.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="group relative border border-[#F2AD16]/30 p-7 transition duration-300 hover:border-[#F2AD16] sm:p-9"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-1 border border-[#F2AD16]/10 transition group-hover:border-[#F2AD16]/30"
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-sm tracking-[0.2em] text-[#F2AD16]">
                      {pillar.number}
                    </span>
                    <span className="text-2xl font-light text-[#F2AD16]/70">
                      ✳
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-light leading-snug sm:text-3xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-1 text-sm tracking-[0.15em] text-[#F2AD16]">
                    {pillar.subtitle}
                  </p>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-[10px] uppercase tracking-[0.15em] text-[#F2AD16] sm:gap-5 sm:text-xs">
            <span>Diagnóstico</span>
            <span aria-hidden="true">»</span>
            <span>Direcionamento</span>
            <span aria-hidden="true">»</span>
            <span>Ação</span>
            <span aria-hidden="true">»</span>
            <span>Registro</span>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="border-t border-white/[0.08] bg-[#0d0c0a] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative flex min-h-[340px] items-center justify-center border border-[#F2AD16]/20 bg-[#080808] p-8 sm:min-h-[440px]">
            <div
              aria-hidden="true"
              className="absolute inset-5 border border-[#F2AD16]/15"
            />

            <div className="relative text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-[#F2AD16]">
                Estratégia · Propósito · Legado
              </span>

              <div className="my-7 text-6xl font-light tracking-[0.15em] text-[#F2AD16]">
                AC
              </div>

              <p className="text-sm tracking-[0.2em] text-white/70">
                ANDRÉ CAVALCANTI
              </p>
            </div>
          </div>

          <div>
            <SectionEyebrow>Quem sou eu</SectionEyebrow>

            <h2 className="mt-5 text-4xl font-light leading-tight sm:text-5xl">
              Construir com{" "}
              <span className="text-[#F2AD16]">intenção.</span>
              <br />
              Transformar com{" "}
              <span className="text-[#F2AD16]">inteligência.</span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-white/60">
              Uma atuação dedicada ao desenvolvimento humano e organizacional,
              conectando estratégia, conhecimento e ação para transformar
              desafios em construções consistentes.
            </p>

            <p className="mt-4 text-sm leading-8 text-white/60">
              A Teoria da Arquitetura Inteligente integra diferentes dimensões
              da vida e dos negócios para apoiar decisões mais conscientes,
              relações mais fortes e resultados sustentáveis.
            </p>

            {/* BOTÃO VAMOS CONVERSAR */}
            <a
              href="#contato"
              className={`${goldButton} mt-8`}
            >
              <span className="gold-button__label">VAMOS CONVERSAR</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-[1240px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.number}
              className="border border-white/10 p-6 transition-colors hover:border-[#F2AD16]/50"
            >
              <span className="text-xs tracking-[0.2em] text-[#F2AD16]">
                {service.number}
              </span>

              <h3 className="mt-6 text-lg font-light">{service.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="relative isolate overflow-hidden border-t border-white/[0.08] bg-[#080808] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(242,173,22,0.13), transparent 60%)",
          }}
        />

        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow>O próximo passo começa aqui</SectionEyebrow>

          <h2 className="mt-6 text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
            Qual construção
            <br />
            precisa <span className="text-[#F2AD16]">começar?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            Toda transformação começa com uma conversa, uma visão e a decisão
            de construir novos caminhos.
          </p>

          <ContactForm />
        </div>

        <footer className="mx-auto mt-20 flex max-w-[1240px] flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
          <a
            href="#inicio"
            className="text-xs tracking-[0.2em] text-[#F2AD16]"
          >
            ESTRATÉGIA INTELIGENTE
          </a>

          <p className="text-xs text-white/35">
            Estratégia, desenvolvimento e inteligência.
          </p>

          <a
            href="#inicio"
            className="text-xs text-[#F2AD16] transition-colors hover:text-[#FFD46B]"
          >
            Voltar ao início ↑
          </a>
        </footer>
      </section>
    </main>
  );
}
