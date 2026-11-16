import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blog } from "#site/content";
import { getEvents } from "@/lib/calendar";
import { getAuthors } from "@/lib/authors";

export const revalidate = 3600;

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const TIME_ZONE = "Europe/Istanbul";
const dayFormatter = new Intl.DateTimeFormat("tr-TR", { day: "2-digit", timeZone: TIME_ZONE });
const monthFormatter = new Intl.DateTimeFormat("tr-TR", { month: "short", year: "numeric", timeZone: TIME_ZONE });
const postDateFormatter = new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: TIME_ZONE });

const activities = [
  {
    title: "Zirveler ve paneller",
    text: "Sektörde çalışan veri bilimcileri ve istatistikçileri kampüste ağırlıyor, işin gerçekte nasıl yapıldığını onlardan dinliyoruz.",
  },
  {
    title: "Eğitim ve atölyeler",
    text: "Python, R, SQL ve Power BI üzerine uygulamalı atölyeler ve bootcamp programları düzenliyoruz.",
  },
  {
    title: "Mezun ve sektör ağı",
    text: "Mezunlarımızla ve sektör profesyonelleriyle bağ kuruyor, staj ve kariyer fırsatları için köprü oluyoruz.",
  },
];

const resources = [
  { title: "Dokümanlar", text: "Python, R, JASP, SPSS ve Tableau için kurulum ve kullanım rehberleri.", href: "/docs" },
  { title: "Etkinlik arşivi", text: "Geçmiş zirve, panel ve atölyelerden fotoğraflar ve kayıtlar.", href: "/arsiv" },
  { title: "İstatistik sözlüğü", text: "Öğrencilerin katkısıyla büyüyen açık kaynak terimler sözlüğü.", href: "/sozluk", note: "Bakımda" },
  { title: "Not hesaplayıcı", text: "Final notunu ve dönem AGNO'nu birkaç tıkla hesapla.", href: "https://hesapla.ticaretistatistik.com", external: true },
  { title: "Ders programı", text: "Üniversitenin güncel haftalık ders programı.", href: "https://istanbulticaretuniversitesi.edupage.org/timetable/", external: true },
];

const socials = [
  { name: "Instagram", handle: "@istatistikticaret", href: "https://instagram.com/istatistikticaret" },
  { name: "LinkedIn", handle: "/istatistikticaret", href: "https://linkedin.com/company/istatistikticaret" },
  { name: "GitHub", handle: "@ticaretistatistik", href: "https://github.com/ticaretistatistik" },
  { name: "TikTok", handle: "@istatistikticaret", href: "https://tiktok.com/@istatistikticaret" },
];

// Histogram çubuklarına "örneklem" hissi veren sabit sapmalar (her derlemede aynı şekil çıksın diye rastgele değil).
const SAMPLE_NOISE = [1.3, 0.7, 1.15, 0.9, 1.12, 0.93, 1.06, 0.95, 1.08, 0.94, 1.03, 0.97, 1.0, 1.05, 0.92, 1.07, 0.96, 1.1, 0.88, 1.14, 0.85, 1.2, 0.8, 1.25, 0.75];

function DistributionFigure() {
  const width = 480;
  const height = 260;
  const baseline = 220;
  const maxBar = 190;
  const bins = SAMPLE_NOISE.length;
  const binWidth = width / bins;
  const pdf = (z: number) => Math.exp(-(z * z) / 2);
  const xOf = (z: number) => ((z + 3) / 6) * width;

  const bars = SAMPLE_NOISE.map((noise, i) => {
    const z = -3 + ((i + 0.5) / bins) * 6;
    const barHeight = Math.min(maxBar, pdf(z) * maxBar * noise);
    return { x: i * binWidth, barHeight, isMode: i === Math.floor(bins / 2) };
  });

  const curve = Array.from({ length: 61 }, (_, i) => {
    const z = -3 + (i / 60) * 6;
    return `${xOf(z).toFixed(1)},${(baseline - pdf(z) * maxBar).toFixed(1)}`;
  }).join(" ");

  const ticks = [
    { z: -2, label: "−2σ" },
    { z: -1, label: "−σ" },
    { z: 0, label: "μ" },
    { z: 1, label: "+σ" },
    { z: 2, label: "+2σ" },
  ];

  return (
    <figure className="w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Normal dağılıma uyan bir örneklemin histogramı ve üzerine çizilmiş çan eğrisi"
        className="w-full h-auto text-zinc-900 dark:text-zinc-100"
      >
        {bars.map((bar) => (
          <rect
            key={bar.x}
            x={bar.x + 1.5}
            y={baseline - bar.barHeight}
            width={binWidth - 3}
            height={bar.barHeight}
            className={bar.isMode ? "fill-brand-accent" : "fill-zinc-200 dark:fill-zinc-800"}
          />
        ))}
        <polyline points={curve} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="0" x2={width} y1={baseline} y2={baseline} stroke="currentColor" strokeWidth="1" />
        {ticks.map((tick) => (
          <g key={tick.label}>
            <line x1={xOf(tick.z)} x2={xOf(tick.z)} y1={baseline} y2={baseline + 6} stroke="currentColor" strokeWidth="1" />
            <text
              x={xOf(tick.z)}
              y={baseline + 24}
              textAnchor="middle"
              fill="currentColor"
              className="font-serif italic text-[15px]"
            >
              {tick.label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 flex items-baseline gap-3 border-t border-border pt-3 font-mono text-xs text-zinc-500 dark:text-zinc-400">
        <span className="text-foreground">Şekil 1</span>
        <span>Histogram ve normal dağılım eğrisi. Sarı çubuk: mod.</span>
      </figcaption>
    </figure>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
      {children}
    </p>
  );
}

export default async function Home() {
  const events = await getEvents();
  const upcoming = events.filter((event) => event.status === "upcoming").slice(0, 3);
  const hasUpcoming = upcoming.length > 0;
  const listedEvents = hasUpcoming
    ? upcoming
    : events.filter((event) => event.status === "past").slice(-3).reverse();

  const allAuthors = getAuthors();
  const posts = [...blog]
    .sort((a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime())
    .slice(0, 3);

  return (
    <div className="flex flex-col bg-background">
      {/* HERO */}
      <section className="border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between border-b border-border py-4 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            <span>İstanbul Ticaret Üniversitesi</span>
            <span className="hidden sm:inline">Sütlüce, İstanbul</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h1 className="font-serif text-[clamp(2.5rem,6vw,4.75rem)] font-normal leading-[1.05] tracking-tight text-foreground">
                Veriyi{" "}
                <em className="relative whitespace-nowrap italic">
                  <span aria-hidden="true" className="absolute inset-x-[-0.08em] bottom-[0.1em] h-[0.32em] bg-brand-accent dark:bottom-[0.02em] dark:h-[0.1em]" />
                  <span className="relative">merak eden</span>
                </em>{" "}
                öğrencilerin topluluğu.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                İstatistik Topluluğu; etkinlikler, atölyeler ve açık kaynak içeriklerle istatistiği ve veri bilimini
                birlikte öğrenen bir öğrenci topluluğudur.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/etkinlikler"
                  className={`group inline-flex items-center gap-3 bg-foreground px-6 py-3.5 text-sm font-medium text-background hover:bg-brand-accent hover:text-[#0a0a0a] ${focusRing}`}
                >
                  Etkinlik takvimi
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                </Link>
                <Link
                  href="/blog"
                  className={`text-sm font-medium text-foreground underline decoration-brand-accent decoration-2 underline-offset-[6px] hover:decoration-foreground ${focusRing}`}
                >
                  Blog yazılarını oku
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <DistributionFigure />
            </div>
          </div>
        </div>
      </section>

      {/* ETKİNLİKLER */}
      <section className="border-b border-border">
        <div className="container-custom py-16 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel>Takvim</SectionLabel>
              <h2 className="mt-3 font-serif text-3xl font-normal text-foreground md:text-4xl">
                {hasUpcoming ? "Yaklaşan etkinlikler" : "Son etkinlikler"}
              </h2>
            </div>
            <Link
              href="/etkinlikler"
              className={`group inline-flex items-center gap-2 text-sm font-medium text-foreground ${focusRing}`}
            >
              Tüm etkinlikler
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
            </Link>
          </div>

          {!hasUpcoming && listedEvents.length > 0 && (
            <p className="mb-6 max-w-xl text-zinc-600 dark:text-zinc-400">
              Şu an takvimde duyurulmuş yeni bir etkinlik yok. En son yaptıklarımız:
            </p>
          )}

          {listedEvents.length > 0 ? (
            <ul className="border-t border-foreground">
              {listedEvents.map((event) => (
                <li key={event.id} className="border-b border-border">
                  <Link
                    href={`/etkinlikler/${encodeURIComponent(event.id)}`}
                    className={`group grid grid-cols-[4.5rem_1fr_auto] items-center gap-x-5 gap-y-1 py-6 md:grid-cols-[7rem_1fr_16rem_auto] md:gap-x-8 ${focusRing}`}
                  >
                    <div>
                      <div className="font-serif text-4xl leading-none text-foreground md:text-5xl">
                        {dayFormatter.format(event.rawDate)}
                      </div>
                      <div className="mt-2 font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        {monthFormatter.format(event.rawDate)}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        {event.category}
                      </div>
                      <h3 className="mt-1 text-lg font-medium text-foreground decoration-brand-accent decoration-2 underline-offset-4 group-hover:underline md:text-xl">
                        {event.title}
                      </h3>
                      <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 md:hidden">
                        {event.time} · {event.location}
                      </div>
                    </div>
                    <div className="hidden text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:block">
                      <div>{event.time}</div>
                      <div className="truncate">{event.location}</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-foreground motion-reduce:transition-none" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="border-t border-foreground py-8 text-zinc-600 dark:text-zinc-400">
              Takvim şu an boş. Yeni etkinlikleri ilk olarak sosyal medya hesaplarımızdan duyuruyoruz.
            </p>
          )}
        </div>
      </section>

      {/* NE YAPIYORUZ */}
      <section className="border-b border-border">
        <div className="container-custom grid grid-cols-1 gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel>Topluluk</SectionLabel>
            <h2 className="mt-3 font-serif text-3xl font-normal text-foreground md:text-4xl">Ne yapıyoruz?</h2>
            <p className="mt-5 max-w-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Derste öğrendiğimiz teoriyi sahada görmek için bir araya geliyoruz.
            </p>
            <Link
              href="/ekibimiz"
              className={`mt-6 inline-block text-sm font-medium text-foreground underline decoration-brand-accent decoration-2 underline-offset-[6px] hover:decoration-foreground ${focusRing}`}
            >
              Ekiple tanış
            </Link>
          </div>
          <ol className="border-t border-foreground lg:col-span-8">
            {activities.map((activity, index) => (
              <li key={activity.title} className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-border py-7 md:grid-cols-[5rem_14rem_1fr] md:gap-x-8">
                <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400">0{index + 1}</span>
                <h3 className="text-lg font-medium text-foreground">{activity.title}</h3>
                <p className="col-start-2 mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400 md:col-start-3 md:mt-0">
                  {activity.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BLOG */}
      {posts.length > 0 && (
        <section className="border-b border-border">
          <div className="container-custom py-16 md:py-24">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <SectionLabel>Blog</SectionLabel>
                <h2 className="mt-3 font-serif text-3xl font-normal text-foreground md:text-4xl">Son yazılar</h2>
              </div>
              <Link
                href="/blog"
                className={`group inline-flex items-center gap-2 text-sm font-medium text-foreground ${focusRing}`}
              >
                Tüm yazılar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
              </Link>
            </div>

            <div className="grid grid-cols-1 border-t border-foreground md:grid-cols-3 md:divide-x md:divide-border">
              {posts.map((post) => {
                const authorNames = (post.authors ?? [])
                  .map((id) => allAuthors[id]?.name)
                  .filter(Boolean)
                  .join(", ");
                return (
                  <Link
                    key={post.slug}
                    href={post.permalink}
                    className={`group flex flex-col border-b border-border py-7 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0 ${focusRing}`}
                  >
                    {post.date && (
                      <time dateTime={post.date} className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        {postDateFormatter.format(new Date(post.date))}
                      </time>
                    )}
                    <h3 className="mt-4 font-serif text-2xl font-normal leading-snug text-foreground decoration-brand-accent decoration-2 underline-offset-4 group-hover:underline">
                      {post.title}
                    </h3>
                    {authorNames && (
                      <p className="mt-auto pt-8 text-sm text-zinc-600 dark:text-zinc-400">{authorNames}</p>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* KAYNAKLAR */}
      <section className="border-b border-border">
        <div className="container-custom grid grid-cols-1 gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel>Kaynaklar</SectionLabel>
            <h2 className="mt-3 font-serif text-3xl font-normal text-foreground md:text-4xl">
              Öğrenirken işine yarayacaklar.
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Rehberler, araçlar ve geçmiş etkinliklerden kalanlar tek yerde.
            </p>
          </div>
          <ul className="border-t border-foreground lg:col-span-8">
            {resources.map((resource) => {
              const rowClass = `group grid grid-cols-[1fr_auto] items-center gap-x-6 py-5 md:grid-cols-[14rem_1fr_auto] ${focusRing}`;
              const content = (
                <>
                  <span className="flex items-center gap-3 text-lg font-medium text-foreground decoration-brand-accent decoration-2 underline-offset-4 group-hover:underline">
                    {resource.title}
                    {resource.note && (
                      <span className="border border-border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500 no-underline dark:text-zinc-400">
                        {resource.note}
                      </span>
                    )}
                  </span>
                  <span className="col-start-1 row-start-2 mt-1 text-sm text-zinc-600 dark:text-zinc-400 md:col-start-2 md:row-start-1 md:mt-0">
                    {resource.text}
                  </span>
                  {resource.external ? (
                    <ArrowUpRight className="row-span-2 h-5 w-5 text-zinc-400 group-hover:text-foreground md:row-span-1" />
                  ) : (
                    <ArrowRight className="row-span-2 h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-foreground motion-reduce:transition-none md:row-span-1" />
                  )}
                </>
              );
              return (
                <li key={resource.href} className="border-b border-border">
                  {resource.external ? (
                    <a href={resource.href} target="_blank" rel="noopener noreferrer" className={rowClass}>
                      {content}
                      <span className="sr-only">(yeni sekmede açılır)</span>
                    </a>
                  ) : (
                    <Link href={resource.href} className={rowClass}>
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* KATIL */}
      <section className="bg-brand-accent text-[#0a0a0a]">
        <div className="container-custom grid grid-cols-1 gap-10 py-16 md:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#0a0a0a] md:text-5xl">
              Aramıza katıl.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-[#0a0a0a]/80">
              Etkinliklerden haberdar olmak ve bizimle iletişimde kalmak için hesaplarımızı takip et.
            </p>
          </div>
          <ul className="grid grid-cols-1 content-start border-t border-[#0a0a0a] sm:grid-cols-2 sm:gap-x-10 lg:col-span-6">
            {socials.map((social) => (
              <li key={social.name} className="border-b border-[#0a0a0a]/25">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a0a0a] focus-visible:ring-offset-2 focus-visible:ring-offset-brand-accent"
                >
                  <span>
                    <span className="block font-medium group-hover:underline group-hover:underline-offset-4">{social.name}</span>
                    <span className="block font-mono text-xs text-[#0a0a0a]/70">{social.handle}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5" />
                  <span className="sr-only">(yeni sekmede açılır)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
