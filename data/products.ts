export type ProductCategory = "stocks" | "tuning";

export type Product = {
  id: string;
  title: string;
  price: number;
  currency: "RUB";
  imageUrl: string;
  href: string;
  category: ProductCategory;
};

export const products: Product[] = [
  {
    id: "471711184362",
    title: "Пресс для снаряжения патронов",
    price: 75000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3036-3139-4266-b031-633136366231/63939291.jpg",
    href: "http://belyj-veterstocks.com/tproduct/500971800-471711184362-press-dlya-snaryazheniya-patronov",
    category: "stocks",
  },
  {
    id: "752181807002",
    title: "ЛОЖА R938 STALKER",
    price: 300000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor6434-3061-4535-b261-663736363064/58911997.jpg",
    href: "http://belyj-veterstocks.com/tproduct/500971800-752181807002-lozha-r938-stalker",
    category: "stocks",
  },
  {
    id: "803633856751",
    title: "ЛОЖА R8 ОХОТНИК",
    price: 250000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3161-6232-4431-a332-316238633965/32386012.jpg",
    href: "http://belyj-veterstocks.com/tproduct/500971800-803633856751-lozha-r8-ohotnik",
    category: "stocks",
  },
  {
    id: "568766723282",
    title: "ЛОЖА R8 STALKER",
    price: 300000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor6538-6339-4462-a531-333762373965/55374722.jpg",
    href: "http://belyj-veterstocks.com/tproduct/500971800-568766723282-lozha-r8-stalker",
    category: "stocks",
  },
  {
    id: "355700726661",
    title: "ЛОЖА ОХОТНИК 938 (проект 101)",
    price: 250000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3130-3335-4966-a334-303465343762/13891567.jpg",
    href: "http://belyj-veterstocks.com/tproduct/500971800-355700726661-lozha-ohotnik-938-proekt-101",
    category: "stocks",
  },
  {
    id: "911982938042",
    title: "ЛОЖА R8 СКЕЛЕТ",
    price: 250000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3131-3339-4638-b665-323064383234/65790973.jpg",
    href: "http://belyj-veterstocks.com/tproduct/500971800-911982938042-lozha-r8-skelet",
    category: "stocks",
  },
  {
    id: "680710705942",
    title: "ЛОЖА СКЕЛЕТ 938 (проект 101)",
    price: 250000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3131-3339-4638-b665-323064383234/65790973.jpg",
    href: "http://belyj-veterstocks.com/tproduct/500971800-680710705942-lozha-skelet-938-proekt-101",
    category: "stocks",
  },
  {
    id: "523809121711",
    title: "ЛОЖА ТИККА Т3 под магазин AI",
    price: 150000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor6433-3261-4961-a634-393636346638/80666878.jpg",
    href: "http://belyj-veterstocks.com/tproduct/500971800-523809121711-lozha-tikka-t3-pod-magazin-ai",
    category: "stocks",
  },
  {
    id: "955211777441",
    title: "ЛОЖА TIKKA T3 под стандартный магазин",
    price: 150000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3930-6331-4862-a238-613835323433/22541779.jpg",
    href: "http://belyj-veterstocks.com/tproduct/500971800-955211777441-lozha-tikka-t3-pod-standartnii-magazin",
    category: "stocks",
  },
  {
    id: "443962362352",
    title: "ЛОЖА SAKO 75",
    price: 150000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3632-6637-4665-b065-393933363831/71139163.jpg",
    href: "http://belyj-veterstocks.com/tproduct/500971800-443962362352-lozha-sako-75",
    category: "stocks",
  },
  {
    id: "574205802191",
    title: "ЛОЖА CZ457",
    price: 90000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3261-3638-4463-a438-653236636234/78065139.jpg",
    href: "http://belyj-veterstocks.com/tproduct/500971800-574205802191-lozha-cz457",
    category: "stocks",
  },
  {
    id: "818841761931",
    title: "ШАССИ R8 standart",
    price: 130000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor6232-3962-4332-b232-333336313262/44035407.jpg",
    href: "http://belyj-veterstocks.com/tproduct/500971800-818841761931-shassi-r8-standart",
    category: "stocks",
  },
  {
    id: "888517620431",
    title: "ШАССИ R8 professional",
    price: 130000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3433-3637-4238-b066-303635303530/50401120.jpg",
    href: "http://belyj-veterstocks.com/tproduct/500971800-888517620431-shassi-r8-professional",
    category: "stocks",
  },
  {
    id: "442269946752",
    title: "ШАССИ R8 Ultimate",
    price: 150000,
    currency: "RUB",
    imageUrl:
      "https://static.tildacdn.com/stor3162-3330-4366-b561-623238643466/a215658e9eef33272242f92cef17c5bd.jpg",
    href: "http://belyj-veterstocks.com/tproduct/500971800-442269946752-shassi-r8-ultimate",
    category: "stocks",
  },
  {
    id: "622402612581",
    title: "ШАССИ 938 (проект 101)",
    price: 130000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3064-3933-4234-a435-396361663461/97819726.jpg",
    href: "http://belyj-veterstocks.com/tproduct/500971800-622402612581-shassi-938-proekt-101",
    category: "stocks",
  },
  {
    id: "966115864431",
    title: "BARREL EXTENSION R8",
    price: 25000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3636-3031-4366-a539-313139303961/56689451.jpg",
    href: "http://belyj-veterstocks.com/tproduct/504814557-966115864431-barrel-extension-r8",
    category: "tuning",
  },
  {
    id: "752118544062",
    title: "BARREL EXTENSION R93",
    price: 35000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3636-3031-4366-a539-313139303961/56689451.jpg",
    href: "http://belyj-veterstocks.com/tproduct/504814557-752118544062-barrel-extension-r93",
    category: "tuning",
  },
  {
    id: "437372586481",
    title: "Затыльник",
    price: 5000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3835-3439-4035-a437-333732313263/97309575.jpg",
    href: "http://belyj-veterstocks.com/tproduct/504814557-437372586481-zatilnik",
    category: "tuning",
  },
  {
    id: "472734345521",
    title: "Bolt knob",
    price: 2000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3463-3038-4339-a631-316239313166/38797665.jpg",
    href: "http://belyj-veterstocks.com/tproduct/504814557-472734345521-bolt-knob",
    category: "tuning",
  },
  {
    id: "621832299191",
    title: "Bolt knob карбоновый",
    price: 10000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3463-3038-4339-a631-316239313166/38797665.jpg",
    href: "http://belyj-veterstocks.com/tproduct/504814557-621832299191-bolt-knob-karbonovii",
    category: "tuning",
  },
  {
    id: "127200337021",
    title: "Проставка",
    price: 1000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3463-3038-4339-a631-316239313166/38797665.jpg",
    href: "http://belyj-veterstocks.com/tproduct/504814557-127200337021-prostavka",
    category: "tuning",
  },
  {
    id: "152150450831",
    title: "Щека в сборе",
    price: 15000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3463-3038-4339-a631-316239313166/38797665.jpg",
    href: "http://belyj-veterstocks.com/tproduct/504814557-152150450831-scheka-v-sbore",
    category: "tuning",
  },
  {
    id: "687040014861",
    title: "Барашки",
    price: 750,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3463-3038-4339-a631-316239313166/38797665.jpg",
    href: "http://belyj-veterstocks.com/tproduct/504814557-687040014861-barashki",
    category: "tuning",
  },
  {
    id: "159927916221",
    title: "Карбоновая рукоятка AR-15",
    price: 15000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor6262-6563-4433-a332-633035636531/45456023.jpg",
    href: "http://belyj-veterstocks.com/tproduct/504814557-159927916221-karbonovaya-rukoyatka-ar-15",
    category: "tuning",
  },
  {
    id: "976187790691",
    title: "Спуск Tikka T3",
    price: 25000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3266-3064-4032-b639-393734346435/46152535.jpg",
    href: "http://belyj-veterstocks.com/tproduct/504814557-976187790691-spusk-tikka-t3",
    category: "tuning",
  },
  {
    id: "806823845821",
    title: "Спуск для винтовки Мосина",
    price: 15000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3937-6633-4563-a236-306532646331/48769538.jpg",
    href: "http://belyj-veterstocks.com/tproduct/504814557-806823845821-spusk-dlya-vintovki-mosina",
    category: "tuning",
  },
  {
    id: "430024347971",
    title: "Спуск AR-15",
    price: 25000,
    currency: "RUB",
    imageUrl: "https://static.tildacdn.com/stor3963-3037-4331-b838-353464393731/14883552.png",
    href: "http://belyj-veterstocks.com/tproduct/504814557-430024347971-spusk-ar-15",
    category: "tuning",
  },
];

export function getProductSlugFromHref(href: string): string {
  const path = href.includes("http") ? new URL(href).pathname : href;
  return path
    .replace(/^\/tproduct\//, "")
    .replace(/^tproduct\//, "")
    .replace(/\/$/, "");
}

export function getLocalProductPath(href: string): string {
  return `/tproduct/${getProductSlugFromHref(href)}`;
}

export function findProductBySlug(slug: string): Product | undefined {
  return products.find((product) => getProductSlugFromHref(product.href) === slug);
}
