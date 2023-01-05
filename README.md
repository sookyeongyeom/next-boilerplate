## 🫖 Next.js Boilerplate

sookyeongyeom의 보일러플레이트입니다 :D

지속적으로 개선하여 업데이트합니다.  
스택 변경 과정 및 상세한 코드 컨벤션은 아래 위키에서 확인하실 수 있습니다.

📖 [상세 위키 바로가기](https://github.com/sookyeongyeom/next-boilerplate/wiki/소개)

## Index

- [🫖 Next.js Boilerplate](#-nextjs-boilerplate)
- [Index](#index)
- [1. 시작하기](#1-시작하기)
  - [1. Clone \& Install](#1-clone--install)
  - [2. Run](#2-run)
- [2. 기술 스택](#2-기술-스택)
- [3. 전체 구조 한눈에 보기](#3-전체-구조-한눈에-보기)
- [4. 기본 컴포넌트](#4-기본-컴포넌트)
- [5. 기본 커스텀 훅](#5-기본-커스텀-훅)
- [6. 기본 상수](#6-기본-상수)
- [7. 기본 스타일 상수](#7-기본-스타일-상수)
- [8. 기본 유틸](#8-기본-유틸)
- [9. 커밋 컨벤션](#9-커밋-컨벤션)
  - [1. 브랜치 이름 컨벤션](#1-브랜치-이름-컨벤션)
  - [2. 커밋 메세지 컨벤션](#2-커밋-메세지-컨벤션)
  - [3. 머지 전략](#3-머지-전략)

## 1. 시작하기

### 1. Clone & Install

```shell
$ git clone https://github.com/sookyeongyeom/next-boilerplate
$ cd next-boilerplate
$ git remote remove origin
$ yarn install
```

### 2. Run

```javascript
$ yarn dev
```

## 2. 기술 스택

<a><img src="https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/TS-3178C6?style=flat-square&logo=typescript&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Jotai-black?style=flat-square&logo=ghostery&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/Jotai DevTools-black?style=flat-square&logo=ghostery&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=reactquery&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Emotion-D26AC2?style=flat-square&logo=southwestairlines&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/Immer-00E7C3?style=flat-square&logo=immer&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/EsLint-4B32C3?style=flat-square&logo=eslint&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=yarn&logoColor=white"/></a>

## 3. 전체 구조 한눈에 보기

```
├── .github/workflows
│   ├── dev.yml       // Dev 서버 배포자동화를 위한 yml
│   └── prod.yml      // Prod 서버 배포자동화를 위한 yml
├── pages
├── public
├── src
│   ├── @types
│   │   ├── api       // API 요청, 응답 스키마 타입
│   │   ├── client    // API 제외 모든 타입
│   │   └── dep       // 외부 모듈 타입 오버라이딩
│   ├── api
│   │   ├── core      // Axios 인스턴스
│   │   ├── hooks     // React Query Hooks
│   │   └── promises  // API 요청 Promises
│   ├── atoms         // Jotai Atoms
│   ├── components
│   ├── constants
│   ├── hooks         // Custom Hooks
│   ├── styles
│   └── utils         // 유틸 함수
├── next-env.d.ts
├── next.config.js
├── package.json
├── tsconfig.json
├── yarn-error.log
├── yarn.lock
├── Dockerfile        // 배포자동화를 위한 도커파일
└── README.md
```

## 4. 기본 컴포넌트

1. components/layouts/DefaultLayout.tsx
2. components/hocs/RouterGuard.tsx
3. components/seo/CustomHead.tsx

## 5. 기본 커스텀 훅

1. hooks/useChange.ts
2. hooks/useCustomRouter.ts
3. hooks/useInput.ts
4. hooks/useMobile.ts
5. hooks/usePreventScroll.ts
6. hooks/useQueryString.ts
7. hooks/useRouteToPath.ts
8. hooks/useSwitch.ts
9. hooks/useUniqueId.ts

## 6. 기본 상수

1. constants/keys.tsx
2. constants/paths.tsx

## 7. 기본 스타일 상수

1. styles/alphaToHex.ts - 0~1을 Hex로 변환한 값들의 모음
2. styles/colors.ts
3. styles/devices.ts - 뷰포트에 따른 디바이스 구분 기준
4. styles/fonts.ts - 기본 아토믹 타이포그래피
5. styles/global.ts - 기본 전역 스타일
6. styles/reset.ts - 기본 리셋 스타일
7. styles/sizes.ts
8. styles/svgs.tsx

## 8. 기본 유틸

1. utils/fetchAndSet.ts
2. utils/setLayout.ts
3. utils/withoutPropagation.ts

## 9. 커밋 컨벤션

### 1. 브랜치 이름 컨벤션

```
Feature/[기능요약]

- 맨 첫글자 F만 대문자로, 기능요약은 소문자로 작성한다.
- 띄어쓰기는 하이픈으로 구분한다.

ex) Feature/modal-publishing
```

### 2. 커밋 메세지 컨벤션

```
<태그>: <제목>

- 태그의 첫글자는 대문자로 작성한다.
- 태그는 아래에 적힌 것들만 사용한다.

Feat: 새로운 기능 추가, 기능 로직 변경
Fix: 버그 수정
Refactor: 코드 리팩토링 (기능 변화 X)
Style: 코드 포맷팅, 코드 변경이 없는 경우
Chore: 빌드 업무 수정, 패키지 매니저 수정
Docs: 문서 수정, 주석
```

### 3. 머지 전략

모든 Feature 브랜치는 Squash Merge 합니다.
