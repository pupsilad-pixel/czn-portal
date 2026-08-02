import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { SectionHeader } from "@/shared/ui/section-header";
import { ProjectCard } from "@/entities/project-card/project-card";
import { mockProjects } from "@/shared/constants/mock-projects";
import { Badge } from "@/shared/ui/badge";

const stats = [
  { value: "32 000+", label: "Участников программ" },
  { value: "6", label: "Активных программ" },
  { value: "1.2 млрд ₽", label: "Объём финансирования" },
  { value: "94%", label: "Успешное трудоустройство" },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#F4F7FB] to-white py-8 md:py-14">
          <div className="container">
            <Breadcrumbs items={[{ title: "Проекты" }]} className="mb-6" />
            <SectionHeader
              title="Государственные программы"
              description="Проекты содействия занятости и профессионального развития граждан Республики Татарстан"
              className="max-w-2xl mb-10"
            />

            {/* Статистика */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm"
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#0050AA] mb-1">
                    {s.value}
                  </div>
                  <div className="text-sm text-[#3A5070]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Фильтр и список */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex flex-wrap gap-2 mb-10">
              {["Все", "Активные", "Завершённые", "Планируются"].map((f, i) => (
                <button
                  key={f}
                  className={
                    i === 0
                      ? "rounded-full px-5 py-2 text-sm font-medium bg-[#0050AA] text-white shadow-sm"
                      : "rounded-full px-5 py-2 text-sm font-medium bg-[#F4F7FB] text-[#3A5070] hover:bg-[#EBF3FF] hover:text-[#0050AA] transition-all"
                  }
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {mockProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-[#F4F7FB]">
          <div className="container">
            <div className="rounded-3xl bg-[#0050AA] p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Хотите стать участником программы?
              </h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                Запишитесь на консультацию к специалисту и узнайте, какая программа
                подойдёт именно вам
              </p>
              <a
                href="/appointment"
                className="inline-flex items-center justify-center rounded-xl bg-white text-[#0050AA] font-semibold px-8 py-3 hover:bg-[#F4F7FB] transition-colors"
              >
                Записаться на консультацию
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
