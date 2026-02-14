# Vibe Carbon Solution (Next.js)

Фронтенд-проект на Next.js (App Router), собранный как пиксельно-приближенная версия лендинга/витрины:
- hero с карбоновым фоном и затемнением,
- каталог товаров,
- секции доставки/оплаты и контактов,
- динамическая страница товара.

## Стек

- Next.js 16 (App Router)
- React + TypeScript
- CSS Modules + `app/globals.css`
- `next/image` для изображений
- ESLint

## Структура

- `app/layout.tsx` — базовый layout + metadata
- `app/page.tsx` — главная страница
- `app/tproduct/[...slug]/page.tsx` — динамический роут товара
- `components/` — UI-компоненты (`Hero`, `ProductGrid`, `ProductCard`, `DeliverySection`, `ContactSection`, `Footer`)
- `data/products.ts` — локальные данные товаров
- `data/sections.ts` — контент секций
- `public/hero-carbon-bg.png` — фон hero

## Дизайн/стили

- Единая темная палитра в стиле Hero.
- У Hero и ContactSection используется фоновая карбоновая картинка с затемняющим overlay.
- Остальные секции имеют черный фон.
- Все основные CTA-кнопки имеют общую скошенную форму через глобальный класс `.btn-angled`.

## Скрипты

```bash
npm run dev
npm run lint
npm run build
```

## Локальный запуск

1. Установить зависимости:

```bash
npm install
```

2. Запустить dev-сервер:

```bash
npm run dev
```

3. Открыть:

[http://localhost:3000](http://localhost:3000)

## Проверка перед релизом

```bash
npm run lint
npm run build
```

## Deploy to GitHub Pages

1. В GitHub откройте `Settings → Pages`.
2. В `Source` выберите `GitHub Actions`.
3. После каждого push в ветку `main` деплой запускается автоматически workflow-файлом `.github/workflows/pages.yml`.

Итоговый URL проекта:
[https://mfbulat.github.io/vibe-carbon-solution/](https://mfbulat.github.io/vibe-carbon-solution/)
