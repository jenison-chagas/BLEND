"use client";

const brands = [
  { name: "Gessst", className: "brand-gesst", logo: "/imagens/solucoes/gesst.png", href: "#" },
  { name: "AEtech", className: "brand-aetech", logo: "/imagens/solucoes/aetech-full.png", href: "#" },
  { name: "Aurora Softline", className: "brand-aurora", logo: "/imagens/solucoes/aurora.png", href: "#" },
  { name: "Efetiva", className: "brand-efetiva", logo: "/imagens/solucoes/efetiva-wordmark.png", href: "#" },
  { name: "Apta", className: "brand-apta", logo: "/imagens/solucoes/apta-nome.png", href: "#" },
  { name: "conceo Consultoria Empresarial", className: "brand-conceo", logo: "/imagens/solucoes/conceo-simbolo.png", href: "#" },
  { name: "AORIS", className: "brand-aoris", logo: "/imagens/solucoes/aoris-wordmark.png", href: "#" },
  { name: "EDUCA.Sys", className: "brand-educa", logo: "/imagens/solucoes/educa-sys.png", href: "#" },
  { name: "SafeMind Pro", className: "brand-safemind", logo: "/imagens/solucoes/safemind-simbolo.png", href: "#" },
  { name: "LEXSST", className: "brand-lexsst", logo: "/imagens/solucoes/lexxst.png", href: "#" },
];

function BrandArtwork({ name, logo }: { name: string; logo: string }) {
  if (name === "Efetiva") {
    return (
      <>
        <img className="brand-mark brand-mark--efetiva" src="/imagens/solucoes/efetiva-simbolo.png" alt="" />
        <img className="brand-wordmark brand-wordmark--efetiva" src={logo} alt="" />
      </>
    );
  }

  if (name === "Apta") {
    return (
      <>
        <img className="brand-mark brand-mark--apta" src="/imagens/solucoes/apta-simbolo.png" alt="" />
        <img className="brand-wordmark brand-wordmark--apta" src={logo} alt="" />
      </>
    );
  }

  if (name === "AORIS") {
    return (
      <>
        <img className="brand-mark brand-mark--aoris" src="/imagens/solucoes/aoris-simbolo.png" alt="" />
        <img className="brand-wordmark brand-wordmark--aoris" src={logo} alt="" />
      </>
    );
  }

  if (name === "conceo Consultoria Empresarial") {
    return (
      <>
        <img className="brand-mark brand-mark--conceo" src={logo} alt="" />
        <span className="brand-wordmark brand-wordmark--conceo">conceo</span>
        <span className="brand-caption">Consultoria Empresarial</span>
      </>
    );
  }

  if (name === "SafeMind Pro") {
    return (
      <>
        <img className="brand-mark brand-mark--safemind" src={logo} alt="" />
        <span className="brand-wordmark brand-wordmark--safemind">safeMind</span>
        <span className="brand-caption brand-caption--safemind">pro</span>
      </>
    );
  }

  return <img className="brand-wordmark" src={logo} alt="" />;
}

export function SolutionLogos() {
  return (
    <section id="solucoes" className="solutions-showcase" aria-label="Soluções e marcas parceiras">
      <div className="solutions-stage">
        <img className="solutions-wolf" src="/imagens/lobo.png" alt="" aria-hidden="true" />
        <img className="solutions-filigree solutions-filigree--left" src="/imagens/solucoes/decoracao-fios.png" alt="" aria-hidden="true" />
        <img className="solutions-filigree solutions-filigree--right" src="/imagens/solucoes/decoracao-fios.png" alt="" aria-hidden="true" />

        <div className="solutions-brands">
          {brands.map((brand) => (
            <a
              key={brand.name}
              className={`solutions-brand ${brand.className}`}
              href={brand.href}
              aria-label={`${brand.name} — link para configurar`}
              title={`${brand.name}: link para configurar`}
              onClick={brand.href === "#" ? (event) => event.preventDefault() : undefined}
            >
              <BrandArtwork name={brand.name} logo={brand.logo} />
            </a>
          ))}
        </div>

        <div className="solutions-carousel" aria-label="Marcas parceiras">
          {[brands.slice(0, 5), brands.slice(5)].map((row, rowIndex) => (
            <div className="solutions-carousel__row" key={rowIndex}>
              <div className={`solutions-carousel__track${rowIndex === 1 ? " solutions-carousel__track--reverse" : ""}`}>
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    className="solutions-carousel__group"
                    aria-hidden={copy === 1 ? true : undefined}
                  >
                    {row.map((brand) => (
                      <a
                        key={brand.name}
                        className={`solutions-brand ${brand.className}`}
                        href={brand.href}
                        tabIndex={copy === 1 ? -1 : undefined}
                        aria-label={`${brand.name} — link para configurar`}
                        title={`${brand.name}: link para configurar`}
                        onClick={brand.href === "#" ? (event) => event.preventDefault() : undefined}
                      >
                        <BrandArtwork name={brand.name} logo={brand.logo} />
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
