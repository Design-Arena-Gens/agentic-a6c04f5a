import Link from "next/link";
import { films } from "@/data/films";

const navItems = [
  { label: "Filme", href: "#filme" },
  { label: "Producţie video", href: "#productie" },
  { label: "Emisiuni", href: "#emisiuni" },
  { label: "Rental", href: "#rental" },
  { label: "Bilete", href: "#bilete" },
  { label: "Despre", href: "#despre" },
  { label: "Contacte", href: "#contacte" },
  { label: "CRONOGRAF", href: "#cronograf" },
];

const services = [
  {
    title: "Regie & Story Architecture",
    description:
      "Construim povești cinematografice cu identitate clară, dramaturgie fluidă și emoție calibrată pentru publicul tău.",
    detail: "Concept creative lab + sesiuni de development cu echipa OWH.",
  },
  {
    title: "Imagine & Color Grading",
    description:
      "Operăm cu camere full-frame, optică vintage/modernă și pipeline HDR pentru un look impecabil, adaptat fiecarei platforme.",
    detail: "Look bible personalizat, referințe vizuale și livrabile multi-format.",
  },
  {
    title: "Post-Producţie Full Stack",
    description:
      "Montaj, sound design, muzică originală și finishing Dolby — totul în același studio pentru control creativ total.",
    detail: "Livrare rapidă, flux colaborativ remote și arhivare responsabilă.",
  },
];

const emisuni = [
  {
    titlu: "Noaptea Documentarului",
    text: "Serii tematice difuzate în prime-time cu focus pe societate, identitate și transformare urbană.",
  },
  {
    titlu: "CRONOGRAF ON AIR",
    text: "Culisele festivalului și interviuri cu invitați internaționali în format dinamic de 23 de minute.",
  },
  {
    titlu: "Camera Albă",
    text: "Format signature OWH — dialoguri vizuale cu artiști emergenți și creatori interdisciplinari.",
  },
];

const rentalPackages = [
  {
    titlu: "Cinema Pack",
    detalii: ["ARRI Alexa 35", "Set Zeiss Supreme Prime 4 lentile", "DIT on-set"],
    pret: "de la 890 € / zi",
  },
  {
    titlu: "Documentar Agile",
    detalii: ["Sony FX9 x2", "Kit sunet boom + lavalieră", "Drone FPV pilot dedicat"],
    pret: "de la 360 € / zi",
  },
  {
    titlu: "Studio Vertical",
    detalii: ["Blackmagic Pocket 6K", "Lighting RGBWW", "Teleprompter & control streaming"],
    pret: "de la 210 € / zi",
  },
];

const cronografMoments = [
  {
    anul: 2001,
    text: "Primul festival internațional de film documentar din Republica Moldova — OWH lansează un manifest pentru cinema-ul autentic.",
  },
  {
    anul: 2010,
    text: "Secțiunea New Talents conectează cineaști emergenți din Europa de Est cu producători și curatori globali.",
  },
  {
    anul: 2024,
    text: "Ediția aniversară CRONOGRAF redefinește experiența festivalului cu VR docs, expoziții și programe educaționale imersive.",
  },
];

const contactLinks = [
  { label: "hello@owh.studio", href: "mailto:hello@owh.studio" },
  { label: "+373 60 000 333", href: "tel:+37360000333" },
  { label: "@owhstudio", href: "https://www.instagram.com" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link href="#hero" className="flex flex-col text-left">
            <span className="font-[var(--font-geist-mono)] text-xl uppercase tracking-[0.4em] text-white">
              OWH
            </span>
            <span className="font-semibold text-sm uppercase tracking-[0.34em] text-white/70">
              Studio
            </span>
          </Link>
          <nav className="ml-6 hidden gap-6 text-sm font-medium uppercase tracking-[0.18em] text-white/80 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Live
            </div>
          </div>
        </div>
        <nav className="flex gap-3 overflow-x-auto border-t border-white/10 px-4 py-3 text-[11px] uppercase tracking-[0.32em] text-white/60 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-white/10 px-4 py-2 transition hover:border-white/40 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-28 px-4 pb-32 pt-20 sm:px-6 lg:px-8">
        <section id="hero" className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.5em] text-white/50">
              Film Studio &amp; Festival Lab
            </p>
            <h1 className="font-[var(--font-geist-mono)] text-5xl uppercase leading-tight tracking-[0.18em] text-white sm:text-6xl">
              OWH STUDIO
            </h1>
            <p className="max-w-xl text-lg text-white/80 sm:text-xl">
              Studio-ul care produce documentare manifest, emisiuni necesare și experiențe cinematografice pentru un public mereu curios. De peste 20 de ani conectăm povești din Moldova cu scena internațională prin festivalul CRONOGRAF.
            </p>
            <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.32em]">
              <Link
                href="#filme"
                className="rounded-full bg-white/95 px-6 py-3 text-black transition hover:bg-white"
              >
                Explorează Filmele
              </Link>
              <Link
                href="#rental"
                className="rounded-full border border-white/30 px-6 py-3 text-white/80 transition hover:border-white hover:text-white"
              >
                Închiriază Echipament
              </Link>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.32em] text-white/60">
                  Focus 2025
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.34em] text-white/70">
                  New
                </span>
              </div>
              <h2 className="mt-6 text-2xl font-semibold leading-tight text-white">
                Writing Room pentru documentare emergente
              </h2>
              <p className="mt-3 text-sm text-white/70">
                Deschidem aplicațiile pentru rezidența OWH STUDIO. 8 săptămâni de mentorat cu regizori și producători din rețeaua CRONOGRAF.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.32em] text-white/60">
                <span className="rounded-full border border-white/20 px-4 py-2">
                  Deadline 30.03
                </span>
                <span className="rounded-full border border-white/20 px-4 py-2">
                  Chișinău + Online
                </span>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/60">
                Ultimele premiere
              </p>
              <ul className="mt-5 space-y-4 text-sm text-white/80">
                {films.map((film) => (
                  <li key={film.slug} className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-white">{film.title}</p>
                      <p className="text-xs uppercase tracking-[0.28em] text-white/60">
                        {film.year} · {film.duration}
                      </p>
                    </div>
                    <Link
                      href={`/filme/${film.slug}`}
                      className="rounded-full border border-white/20 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/70 transition hover:border-white hover:text-white"
                    >
                      Vizualizează
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="filme" className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/50">Arhivă Curatoriată</p>
              <h2 className="mt-1 text-4xl font-semibold text-white sm:text-5xl">
                Filmele OWH STUDIO
              </h2>
            </div>
            <Link
              href="#cronograf"
              className="text-xs uppercase tracking-[0.34em] text-white/60 transition hover:text-white"
            >
              Vezi conexiunea cu CRONOGRAF →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {films.map((film) => (
              <article
                key={film.slug}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_80px_-60px_rgba(0,0,0,0.8)]"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-70 mix-blend-screen"
                  style={{ background: film.theme.gradient }}
                />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/70 backdrop-blur">
                      {film.year}
                      <span className="h-1 w-20 bg-white/20" />
                      {film.duration}
                    </span>
                    <h3 className="text-2xl font-semibold text-white">{film.title}</h3>
                    <p className="text-sm text-white/80">{film.tagline}</p>
                    <p className="text-sm text-white/60">{film.description}</p>
                    <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.32em] text-white/70">
                      {film.categories.map((category) => (
                        <span key={category} className="rounded-full border border-white/20 px-4 py-2">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap justify-between gap-4 text-xs uppercase tracking-[0.32em] text-white/70">
                    <div className="space-y-2">
                      {film.festivalHighlights.slice(0, 2).map((fest) => (
                        <p key={fest} className="flex items-center gap-2">
                          <span
                            className="inline-block h-2 w-2 rounded-full"
                            style={{ backgroundColor: film.theme.accent }}
                          />
                          {fest}
                        </p>
                      ))}
                    </div>
                    <Link
                      href={`/filme/${film.slug}`}
                      className="rounded-full border border-white/30 px-5 py-3 text-[10px] text-white/80 transition hover:border-white hover:text-white"
                    >
                      Pagina Filmului
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="productie" className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/50">Servicii Integrate</p>
              <h2 className="mt-1 text-4xl font-semibold text-white sm:text-5xl">
                Producţie video completă
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/60">
              Proiectăm experiențe vizuale cu echipe modulare și colaboratori de top din regiune.
              Fiecare etapă este ghidată de un creative producer dedicat.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.08] p-7"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-sm text-white/70">{service.description}</p>
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.32em] text-white/50">
                  {service.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="emisiuni" className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/50">TV &amp; Streaming</p>
              <h2 className="mt-1 text-4xl font-semibold text-white sm:text-5xl">Emisiuni originale</h2>
            </div>
            <span className="rounded-full border border-white/15 px-5 py-2 text-xs uppercase tracking-[0.32em] text-white/60">
              Format modular · Multi-platform
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {emisuni.map((emisiune) => (
              <article
                key={emisiune.titlu}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-7"
              >
                <h3 className="text-lg font-semibold text-white">{emisiune.titlu}</h3>
                <p className="mt-4 text-sm text-white/70">{emisiune.text}</p>
                <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-white/60">
                  <span className="h-1 w-10 bg-white/20" />
                  OWH Originals
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="rental" className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/50">Camera Rental</p>
              <h2 className="mt-1 text-4xl font-semibold text-white sm:text-5xl">
                Arsenalul tău de filmare
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/60">
              Pick-up din Chișinău sau livrare în țară cu logistică asigurată de echipa OWH.
              Depozit sigur, service tehnic 24/7 și asistență pe plateau.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {rentalPackages.map((pack) => (
              <div
                key={pack.titlu}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-7"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-white">{pack.titlu}</h3>
                  <ul className="mt-5 space-y-3 text-sm text-white/70">
                    {pack.detalii.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1 w-6 bg-white/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.32em] text-white/70">
                  <span className="rounded-full border border-white/15 px-4 py-2">{pack.pret}</span>
                  <Link
                    href="#contacte"
                    className="rounded-full border border-white/30 px-5 py-2 transition hover:border-white hover:text-white"
                  >
                    Rezervă
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="bilete" className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05]">
          <div className="grid gap-10 p-10 md:grid-cols-[1fr,0.85fr] md:items-center md:p-14">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.5em] text-white/50">Evenimente &amp; premiere</p>
              <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Bilete pentru proiecțiile viitoare
              </h2>
              <p className="text-sm text-white/70">
                Experimentează premierele OWH în cinematografe alternative, spații industriale
                reconvertite și proiecte pop-up în toată țara. Fiecare proiecție include Q&amp;A cu
                echipa și playlist audio construit de artiști locali.
              </p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.32em] text-white/60">
                <span className="rounded-full border border-white/20 px-5 py-2">
                  CRONOGRAF Preview
                </span>
                <span className="rounded-full border border-white/20 px-5 py-2">
                  Cinemateca OWH
                </span>
                <span className="rounded-full border border-white/20 px-5 py-2">
                  DocuNights
                </span>
              </div>
            </div>
            <div className="rounded-3xl border border-white/15 bg-black/30 p-8 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.32em] text-white/50">Calendar</p>
              <ul className="mt-5 space-y-6 text-sm text-white/80">
                <li>
                  <p className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.32em] text-white/60">
                    14 Aprilie · SPACES #8
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/60">
                      32 locuri
                    </span>
                  </p>
                  <p className="mt-2 text-white">Premiera „CRONOGRAF: Voci În Mișcare”</p>
                </li>
                <li>
                  <p className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.32em] text-white/60">
                    24 Mai · Teatrul Luceafărul
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/60">
                      120 locuri
                    </span>
                  </p>
                  <p className="mt-2 text-white">„Orașul din Noapte” + Artist talk cu Mara Scobioală</p>
                </li>
                <li>
                  <p className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.32em] text-white/60">
                    2 Iunie · Atelier 12
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/60">
                      60 locuri
                    </span>
                  </p>
                  <p className="mt-2 text-white">DocuNights: „Apele Care Ne Țin” + live score</p>
                </li>
              </ul>
              <Link
                href="#contacte"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.32em] text-black transition hover:bg-white/90"
              >
                Rezervă bilete
              </Link>
            </div>
          </div>
        </section>

        <section id="despre" className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/50">Identitate</p>
              <h2 className="mt-1 text-4xl font-semibold text-white sm:text-5xl">Despre OWH</h2>
            </div>
            <p className="max-w-xl text-sm text-white/70">
              OWH STUDIO este o organizație de film și media din Chișinău, fondată în 2001. Credem în
              cinema ca instrument de dialog civic și explorăm granițele dintre documentar, artă
              video și performance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-5xl font-semibold text-white">20+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.32em] text-white/60">
                Ani de experiență
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-5xl font-semibold text-white">85</p>
              <p className="mt-2 text-xs uppercase tracking-[0.32em] text-white/60">
                Filme în arhivă
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-5xl font-semibold text-white">34</p>
              <p className="mt-2 text-xs uppercase tracking-[0.32em] text-white/60">
                Premii internaționale
              </p>
            </div>
          </div>
        </section>

        <section id="contacte" className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/50">Connect &amp; pitch</p>
              <h2 className="mt-1 text-4xl font-semibold text-white sm:text-5xl">Contacte</h2>
            </div>
            <p className="max-w-md text-sm text-white/70">
              Suntem deschiși la co-producții, proiecte cross-media și propuneri de workshop-uri.
              Trimite-ne un pitch deck sau programează o vizită în studio.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-[0.8fr,1.2fr]">
            <div className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-xs uppercase tracking-[0.32em] text-white/60">Coordonate</p>
              {contactLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-lg font-medium text-white transition hover:text-white/70"
                >
                  {link.label}
                </Link>
              ))}
              <p className="pt-4 text-sm text-white/60">
                Bază operațională: Str. Alexei Mateevici 79, Chișinău · open studio
                <span className="ml-1 text-white/40">Luni—Sâmbătă, 10:00—20:00</span>
              </p>
            </div>
            <form className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <div>
                <label className="text-xs uppercase tracking-[0.32em] text-white/60">
                  Nume complet
                </label>
                <input
                  type="text"
                  placeholder="Introduce numele"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.32em] text-white/60">
                  Email / Telefon
                </label>
                <input
                  type="text"
                  placeholder="contact@exemplu.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.32em] text-white/60">
                  Ideea ta
                </label>
                <textarea
                  rows={4}
                  placeholder="Scrie câteva linii despre proiect"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.32em] text-black transition hover:bg-white/90"
              >
                Trimite propoziția
              </button>
            </form>
          </div>
        </section>

        <section id="cronograf" className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/50">Festival</p>
              <h2 className="mt-1 text-4xl font-semibold text-white sm:text-5xl">
                CRONOGRAF — ADN-ul nostru
              </h2>
            </div>
            <Link
              href="https://cronograf.md"
              target="_blank"
              className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.32em] text-white/70 transition hover:border-white hover:text-white"
            >
              cronograf.md
            </Link>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05]">
            <div className="space-y-8 p-10 md:p-14">
              {cronografMoments.map((moment) => (
                <div
                  key={moment.anul}
                  className="flex flex-col gap-4 border-l border-white/15 pl-6 text-white/80 md:flex-row md:items-start md:gap-12 md:pl-10"
                >
                  <span className="text-3xl font-semibold text-white md:min-w-[120px]">
                    {moment.anul}
                  </span>
                  <p className="text-sm leading-relaxed text-white/70">{moment.text}</p>
                </div>
              ))}
              <p className="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-white/70">
                În cadrul CRONOGRAF lansăm anual laboratorul „Future Frames” dedicat regizorilor din
                Republica Moldova și țările vecine. Programul include consultanță de co-producție,
                pitching sessions și acces la distribuitori internaționali.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="uppercase tracking-[0.28em]">© {new Date().getFullYear()} OWH STUDIO</p>
          <div className="flex gap-6">
            <Link href="#hero" className="uppercase tracking-[0.28em] hover:text-white">
              Sus
            </Link>
            <Link
              href="https://www.facebook.com"
              className="uppercase tracking-[0.28em] hover:text-white"
            >
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com"
              className="uppercase tracking-[0.28em] hover:text-white"
            >
              Instagram
            </Link>
            <Link
              href="https://www.youtube.com"
              className="uppercase tracking-[0.28em] hover:text-white"
            >
              YouTube
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
