import { Section } from './Section'
import { getDday, getMonthMatrix } from '../utils/date'
import type { InvitationData } from '../types'

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

interface DateInfoProps {
  data: InvitationData
}

export function DateInfo({ data }: DateInfoProps) {
  const date = new Date(data.weddingDateISO)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const weeks = getMonthMatrix(year, month)
  const dday = getDday(date)

  const ddayLabel = dday === 0 ? 'D-Day' : dday > 0 ? `D-${dday}` : `D+${Math.abs(dday)}`

  return (
    <Section eyebrow="Save the Date" title="예식 일시">
      <div className="mx-auto max-w-[280px] text-center">
        <p className="text-[15px] text-ink">
          {data.weddingDateLabel} {data.weddingTimeLabel}
        </p>

        <div className="mt-6 rounded-2xl border border-line bg-cream p-4">
          <p className="font-serif-en mb-3 text-sm tracking-widest text-ink-soft">
            {year}. {String(month + 1).padStart(2, '0')}
          </p>
          <div className="grid grid-cols-7 gap-y-2 text-xs">
            {WEEKDAYS.map((w) => (
              <span key={w} className="text-ink-faint">
                {w}
              </span>
            ))}
            {weeks.map((week, wi) =>
              week.map((cell, ci) => {
                const isTarget = cell === day
                return (
                  <span
                    key={`${wi}-${ci}`}
                    className={`flex h-7 w-7 items-center justify-center justify-self-center rounded-full ${
                      isTarget
                        ? 'bg-terracotta font-medium text-cream'
                        : cell === 0
                          ? ''
                          : 'text-ink-soft'
                    }`}
                  >
                    {cell !== 0 ? cell : ''}
                  </span>
                )
              }),
            )}
          </div>
        </div>

        <p className="mt-6 text-sm tracking-widest text-terracotta-dark">{ddayLabel}</p>
      </div>
    </Section>
  )
}
