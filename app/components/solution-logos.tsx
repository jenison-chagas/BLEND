"use client";

import type { CSSProperties } from "react";

const brands = [
  { name: "Gessst", className: "brand-gesst", logo: "/imagens/solucoes/originais/gesst.svg", href: "#" },
  { name: "AEtech", className: "brand-aetech", logo: "/imagens/solucoes/originais/aetech.svg", href: "#" },
  { name: "Aurora Softline", className: "brand-aurora", logo: "/imagens/solucoes/originais/aurora.svg", href: "#" },
  { name: "Efetiva", className: "brand-efetiva", logo: "/imagens/solucoes/originais/efetiva.svg", href: "#" },
  { name: "Apta", className: "brand-apta", logo: "/imagens/solucoes/originais/apta.svg", href: "#" },
  { name: "conceo Consultoria Empresarial", className: "brand-conceo", logo: "/imagens/solucoes/originais/conceo.svg", href: "#" },
  { name: "AORIS", className: "brand-aoris", logo: "/imagens/solucoes/originais/aoris.svg", href: "#" },
  { name: "EDUCA.Sys", className: "brand-educa", logo: "/imagens/solucoes/originais/educa.svg", href: "#" },
  { name: "SafeMind Pro", className: "brand-safemind", logo: "/imagens/solucoes/originais/safemind.svg", href: "#" },
  { name: "LEXSST", className: "brand-lexsst", logo: "/imagens/solucoes/originais/lexsst.svg", href: "#" },
  { name: "Consitus Log", className: "brand-consitus", logo: "/imagens/solucoes/originais/consitus.svg", href: "#" },
];

// Clockwise order; every center is exactly 1/11 of a revolution apart.
const orbitOrder = [
  "brand-aetech", "brand-aurora", "brand-apta", "brand-aoris",
  "brand-lexsst", "brand-consitus", "brand-safemind", "brand-educa",
  "brand-conceo", "brand-efetiva", "brand-gesst",
];

// Each asset preserves the complete supplied brand composition.
// Sharing it across both layouts preserves lettering, spacing and proportions.
function BrandArtwork({ logo }: { name: string; logo: string }) {
  return <img className="brand-artwork" src={logo} alt="" draggable={false} />;
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
              style={{
                "--orbit-start": `${(75 + orbitOrder.indexOf(brand.className) * 100 / brands.length) % 100}%`,
              } as CSSProperties}
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
