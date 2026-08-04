import type { ProjectItem } from "@/shared/types";

export const mockProjects: ProjectItem[] = [
  {
    id: "1",
    title: "Содействие занятости",
    description:
      "Программа поддержки граждан в поиске работы: консультации, профориентация, содействие в трудоустройстве, субсидии работодателям.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    status: "active",
    participants: 12450,
  },
  {
    id: "2",
    title: "Профессиональное обучение",
    description:
      "Бесплатные программы переподготовки и повышения квалификации для безработных и ищущих работу граждан по востребованным специальностям.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    status: "active",
    participants: 8320,
  },
  {
    id: "3",
    title: "Молодёжная занятость",
    description:
      "Специальная программа для молодых специалистов: стажировки, временная занятость студентов, социальная адаптация выпускников.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
    status: "active",
    participants: 5634,
  },
  {
    id: "4",
    title: "Старт — помощь самозанятым",
    description:
      "Государственная поддержка самозанятых и индивидуальных предпринимателей: субсидии, консультации, обучение основам бизнеса.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80",
    status: "active",
    participants: 3890,
  },
  {
    id: "5",
    title: "Инклюзивная занятость",
    description:
      "Программа содействия занятости людей с инвалидностью: адаптация рабочих мест, специализированное обучение, сопровождение.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    status: "active",
    participants: 2145,
  },
  {
    id: "6",
    title: "Цифровые компетенции",
    description:
      "Программа цифровой переподготовки кадров: обучение востребованным ИТ-специальностям, работа с современными технологиями и инструментами.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    status: "completed",
    participants: 1567,
  },
];
