import type { NavItem } from "@/shared/types";

export const mainNavigation: NavItem[] = [
  {
    title: "Соискателям",
    href: "/citizens",
    items: [
      {
        title: "Поиск вакансий",
        href: "/jobs",
        description: "Актуальные вакансии по всей республике",
      },
      {
        title: "Меры поддержки",
        href: "/support",
        description: "Государственная поддержка граждан",
      },
      {
        title: "Запись на приём",
        href: "/appointment",
        description: "Онлайн-запись к специалисту",
      },
      {
        title: "Подать обращение",
        href: "/appeals",
        description: "Электронное обращение в центр занятости",
      },
    ],
  },
  {
    title: "Работодателям",
    href: "/employers",
    items: [
      {
        title: "Поиск резюме",
        href: "/recruitment",
        description: "Поиск квалифицированных специалистов",
      },
      {
        title: "Меры поддержки",
        href: "/subsidies",
        description: "Субсидии и программы поддержки работодателей",
      },
      {
        title: "Запись на приём",
        href: "/appointment",
        description: "Онлайн-запись к специалисту",
      },
      {
        title: "Подать обращение",
        href: "/appeals",
        description: "Электронное обращение в центр занятости",
      },
    ],
  },
  {
    title: "Участникам СВО",
    href: "/svo",
    items: [
      {
        title: "Вакансии",
        href: "/svo/jobs",
        description: "Актуальные вакансии для участников СВО",
      },
      {
        title: "Меры поддержки",
        href: "/svo/support",
        description: "Государственная поддержка участников СВО",
      },
      {
        title: "Содействие предпринимательской деятельности",
        href: "/svo/business",
        description: "Помощь в открытии и ведении собственного дела",
      },
      {
        title: "Сведения о мерах налоговой поддержки",
        href: "/svo/tax-support",
        description: "Налоговые льготы и преференции",
      },
    ],
  },
  {
    title: "Новости и мероприятия",
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
        title: "Контакт-центр: 8(843)222-05-57",
        href: "tel:88432220557",
        description: "Горячая линия центра занятости",
      },
      {
        title: "Адреса ЦЗН",
        href: "/contacts",
        description: "Адреса и телефоны центров занятости",
      },
      {
        title: "Онлайн чат",
        href: "/chat",
        description: "Онлайн-консультант на сайте",
      },
      {
        title: "Мы в соцсетях",
        href: "/social",
        description: "Наши официальные страницы",
      },
      {
        title: "Анкетирование и опросы",
        href: "/surveys",
        description: "Оцените качество наших услуг",
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
