export function SectionTitle({
  label,
  title,
  intro,
  center = false,
}: {
  label: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}
      data-apparition
    >
      <p
        className={`inline-flex items-center gap-2 font-roboto text-sm font-medium text-brand ${center ? "justify-center" : ""}`}
      >
        <span className="h-px w-6 bg-brand" aria-hidden="true" />
        {label}
      </p>
      <h2 className="mt-3 font-avenir text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 font-roboto leading-relaxed text-encre-douce">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
