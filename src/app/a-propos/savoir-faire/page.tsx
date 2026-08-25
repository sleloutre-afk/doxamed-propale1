import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Section, Kicker, CTABanner } from '@/components/ui'
import Icon from '@/components/Icons'
import { TELEDOK, LABELS, NEWS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Savoir-faire',
  description: 'Teledok, plateforme nationale de médecins aguerris, et les labels qui reconnaissent l’expertise médicale et l’innovation de Doxamed.',
}

export default function SavoirFairePage() {
  const livreBlanc = NEWS.find((n) => n.type === 'livre-blanc')

  return (
    <>
      <PageHero
        kicker="À propos — Savoir-faire"
        title="Une expertise médicale assurée par des professionnels aguerris."
        crumb={[{ label: 'À propos', href: '/a-propos' }, { label: 'Savoir-faire', href: '/a-propos/savoir-faire' }]}
      />

      {/* Teledok */}
      <Section id="teledok" className="py-20 sm:py-28 scroll-mt-28">
        <div className="rounded-3xl border border-mist bg-white p-8 sm:p-14">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div>
              <Kicker>Partenaire stratégique</Kicker>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink-800 mb-4 text-balance">
                Doxamed travaille avec Teledok, plateforme nationale de médecins aguerris.
              </h2>
              <p className="text-slate leading-relaxed mb-4">{TELEDOK.pitch}</p>
              <p className="text-sm text-slate-2">
                Créé en {TELEDOK.founded} par {TELEDOK.founders}. {TELEDOK.acquired}.
              </p>
              <div className="mt-6 inline-flex items-baseline gap-2 px-4 py-3 rounded-xl bg-electric-dim">
                <span className="font-mono-num text-2xl font-semibold text-electric-2">{TELEDOK.stat.value}</span>
                <span className="text-sm text-electric-2">{TELEDOK.stat.label}</span>
              </div>
            </div>
            <div className="grid gap-4">
              {TELEDOK.axes.map((a) => (
                <div key={a.name} className="rounded-xl border border-mist p-5">
                  <p className="font-semibold text-ink-800 mb-1.5">{a.name}</p>
                  <p className="text-sm text-slate leading-relaxed">{a.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Livre blanc */}
      {livreBlanc && (
        <section className="bg-paper-2 py-20 sm:py-24">
          <Section>
            <div className="rounded-2xl border border-mist bg-white p-8 sm:p-10 grid sm:grid-cols-[auto_1fr_auto] items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-signal/10 text-signal flex items-center justify-center shrink-0">
                <Icon name="file" className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-signal mb-1.5">Livre blanc</p>
                <p className="font-semibold text-ink-800">{livreBlanc.title}</p>
                <p className="text-sm text-slate mt-1.5 leading-relaxed">{livreBlanc.excerpt}</p>
              </div>
              <Link
                href={`/actualites/${livreBlanc.slug}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink-800 text-white text-sm font-semibold whitespace-nowrap"
              >
                <Icon name="download" className="w-4 h-4" /> Télécharger
              </Link>
            </div>
          </Section>
        </section>
      )}

      {/* Labels */}
      <Section className="py-20 sm:py-28">
        <Kicker>Labels & certifications</Kicker>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
          Une innovation et un engagement RSE reconnus.
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {LABELS.map((l) => (
            <div key={l.name} className="rounded-2xl border border-mist bg-white p-7 flex gap-5">
              <div className="w-11 h-11 rounded-xl bg-electric-dim text-electric-2 flex items-center justify-center shrink-0">
                <Icon name="shield" className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-ink-800 mb-1.5">{l.name}</p>
                <p className="text-sm text-slate leading-relaxed">{l.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/references" className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-2">
            Voir nos prix et distinctions <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      <CTABanner />
    </>
  )
}
