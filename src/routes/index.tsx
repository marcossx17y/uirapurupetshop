import { createFileRoute } from "@tanstack/react-router";
import { Bath, MapPin, PackageOpen, Star, Truck } from "lucide-react";
import type { ReactNode } from "react";

import logoAsset from "../assets/image.png.asset.json";
import spitzAsset from "../assets/image-3.png.asset.json";
import galeria1Asset from "../assets/image-2.png.asset.json";
import galeria2Asset from "../assets/image-4.png.asset.json";
import galeria3Asset from "../assets/image-5.png.asset.json";

const SITE = "https://id-preview--c19f8844-df05-40d4-98f2-1c9b7135e778.lovable.app";
const OG_IMAGE = `${SITE}/og-image.jpg`;
const WA =
  "https://wa.me/553432272527?text=" +
  encodeURIComponent("Olá! Vim pelo site do Pet Shop Uirapuru.");
const MAPS_QUERY = "Pet Shop Uirapuru, Av. Noruega, 58, Uberlândia";
const MAPS_ROUTE = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAPS_QUERY)}`;
const MAPS_REVIEWS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;

const FAQ = [
  {
    q: "Qual o horário de funcionamento?",
    a: "Segunda a sexta das 8h às 18h30 e sábado das 8h às 13h. Domingo não abrimos.",
  },
  {
    q: "Onde fica o Pet Shop Uirapuru?",
    a: "Na Av. Noruega, 58, bairro Tibery, Uberlândia/MG, CEP 38405-002.",
  },
  {
    q: "Como agendo banho e tosa?",
    a: "É só chamar no WhatsApp (34) 3227-2527 e combinamos o melhor horário para o seu pet.",
  },
  {
    q: "Vocês fazem entrega?",
    a: "Sim, entregamos em domicílio. Você também pode retirar o pedido na loja, se preferir.",
  },
];

const SERVICES = [
  {
    icon: Bath,
    title: "Banho e Tosa",
    text: "Banho, tosa e higiene feitos com calma e carinho, por quem conhece o jeitinho de cada pet.",
  },
  {
    icon: PackageOpen,
    title: "Produtos e Rações",
    text: "Rações, acessórios e itens para cães, gatos, pássaros e peixes, com muita variedade e preço justo.",
  },
  {
    icon: Truck,
    title: "Entrega em domicílio",
    text: "Pediu pelo WhatsApp, chega na sua casa. Se preferir, você retira direto na loja.",
  },
];

const GALLERY = [
  {
    src: galeria1Asset.url,
    alt: "Lulu da Pomerânia tosado em cenário de futebol no Pet Shop Uirapuru",
  },
  {
    src: galeria2Asset.url,
    alt: "Chihuahua com chapéu de palha em cenário de festa junina no Pet Shop Uirapuru",
  },
  {
    src: galeria3Asset.url,
    alt: "Três shih tzus tosados em cenário de carnaval no Pet Shop Uirapuru",
  },
];

const PRAISE = [
  "Melhor atendimento da cidade e região",
  "Preços ótimos no dia a dia",
  "Muita variedade de rações e acessórios",
  "Banho e tosa impecável",
  "Lugar seguro para deixar o pet",
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pet Shop Uirapuru | Banho e Tosa em Uberlândia" },
      {
        name: "description",
        content:
          "Pet Shop Uirapuru no Tibery, Uberlândia, desde 2014. Banho e tosa, rações e entrega em domicílio. Nota 4,8 no Google. Seg a sex 8h às 18h30, sábado 8h às 13h.",
      },
      { property: "og:title", content: "Pet Shop Uirapuru | Banho e Tosa em Uberlândia" },
      {
        property: "og:description",
        content:
          "Cuidando do seu pet com amor desde 2014, no Tibery. Banho e tosa, rações e entrega em domicílio. 4,8 no Google com 401 avaliações.",
      },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PetStore",
          name: "Pet Shop Uirapuru",
          slogan: "Cuidando do seu pet com amor desde 2014",
          image: OG_IMAGE,
          url: `${SITE}/`,
          telephone: "+553432272527",
          priceRange: "$$",
          foundingDate: "2014",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Noruega, 58",
            addressLocality: "Uberlândia",
            addressRegion: "MG",
            postalCode: "38405-002",
            addressCountry: "BR",
          },
          sameAs: ["https://www.instagram.com/petshopuirapuru"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "401",
            bestRating: "5",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:30",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "08:00",
              closes: "13:00",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.16-1.35a9.94 9.94 0 0 0 4.88 1.27h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm0 18.17h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.06.8.82-2.98-.2-.31a8.22 8.22 0 1 1 6.94 3.82Zm4.5-6.15c-.25-.12-1.46-.72-1.68-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.65 4.2 3.71.59.26 1.05.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex size-11 items-center justify-center rounded-2xl bg-card ring-1 ring-border">
        <svg viewBox="0 0 40 40" className="size-7" aria-hidden="true">
          <circle cx="12" cy="12" r="5" fill="#E23B3B" />
          <circle cx="26" cy="10" r="5" fill="#2B9FDA" />
          <circle cx="33" cy="22" r="4.5" fill="#3EA96B" />
          <path
            d="M20 20c5 0 9 4.2 9 8.6 0 3-2.2 5-5.3 5-1.6 0-2.6-.6-3.7-.6s-2.1.6-3.7.6c-3.1 0-5.3-2-5.3-5C11 24.2 15 20 20 20Z"
            fill="#2B9FDA"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block font-display text-base font-bold">Pet Shop Uirapuru</span>
        <span className="block text-xs text-muted-foreground">Tibery · desde 2014</span>
      </span>
    </span>
  );
}

function WhatsAppButton({ children, size = "md" }: { children: ReactNode; size?: "md" | "lg" }) {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-whatsapp font-semibold text-whatsapp-foreground shadow-soft transition hover:brightness-95 ${
        size === "lg" ? "px-7 py-4 text-base" : "px-4 py-2.5 text-sm"
      }`}
    >
      <WhatsAppIcon className={size === "lg" ? "size-5" : "size-4"} />
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Logo />
          <nav className="flex items-center gap-2 sm:gap-4">
            <a
              href="#localizacao"
              className="hidden text-sm font-semibold text-primary hover:underline sm:inline"
            >
              Como chegar
            </a>
            <WhatsAppButton>WhatsApp</WhatsAppButton>
          </nav>
        </div>
      </header>
      <main>
        <section className="bg-background">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-3.5 py-1.5 text-sm font-semibold shadow-soft ring-1 ring-border">
                <Star className="size-4 fill-rating text-rating" />
                4,8 no Google · 401 avaliações
              </span>
              <h1 className="mt-6 text-4xl leading-tight sm:text-5xl">
                Cuidando do seu pet como parte da família, no Tibery, desde 2014
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                Banho e tosa, rações e tudo para cães, gatos, pássaros e peixes. Um lugar
                tranquilo e seguro para deixar quem você ama.
              </p>
              <div className="mt-8">
                <WhatsAppButton size="lg">Falar no WhatsApp</WhatsAppButton>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Seg a sex, 8h às 18h30 · Sábado, 8h às 13h
              </p>
            </div>
            <div className="frame-photo mx-auto w-full max-w-sm">
              <img
                src={spitz}
                width={768}
                height={1024}
                alt="Spitz alemão branco com gravatinha vermelha após o banho no Pet Shop Uirapuru"
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
        <section className="bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="text-3xl sm:text-4xl">Nossos serviços</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Cuidando do seu pet com amor desde 2014.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {SERVICES.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-3xl bg-card p-8 shadow-soft ring-1 ring-border/70"
                >
                  <Icon className="size-8 text-primary" strokeWidth={1.25} />
                  <h3 className="mt-6 text-xl">{title}</h3>
                  <p className="mt-3 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl">Nossa loja</h2>
              <p className="mt-5 text-lg text-muted-foreground">
                São mais de dez anos no Tibery atendendo as famílias do bairro e da região.
                Nesse tempo aprendemos o nome dos pets, o horário que cada um prefere e o jeito
                certo de deixar todo mundo à vontade.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Do cachorro ao peixinho, aqui tem ração, acessório e cuidado para cada tipo de
                companhia. Se faltar tempo para vir até a loja, a gente leva o pedido até a sua
                casa.
              </p>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY.map((photo, i) => (
                <div
                  key={photo.alt}
                  className={`frame-photo ${i % 2 === 0 ? "tilt-a" : "tilt-b"}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    width={768}
                    height={1024}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[auto_1fr] md:items-center">
            <div className="text-center md:text-left">
              <p className="font-display text-7xl font-bold sm:text-8xl">4,8</p>
              <div className="mt-2 flex justify-center gap-1 md:justify-start">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-5 fill-rating text-rating" />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl">401 avaliações de quem confia seus pets aqui</h2>
              <ul className="mt-6 space-y-2.5 text-muted-foreground">
                {PRAISE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={MAPS_REVIEWS}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Ver avaliações no Google
              </a>
            </div>
          </div>
        </section>
        <section id="localizacao" className="scroll-mt-20 bg-background">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl sm:text-4xl">Onde estamos</h2>
              <dl className="mt-10 space-y-8">
                <div>
                  <dt className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    Endereço
                  </dt>
                  <dd className="mt-2 text-lg">
                    Av. Noruega, 58 — Tibery
                    <br />
                    Uberlândia/MG · CEP 38405-002
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    Horário
                  </dt>
                  <dd className="mt-2 text-lg">
                    Segunda a sexta, 8h às 18h30
                    <br />
                    Sábado, 8h às 13h
                    <br />
                    Domingo, fechado
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    Telefone e WhatsApp
                  </dt>
                  <dd className="mt-2 text-lg">
                    <a href="tel:+553432272527" className="text-primary hover:underline">
                      (34) 3227-2527
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={MAPS_ROUTE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-soft transition hover:brightness-95"
              >
                <MapPin className="size-5" strokeWidth={1.5} />
                Traçar rota no Google Maps
              </a>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-border">
              <iframe
                title="Mapa do Pet Shop Uirapuru na Av. Noruega, 58, Uberlândia"
                src={`https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[380px] w-full border-0"
              />
            </div>
          </div>
        </section>
        <section className="bg-surface">
          <div className="mx-auto max-w-3xl px-5 py-20">
            <h2 className="text-3xl sm:text-4xl">Perguntas frequentes</h2>
            <div className="mt-10 space-y-4">
              {FAQ.map((item) => (
                <details
                  key={item.q}
                  className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border/70"
                >
                  <summary className="cursor-pointer list-none font-display text-lg font-bold">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between">
          <Logo />
          <div className="text-sm text-muted-foreground">
            <p>Av. Noruega, 58 — Tibery, Uberlândia/MG</p>
            <p className="mt-1">
              <a
                href="https://www.instagram.com/petshopuirapuru"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                @petshopuirapuru
              </a>
            </p>
          </div>
        </div>
      </footer>
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-frame transition hover:brightness-95"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
}