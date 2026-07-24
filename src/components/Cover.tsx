import type { InvitationData } from '../types'
import coverBg from '../assets/photos/cover-bg.jpg'

interface CoverProps {
  data: InvitationData
}

export function Cover({ data }: CoverProps) {
  const date = new Date(data.weddingDateISO)
  const dateNumeric = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(
    date.getDate(),
  ).padStart(2, '0')}`

  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-8 py-16 text-center">
      <img
        src={coverBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-cream/92 via-cream/60 to-cream/95" />
      <div className="pointer-events-none absolute inset-4 border border-terracotta-soft/70" />

      <div className="relative flex flex-col items-center">
        <p className="font-serif-en text-xs tracking-[0.4em] text-terracotta uppercase">
          Wedding Invitation
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-cream/70 px-8 py-6 backdrop-blur-sm">
          <h1 className="font-serif-kr text-[26px] leading-relaxed font-medium text-ink">
            {data.groom.name}
            <span className="mx-3 text-terracotta">·</span>
            {data.bride.name}
          </h1>
          <p className="font-serif-en text-sm tracking-[0.15em] text-ink-soft">{dateNumeric}</p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-1 rounded-xl bg-cream/70 px-6 py-3 text-sm text-ink-soft backdrop-blur-sm">
          <p>{data.weddingDateLabel}</p>
          <p>
            {data.weddingTimeLabel} · {data.venueName} {data.venueHall}
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 flex flex-col items-center gap-2 text-ink-soft">
        <span className="h-8 w-px animate-pulse bg-ink-soft" />
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      </div>
    </section>
  )
}
