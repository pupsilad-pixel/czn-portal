import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import {
  User,
  FileText,
  Bell,
  Settings,
  LogOut,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Clock,
  Calendar,
} from "lucide-react";
import Link from "next/link";

// Макет личного кабинета (без функционала)
export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#F4F7FB] to-white py-8 md:py-12">
          <div className="container">
            <Breadcrumbs items={[{ title: "Личный кабинет" }]} className="mb-6" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EBF3FF] to-[#E8EFF8] text-[#0050AA] font-bold text-2xl">
                  АП
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[#0A1628]">
                    Алексей Петров
                  </h1>
                  <p className="text-sm text-[#3A5070]">ID: 12345678</p>
                </div>
              </div>
              <Badge variant="default">Активен</Badge>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Боковое меню */}
              <aside className="space-y-2">
                {[
                  { icon: User, label: "Личные данные", active: true },
                  { icon: FileText, label: "Мои документы", active: false },
                  { icon: Briefcase, label: "Отклики на вакансии", active: false },
                  { icon: GraduationCap, label: "Моё обучение", active: false },
                  { icon: Bell, label: "Уведомления", active: false },
                  { icon: Settings, label: "Настройки", active: false },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      className={
                        item.active
                          ? "flex w-full items-center gap-3 rounded-xl bg-[#F4F7FB] px-4 py-3 text-sm font-medium text-[#0050AA]"
                          : "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#3A5070] hover:bg-[#F4F7FB] hover:text-[#0050AA] transition-colors"
                      }
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </button>
                  );
                })}
                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors mt-4">
                  <LogOut className="h-4 w-4" />
                  Выйти
                </button>
              </aside>

              {/* Основной контент */}
              <div className="lg:col-span-3 space-y-6">
                {/* Статус учёта */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-lg font-semibold text-[#0A1628] mb-1">
                        Статус учёта
                      </h2>
                      <p className="text-sm text-[#3A5070]">
                        Вы зарегистрированы в качестве безработного
                      </p>
                    </div>
                    <Badge variant="default">Активен</Badge>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="rounded-xl bg-[#F4F7FB] p-4">
                      <div className="text-xs text-[#7A96B4] mb-1">
                        Дата регистрации
                      </div>
                      <div className="text-sm font-semibold text-[#0A1628]">
                        15 января 2025
                      </div>
                    </div>
                    <div className="rounded-xl bg-[#F4F7FB] p-4">
                      <div className="text-xs text-[#7A96B4] mb-1">Пособие</div>
                      <div className="text-sm font-semibold text-[#0A1628]">
                        12 130 ₽
                      </div>
                    </div>
                    <div className="rounded-xl bg-[#F4F7FB] p-4">
                      <div className="text-xs text-[#7A96B4] mb-1">Специалист</div>
                      <div className="text-sm font-semibold text-[#0A1628]">
                        Иванова Е.С.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Подходящие вакансии */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-[#0A1628]">
                      Подходящие вакансии
                    </h2>
                    <Link
                      href="/jobs"
                      className="text-sm font-medium text-[#0050AA] hover:underline"
                    >
                      Все вакансии
                    </Link>
                  </div>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Frontend-разработчик",
                        company: "ООО «Технологии»",
                        salary: "от 120 000 ₽",
                      },
                      {
                        title: "Middle React Developer",
                        company: "АО «Иннополис»",
                        salary: "от 150 000 ₽",
                      },
                    ].map((job, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 p-4 hover:bg-[#F4F7FB] transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-[#0A1628] mb-0.5">
                            {job.title}
                          </h3>
                          <p className="text-xs text-[#3A5070]">{job.company}</p>
                        </div>
                        <div className="text-sm font-bold text-[#0050AA] shrink-0">
                          {job.salary}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Мои заявки */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-[#0A1628] mb-4">
                    Мои заявки
                  </h2>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Направление на обучение",
                        status: "В обработке",
                        date: "20 июля 2025",
                        icon: Clock,
                        color: "accent",
                      },
                      {
                        title: "Заявка на субсидию",
                        status: "Одобрена",
                        date: "15 июля 2025",
                        icon: CheckCircle2,
                        color: "default",
                      },
                    ].map((request, i) => {
                      const Icon = request.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-start gap-4 rounded-xl border border-gray-100 p-4"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EBF3FF] text-[#0050AA]">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-[#0A1628] mb-1">
                              {request.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2">
                              <Badge variant={request.color as any}>
                                {request.status}
                              </Badge>
                              <span className="text-xs text-[#7A96B4]">
                                {request.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Ближайшие события */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-[#0A1628] mb-4">
                    Ближайшие события
                  </h2>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Ярмарка вакансий",
                        date: "15 сентября 2025",
                        location: "Казань Экспо",
                      },
                      {
                        title: "Встреча со специалистом",
                        date: "25 июля 2025, 10:00",
                        location: "ЦЗН, кабинет 105",
                      },
                    ].map((event, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 rounded-xl border border-gray-100 p-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-[#0A1628] mb-1">
                            {event.title}
                          </h3>
                          <p className="text-xs text-[#3A5070]">{event.date}</p>
                          <p className="text-xs text-[#7A96B4]">{event.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
