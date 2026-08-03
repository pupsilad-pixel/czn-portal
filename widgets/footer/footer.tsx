import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { footerNavigation } from "@/shared/constants/navigation";

const MaxIcon = () => (
  <Image src="/social/max.svg" alt="Макс" width={16} height={16} />
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

const VkIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.785 16.241s.288-.032.435-.193c.135-.148.131-.425.131-.425s-.019-1.297.582-1.488c.593-.189 1.354 1.253 2.161 1.806.61.418 1.073.327 1.073.327l2.157-.03s1.128-.069.593-.957c-.044-.072-.312-.652-1.6-1.85-1.349-1.253-1.169-1.05.456-3.218.989-1.32 1.384-2.125 1.262-2.47-.118-.33-.847-.243-.847-.243l-2.434.015s-.181-.025-.314.055c-.131.078-.215.262-.215.262s-.386 1.027-.901 1.901c-1.086 1.852-1.521 1.95-1.699 1.834-.413-.27-.31-1.082-.31-1.66 0-1.802.269-2.555-.522-2.751-.262-.064-.455-.107-1.126-.114-.86-.009-1.587.003-1.998.21-.263.131-.464.425-.341.442.151.021.493.092.674.341.234.32.226 1.04.226 1.04s.135 1.982-.314 2.227c-.31.17-.736-.178-1.654-1.855-.469-.857-.823-1.806-.823-1.806s-.071-.176-.2-.27c-.155-.114-.373-.15-.373-.15l-2.312.015s-.347.01-.475.161c-.114.135-.009.413-.009.413s1.812 4.243 3.864 6.382c1.881 1.96 4.018 1.832 4.018 1.832h.967z" />
  </svg>
);

const socialLinks = [
  { name: "Макс", href: "https://max.ru", Icon: MaxIcon },
  { name: "ВКонтакте", href: "https://vk.com", Icon: VkIcon },
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
