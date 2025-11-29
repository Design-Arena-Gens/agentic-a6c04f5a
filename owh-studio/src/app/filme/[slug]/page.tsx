import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { films } from "@/data/films";

type FilmPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return films.map((film) => ({ slug: film.slug }));
}

export async function generateMetadata({
  params,
}: FilmPageProps): Promise<Metadata | undefined> {
  const { slug } = await params;
  const film = films.find((item) => item.slug === slug);

  if (!film) {
    return undefined;
  }

  return {
    title: `${film.title} — OWH STUDIO`,
    description: film.tagline,
  };
}

export default async function FilmPage({ params }: FilmPageProps) {
  const { slug } = await params;
  const film = films.find((item) => item.slug === slug);

  if (!film) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 pb-24 pt-24 sm:px-6 lg:px-0">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
        <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-10">
          <div
            className="absolute inset-0 opacity-70"
            style={{ background: film.theme.gradient }}
            aria-hidden
          />
          <div className="relative flex h-full flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-3 rounded-full bg-black/50 px-5 py-2 text-xs uppercase tracking-[0.34em] text-white/70">
                {film.year}
                <span className="h-1 w-12 bg-white/20" />
                {film.duration}
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {film.title}
              </h1>
              <p className="text-sm uppercase tracking-[0.32em] text-white/60">
                {film.categories.join(" · ")}
              </p>
            </div>
            <Link
              href={film.trailerUrl}
              target="_blank"
              className="inline-flex w-max items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.32em] text-white/80 transition hover:border-white hover:text-white"
            >
              Trailer oficial
            </Link>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <p className="text-lg text-white/80">{film.tagline}</p>
          <p className="text-sm leading-7 text-white/70">{film.description}</p>
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.32em] text-white/50">Select festivaluri</p>
            <ul className="mt-4 space-y-3">
              {film.festivalHighlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-3">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: film.theme.accent }}
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-20 grid gap-8 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7">
          <h2 className="text-xs uppercase tracking-[0.32em] text-white/50">Credit principal</h2>
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            {film.credits.map((credit) => (
              <li key={credit.rol} className="flex items-center justify-between gap-4">
                <span className="uppercase tracking-[0.28em] text-white/40">{credit.rol}</span>
                <span className="font-medium text-white">{credit.nume}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 lg:col-span-2">
          <h2 className="text-xs uppercase tracking-[0.32em] text-white/50">Cadre memorabile</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {film.gallery.map((frame) => (
              <div
                key={frame}
                className="h-32 rounded-2xl border border-white/10 bg-white/10"
                style={{ background: film.theme.gradient }}
              />
            ))}
          </div>
          <p className="mt-6 text-sm text-white/60">
            Scenele cheie rămân în arhiva fizică OWH. Pentru acces la materialul brut sau la
            making-of, contactează echipa de producție.
          </p>
        </div>
      </section>

      <section className="mt-20 rounded-3xl border border-white/10 bg-white/[0.05] p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/60">
              Continuă explorarea
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">În arhiva OWH STUDIO</h2>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.32em] text-white/80 transition hover:border-white hover:text-white"
          >
            Înapoi la homepage
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {films
            .filter((item) => item.slug !== film.slug)
            .map((item) => (
              <Link
                key={item.slug}
                href={`/filme/${item.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-xs uppercase tracking-[0.32em] text-white/40">{item.year}</p>
                <p className="mt-3 text-lg font-semibold text-white group-hover:text-white/80">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-white/60">{item.tagline}</p>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
