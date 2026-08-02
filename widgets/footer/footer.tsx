import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { footerNavigation } from "@/shared/constants/navigation";

const MaxIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.84 9.437.5.092.683-.217.683-.481 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const TelegramIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1 .22-1.58.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.35-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.89.03-.25.38-.51 1.07-.78 4.2-1.82 7.01-3.02 8.42-3.58 4.02-1.61 4.86-1.89 5.41-1.89.12 0 .39.03.56.17.14.12.18.28.2.45-.01.07-.01.21-.02.27z" />
  </svg>
);

const GosuslugiIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9L16 12l-5 4.5z" />
  </svg>
);

const socialLinks = [
  { name: "Макс", href: "#", Icon: MaxIcon },
  { name: "Telegram", href: "https://t.me", Icon: TelegramIcon },
  { name: "Госуслуги", href: "https://gosuslugi.ru", Icon: GosuslugiIcon },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] text-white">
      {/* Основной контент */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* О центре */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0050AA]">
                <svg
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <div className="text-base font-bold leading-none">ЦЗН РТ</div>
                <div className="text-xs text-white/70 mt-1">
                  Центр занятости населения
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Государственное казённое учреждение «Центр занятости населения Республики
              Татарстан». Содействие занятости населения с 1991 года.
            </p>

            {/* Контакты */}
            <div className="space-y-2.5">
              <a
                href="tel:88001234567"
                className="flex items-start gap-2.5 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <Phone className="h-4 w-4 mt-0.5 text-[#5AB4E6] group-hover:text-[#7DC5ED]" />
                <div>
                  <div>8 800 123-45-67</div>
                  <div className="text-xs text-white/50">бесплатно по России</div>
                </div>
              </a>
              <a
                href="mailto:info@czn-rt.ru"
                className="flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <Mail className="h-4 w-4 text-[#5AB4E6] group-hover:text-[#7DC5ED]" />
                info@czn-rt.ru
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 text-[#5AB4E6]" />
                <div>
                  420012, г. Казань,
                  <br />
                  ул. Красина, д. 5
                </div>
              </div>
            </div>
          </div>

          {/* Навигация — Гражданам */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold mb-4">Гражданам</h3>
            <ul className="space-y-2">
              {footerNavigation.citizens.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Навигация — Работодателям */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold mb-4">Работодателям</h3>
            <ul className="space-y-2">
              {footerNavigation.employers.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Навигация — Сервисы */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold mb-4">Сервисы</h3>
            <ul className="space-y-2">
              {footerNavigation.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Навигация — О центре */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold mb-4">О центре</h3>
            <ul className="space-y-2">
              {footerNavigation.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Социальные сети */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const { Icon } = social;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white/60 hover:bg-[#0050AA] hover:text-white transition-all"
                    aria-label={social.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
            <div className="text-xs text-white/50">
              Присоединяйтесь к нам в социальных сетях
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя панель */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/50">
            <div>
              © {currentYear} ГКУ «Центр занятости населения Республики Татарстан». Все
              права защищены.
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/privacy" className="hover:text-white/70 transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/sitemap" className="hover:text-white/70 transition-colors">
                Карта сайта
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
