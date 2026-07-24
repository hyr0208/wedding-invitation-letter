import { useState } from 'react'
import { copyText } from '../utils/clipboard'
import type { InvitationData } from '../types'

interface ShareFooterProps {
  data: InvitationData
}

export function ShareFooter({ data }: ShareFooterProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    const ok = await copyText(window.location.href)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <footer className="border-t border-line bg-cream px-6 py-14 text-center">
      <p className="font-serif-kr text-[15px] leading-relaxed text-ink">
        저희의 새로운 시작을
        <br />
        축하해 주셔서 감사합니다.
      </p>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={handleCopyLink}
          className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta-dark"
        >
          {copied ? '링크가 복사되었습니다' : '청첩장 링크 복사하기'}
        </button>
      </div>

      <p className="mt-10 text-xs text-ink-faint">
        {data.groom.name} · {data.bride.name}
      </p>
      <p className="mt-1 text-[11px] text-ink-faint">이 페이지는 샘플로 제작되었습니다.</p>
    </footer>
  )
}
