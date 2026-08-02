import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { SectionHeader } from "@/shared/ui/section-header";
import { EventCard } from "@/entities/event-card/event-card";
import { mockEvents } from "@/shared/constants/mock-events";

// Расширенный список событий с дополнительными записями
const allEvents = [
  ...mockEvents,
  {
    id: "5",
    title: "Онлайн-вебинар: как успешно пройти собеседование",
    description:
      "Советы HR-специалистов: как произвести первое впечатление, ответить на сложные вопросы и успешно пройти отбор в крупные компании.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    date: "10 сентября 2025",
    location: "Онлайн (Zoom)",
    type: "Вебинар",
  },
  {
    id: "6",
    title: "День карьеры в Казанском федеральном университете",
    description:
      "Встреча работодателей со студентами и выпускниками КФУ. Стажировки, практики и вакансии для молодых специалистов.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    date: "3 сентября 2025",
    location: "КФУ, Главный корпус, г. Казань",
    type: "Открытые двери",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#F4F7FB] to-white py-8 md:py-12">
          <div className="container">
            <Breadcrumbs items={[{ title: "События" }]} className="mb-6" />
            <SectionHeader
              title="События и мероприятия"
              description="Ярмарки вакансий, семинары, мастер-классы и карьерные встречи"
            />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            {/* Фильтр по типу */}
            <div className="flex flex-wrap gap-2 mb-10">
              {["Все", "Ярмарка вакансий", "Мастер-класс", "Семинар", "Открытые двери", "Вебинар"].map(
                (f, i) => (
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
                )
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {allEvents.map((event, index) => (
                <EventCard key={event.id} event={event as any} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
