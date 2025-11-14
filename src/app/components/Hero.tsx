// components/hero/SoftwareHouseHero.tsx
"use client";

import Link from "next/link";
import { ArrowRight, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import * as React from "react";

type Props = {
  company?: string;
  tagline?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
};

export default function SoftwareHouseHero({
  company = "Your Software House",
  tagline = "Websites, Portals, CRMs, Mobile Apps & AI — built to scale.",
  primaryCtaText = "Start Your Project",
  primaryCtaHref = "/contact",
  secondaryCtaText = "See Our Work",
  secondaryCtaHref = "/portfolio",
  className = "",
}: Props) {
  return (
    <section
      className={`relative overflow-hidden bg-white ${className}`}
      aria-label={`${company} hero`}
    >
      {/* Subtle blue ambience */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-24 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-blue-50/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy block */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-3 py-1 text-xs font-medium text-blue-700">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Websites • Portals • CRMs • Apps • AI
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-gray-900 md:text-6xl">
              {company} builds{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  high-performing
                </span>
              </span>{" "}
              digital products that grow with you.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
              {tagline} We ship clean, secure, SEO-friendly products with modern
              UI/UX and enterprise-grade engineering.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={primaryCtaHref}
                className="group inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {primaryCtaText}
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>

              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-blue-300 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {secondaryCtaText}
              </Link>
            </div>

            {/* Trust bullets */}
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-600" aria-hidden />
                Enterprise-grade security
              </span>
              <span className="inline-flex items-center gap-2">
                <Rocket className="h-4 w-4 text-blue-600" aria-hidden />
                MVP in 4–6 weeks
              </span>
            </div>

            {/* Client row (swap logos) */}
            <div className="mt-9 flex flex-wrap items-center gap-6 opacity-80">
              <img
                src="/logos/client-1.svg"
                alt="Client 1 logo"
                className="h-7 w-auto grayscale"
                loading="lazy"
              />
              <img
                src="/logos/client-2.svg"
                alt="Client 2 logo"
                className="h-7 w-auto grayscale"
                loading="lazy"
              />
              <img
                src="/logos/client-3.svg"
                alt="Client 3 logo"
                className="h-7 w-auto grayscale"
                loading="lazy"
              />
              <img
                src="/logos/client-4.svg"
                alt="Client 4 logo"
                className="h-7 w-auto grayscale"
                loading="lazy"
              />
            </div>
          </div>

          {/* Minimal capability card */}
          <div className="relative z-10">
            <div className="rounded-2xl border border-gray-200 bg-white p-1 shadow-xl">
              <div className="rounded-xl bg-gradient-to-b from-blue-50 to-white p-6">
                <ul className="grid grid-cols-2 gap-4 text-sm">
                  <Capability
                    title="Websites & Portals"
                    desc="Next.js • Tailwind • SEO"
                  />
                  <Capability
                    title="CRMs & Dashboards"
                    desc="React • REST/GraphQL"
                  />
                  <Capability title="Mobile & PWAs" desc="React Native • PWA" />
                  <Capability title="Integrations & APIs" desc="Stripe • OAuth" />
                </ul>
              </div>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-100 blur-2xl"
            />
          </div>
        </div>

        {/* Stats – quick social proof */}
        <div className="mt-14 grid grid-cols-2 gap-6 rounded-2xl border border-gray-200 bg-white/60 p-6 md:grid-cols-4">
          <Stat label="Projects delivered" value="120+" />
          <Stat label="Avg. NPS" value="9.4/10" />
          <Stat label="Time to MVP" value="4–6 weeks" />
          <Stat label="Managed uptime" value="99.9%" />
        </div>
      </div>

      {/* SEO: basic schema (edit values) */}
      <div
        className="hidden"
        itemScope
        itemType="https://schema.org/ProfessionalService"
      >
        <span itemProp="name">{company}</span>
        <span itemProp="areaServed">Worldwide</span>
        <span itemProp="serviceType">Software development</span>
      </div>
    </section>
  );
}

function Capability({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="rounded-lg bg-white/80 p-4 ring-1 ring-gray-200">
      <strong className="block text-gray-900">{title}</strong>
      <span className="text-gray-600">{desc}</span>
    </li>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-2xl font-semibold text-gray-900">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  );
}
