import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { site } from "@/src/content/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24"
    >
      <div
        className="degrade-marque relative overflow-hidden rounded-3xl px-6 py-14 text-center text-white sm:px-12"
        data-apparition
      >
        <div
          className="trame-points absolute inset-0 text-white/20"
          aria-hidden="true"
        />
        <div
          className="halo -left-24 -top-24 h-72 w-72"
          style={{ ["--halo" as string]: "rgba(255,255,255,.3)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-avenir text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Un projet, une API à reprendre, un bug qui traîne ?
          </h2>
          <p className="mt-4 font-roboto leading-relaxed text-white/85">
            Décrivez votre besoin en quelques lignes, avec le contexte technique
            si vous l’avez. Je réponds sous 24 heures ouvrées.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#4D2FB2] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Écrire un mail
            </a>
            {site.telephone ? (
              <a
                href={`tel:${site.telephone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {site.telephone}
              </a>
            ) : null}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5 border-t border-white/20 pt-7 font-roboto text-sm text-white/85">
            <a
              href={`mailto:${site.email}`}
              className="transition-opacity hover:opacity-70"
            >
              {site.email}
            </a>
            <a
              href={site.liens.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a
              href={site.liens.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
