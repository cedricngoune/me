import { SectionTitle } from "@/src/components/sections/section-title";
import { site } from "@/src/content/site";

export function Stack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-surface-2/60 py-20 lg:py-24"
    >
      <div
        className="halo -right-24 bottom-0 h-80 w-80 opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          label="Stack"
          title="Les technologies avec lesquelles je travaille"
          intro="Du back-end à l’infrastructure, ce que j’utilise au quotidien en production."
          center
        />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {site.stacks.map((stack, index) => (
            <li
              key={stack.name}
              className="group flex items-center gap-3 rounded-xl border border-bord bg-surface p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-carte"
              data-apparition
              style={{ ["--delai" as string]: `${(index % 4) * 60}ms` }}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/12 font-avenir text-xs font-bold text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                {stack.sigle}
              </span>
              <span className="min-w-0">
                <span className="block truncate font-roboto text-sm font-medium">
                  {stack.name}
                </span>
                <span className="block font-roboto text-xs text-encre-douce">
                  {stack.category}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
