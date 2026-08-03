"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SectionHeader } from "@/shared/ui/section-header";
import { cn } from "@/shared/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const faqGroups: { title: string; items: FaqItem[] }[] = [
  {
    title: "Поиск работы: куда обращаться?",
    items: [
      {
        question: "Какую помощь оказывает Центр занятости населения для эффективного трудоустройства?",
        answer:
          "Центр занятости помогает подобрать вакансии с учётом вашего опыта и пожеланий, организует бесплатное обучение и переподготовку, оказывает психологическую поддержку и консультирует по вопросам трудового законодательства.",
      },
    ],
  },
  {
    title: "Постановка на учёт",
    items: [
      {
        question: "Какие документы нужны для регистрации в качестве безработного?",
        answer:
          "Понадобятся паспорт, трудовая книжка (или сведения о трудовой деятельности), справка о среднем заработке за последние три месяца, а также документы об образовании и квалификации.",
      },
    ],
  },
  {
    title: "Выплаты и пособия",
    items: [
      {
        question: "Как получить статус безработного и пособие по безработице?",
        answer:
          "Подайте заявление на портале «Работа России» или обратитесь в ближайший ЦЗН с полным пакетом документов. Решение о признании безработным принимается в течение 11 дней.",
      },
    ],
  },
  {
    title: "Обучение и переподготовка",
    items: [
      {
        question: "Какие курсы и программы обучения доступны бесплатно?",
        answer:
          "Доступны курсы по востребованным профессиям с возможностью получения новой квалификации или повышения разряда. Длительность — от 1 недели до 6 месяцев. Во время обучения выплачивается стипендия.",
      },
    ],
  },
  {
    title: "Поддержка работодателей",
    items: [
      {
        question: "Как разместить вакансию на портале «Работа России»?",
        answer:
          "Зарегистрируйтесь на портале trudvsem.ru, заполните профиль работодателя и создайте вакансию. Публикация бесплатна и занимает несколько минут.",
      },
    ],
  },
];

function FaqAccordion({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-sm font-medium text-[#0050AA] hover:text-[#003D82] transition-colors">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-[#0050AA] transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="pb-4 pr-6 text-sm text-[#3A5070] leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <h2 className="text-2xl font-bold text-[#0A1628] md:text-3xl lg:text-4xl leading-tight">
            Частые вопросы
          </h2>
          <Link
            href="/faq"
            className="flex items-center gap-1.5 text-sm font-medium text-[#0050AA] hover:text-[#003D82] transition-colors shrink-0"
          >
            Все вопросы
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Левая колонка — группы вопросов */}
          <div className="lg:col-span-2 space-y-8">
            {faqGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-base font-semibold text-[#0A1628] mb-2">
                  {group.title}
                </h3>
                <div className="border-t border-gray-200">
                  {group.items.map((item, index) => (
                    <FaqAccordion key={index} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Правая колонка — навигация по категориям */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 lg:sticky lg:top-24">
              <h3 className="text-sm font-semibold text-[#0A1628] mb-4">
                Категории вопросов
              </h3>
              <ul className="space-y-3">
                {faqGroups.map((group) => (
                  <li key={group.title}>
                    <a
                      href="#"
                      className="block text-sm text-[#0050AA] hover:text-[#003D82] hover:underline transition-colors leading-snug"
                    >
                      {group.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm font-semibold text-[#0A1628] mb-2">
                  Не нашли ответ на свой вопрос?
                </p>
                <p className="text-sm text-[#3A5070] leading-relaxed mb-4">
                  Можете обратиться в электронную приёмную центра «Моя работа»
                </p>
                <Link
                  href="/appeals"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0050AA] hover:text-[#003D82] transition-colors"
                >
                  Подать обращение
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
