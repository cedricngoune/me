import { ThemeToggle } from "@/src/components/theme-toggle";
import { sections, site } from "@/src/content/site";

export function Header() {
  return (
    <header
      data-entete
      data-defile="false"
      className="sticky top-0 z-40 border-b border-transparent bg-fond/75 backdrop-blur-lg transition-colors duration-200 data-[defile=true]:border-bord"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a
          href="#accueil"
          className="flex items-center gap-2.5 font-avenir font-bold tracking-tight"
        >
          <span className="degrade-marque grid h-9 w-9 place-items-center rounded-xl text-xs text-white">
            {site.initial}
          </span>
          <span className="hidden sm:inline">{site.fullname}</span>
        </a>

        <nav data-nav aria-label="Sections du site" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="rounded-full px-3.5 py-2 font-roboto text-sm text-encre-douce transition-colors hover:bg-surface-2 hover:text-encre data-[actif=true]:bg-brand/12 data-[actif=true]:text-brand"
                >
                  {section.intitule}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
