export const categoryMenuList = [
  {
    id: 1,
    title: "Ремонт Компьютеров",
    src: "/pc icon.png", 
    href: "/shop/computers"
  },
  {
    id: 2,
    title: "Ремонт Телефонов",
    src: "/smart phone icon.png",
    href: "/shop/smart-phones"
  },
  {
    id: 3,
    title: "Ремонт Ноутбуков",
    src: "/laptop icon.png",
    href: "/shop/laptops" 
  },
  {
    id: 4,
    title: "Ремонт Техники Apple",
    src: "/smart watch.png",
    href: "/shop/watches"
  },
  {
    id: 5,
    title: "Установка Камер",
    src: "/camera icon.png",
    href: "/shop/cameras" 
  },
];

export const incentives = [
  {
    name: "Бесплатная доставка",
    description:
      "Наша доставка полностью бесплатна, и это очень хорошо для наших клиентов.",
    imageSrc: "/shipping icon.png",
  },
  {
    name: "Круглосуточная поддержка клиентов",
    description:
      "Наша поддержка работает днем и ночью, чтобы ответить на любые ваши вопросы.",
    imageSrc: "/support icon.png",
  },
  {
    name: "Быстрая корзина покупок",
    description:
      "У нас супербыстрый процесс покупок, и вы получите от него удовольствие.",
    imageSrc: "/fast shopping icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "Скидки", href: "#" },
    { name: "Новости", href: "#" },
    { name: "Регистрация скидок", href: "#" },
  ],
  about: [
    { name: "О Singitronic", href: "#" },
    { name: "Работа с нами", href: "#" },
    { name: "Профиль компании", href: "#" },
  ],
  buy: [
    { name: "Карточка лояльности Singitronic", href: "#" },
    { name: "Условия использования", href: "#" },
    { name: "Политика конфиденциальности", href: "#" },
    { name: "Жалобы", href: "#" },
    { name: "Партнеры", href: "#" },
  ],
  help: [
    { name: "Контакты", href: "#" },
    { name: "Как купить в Singitronic", href: "#" },
    { name: "Часто задаваемые вопросы", href: "#" },
  ],
};


export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  // test for credit card number between 13 and 19 characters
  const regex = /^\d{13,19}$/;
  return regex.test(cleanedInput);
}

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
