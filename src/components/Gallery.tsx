import { useState } from 'react'
import { Section } from './Section'

const PHOTO_COUNT = 6
const TONES = [
  'from-terracotta-soft to-cream-deep',
  'from-cream-deep to-terracotta-soft',
  'from-sage/30 to-cream-deep',
  'from-cream-deep to-sage/30',
  'from-terracotta-soft to-cream-soft',
  'from-cream-soft to-terracotta-soft',
]

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  const close = () => setActive(null)
  const show = (delta: number) => {
    if (active === null) return
    setActive((active + delta + PHOTO_COUNT) % PHOTO_COUNT)
  }

  return (
    <Section eyebrow="Gallery" title="우리의 순간">
      <div className="grid grid-cols-3 gap-1.5">
        {Array.from({ length: PHOTO_COUNT }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={`flex aspect-3/4 items-center justify-center rounded-lg bg-linear-to-br ${TONES[i]} text-xs text-ink-faint transition-transform active:scale-95`}
          >
            {String(i + 1).padStart(2, '0')}
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 px-6"
          onClick={close}
        >
          <div
            className={`flex aspect-3/4 w-full max-w-[280px] items-center justify-center rounded-xl bg-linear-to-br text-4xl font-light text-cream ${TONES[active]}`}
            onClick={(e) => e.stopPropagation()}
          >
            {String(active + 1).padStart(2, '0')}
          </div>
          <button
            type="button"
            aria-label="이전 사진"
            onClick={(e) => {
              e.stopPropagation()
              show(-1)
            }}
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 text-ink"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="다음 사진"
            onClick={(e) => {
              e.stopPropagation()
              show(1)
            }}
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 text-ink"
          >
            ›
          </button>
          <button
            type="button"
            aria-label="닫기"
            onClick={close}
            className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-ink"
          >
            ✕
          </button>
        </div>
      )}
    </Section>
  )
}
