import { GraduationCap, Languages, ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/src/components/sections/section-title";
import { site } from "@/src/content/site";

export function About() {
  return (
    <section
      id="profil"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24"
    >
      <SectionTitle
        label="À propos"
        title="Quatre ans à reprendre, construire et fiabiliser des plateformes métier"
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <div
          className="space-y-5 font-roboto leading-relaxed text-encre-douce"
          data-apparition
        >
          {site.about.map((paragraphe) => (
            <p key={paragraphe.slice(0, 32)}>{paragraphe}</p>
          ))}
        </div>

        <div
          className="rounded-2xl border border-bord bg-surface p-6 shadow-carte"
          data-apparition
          style={{ ["--delai" as string]: "120ms" }}
        >
          <div className="flex items-center gap-2 font-avenir text-sm font-semibold">
            <GraduationCap className="h-4 w-4 text-brand" aria-hidden="true" />
            Formation
          </div>

          <ol className="mt-4 space-y-4 border-l border-bord pl-5">
            {site.formations.map((formation) => (
              <li key={formation.description} className="relative">
                <span
                  className="absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-brand bg-surface"
                  aria-hidden="true"
                />
                <p className="font-roboto text-xs text-encre-douce">
                  {formation.year}
                </p>
                <p className="mt-0.5 font-roboto text-sm font-medium">
                  {formation.description}
                </p>
                <p className="font-roboto text-sm text-encre-douce">
                  {formation.school}
                </p>
              </li>
            ))}
          </ol>

          <dl className="mt-6 space-y-3 border-t border-bord pt-5 font-roboto text-sm">
            <div className="flex items-start gap-2">
              <ShieldCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                aria-hidden="true"
              />
              <div>
                <dt className="sr-only">Certification</dt>
                <dd>{site.certifications.join(", ")}</dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Languages
                className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                aria-hidden="true"
              />
              <div>
                <dt className="sr-only">Langues</dt>
                <dd className="text-encre-douce">
                  {site.langages.join(" · ")}
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>

      <ul className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {site.figures.map((figure, index) => (
          <li
            key={figure.legend}
            className="rounded-2xl border border-bord bg-surface p-5 text-center shadow-carte transition-transform duration-300 hover:-translate-y-1"
            data-apparition
            style={{ ["--delai" as string]: `${index * 80}ms` }}
          >
            <p className="texte-marque font-avenir text-4xl font-bold tracking-tight">
              {figure.value}
            </p>
            <p className="mt-1.5 font-roboto text-sm text-encre-douce">
              {figure.legend}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
