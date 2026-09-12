import { Bug, Check, LayoutDashboard, Server } from "lucide-react";
import { SectionTitle } from "@/src/components/sections/section-title";
import { site } from "@/src/content/site";

const icones = {
  api: Server,
  interface: LayoutDashboard,
  bug: Bug,
};

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-surface-2/60 py-20 lg:py-24"
    >
      <div
        className="halo -left-32 top-10 h-80 w-80 opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          label="Services"
          title="Trois façons de travailler ensemble"
          intro="Sur une mission complète, ou sur le point précis qui bloque votre équipe."
          center
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {site.services.map((service, index) => {
            const Icone = icones[service.icon];
            return (
              <article
                key={service.title}
                className="group flex flex-col rounded-2xl border border-bord bg-surface p-6 shadow-carte transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-haute"
                data-apparition
                style={{ ["--delai" as string]: `${index * 90}ms` }}
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/12 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icone className="h-5 w-5" aria-hidden="true" />
                </span>

                <h3 className="mt-5 font-avenir text-lg font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2.5 font-roboto text-sm leading-relaxed text-encre-douce">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-bord pt-5 font-roboto text-sm text-encre-douce">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                        aria-hidden="true"
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
