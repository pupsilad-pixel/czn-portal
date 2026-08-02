import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { SectionHeader } from "@/shared/ui/section-header";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Target, Eye, Heart } from "lucide-react";

const milestones = [
  { year: "1991", title: "Основание", desc: "Центр занятости населения Республики Татарстан открыт в соответствии с Законом о занятости населения." },
  { year: "2000", title: "Развитие сети", desc: "Открытие филиалов во всех крупных городах республики — 40+ отделений по РТ." },
  { year: "2010", title: "Цифровизация", desc: "Запуск первой электронной базы вакансий и онлайн-регистрации безработных граждан." },
  { year: "2019", title: "Новый портал", desc: "Переход на единую цифровую платформу, интеграция с Госуслугами и федеральными системами." },
  { year: "2024", title: "ИИ-технологии", desc: "Внедрение систем автоматического подбора вакансий и профориентационного тестирования." },
  { year: "2025", title: "Сейчас", desc: "Более 5 000 вакансий, 12 000+ трудоустроенных граждан ежегодно, 0,4% безработицы." },
];

const values = [
  {
    icon: Target,
    title: "Эффективность",
    desc: "Каждый обратившийся к нам гражданин получает реальный результат — работу, обучение или поддержку.",
    color: "#0050AA",
  },
  {
    icon: Eye,
    title: "Прозрачность",
    desc: "Открытые данные о рынке труда, честные условия услуг и чёткие регламенты работы.",
    color: "#1A65BB",
  },
  {
    icon: Heart,
    title: "Забота",
    desc: "Индивидуальный подход к каждому человеку — особенно к тем, кто оказался в трудной ситуации.",
    color: "#E65028",
  },
];

const stats = [
  { value: "34+", label: "Года работы" },
  { value: "40+", label: "Отделений по РТ" },
  { value: "12 000+", label: "Трудоустроенных в год" },
  { value: "0,4%", label: "Уровень безработицы" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#F4F7FB] to-white py-12 md:py-20">
          <div className="container">
            <Breadcrumbs items={[{ title: "О центре" }]} className="mb-6" />

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <SectionHeader
                  title="О Центре занятости населения"
                  description="Государственное учреждение, помогающее гражданам Республики Татарстан найти достойную работу и работодателям — квалифицированных сотрудников с 1991 года."
                  className="mb-8"
                />
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href="/services">
                      Наши услуги
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contacts">Контакты</Link>
                  </Button>
                </div>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-[#0050AA] mb-1">
                      {s.value}
                    </div>
                    <div className="text-sm text-[#3A5070]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Миссия */}
        <section className="py-14 md:py-20">
          <div className="container max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF3FF] px-4 py-2 text-sm font-medium text-[#003D82] mb-6">
              Наша миссия
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] leading-tight mb-4">
              Содействовать занятости каждого человека в Республике Татарстан
            </h2>
            <p className="text-[#3A5070] text-lg leading-relaxed">
              Мы создаём условия, при которых каждый трудоспособный гражданин имеет
              возможность найти достойную работу, получить профессиональное обучение
              и развиваться — независимо от возраста, образования или жизненных обстоятельств.
            </p>
          </div>
        </section>

        {/* Ценности */}
        <section className="py-14 md:py-20 bg-[#F4F7FB]">
          <div className="container">
            <SectionHeader
              title="Наши ценности"
              centered
              className="mb-10"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 text-center"
                  >
                    <div
                      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl mb-4"
                      style={{ backgroundColor: `${v.color}14`, color: v.color }}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0A1628] mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-[#3A5070] leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* История */}
        <section className="py-14 md:py-20">
          <div className="container">
            <SectionHeader
              title="История центра"
              description="Более 34 лет на службе занятости населения Республики Татарстан"
              className="mb-12"
            />
            <div className="relative">
              {/* Вертикальная линия */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#5AB4E6] -translate-x-1/2 hidden md:block" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div
                    key={m.year}
                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Карточка */}
                    <div className="flex-1 md:max-w-[calc(50%-2rem)]">
                      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-all">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF3FF] px-3 py-1 text-xs font-bold text-[#0050AA] mb-3">
                          {m.year}
                        </div>
                        <h3 className="text-base font-semibold text-[#0A1628] mb-1.5">
                          {m.title}
                        </h3>
                        <p className="text-sm text-[#3A5070] leading-relaxed">{m.desc}</p>
                      </div>
                    </div>

                    {/* Центральная точка */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-5 h-4 w-4 rounded-full bg-[#0050AA] border-4 border-white shadow" />

                    {/* Пустое место для чётных */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Документы */}
        <section className="py-14 md:py-20 bg-[#F4F7FB]">
          <div className="container max-w-3xl">
            <SectionHeader
              title="Государственное задание"
              description="Основные показатели деятельности ЦЗН РТ"
              className="mb-8"
            />
            <div className="space-y-3">
              {[
                { title: "Государственное задание на 2025 год", check: "Выполняется" },
                { title: "Отчёт о деятельности за 2024 год", check: "Опубликован" },
                { title: "Целевые показатели эффективности", check: "Достигнуты" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0050AA] shrink-0" />
                    <span className="text-sm font-medium text-[#0A1628]">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#0050AA] bg-[#EBF3FF] px-2.5 py-1 rounded-full shrink-0">
                    {item.check}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button asChild variant="outline">
                <Link href="/documents">
                  Все документы
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-20">
          <div className="container">
            <div className="rounded-3xl bg-[#0A1628] p-8 md:p-14 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Готовы начать?
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Запишитесь на консультацию к специалисту центра занятости. Первый приём — бесплатно.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="white" size="lg">
                  <Link href="/appointment">Записаться на приём</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                  <Link href="/jobs">Найти работу</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
