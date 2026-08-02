import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { Badge } from "@/shared/ui/badge";
import { Calendar, Eye, Share2 } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { NewsCard } from "@/entities/news-card/news-card";
import { mockNews } from "@/shared/constants/mock-news";

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  // В реальном приложении данные будут браться из API
  const news = mockNews[0];
  const relatedNews = mockNews.slice(1, 4);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-8 md:py-12">
          <div className="container max-w-4xl">
            <Breadcrumbs
              items={[{ title: "Новости", href: "/news" }, { title: news.title }]}
              className="mb-6"
            />

            {/* Категория */}
            <div className="mb-4">
              <Badge variant="default">{news.category}</Badge>
            </div>

            {/* Заголовок */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight mb-4">
              {news.title}
            </h1>

            {/* Мета-информация */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#7A96B4] mb-8">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {news.date}
              </span>
              {news.views && (
                <span className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  {news.views.toLocaleString("ru-RU")} просмотров
                </span>
              )}
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="h-4 w-4" />
                Поделиться
              </Button>
            </div>

            {/* Изображение */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
              <img
                src={news.image}
                alt={news.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Содержание */}
            <article className="prose prose-lg max-w-none">
              <p className="text-lg text-[#3A5070] leading-relaxed">
                {news.excerpt}
              </p>

              <h2>О мероприятии</h2>
              <p>
                Ярмарка вакансий «Работа в Татарстане — 2025» станет крупнейшим событием
                на рынке труда республики за последние годы. Организаторы ожидают участие
                более 5 000 работодателей из различных отраслей экономики.
              </p>

              <p>
                Для посетителей будут доступны более 3 500 открытых вакансий — от рабочих
                специальностей до руководящих должностей. Особое внимание уделяется
                востребованным на рынке профессиям: ИТ-специалистам, инженерам,
                медицинским работникам и специалистам сферы обслуживания.
              </p>

              <h2>Программа ярмарки</h2>
              <ul>
                <li>Прямые собеседования с работодателями</li>
                <li>Консультации специалистов по трудоустройству</li>
                <li>Мастер-классы по составлению резюме</li>
                <li>Презентации крупнейших компаний региона</li>
                <li>Профориентационное тестирование</li>
              </ul>

              <h2>Как принять участие</h2>
              <p>
                Регистрация на мероприятие доступна на официальном портале ЦЗН РТ.
                Участие бесплатное. Рекомендуется заранее подготовить резюме и взять с
                собой документы об образовании.
              </p>

              <p>
                Организатор мероприятия — Центр занятости населения Республики Татарстан
                при поддержке Министерства труда, занятости и социальной защиты РТ.
              </p>
            </article>

            {/* Действия */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="/events/1">Зарегистрироваться на мероприятие</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/news">Все новости</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Похожие новости */}
        <section className="py-12 md:py-16 bg-[#F4F7FB]">
          <div className="container">
            <h2 className="text-2xl font-bold text-[#0A1628] mb-8">Читайте также</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedNews.map((item, index) => (
                <NewsCard key={item.id} news={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
