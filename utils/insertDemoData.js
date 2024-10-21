const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  {
    id: "1",
    title: "Смартфон",
    price: 22,
    rating: 5,
    description: "Описание смартфона",
    mainImage: "product1.webp",
    slug: "smart-phone-demo",
    manufacturer: "Samsung",
    category: "smart-phones",
    inStock: 0,
  },
  {
    id: "2",
    title: "SLR камера",
    price: 24,
    rating: 0,
    description: "Описание SLR камеры",
    mainImage: "product2.webp",
    slug: "slr-camera-demo",
    manufacturer: "Canon",
    category: "cameras",
    inStock: 0,
  },
  {
    id: "3",
    title: "Миксер",
    price: 25,
    rating: 4,
    description: "Описание миксера",
    mainImage: "product3.webp",
    slug: "mixed-grinder-demo",
    manufacturer: "ZunVolt",
    category: "mixer-grinders",
    inStock: 1,
  },
  {
    id: "4",
    title: "Гимбал для телефона",
    price: 21,
    rating: 5,
    description: "Описание гимбала для телефона",
    mainImage: "product4.webp",
    slug: "phone-gimbal-demo",
    manufacturer: "Samsung",
    category: "phone-gimbals",
    inStock: 1,
  },
  {
    id: "5",
    title: "Клавиатура для планшета",
    price: 52,
    rating: 4,
    description: "Описание клавиатуры для планшета",
    mainImage: "product5.webp",
    slug: "tablet-keyboard-demo",
    manufacturer: "Samsung",
    category: "tablet-keyboards",
    inStock: 1,
  },
  {
    id: "6",
    title: "Беспроводные наушники",
    price: 74,
    rating: 3,
    description: "Описание беспроводных наушников",
    mainImage: "product6.webp",
    slug: "wireless-earbuds-demo",
    manufacturer: "Samsung",
    category: "earbuds",
    inStock: 1,
  },
  {
    id: "7",
    title: "Партийные колонки",
    price: 35,
    rating: 5,
    description: "Описание партийных колонок",
    mainImage: "product7.webp",
    slug: "party-speakers-demo",
    manufacturer: "SOWO",
    category: "speakers",
    inStock: 1,
  },
  {
    id: "8",
    title: "Медленный соковыжиматель",
    price: 69,
    rating: 5,
    description: "Описание медленного соковыжимателя",
    mainImage: "product8.webp",
    slug: "slow-juicer-demo",
    manufacturer: "Bosch",
    category: "juicers",
    inStock: 1,
  },
  {
    id: "9",
    title: "Беспроводные наушники",
    price: 89,
    rating: 3,
    description: "Описание беспроводных наушников",
    mainImage: "product9.webp",
    slug: "wireless-headphones-demo",
    manufacturer: "Sony",
    category: "headphones",
    inStock: 1,
  },
  {
    id: "10",
    title: "Умные часы",
    price: 64,
    rating: 3,
    description: "Описание умных часов",
    mainImage: "product10.webp",
    slug: "smart-watch-demo",
    manufacturer: "Samsung",
    category: "watches",
    inStock: 1,
  },
  {
    id: "11",
    title: "Ноутбук Horizon",
    price: 52,
    rating: 5,
    description: "Описание ноутбука",
    mainImage: "product11.webp",
    slug: "notebook-horizon-demo",
    manufacturer: "HP",
    category: "laptops",
    inStock: 1,
  },
  {
    id: "12",
    title: "Мужской триммер",
    price: 54,
    rating: 5,
    description: "Описание триммера",
    mainImage: "product12.webp",
    slug: "mens-trimmer-demo",
    manufacturer: "Gillete",
    category: "trimmers",
    inStock: 0,
  },
  {
    id: "13",
    title: "Bluetooth колонка Sony",
    price: 100,
    rating: 5,
    description: "Это Bluetooth колонка Sony",
    mainImage: "sony speaker image 1.jpg",
    slug: "sony-speaker-bluetooth",
    manufacturer: "Sony",
    category: "speakers",
    inStock: 1,
  },
];

const demoProductImages = [
  {
    imageID: "1",
    productID: "13",
    image: "sony speaker image 1.jpg",
  },
  {
    imageID: "2",
    productID: "13",
    image: "sony speaker image 2.jpg",
  },
  {
    imageID: "3",
    productID: "13",
    image: "sony speaker image 3.jpg",
  },
  {
    imageID: "4",
    productID: "13",
    image: "sony speaker image 4.jpg",
  },
];

const demoCategories = [
  {
    name: "колонки",
  },
  {
    name: "триммеры",
  },
  {
    name: "ноутбуки",
  },
  {
    name: "часы",
  },
  {
    name: "наушники",
  },
  {
    name: "соковыжиматели",
  },
  {
    name: "беспроводные наушники",
  },
  {
    name: "клавиатуры для планшетов",
  },
  {
    name: "гимбалы для телефонов",
  },
  {
    name: "миксеры",
  },
  {
    name: "камеры",
  },
  {
    name: "смартфоны",
  },
];

async function insertDemoData() {
  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");

  for (const image of demoProductImages) {
    await prisma.image.create({
      data: image,
    });
  }
  console.log("Demo images inserted successfully!");

  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
