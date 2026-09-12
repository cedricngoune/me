import { Github, Linkedin, Mail } from "lucide-react";
import { sections, site } from "@/src/content/site";

export const Footer = () => {
  return (
    <footer className="border-t border-bord bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2.5 font-avenir font-bold tracking-tight">
            <span className="degrade-marque grid h-9 w-9 place-items-center rounded-xl text-xs text-white">
              {site.initial}
            </span>
            {site.fullname}
          </p>
          <p className="mt-4 max-w-sm font-roboto text-sm leading-relaxed text-encre-douce">
            {site.job} en Île-de-France. Conception d’API, interfaces web et
            correction d’anomalies en production.
          </p>
        </div>

        <nav aria-label="Liens du pied de page">
          <p className="font-avenir text-sm font-semibold">Navigation</p>
          <ul className="mt-4 space-y-2.5 font-roboto text-sm text-encre-douce">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="transition-colors hover:text-brand"
                >
                  {section.intitule}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-avenir text-sm font-semibold">Me joindre</p>
          <ul className="mt-4 space-y-2.5 font-roboto text-sm text-encre-douce">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-brand"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
            </li>
            <li>
              <a
                href={site.liens.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 transition-colors hover:text-brand"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={site.liens.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 transition-colors hover:text-brand"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bord">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-5 font-roboto text-xs text-encre-douce sm:px-8">
          <span>
            {site.fullname} — {site.location}
          </span>
          <span>© {new Date().getFullYear()} Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
};
