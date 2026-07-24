import { Section } from './Section'
import { Divider } from './Divider'
import type { InvitationData } from '../types'

interface GreetingProps {
  data: InvitationData
}

export function Greeting({ data }: GreetingProps) {
  return (
    <Section eyebrow="Invitation" title="모시는 글">
      <div className="mx-auto max-w-xs space-y-1.5 text-center text-[15px] leading-loose text-ink-soft">
        {data.greeting.map((line, index) =>
          line === '' ? (
            <div key={index} className="h-2" />
          ) : (
            <p key={index}>{line}</p>
          ),
        )}
      </div>

      <Divider />

      <div className="flex flex-col items-center gap-1 text-sm text-ink">
        <p>
          {data.groom.parents.father} · {data.groom.parents.mother}의 아들{' '}
          <span className="font-medium text-terracotta-dark">{data.groom.name}</span>
        </p>
        <p>
          {data.bride.parents.father} · {data.bride.parents.mother}의 딸{' '}
          <span className="font-medium text-terracotta-dark">{data.bride.name}</span>
        </p>
      </div>
    </Section>
  )
}
