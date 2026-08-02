import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { SectionHeader } from "@/shared/ui/section-header";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { VacancyCard } from "@/entities/vacancy-card/vacancy-card";
import { Search, SlidersHorizontal } from "lucide-react";
import { mockVacancies } from "@/shared/constants/mock-vacancies";
import { Badge } from "@/shared/ui/badge";

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Верхний блок */}
        <section className="bg-gradient-to-br from-[#F4F7FB] to-white py-8 md:py-12">
          <div className="container">
            <Breadcrumbs items={[{ title: "Поиск работы" }]} className="mb-6" />
            <SectionHeader
              title="Поиск работы"
              description="Найдите работу мечты среди 5 000+ актуальных вакансий в Республике Татарстан"
              className="mb-8"
            />

            {/* Поиск и фильтры */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Input
                  placeholder="Должность, навыки или компания..."
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

            {/* Популярные категории */}
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="text-sm text-[#7A96B4]">Популярные:</span>
              {["ИТ-специалисты", "Продавцы", "Водители", "Бухгалтеры", "Менеджеры"].map(
                (cat) => (
                  <Badge key={cat} variant="outline" className="cursor-pointer">
                    {cat}
                  </Badge>
                )
              )}
            </div>
          </div>
        </section>

        {/* Список вакансий */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-[#3A5070]">
                Найдено <span className="font-semibold text-[#0050AA]">5 243</span>{" "}
                вакансии
              </p>
              <select className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm text-[#3A5070] outline-none focus:border-[#0050AA] focus:ring-2 focus:ring-[#0050AA]/20 cursor-pointer">
                <option>По дате</option>
                <option>По зарплате</option>
                <option>По релевантности</option>
              </select>
            </div>

            <div className="space-y-4">
              {mockVacancies.map((vacancy, index) => (
                <VacancyCard key={vacancy.id} vacancy={vacancy} index={index} />
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
