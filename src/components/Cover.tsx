import type { InvitationData } from '../types'

interface CoverProps {
  data: InvitationData
}

export function Cover({ data }: CoverProps) {
  const date = new Date(data.weddingDateISO)
  const dateNumeric = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(
    date.getDate(),
  ).padStart(2, '0')}`

  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-cream to-cream-soft px-8 py-16 text-center">
      <div className="pointer-events-none absolute inset-4 border border-terracotta-soft/70" />

      <p className="font-serif-en text-xs tracking-[0.4em] text-terracotta uppercase">
        Wedding Invitation
      </p>

      <div className="mt-8 flex flex-col items-center gap-3">
        <h1 className="font-serif-kr text-[26px] leading-relaxed font-medium text-ink">
          {data.groom.name}
          <span className="mx-3 text-terracotta">·</span>
          {data.bride.name}
        </h1>
        <p className="font-serif-en text-sm tracking-[0.15em] text-ink-soft">{dateNumeric}</p>
      </div>

      <div className="mt-14 flex flex-col items-center gap-1 text-sm text-ink-soft">
        <p>{data.weddingDateLabel}</p>
        <p>
          {data.weddingTimeLabel} · {data.venueName} {data.venueHall}
        </p>
      </div>

      <div className="absolute bottom-10 flex flex-col items-center gap-2 text-ink-faint">
        <span className="h-8 w-px animate-pulse bg-ink-faint" />
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      </div>
    </section>
  )
}
