import type { NavItem } from "@/shared/types";

export const mainNavigation: NavItem[] = [
  {
    title: "Гражданам",
    href: "/citizens",
    items: [
      {
        title: "Поиск работы",
        href: "/jobs",
        description: "Актуальные вакансии по всей республике",
      },
      {
        title: "Постановка на учёт",
        href: "/registration",
        description: "Регистрация в качестве безработного",
      },
      {
        title: "Профессиональное обучение",
        href: "/training",
        description: "Бесплатные курсы переподготовки и повышения квалификации",
      },
      {
        title: "Самозанятость",
        href: "/self-employment",
        description: "Помощь в открытии собственного дела",
      },
      {
        title: "Молодым специалистам",
        href: "/youth",
        description: "Программы для выпускников и молодёжи",
      },
      {
        title: "Гражданам с инвалидностью",
        href: "/disability",
        description: "Специализированная помощь в трудоустройстве",
      },
    ],
  },
  {
    title: "Работодателям",
    href: "/employers",
    items: [
      {
        title: "Подбор персонала",
        href: "/recruitment",
        description: "Поиск квалифицированных кадров",
      },
      {
        title: "Разместить вакансию",
        href: "/post-vacancy",
        description: "Публикация вакансий на портале",
      },
      {
        title: "Государственная поддержка",
        href: "/subsidies",
        description: "Субсидии и программы поддержки работодателей",
      },
      {
        title: "Ярмарки вакансий",
        href: "/job-fairs",
        description: "Участие в мероприятиях по подбору персонала",
      },
      {
        title: "Квотирование рабочих мест",
        href: "/quotas",
        description: "Квоты для трудоустройства инвалидов",
      },
    ],
  },
  {
    title: "Сервисы",
    href: "/services",
    items: [
      {
        title: "Электронные услуги",
        href: "/services/online",
        description: "Получение услуг в электронном виде",
      },
      {
        title: "Личный кабинет",
        href: "/profile",
        description: "Управление заявками и документами",
      },
      {
        title: "Запись на приём",
        href: "/appointment",
        description: "Онлайн-запись к специалисту",
      },
      {
        title: "Карьерное консультирование",
        href: "/career-consulting",
        description: "Помощь в построении карьеры",
      },
    ],
  },
  {
    title: "Новости и события",
    href: "/news",
  },
  {
    title: "Проекты",
    href: "/projects",
  },
  {
    title: "О центре",
    href: "/about",
    items: [
      {
        title: "Структура",
        href: "/structure",
        description: "Организационная структура ЦЗН РТ",
      },
      {
        title: "Документы",
        href: "/documents",
        description: "Нормативно-правовые документы",
      },
      {
        title: "Контакты",
        href: "/contacts",
        description: "Адреса и телефоны центров занятости",
      },
      {
        title: "FAQ",
        href: "/faq",
        description: "Часто задаваемые вопросы",
      },
    ],
  },
];

export const footerNavigation = {
  citizens: [
    { title: "Поиск работы", href: "/jobs" },
    { title: "Постановка на учёт", href: "/registration" },
    { title: "Обучение", href: "/training" },
    { title: "Самозанятость", href: "/self-employment" },
  ],
  employers: [
    { title: "Подбор персонала", href: "/recruitment" },
    { title: "Разместить вакансию", href: "/post-vacancy" },
    { title: "Субсидии", href: "/subsidies" },
    { title: "Ярмарки вакансий", href: "/job-fairs" },
  ],
  services: [
    { title: "Электронные услуги", href: "/services/online" },
    { title: "Личный кабинет", href: "/profile" },
    { title: "Запись на приём", href: "/appointment" },
    { title: "Консультации", href: "/career-consulting" },
  ],
  about: [
    { title: "О центре", href: "/about" },
    { title: "Структура", href: "/structure" },
    { title: "Документы", href: "/documents" },
    { title: "Контакты", href: "/contacts" },
  ],
};
