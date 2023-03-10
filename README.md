## ๐ซ Next.js Boilerplate

sookyeongyeom์ ๋ณด์ผ๋ฌํ๋ ์ดํธ์๋๋ค :D

## Index

1. [์์ํ๊ธฐ](#1-์์ํ๊ธฐ)
2. [๊ธฐ์  ์คํ](#2-๊ธฐ์ -์คํ)
3. [๋๋ ํ ๋ฆฌ ๊ตฌ์กฐ ๊ฐ์ด๋](#3-๋๋ ํ ๋ฆฌ-๊ตฌ์กฐ-๊ฐ์ด๋)
4. [์ฝ๋ ์ปจ๋ฒค์](#4-์ฝ๋-์ปจ๋ฒค์)
5. [API ๊ด๋ จ ์ปจ๋ฒค์](#5-API-๊ด๋ จ-์ปจ๋ฒค์)
6. [์ปค๋ฐ ์ปจ๋ฒค์](#6-์ปค๋ฐ-์ปจ๋ฒค์)

## 1. ์์ํ๊ธฐ

### 1. Clone

```shell
$ git clone https://github.com/sookyeongyeom/next-boilerplate
$ cd next-boilerplate
$ yarn install
```

### 2. Run

```javascript
$ yarn dev
```

## 2. ๊ธฐ์  ์คํ

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

## 3. ๋๋ ํ ๋ฆฌ ๊ตฌ์กฐ ๊ฐ์ด๋

```
โโโ pages
โโโ public
โโโ src
โย ย  โโโ @types
โย ย  โย ย  โโโ api
โย ย  โย ย  โโโ client
โย ย  โย ย  โโโ dep
โย ย  โโโ api
โย ย  โย ย  โโโ core
โย ย  โโโ atoms
โย ย  โโโ components
โย ย  โย ย  โโโ hocs
โย ย  โย ย  โโโ layouts
โย ย  โย ย  โโโ pages
โย ย  โย ย  โโโ seo
โย ย  โโโ constants
โย ย  โโโ hooks
โย ย  โโโ styles
โย ย  โโโ utils
โโโ README.md
โโโ next.config.js
โโโ tsconfig.json
โโโ package.json
โโโ yarn.lock
```

### 1. @types/

1. ๋ชจ๋  type ์ ์ธ์ ์ด๊ณณ์์ ํ๋ค.
2. ํ์ผ ์ด๋ฆ์ \*.d.ts ํ์์ ์งํจ๋ค.
3. ์ธ๋ถ ๋ชจ๋์ ํ์์ ์์กดํ๋ ํ์์ @types/index.d.ts ํ์ผ์ ์ ์ธํ๋ค.

### 2. api/

1. api/index.ts - Axios ์ธ์คํด์ค ๋ฐ ์ธํฐ์ํฐ ์ ์
2. api/... - ๊ฐ ์๋ํฌ์ธํธ์ baseUrl๋ช์ ํ์ผ ์ด๋ฆ์ผ๋ก ํ์ฌ ์ถ๊ฐ

### 3. atoms/

1. atoms/index.ts - Default Store๋ฅผ ์ ์ธํ์ฌ Export
2. atoms/... - ๊ฐ atom๋ช์ ํ์ผ ์ด๋ฆ์ผ๋ก ํ์ฌ ์ถ๊ฐ

### 4. components/

1. components/layouts - ๋ ์ด์์ ์ปดํฌ๋ํธ
2. components/hocs - RouterGuard ๋ฑ HOC ์ปดํฌ๋ํธ
3. components/pages - ๊ฐ page์ ์ต์์ ์ปดํฌ๋ํธ ๋ฐ ํด๋น page์์ ์ฌ์ฉ๋๋ ํ์ ์ปดํฌ๋ํธ
4. components/seo - CustomHead ๋ฑ SEO์ ์ฌ์ฉ๋๋ ์ปดํฌ๋ํธ
5. components/... - ํ์์ ๋ฐ๋ผ ์ถ๊ฐ

### 5. constants/

1. constants/keys.ts - ๊ฐ์ข Key
2. constants/paths.ts - Paths
3. constants/... - ํ์์ ๋ฐ๋ผ ์ถ๊ฐ

### 6. hooks/

์์ฃผ ์ฌ์ฉํ๋ Custom Hooks

1. hooks/useChange.ts
2. hooks/useCustomRouter.ts
3. hooks/useInput.ts
4. hooks/useMobile.ts
5. hooks/usePreventScroll.ts
6. hooks/useQueryString.ts
7. hooks/useRouteToPath.ts
8. hooks/useSwitch.ts
9. hooks/useUniqueId.ts

### 7. styles/

1. styles/alphaToHex.ts - 0~1์ Hex๋ก ๋ณํํ ๊ฐ๋ค์ ๋ชจ์
2. styles/colors.ts
3. styles/devices.ts - ๋ทฐํฌํธ์ ๋ฐ๋ฅธ ๋๋ฐ์ด์ค ๊ตฌ๋ถ ๊ธฐ์ค
4. styles/fonts.ts - ๊ธฐ๋ณธ ์ํ ๋ฏน ํ์ดํฌ๊ทธ๋ํผ
5. styles/global.ts - ๊ธฐ๋ณธ ์ ์ญ ์คํ์ผ
6. styles/reset.ts - ๊ธฐ๋ณธ ๋ฆฌ์ ์คํ์ผ
7. styles/sizes.ts
8. styles/svgs.tsx

### 8. utils/

์์ฃผ ์ฌ์ฉํ๋ Utils

1. utils/fetchAndSet.ts
2. utils/setLayout.ts
3. utils/withoutPropagation.ts

### 9. Named Export & Re-Export in Index.ts

```javascript
// components/shared/index.ts
export * from './ContactWidget';
export * from './Navigator';
export * from './SpaceBackground';
```

```javascript
// components/index.ts
export * from './shared';
```

```javascript
// components/layouts/WithNavigatorLayout.tsx
import { Navigator, ContactWidget } from '@components';
```

## 4. ์ฝ๋ ์ปจ๋ฒค์

### 1. EsLint Rules

1. Import๋ฌธ ์์ ์๋ ๋ฐฐ์น
2. Named Export ๊ฐ์  (pages/\*\*/\* ์ ์ธ)
3. React Component props์ ์ค๊ดํธ๊ฐ ํ์์๋ ๊ฒฝ์ฐ ์๋ ์ญ์ 
4. Prettier ์ฐ๋
5. ์ธ Recommended Rules

### 2. Type Naming

1. Props Type ์ ์ธ ์ Type์ ์ฌ์ฉํ๋ค. (Interface X)
2. Props Type์ ์ด๋ฆ์ **[์ปดํฌ๋ํธ์ด๋ฆ]+Props** ์ ํ์์ผ๋ก ์ง๋๋ค.

```typescript
type HeaderProps = {
  onOpenDrawer: (e: React.MouseEvent) => void;
};

type PublicationBoxElementProps = {
  title: string;
  writer: string;
  img: string;
  pdf: string;
};
```

3. Interface ์ ์ธ ์, ํด๋์ค์ ์ธํฐํ์ด์ค๋ก ์ฌ์ฉํ  ๋ชฉ์ ์ด ์๋๋ผ๋ฉด **์ ๋์ฌ I๋ฅผ ์ฌ์ฉํ์ง ์๋๋ค**.

### 3. Constants

๊ฐ์ฒด๋ก ์ ์ํ๋, `as const` ํค์๋๋ฅผ ์ฌ์ฉํ์ฌ read-only ๊ฐ์ฒด๋ก ๋ง๋ ๋ค.

```typescript
export const Paths = {
  new: '/new',
  newComplete: '/new/complete',
  main: '/main',
  reply: '/reply',
  replyComplete: '/reply/complete',
  view: '/view',
} as const;
```

### 4. px - rem ๊ด๋ จ

1rem = 10px (styles/global.ts)  
์ฌ์ฉ์ ํฐํธ ํฌ๊ธฐ ๋์์ ์ํด ๊ฐ๊ธ์  px์ด ์๋ rem์ ์ฌ์ฉํ๋ค.

## 5. API ๊ด๋ จ ์ปจ๋ฒค์

### 1. Generic Instance

Axios Instance์ Request Methods ์๊ทธ๋์ณ ์ค๋ฒ๋ผ์ด๋ฉ

```typescript
// @types/dep/axios.d.ts
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface GenericInstance extends AxiosInstance {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T, U = void>(url: string, data?: U, config?: AxiosRequestConfig): Promise<T>;
  put<T, U>(url: string, data: U, config?: AxiosRequestConfig): Promise<T>;
  patch<T, U>(url: string, data: U, config?: AxiosRequestConfig): Promise<T>;
}
```

### 2. API Schema

Request & Response Schema ์ ์

1. ์์ฒญ ์คํค๋ง ๋ค์์คํ์ด์ค ๋ค์ด๋ฐ - **Request+[baseUrl]**
2. ์๋ต ์คํค๋ง ๋ค์์คํ์ด์ค ๋ค์ด๋ฐ - **Response+[baseUrl]**
3. ์คํค๋ง ํ์ ๋ค์ด๋ฐ - **[Method]**

```typescript
// @types/api/club.d.ts
declare namespace RequestClub {
  type Post = {
    name: string;
    profileImgUrl: string;
    startDate: string;
    endDate: string;
  };
}

declare namespace ResponseClub {
  type Get = {
    id: 1;
    name: string;
    profileImgUrl: string;
    clubCode: string;
    startDate: string;
    endDate: string;
    numOfMember: number;
  };

  type Post = {
    id: number;
    code: string;
  };
}
```

### 3. Axios Promise Generator

API ํธ์ถ์ฉ ํจ์ ์ ์

1. ์ฟผ๋ฆฌ๋ ๋ฐ์ดํฐ์ ๋ณ๊ฐ์ ํ๋ผ๋ฏธํฐ๋ก ๋๊น
2. ์ ์ํด๋ ์คํค๋ง ํ์์ ๊ฐ ๊ตฌ๊ฐ์ ์ง์ 
   1. ํด๋จผ ์๋ฌ ๋ฐฉ์ง
   2. ๋ฐํ๋  ๋ฐ์ดํฐ ํ์ ์ง์ 
3. Axios Promise๋ฅผ ๋ฐํ

```typescript
// api/club.ts
import request from './core';

const baseUrl = '/club';

export const getClub = (clubId: number) => {
  const url = `${baseUrl}/${clubId}`;
  return request.get<ResponseClub.Get>(url);
};

export const postClub = (data: RequestClub.Post) => {
  const url = `${baseUrl}`;
  return request.post<ResponseClub.Post, RequestClub.Post>(url, data);
};
```

### 4. Call Generator to Request

```typescript
// Somewhere in components
import { postClub } from '@api';

const onSubmit = async () => {
  await postClub({
    name: clubName,
    profileImgUrl: fileKey,
    startDate: '2023. 3. ' + startDate,
    endDate: '2023. 3. ' + endDate,
  });
  onRouteToMain();
};
```

### 5. Error Handling

์๋ฌ๊ฐ ๋ฐ์ํ๋ฉด Interceptor์์ Promise Chain์ ๋๋๋ค.

1. ์์ธ์ฒ๋ฆฌ
2. async ์ค์ฝํ์ ํ๋ฆ์ด ๋ค์์ผ๋ก ์งํํ์ง ๋ชปํ๊ฒ ํ๋ค.

```typescript
// api/core/index.ts
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    return new Promise(() => {});
  },
);
```

### 6. Interceptors

1. ์์ฒญ ์ง์ , auth ๊ด๋ จ ์ ์ญ ์ํ๋ฅผ ํ์ธํ์ฌ ์ธ์ฆ ํค๋๋ฅผ ์ค์ ํ๋ค.
2. ๋ฐฑ์๋๊ฐ Snake Case๋ฅผ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ, ์์ฒญ์ชฝ์ camelToSnake, ์๋ต์ชฝ์ snakeToCamel ์ปจ๋ฒํฐ๋ฅผ ๋ถ์ธ๋ค.

## 6. ์ปค๋ฐ ์ปจ๋ฒค์

### 1. ๋ธ๋์น ์ด๋ฆ ์ปจ๋ฒค์

```
Feature/[๊ธฐ๋ฅ์์ฝ]

- ๋งจ ์ฒซ๊ธ์ F๋ง ๋๋ฌธ์๋ก, ๊ธฐ๋ฅ์์ฝ์ ์๋ฌธ์๋ก ์์ฑํ๋ค.
- ๋์ด์ฐ๊ธฐ๋ ํ์ดํ์ผ๋ก ๊ตฌ๋ถํ๋ค.

ex) Feature/modal-publishing
```

### 2. ์ปค๋ฐ ๋ฉ์ธ์ง ์ปจ๋ฒค์

```
<ํ๊ทธ>: <์ ๋ชฉ>

- ํ๊ทธ์ ์ฒซ๊ธ์๋ ๋๋ฌธ์๋ก ์์ฑํ๋ค.
- ํ๊ทธ๋ ์๋์ ์ ํ ๊ฒ๋ค๋ง ์ฌ์ฉํ๋ค.

Feat: ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ, ๊ธฐ๋ฅ ๋ก์ง ๋ณ๊ฒฝ
Fix: ๋ฒ๊ทธ ์์ 
Refactor: ์ฝ๋ ๋ฆฌํฉํ ๋ง (๊ธฐ๋ฅ ๋ณํ X)
Style: ์ฝ๋ ํฌ๋งทํ, ์ฝ๋ ๋ณ๊ฒฝ์ด ์๋ ๊ฒฝ์ฐ
Chore: ๋น๋ ์๋ฌด ์์ , ํจํค์ง ๋งค๋์  ์์ 
Docs: ๋ฌธ์ ์์ , ์ฃผ์
```
