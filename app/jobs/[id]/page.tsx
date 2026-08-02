import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { mockVacancies } from "@/shared/constants/mock-vacancies";
import {
  MapPin,
  Clock,
  Briefcase,
  Building2,
  CheckCircle2,
  ArrowLeft,
  Share2,
  Bookmark,
} from "lucide-react";
import Link from "next/link";
import { VacancyCard } from "@/entities/vacancy-card/vacancy-card";

export default function VacancyDetailPage({ params }: { params: { id: string } }) {
  const vacancy = mockVacancies[0];
  const related = mockVacancies.slice(1, 4);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-8 md:py-12">
          <div className="container max-w-5xl">
            <div className="mb-6 flex items-center gap-3">
              <Button asChild variant="ghost" size="sm">
                <Link href="/jobs">
                  <ArrowLeft className="h-4 w-4" />
                  Назад к вакансиям
                </Link>
              </Button>
            </div>

            <Breadcrumbs
              items={[
                { title: "Поиск работы", href: "/jobs" },
                { title: vacancy.title },
              ]}
              className="mb-6"
            />

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Основная информация */}
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                    <div>
                      <h1 className="text-2xl font-bold text-[#0A1628] mb-1">
                        {vacancy.title}
                      </h1>
                      <p className="text-[#3A5070]">{vacancy.company}</p>
                    </div>
                    <div className="text-2xl font-bold text-[#0050AA] shrink-0">
                      {vacancy.salary}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    <Badge variant="default">{vacancy.employment}</Badge>
                    <Badge variant="secondary">{vacancy.experience}</Badge>
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#3A5070] border-t border-gray-100 pt-5">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#0050AA]" />
                      {vacancy.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#0050AA]" />
                      Опубликовано: {vacancy.publishedDate}
                    </span>
                    <span className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-[#0050AA]" />
                      {vacancy.employment}
                    </span>
                  </div>
                </div>

                {/* Описание */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-[#0A1628] mb-4">
                    Описание вакансии
                  </h2>
                  <p className="text-[#3A5070] leading-relaxed mb-4">
                    {vacancy.description}
                  </p>
                  <p className="text-[#3A5070] leading-relaxed">
                    Мы предлагаем стабильную работу в быстрорастущей компании.
                    Коллектив профессионалов, современный офис, конкурентная заработная плата.
                  </p>
                </div>

                {/* Требования */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-[#0A1628] mb-4">
                    Требования
                  </h2>
                  <ul className="space-y-2.5">
                    {[
                      `Опыт работы: ${vacancy.experience}`,
                      "Высшее или среднее профессиональное образование",
                      "Ответственность, коммуникабельность, обучаемость",
                      "Готовность к работе в команде",
                    ].map((req) => (
                      <li key={req} className="flex items-start gap-2.5 text-sm text-[#3A5070]">
                        <CheckCircle2 className="h-4 w-4 text-[#0050AA] mt-0.5 shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Условия */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-[#0A1628] mb-4">
                    Условия работы
                  </h2>
                  <ul className="space-y-2.5">
                    {[
                      `Заработная плата: ${vacancy.salary}`,
                      `Занятость: ${vacancy.employment}`,
                      "Официальное оформление по ТК РФ",
                      "Социальный пакет: ДМС, оплачиваемый отпуск",
                      "Корпоративное обучение и развитие",
                    ].map((cond) => (
                      <li key={cond} className="flex items-start gap-2.5 text-sm text-[#3A5070]">
                        <CheckCircle2 className="h-4 w-4 text-[#0050AA] mt-0.5 shrink-0" />
                        {cond}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Боковая панель */}
              <div className="space-y-4">
                {/* Карточка компании */}
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EBF3FF] text-[#0050AA] font-bold text-lg">
                      {vacancy.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#0A1628]">
                        {vacancy.company}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-[#7A96B4]">
                        <Building2 className="h-3 w-3" />
                        Работодатель
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-[#3A5070]">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-[#0050AA]" />
                      {vacancy.location}
                    </div>
                  </div>
                </div>

                {/* Действия */}
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm space-y-3">
                  <Button size="lg" className="w-full">
                    Откликнуться на вакансию
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <Bookmark className="h-4 w-4" />
                    Сохранить
                  </Button>
                  <Button variant="ghost" size="lg" className="w-full">
                    <Share2 className="h-4 w-4" />
                    Поделиться
                  </Button>
                </div>

                {/* Помощь */}
                <div className="rounded-2xl bg-[#F4F7FB] border border-[#5AB4E6] p-5">
                  <h3 className="text-sm font-semibold text-[#0A1628] mb-2">
                    Нужна помощь?
                  </h3>
                  <p className="text-xs text-[#3A5070] mb-3 leading-relaxed">
                    Специалисты ЦЗН помогут подготовить резюме и пройти собеседование
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/appointment">Записаться на консультацию</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Похожие вакансии */}
        <section className="py-12 md:py-16 bg-[#F4F7FB]">
          <div className="container">
            <h2 className="text-2xl font-bold text-[#0A1628] mb-8">
              Похожие вакансии
            </h2>
            <div className="space-y-4">
              {related.map((v, i) => (
                <VacancyCard key={v.id} vacancy={v} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
