import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { SectionHeader } from "@/shared/ui/section-header";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";

const offices = [
  {
    id: "1",
    city: "Казань (головной офис)",
    address: "ул. Красина, д. 5",
    phone: "+7 (843) 236-34-10",
    email: "kazan@czn-rt.ru",
    hours: "Пн–Пт: 8:00–17:00",
    metro: "Метро: Площадь Тукая",
  },
  {
    id: "2",
    city: "Набережные Челны",
    address: "просп. Мира, д. 18",
    phone: "+7 (8552) 45-23-10",
    email: "chelny@czn-rt.ru",
    hours: "Пн–Пт: 8:00–17:00",
    metro: "Автобус: ост. Центр",
  },
  {
    id: "3",
    city: "Альметьевск",
    address: "ул. Ленина, д. 72",
    phone: "+7 (8553) 22-41-00",
    email: "almetyevsk@czn-rt.ru",
    hours: "Пн–Пт: 8:00–17:00",
    metro: "Центр города",
  },
  {
    id: "4",
    city: "Нижнекамск",
    address: "ул. Корабельная, д. 5",
    phone: "+7 (8555) 37-58-90",
    email: "nizhnekamsk@czn-rt.ru",
    hours: "Пн–Пт: 8:00–17:00",
    metro: "Ост. ЦЗН",
  },
  {
    id: "5",
    city: "Зеленодольск",
    address: "ул. Советская, д. 12",
    phone: "+7 (84371) 3-24-50",
    email: "zelenodolsk@czn-rt.ru",
    hours: "Пн–Пт: 8:00–17:00",
    metro: "Ост. Администрация",
  },
  {
    id: "6",
    city: "Чистополь",
    address: "ул. Карла Маркса, д. 40",
    phone: "+7 (84342) 5-71-80",
    email: "chistopol@czn-rt.ru",
    hours: "Пн–Пт: 8:00–17:00",
    metro: "Центр",
  },
];

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#F4F7FB] to-white py-8 md:py-12">
          <div className="container">
            <Breadcrumbs items={[{ title: "Контакты" }]} className="mb-6" />
            <SectionHeader
              title="Контакты"
              description="Адреса, телефоны и режим работы центров занятости Республики Татарстан"
            />
          </div>
        </section>

        {/* Главные контакты */}
        <section className="py-10 md:py-14">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                {
                  icon: Phone,
                  title: "Горячая линия",
                  value: "8 800 123-45-67",
                  sub: "Бесплатно, круглосуточно",
                  href: "tel:88001234567",
                  color: "#0050AA",
                },
                {
                  icon: Mail,
                  title: "Электронная почта",
                  value: "info@czn-rt.ru",
                  sub: "Ответим в течение 1 дня",
                  href: "mailto:info@czn-rt.ru",
                  color: "#1A65BB",
                },
                {
                  icon: MapPin,
                  title: "Головной офис",
                  value: "г. Казань, ул. Красина, 5",
                  sub: "Офис 101, 1 этаж",
                  href: "#map",
                  color: "#003D82",
                },
                {
                  icon: Clock,
                  title: "Режим работы",
                  value: "Пн–Пт: 8:00–17:00",
                  sub: "Без обеда, Сб–Вс: выходной",
                  href: undefined,
                  color: "#E65028",
                },
              ].map((item) => {
                const Icon = item.icon;
                const Wrapper = item.href ? "a" : "div";
                return (
                  <Wrapper
                    key={item.title}
                    {...(item.href ? { href: item.href } : {})}
                    className="group flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-all"
                  >
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${item.color}14`,
                        color: item.color,
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#7A96B4] mb-1">{item.title}</div>
                      <div className="text-sm font-semibold text-[#0A1628] group-hover:text-[#0050AA] transition-colors">
                        {item.value}
                      </div>
                      <div className="text-xs text-[#3A5070] mt-0.5">{item.sub}</div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Карта-заглушка */}
            <div
              id="map"
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 bg-[#F4F7FB] border border-[#5AB4E6] flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="h-10 w-10 text-[#0050AA] mx-auto mb-3" />
                <p className="text-[#3A5070] font-medium">Интерактивная карта</p>
                <p className="text-sm text-[#7A96B4] mt-1">
                  г. Казань, ул. Красина, д. 5
                </p>
                <a
                  href="https://yandex.ru/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-[#0050AA] hover:underline"
                >
                  Открыть в Яндекс.Картах
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Офисы по городам */}
            <h2 className="text-2xl font-bold text-[#0A1628] mb-6">
              Центры занятости по городам
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {offices.map((office) => (
                <article
                  key={office.id}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <h3 className="text-base font-semibold text-[#0A1628] mb-4">
                    {office.city}
                  </h3>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5 text-sm text-[#3A5070]">
                      <MapPin className="h-4 w-4 mt-0.5 text-[#0050AA] shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    <a
                      href={`tel:${office.phone.replace(/\D/g, "")}`}
                      className="flex items-center gap-2.5 text-sm text-[#3A5070] hover:text-[#0050AA] transition-colors"
                    >
                      <Phone className="h-4 w-4 text-[#0050AA] shrink-0" />
                      {office.phone}
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-2.5 text-sm text-[#3A5070] hover:text-[#0050AA] transition-colors"
                    >
                      <Mail className="h-4 w-4 text-[#0050AA] shrink-0" />
                      {office.email}
                    </a>
                    <div className="flex items-center gap-2.5 text-sm text-[#7A96B4]">
                      <Clock className="h-4 w-4 shrink-0" />
                      {office.hours}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Форма обратной связи */}
        <section className="py-12 md:py-16 bg-[#F4F7FB]">
          <div className="container max-w-2xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#0A1628] mb-2">
                Написать нам
              </h2>
              <p className="text-[#3A5070]">
                Оставьте обращение и мы свяжемся с вами в течение одного рабочего дня
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 md:p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#0A1628] mb-1.5">
                    Ваше имя
                  </label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0A1628] mb-1.5">
                    Телефон
                  </label>
                  <Input placeholder="+7 (999) 000-00-00" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0A1628] mb-1.5">
                  Email
                </label>
                <Input type="email" placeholder="your@email.ru" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0A1628] mb-1.5">
                  Тема обращения
                </label>
                <Input placeholder="Кратко опишите тему..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0A1628] mb-1.5">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  placeholder="Подробно опишите ваш вопрос..."
                  className="flex w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0A1628] placeholder:text-[#7A96B4] outline-none focus:border-[#0050AA] focus:ring-2 focus:ring-[#0050AA]/20 resize-none"
                />
              </div>
              <Button size="lg" className="w-full">
                Отправить обращение
              </Button>
              <p className="text-xs text-[#7A96B4] text-center">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a href="/privacy" className="text-[#0050AA] hover:underline">
                  политикой конфиденциальности
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
