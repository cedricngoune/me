import { SectionTitle } from "@/src/components/sections/section-title";
import { site } from "@/src/content/site";

export function Projects() {
  return (
    <section
      id="realisations"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24"
    >
      <SectionTitle
        label="Réalisations"
        title="Les plateformes sur lesquelles j’ai travaillé"
        intro="Quatre missions, du module front à fort trafic à la plateforme montée de zéro."
        center
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {site.projects.map((realisation, index) => (
          <article
            key={realisation.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-bord bg-surface shadow-carte transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-haute"
            data-apparition
            style={{ ["--delai" as string]: `${(index % 2) * 90}ms` }}
          >
            <div className="degrade-marque relative flex items-center justify-between overflow-hidden px-6 py-5 text-white">
              <div
                className="trame-points absolute inset-0 text-white/25"
                aria-hidden="true"
              />
              <span className="relative grid h-12 w-12 place-items-center rounded-xl border border-white/30 bg-white/15 font-avenir text-sm font-bold backdrop-blur-sm">
                {realisation.sigle}
              </span>
              <span className="relative rounded-full border border-white/25 bg-white/10 px-3 py-1 font-roboto text-xs backdrop-blur-sm">
                {realisation.period}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-avenir text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-brand">
                {realisation.name}
              </h3>
              <p className="mt-1 font-roboto text-sm text-encre-douce">
                {realisation.client}
              </p>

              <p className="mt-4 font-roboto text-sm leading-relaxed text-encre-douce">
                {realisation.resume}
              </p>

              <ul className="mt-4 space-y-2 font-roboto text-sm text-encre-douce">
                {realisation.points.map((point) => (
                  <li key={point} className="relative pl-4">
                    <span
                      className="absolute left-0 top-[0.62em] h-1.5 w-1.5 rounded-full bg-brand"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2 border-t border-bord pt-5">
                {realisation.stack.map((techno) => (
                  <li
                    key={techno}
                    className="rounded-md border border-bord bg-surface-2 px-2.5 py-1 font-roboto text-xs text-encre-douce"
                  >
                    {techno}
                  </li>
                ))}
              </ul>

              <p className="mt-4 font-roboto text-xs text-encre-douce/80">
                {realisation.role}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
