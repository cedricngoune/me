import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { site } from "@/src/content/site";

export function Hero() {
  const lines = site.titre.split(" et ");

  return (
    <section
      id="accueil"
      className="degrade-marque relative overflow-hidden text-white"
    >
      <div
        className="trame-points absolute inset-0 text-white/20"
        aria-hidden="true"
      />
      <div
        className="halo -right-40 -top-40 h-136 w-136 opacity-60"
        style={{ ["--halo" as string]: "rgba(255,255,255,.35)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:gap-16 lg:py-28">
        <div>
          <p
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 font-roboto text-xs backdrop-blur-sm"
            data-apparition
          >
            <span className="onde relative h-1.5 w-1.5 rounded-full bg-emerald-300 text-emerald-300" />
            {site.availability}
          </p>

          <p
            className="mt-7 font-roboto text-lg text-white/80"
            data-apparition
            style={{ ["--delai" as string]: "80ms" }}
          >
            {site.presentation}
          </p>

          <h1 className="mt-2 font-avenir text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {lines.map((line, index) => (
              <span className="masque" key={line}>
                <span
                  style={{ ["--delai" as string]: `${160 + index * 130}ms` }}
                >
                  {index === 0 ? `${line} et` : line}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="mt-6 max-w-xl font-roboto text-base leading-relaxed text-white/85 sm:text-lg"
            data-apparition
            style={{ ["--delai" as string]: "460ms" }}
          >
            {site.chapo}
          </p>

          <div
            className="mt-9 flex flex-wrap gap-3"
            data-apparition
            style={{ ["--delai" as string]: "540ms" }}
          >
            <a
              href="#realisations"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#4D2FB2] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Voir mes réalisations
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
            >
              Me contacter
            </a>
          </div>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 font-roboto text-sm text-white/80"
            data-apparition
            style={{ ["--delai" as string]: "620ms" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {site.location}
            </span>
            <span className="h-4 w-px bg-white/25" aria-hidden="true" />
            <a
              href={site.liens.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="transition-opacity hover:opacity-70"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={site.liens.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="transition-opacity hover:opacity-70"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Envoyer un mail"
              className="transition-opacity hover:opacity-70"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div
          className="justify-self-center lg:justify-self-end"
          data-apparition
          style={{ ["--delai" as string]: "260ms" }}
        >
          <Portrait />
        </div>
      </div>

      <svg
        className="relative block w-full text-fond"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 60V28c240 24 480 32 720 22S1200 12 1440 0v60Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}

function Portrait() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-3 rounded-full border border-white/25"
        aria-hidden="true"
      />
      <div
        className="absolute -inset-7 rounded-full border border-white/10"
        aria-hidden="true"
      />
      <div className="relative h-44 w-44 overflow-hidden rounded-full bg-white/15 shadow-2xl ring-4 ring-white/30 backdrop-blur-sm sm:h-56 sm:w-56">
        {site.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={site.photo}
            alt={site.fullname}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="grid h-full w-full place-items-center font-avenir text-6xl font-bold text-white/90">
            {site.initial}
          </span>
        )}
      </div>
    </div>
  );
}
