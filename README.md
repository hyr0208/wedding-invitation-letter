# Wedding Invitation Letter

모던하고 심플하면서 따뜻한 톤의 모바일 청첩장 샘플입니다. React + Vite + TypeScript + Tailwind CSS로 만들었습니다.

🔗 **배포 주소**: [wedding.yyyerin.co.kr](https://wedding.yyyerin.co.kr)

## 구성

- 커버(첫 화면), 모시는 글, 본문 포토 섹션, 연락하기, 예식 일시(캘린더/D-day), 갤러리, 오시는 길, 마음 전하실 곳, 클로징으로 구성된 한 페이지 청첩장입니다.
- 이름·날짜·장소·계좌 등 모든 콘텐츠는 [src/data/invitation.ts](src/data/invitation.ts)에서 한 곳에 관리합니다.
- 사진은 [src/assets/photos](src/assets/photos)에 있으며, 같은 파일명으로 교체하면 바로 반영됩니다.
  - `cover-bg.jpg` — 커버 배경
  - `moment.jpg` — 본문 중간 풀와이드 사진
  - `gallery-1.jpg` ~ `gallery-6.jpg` — 갤러리 그리드
- 카카오톡 등에 링크를 공유할 때 보이는 미리보기 이미지는 [public/og-image.jpg](public/og-image.jpg)(1200x630)이며, `index.html`의 `og:*`/`twitter:*` 메타 태그에서 참조합니다.

## 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
```

## 기술 스택

- React 19 + TypeScript
- Vite
- Tailwind CSS v4

## 배포

Cloudflare Pages에서 `main` 브랜치를 자동 빌드/배포합니다. `main`에 push하면 몇 분 내로 [wedding.yyyerin.co.kr](https://wedding.yyyerin.co.kr)에 반영됩니다.

- Build command: `npm run build`
- Build output directory: `dist`
