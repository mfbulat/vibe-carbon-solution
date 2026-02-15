export const siteMeta = {
  title: "Title",
  description: "Карбоновые детали с промышленным контролем качества",
  ogImage: "",
  url: "https://mfbulat.github.io/vibe-carbon-solution",
};

export const navLinks = [
  { label: "КАТАЛОГ", href: "#catalog" },
  { label: "ДОСТАВКА И ОПЛАТА", href: "#delivery" },
  { label: "ФОТО И ВИДЕО", href: "#media" },
  { label: "КОНТАКТЫ", href: "#contacts" },
] as const;

export const heroSection = {
  topMenuLeft: ["Технологии", "Продукция", "Процесс", "Кейсы"],
  topMenuRight: ["О компании", "Контакты"],
  topButtonLabel: "Запросить расчёт",
  title: "Карбоновые детали с промышленным контролем качества",
  subtitle: "Автоклав • Вакуум • Препрег — под задачу",
  primaryLabel: "Каталог",
  secondaryLabel: "Индивидуальный заказ",
  ctaHref: "#catalog",
  contactHref: "#contacts",
  heroImage:
    "https://static.tildacdn.com/stor3162-3330-4366-b561-623238643466/a215658e9eef33272242f92cef17c5bd.jpg",
  reasons: [
    { icon: "⚙", value: "100%", label: "Prepreg & Autoclave" },
    { icon: "±", value: "0,1 мм", label: "Точность изготовления" },
    { icon: "✥", value: "30–50%", label: "Легче и прочнее стали" },
    { icon: "◈", value: "QA", label: "Контроль качества" },
    { icon: "✓", value: "QC", label: "Проверка" },
  ],
  customCtaText: "Нужна кастомная деталь под ваш проект?",
  customCtaButton: "Отправить запрос",
};

export const catalogSectionTitle = "Каталог\nпродукции";

export const deliverySection = {
  title: "Доставка\nи оплата",
  ctaLabel: "ЗАПОЛНИТЬ ЗАЯВКУ",
  ctaHref: "#contacts",
  rows: [
    { label: "ЗАКАЗ", value: "" },
    { label: "ОПЛАТА", value: "Банковский перевод" },
    { label: "ДОСТАВКА", value: "Транспортной компанией СДЭК." },
  ],
  imageUrl: "https://static.tildacdn.com/stor3636-3031-4366-a539-313139303961/56689451.jpg",
};

export const contactSection = {
  title: "Контакты",
  formTitle: "ОСТАЛИСЬ ВОПРОСЫ?",
  formSubtitle: "Заполните форму и мы свяжемся с вами в ближайшее время",
  email: "belyj.veterstocks@gmail.com",
  website: "https://compowood.ru",
  telegramLabel: "НАША ГРУППА В TELEGRAM",
  partnersLabel: "НАШИ ПАРТНЕРЫ",
};

export const footerNote =
  "Вся предоставленная на сайте продукция не требует обязательной сертификации и сопроводительных документов";

export const privacyUrl = "http://belyj-veterstocks.tilda.ws/privacy";
