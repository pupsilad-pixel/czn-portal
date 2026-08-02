"use client";

import { useState } from "react";
import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { SectionHeader } from "@/shared/ui/section-header";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Search, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "Как встать на учёт в центре занятости?",
    answer:
      "Для постановки на учёт необходимо подать заявление через портал Госуслуг или лично посетить ближайший центр занятости. При себе нужно иметь паспорт, трудовую книжку, документы об образовании и справку о среднем заработке за последние 3 месяца.",
    category: "Постановка на учёт",
  },
  {
    question: "Какой размер пособия по безработице в 2025 году?",
    answer:
      "Минимальный размер пособия по безработице в 2025 году составляет 1 800 рублей, максимальный — 16 000 рублей. Конкретный размер зависит от стажа работы и среднего заработка за последние 3 месяца перед увольнением.",
    category: "Пособия",
  },
  {
    question: "Могу ли я пройти бесплатное обучение?",
    answer:
      "Да, граждане, зарегистрированные в центре занятости, могут пройти бесплатное профессиональное обучение или повышение квалификации по направлению ЦЗН. Программы обучения ориентированы на востребованные на рынке труда специальности.",
    category: "Обучение",
  },
  {
    question: "Как получить субсидию на открытие своего дела?",
    answer:
      "Для получения субсидии на самозанятость необходимо: встать на учёт в ЦЗН, пройти обучение основам предпринимательства, разработать бизнес-план и подать заявку. Максимальный размер субсидии — 350 000 рублей.",
    category: "Самозанятость",
  },
  {
    question: "Сколько времени я могу состоять на учёте?",
    answer:
      "Граждане могут состоять на учёте в центре занятости до момента трудоустройства. Пособие по безработице выплачивается до 6 месяцев в течение 12 месяцев.",
    category: "Постановка на учёт",
  },
  {
    question: "Как работодателю разместить вакансию?",
    answer:
      "Работодатели могут разместить вакансию через личный кабинет на портале ЦЗН РТ, отправить по электронной почте или лично обратиться в центр занятости. Размещение вакансий бесплатное.",
    category: "Для работодателей",
  },
  {
    question: "Какие документы нужны для регистрации безработного?",
    answer:
      "Необходимые документы: паспорт гражданина РФ, трудовая книжка (при наличии), документы об образовании, СНИЛС, справка о среднем заработке за последние 3 месяца работы, ИНН.",
    category: "Документы",
  },
  {
    question: "Можно ли отказаться от предложенной работы?",
    answer:
      "Можно, но не более двух раз. После двух отказов от подходящей работы без уважительной причины гражданин снимается с учёта и лишается пособия по безработице.",
    category: "Трудоустройство",
  },
  {
    question: "Как получить направление на медосмотр?",
    answer:
      "Направление на медосмотр выдаётся специалистом центра занятости при необходимости прохождения медицинского освидетельствования для трудоустройства на определённые должности.",
    category: "Трудоустройство",
  },
  {
    question: "Какие льготы предусмотрены для молодых специалистов?",
    answer:
      "Для выпускников учебных заведений предусмотрены программы временной занятости, стажировки, адаптационные курсы и содействие в первичном трудоустройстве с государственной поддержкой работодателей.",
    category: "Для молодёжи",
  },
];

const categories = [
  "Все",
  "Постановка на учёт",
  "Пособия",
  "Обучение",
  "Самозанятость",
  "Для работодателей",
  "Трудоустройство",
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = faqData.filter((item) => {
    const matchesCategory =
      activeCategory === "Все" || item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#F4F7FB] to-white py-8 md:py-12">
          <div className="container max-w-4xl">
            <Breadcrumbs items={[{ title: "Вопросы и ответы" }]} className="mb-6" />
            <SectionHeader
              title="Часто задаваемые вопросы"
              description="Ответы на самые популярные вопросы о работе центра занятости"
              className="mb-8"
            />

            {/* Поиск */}
            <div className="relative">
              <Input
                placeholder="Поиск по вопросам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 pr-12"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="h-5 w-5 text-[#7A96B4]" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container max-w-4xl">
            {/* Фильтр по категориям */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                    activeCategory === cat
                      ? "bg-[#0050AA] text-white shadow-sm"
                      : "bg-[#F4F7FB] text-[#3A5070] hover:bg-[#EBF3FF] hover:text-[#0050AA]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Список вопросов */}
            {filtered.length > 0 ? (
              <div className="space-y-3">
                {filtered.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[#F4F7FB]/30 transition-colors"
                    >
                      <span className="text-sm md:text-base font-semibold text-[#0A1628]">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-[#0050AA] transition-transform shrink-0",
                          openIndex === index && "rotate-180"
                        )}
                      />
                    </button>
                    {openIndex === index && (
                      <div className="px-5 pb-5">
                        <div className="pt-3 border-t border-gray-100">
                          <p className="text-sm text-[#3A5070] leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-[#7A96B4] mb-4">
                  По вашему запросу ничего не найдено
                </p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Сбросить поиск
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA — Не нашли ответ */}
        <section className="py-12 md:py-16 bg-[#F4F7FB]">
          <div className="container max-w-4xl">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
              <h2 className="text-2xl font-bold text-[#0A1628] mb-3">
                Не нашли ответ на свой вопрос?
              </h2>
              <p className="text-[#3A5070] mb-6 max-w-xl mx-auto">
                Свяжитесь с нами по телефону горячей линии или отправьте вопрос на
                электронную почту
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg">
                  <a href="tel:88001234567">
                    <Phone className="h-4 w-4" />
                    8 800 123-45-67
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="mailto:info@czn-rt.ru">
                    <Mail className="h-4 w-4" />
                    info@czn-rt.ru
                  </a>
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
