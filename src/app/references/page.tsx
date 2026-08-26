import type { Metadata } from 'next'
import { PageHero, Section, Kicker, CTABanner } from '@/components/ui'
import { ClientRefCard } from '@/components/Cards'
import Icon from '@/components/Icons'
import { GLOBAL_STATS, CLIENT_REFS, CLIENT_LOGOS, AWARDS, ADP_QUOTE } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Références',
  description: 'Chiffres clés, clients et études de cas Doxamed : Groupe ADP, bpifrance, Deloitte, Air France, Estée Lauder, Doctolib, Euronext…',
}

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        kicker="Références"
        title={<>Des résultats <span className="text-electric-light">mesurables,</span> auprès de grands groupes et d&rsquo;institutions.</>}
        crumb={[{ label: 'Références', href: '/references' }]}
      />

      <Section className="py-16 sm:py-20 -mt-8 sm:-mt-14 relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px rounded-2xl overflow-hidden border border-mist bg-mist">
          {GLOBAL_STATS.map((s) => (
            <div key={s.label} className="p-6 bg-white">
              <div className="font-mono-num text-xl sm:text-2xl font-semibold text-electric-2">{s.value}</div>
              <div className="mt-1.5 text-[0.75rem] text-slate leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-16 sm:py-20">
        <Kicker>Études de cas</Kicker>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
          Un engouement constaté à chaque déploiement.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CLIENT_REFS.map((c) => (
            <ClientRefCard key={c.name} c={c} />
          ))}
        </div>
      </Section>

      <section className="bg-ink-800 py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-backdrop" />
        <Section className="relative">
          <blockquote className="max-w-2xl mx-auto text-center">
            <p className="text-xl sm:text-2xl font-medium text-white leading-snug text-balance">
              &ldquo;{ADP_QUOTE.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm text-white/50">
              <span className="font-semibold text-white/80">{ADP_QUOTE.author}</span>, {ADP_QUOTE.role} — {ADP_QUOTE.source}
            </footer>
          </blockquote>
        </Section>
      </section>

      <Section className="py-20 sm:py-24">
        <Kicker>Prix & distinctions</Kicker>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-800 mb-10 max-w-2xl text-balance">
          Des projets récompensés pour leur caractère innovant.
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {AWARDS.map((a) => (
            <div key={a.name} className="rounded-xl border border-mist bg-white p-6 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-electric-dim text-electric-2 flex items-center justify-center shrink-0">
                <Icon name="shield" className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-ink-800 text-sm">{a.name}</p>
                <p className="text-xs text-slate-2 mt-1">{a.org} — {a.year}</p>
                <p className="text-xs text-slate mt-1.5">{a.project}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-paper-2 py-20 sm:py-24">
        <Section>
          <Kicker>Ils nous font confiance</Kicker>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {CLIENT_LOGOS.map((n) => (
              <div key={n} className="rounded-xl border border-mist bg-white p-5 flex items-center justify-center text-center">
                <span className="text-sm font-semibold text-ink-800/70">{n}</span>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <CTABanner title="Devenez notre prochaine référence" />
    </>
  )
}
