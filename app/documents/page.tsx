import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { SectionHeader } from "@/shared/ui/section-header";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { FileText, Download, Eye } from "lucide-react";
import Link from "next/link";

interface Document {
  id: string;
  title: string;
  category: string;
  type: string;
  size: string;
  date: string;
}

const documents: Document[] = [
  {
    id: "1",
    title: "Административный регламент предоставления государственной услуги",
    category: "Нормативные документы",
    type: "PDF",
    size: "2.4 МБ",
    date: "15.01.2025",
  },
  {
    id: "2",
    title: "Порядок регистрации граждан в целях поиска подходящей работы",
    category: "Нормативные документы",
    type: "PDF",
    size: "1.8 МБ",
    date: "10.01.2025",
  },
  {
    id: "3",
    title: "Форма заявления о предоставлении государственной услуги",
    category: "Бланки и формы",
    type: "DOCX",
    size: "45 КБ",
    date: "01.12.2024",
  },
  {
    id: "4",
    title: "Анкета соискателя",
    category: "Бланки и формы",
    type: "PDF",
    size: "120 КБ",
    date: "01.12.2024",
  },
  {
    id: "5",
    title: "Форма резюме для граждан",
    category: "Бланки и формы",
    type: "DOCX",
    size: "38 КБ",
    date: "01.12.2024",
  },
  {
    id: "6",
    title: "Положение о порядке предоставления субсидий на открытие бизнеса",
    category: "Нормативные документы",
    type: "PDF",
    size: "3.1 МБ",
    date: "20.11.2024",
  },
  {
    id: "7",
    title: "Методические рекомендации по составлению резюме",
    category: "Методические материалы",
    type: "PDF",
    size: "850 КБ",
    date: "15.11.2024",
  },
  {
    id: "8",
    title: "Руководство по прохождению собеседования",
    category: "Методические материалы",
    type: "PDF",
    size: "1.2 МБ",
    date: "10.11.2024",
  },
  {
    id: "9",
    title: "Обзор рынка труда РТ — II квартал 2025",
    category: "Аналитика",
    type: "PDF",
    size: "4.5 МБ",
    date: "01.07.2025",
  },
  {
    id: "10",
    title: "Статистика трудоустройства — июнь 2025",
    category: "Аналитика",
    type: "XLSX",
    size: "230 КБ",
    date: "28.06.2025",
  },
  {
    id: "11",
    title: "Закон РТ о занятости населения",
    category: "Законодательство",
    type: "PDF",
    size: "5.2 МБ",
    date: "01.01.2025",
  },
  {
    id: "12",
    title: "Трудовой кодекс Российской Федерации",
    category: "Законодательство",
    type: "PDF",
    size: "8.7 МБ",
    date: "01.01.2025",
  },
];

const categories = [
  "Все документы",
  "Нормативные документы",
  "Бланки и формы",
  "Методические материалы",
  "Аналитика",
  "Законодательство",
];

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#F4F7FB] to-white py-8 md:py-12">
          <div className="container">
            <Breadcrumbs items={[{ title: "Документы" }]} className="mb-6" />
            <SectionHeader
              title="Документы и материалы"
              description="Нормативные акты, бланки, методические материалы и аналитика"
            />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            {/* Категории */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat, index) => (
                <button
                  key={cat}
                  className={
                    index === 0
                      ? "rounded-full px-5 py-2 text-sm font-medium bg-[#0050AA] text-white shadow-sm"
                      : "rounded-full px-5 py-2 text-sm font-medium bg-[#F4F7FB] text-[#3A5070] hover:bg-[#EBF3FF] hover:text-[#0050AA] transition-all"
                  }
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Список документов */}
            <div className="space-y-3">
              {documents.map((doc) => (
                <article
                  key={doc.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-all"
                >
                  {/* Иконка */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EBF3FF] text-[#0050AA]">
                    <FileText className="h-6 w-6" />
                  </div>

                  {/* Информация */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-[#0A1628] mb-1 line-clamp-1">
                      {doc.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{doc.category}</Badge>
                      <span className="text-xs text-[#7A96B4]">
                        {doc.type} • {doc.size} • {doc.date}
                      </span>
                    </div>
                  </div>

                  {/* Действия */}
                  <div className="flex items-center gap-2 shrink-0">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                      Просмотр
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                      Скачать
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Пагинация */}
            <div className="flex justify-center gap-2 mt-10">
              {[1, 2, 3].map((page) => (
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

        {/* Информационный блок */}
        <section className="py-12 md:py-16 bg-[#F4F7FB]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-[#0A1628] mb-3">
                Нужна помощь с документами?
              </h2>
              <p className="text-[#3A5070] mb-6">
                Наши специалисты помогут правильно заполнить бланки и ответят на все
                вопросы по документам
              </p>
              <Button asChild size="lg">
                <Link href="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
