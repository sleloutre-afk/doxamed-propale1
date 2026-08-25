import PictoSanteMentale from './PictoSanteMentale'
import PictoVisuel from './PictoVisuel'
import PictoAuditif from './PictoAuditif'
import PictoDentaire from './PictoDentaire'
import PictoVaccination from './PictoVaccination'
import PictoCardio from './PictoCardio'
import PictoRespiratoire from './PictoRespiratoire'
import PictoMetabolique from './PictoMetabolique'
import PictoDermato from './PictoDermato'
import PictoPostural from './PictoPostural'

/** Registry keyed by the same `key` used in BPS_EXAMS (src/lib/content.ts). */
export const PICTOS = {
  'sante-mentale': PictoSanteMentale,
  visuel: PictoVisuel,
  auditif: PictoAuditif,
  dentaire: PictoDentaire,
  vaccination: PictoVaccination,
  cardio: PictoCardio,
  respi: PictoRespiratoire,
  metabolique: PictoMetabolique,
  dermato: PictoDermato,
  postural: PictoPostural,
} as const

export type PictoKey = keyof typeof PICTOS

/** Renders the official picto for a BPS exam key, colorable via currentColor. */
export default function Picto({ name, className = 'w-5 h-5' }: { name: PictoKey; className?: string }) {
  const Component = PICTOS[name]
  return <Component className={className} />
}
