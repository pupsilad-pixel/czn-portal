import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { SectionHeader } from "@/shared/ui/section-header";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Search, SlidersHorizontal, Plus } from "lucide-react";
import { Badge } from "@/shared/ui/badge";
import Link from "next/link";

// Моковые резюме
const mockResumes = [
  {
    id: "1",
    name: "Алексей Петров",
    position: "Frontend-разработчик",
    experience: "3 года опыта",
    skills: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    salary: "от 120 000 ₽",
    location: "Казань",
    age: "27 лет",
  },
  {
    id: "2",
    name: "Мария Иванова",
    position: "Менеджер по продажам",
    experience: "5 лет опыта",
    skills: ["B2B продажи", "CRM", "Переговоры", "Управление клиентами"],
    salary: "от 80 000 ₽",
    location: "Казань",
    age: "32 года",
  },
  {
    id: "3",
    name: "Дмитрий Смирнов",
    position: "Водитель категории C, E",
    experience: "10 лет опыта",
    skills: ["Категории C, E", "Межгород", "Логистика"],
    salary: "от 60 000 ₽",
    location: "Набережные Челны",
    age: "38 лет",
  },
  {
    id: "4",
    name: "Елена Козлова",
    position: "Бухгалтер",
    experience: "7 лет опыта",
    skills: ["1С:Бухгалтерия", "Налоги", "Отчётность", "Первичка"],
    salary: "от 55 000 ₽",
    location: "Казань",
    age: "35 лет",
  },
];

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Верхний блок */}
        <section className="bg-gradient-to-br from-[#F4F7FB] to-white py-8 md:py-12">
          <div className="container">
            <Breadcrumbs items={[{ title: "Подбор персонала" }]} className="mb-6" />
            <SectionHeader
              title="Подбор персонала"
              description="База резюме квалифицированных специалистов, готовых к работе"
              className="mb-8"
            />

            {/* Действия */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button asChild size="lg" className="sm:w-auto">
                <Link href="/post-vacancy">
                  <Plus className="h-4 w-4" />
                  Разместить вакансию
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="sm:w-auto">
                <Link href="/services">Заказать подбор</Link>
              </Button>
            </div>

            {/* Поиск и фильтры */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Input
                  placeholder="Должность, навыки или ключевые слова..."
                  className="h-12 pr-12"
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1 h-10 w-10"
                  aria-label="Искать"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" size="lg" className="md:w-auto">
                <SlidersHorizontal className="h-4 w-4" />
                Фильтры
              </Button>
            </div>

            {/* Популярные специальности */}
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="text-sm text-[#7A96B4]">Популярные:</span>
              {["Разработчики", "Продавцы", "Логисты", "Менеджеры", "Специалисты"].map(
                (cat) => (
                  <Badge key={cat} variant="outline" className="cursor-pointer">
                    {cat}
                  </Badge>
                )
              )}
            </div>
          </div>
        </section>

        {/* Список резюме */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-[#3A5070]">
                Найдено <span className="font-semibold text-[#0050AA]">2 847</span>{" "}
                резюме
              </p>
              <select className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm text-[#3A5070] outline-none focus:border-[#0050AA] focus:ring-2 focus:ring-[#0050AA]/20 cursor-pointer">
                <option>По дате</option>
                <option>По опыту</option>
                <option>По релевантности</option>
              </select>
            </div>

            <div className="space-y-4">
              {mockResumes.map((resume, index) => (
                <article
                  key={resume.id}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-transparent hover:-translate-y-0.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      {/* Аватар */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#EBF3FF] to-[#E8EFF8] text-[#0050AA] font-bold text-lg">
                        {resume.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-lg font-semibold text-[#0A1628] mb-1">
                          {resume.position}
                        </h3>
                        <p className="text-sm text-[#3A5070]">
                          {resume.age} • {resume.experience}
                        </p>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-[#0050AA] shrink-0">
                      {resume.salary}
                    </div>
                  </div>

                  {/* Навыки */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resume.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Действия */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-[#7A96B4]">{resume.location}</span>
                    <Button variant="ghost" size="sm">
                      Посмотреть резюме
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Пагинация */}
            <div className="flex justify-center gap-2 mt-10">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={
                    page === 1
                      ? "flex h-10 w-10 items-center justify-center rounded-xl bg-[#0050AA] text-white font-medium"
                      : "flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-gray-200 text-[#3A5070] hover:border-[#0050AA] hover:text-[#0050AA] transition-colors"
                  }
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
