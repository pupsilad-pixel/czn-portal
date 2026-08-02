import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { SectionHeader } from "@/shared/ui/section-header";
import { Mail, Phone, User } from "lucide-react";

const leadership = [
  {
    name: "Иванова Елена Сергеевна",
    position: "Директор ГКУ «ЦЗН РТ»",
    photo: "ES",
    phone: "+7 (843) 236-34-10",
    email: "ivanova@czn-rt.ru",
  },
  {
    name: "Петров Андрей Владимирович",
    position: "Заместитель директора по общим вопросам",
    photo: "AP",
    phone: "+7 (843) 236-34-11",
    email: "petrov@czn-rt.ru",
  },
  {
    name: "Сидорова Ольга Николаевна",
    position: "Заместитель директора по работе с гражданами",
    photo: "ON",
    phone: "+7 (843) 236-34-12",
    email: "sidorova@czn-rt.ru",
  },
  {
    name: "Кузнецов Дмитрий Игоревич",
    position: "Заместитель директора по работе с работодателями",
    photo: "DK",
    phone: "+7 (843) 236-34-13",
    email: "kuznetsov@czn-rt.ru",
  },
];

const departments = [
  {
    name: "Отдел содействия занятости населения",
    description:
      "Регистрация граждан в качестве безработных, назначение пособий, подбор подходящей работы",
    head: "Смирнова А.В.",
  },
  {
    name: "Отдел профессионального обучения",
    description:
      "Организация бесплатного обучения и переподготовки безработных граждан",
    head: "Морозов П.С.",
  },
  {
    name: "Отдел работы с работодателями",
    description:
      "Взаимодействие с работодателями, размещение вакансий, организация ярмарок",
    head: "Новикова Т.Л.",
  },
  {
    name: "Отдел содействия самозанятости",
    description:
      "Поддержка граждан в открытии собственного дела, выдача субсидий",
    head: "Федоров К.М.",
  },
  {
    name: "Отдел по работе с молодёжью",
    description:
      "Программы временной и постоянной занятости молодых специалистов",
    head: "Соколова М.И.",
  },
  {
    name: "Юридический отдел",
    description: "Правовое сопровождение деятельности, консультации граждан",
    head: "Волков А.Н.",
  },
  {
    name: "Отдел информационных технологий",
    description:
      "Поддержка и развитие IT-инфраструктуры, администрирование портала",
    head: "Лебедев И.В.",
  },
  {
    name: "Бухгалтерия",
    description: "Финансовое планирование и учёт, расчёт и выплата пособий",
    head: "Орлова Н.П.",
  },
];

export default function StructurePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#F4F7FB] to-white py-8 md:py-12">
          <div className="container">
            <Breadcrumbs items={[{ title: "Структура ЦЗН" }]} className="mb-6" />
            <SectionHeader
              title="Организационная структура"
              description="Руководство и структурные подразделения Центра занятости населения Республики Татарстан"
            />
          </div>
        </section>

        {/* Руководство */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-2xl font-bold text-[#0A1628] mb-8">Руководство</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {leadership.map((person) => (
                <article
                  key={person.email}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-all text-center"
                >
                  {/* Фото-заглушка */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#EBF3FF] to-[#E8EFF8] flex items-center justify-center text-[#0050AA] font-bold text-xl">
                    {person.photo}
                  </div>
                  <h3 className="text-sm font-semibold text-[#0A1628] mb-1">
                    {person.name}
                  </h3>
                  <p className="text-xs text-[#3A5070] mb-4 leading-relaxed">
                    {person.position}
                  </p>
                  <div className="space-y-2 text-xs">
                    <a
                      href={`tel:${person.phone.replace(/\D/g, "")}`}
                      className="flex items-center justify-center gap-1.5 text-[#3A5070] hover:text-[#0050AA] transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {person.phone}
                    </a>
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center justify-center gap-1.5 text-[#3A5070] hover:text-[#0050AA] transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      {person.email}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Структурные подразделения */}
        <section className="py-12 md:py-16 bg-[#F4F7FB]">
          <div className="container">
            <h2 className="text-2xl font-bold text-[#0A1628] mb-8">
              Структурные подразделения
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {departments.map((dept, index) => (
                <article
                  key={index}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EBF3FF] text-[#0050AA]">
                      <User className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-[#0A1628] mb-2">
                        {dept.name}
                      </h3>
                      <p className="text-xs text-[#3A5070] leading-relaxed mb-3">
                        {dept.description}
                      </p>
                      <div className="text-xs text-[#7A96B4]">
                        Руководитель: <span className="font-medium">{dept.head}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Документы */}
        <section className="py-12 md:py-16">
          <div className="container max-w-3xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#0A1628] mb-2">
                Учредительные документы
              </h2>
              <p className="text-[#3A5070]">
                Нормативно-правовые акты и регламентирующие документы
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Устав ГКУ «Центр занятости населения Республики Татарстан»",
                "Положение об организационной структуре",
                "Административный регламент",
              ].map((doc) => (
                <div
                  key={doc}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <span className="text-sm text-[#0A1628]">{doc}</span>
                  <button className="text-xs font-medium text-[#0050AA] hover:underline shrink-0">
                    Скачать PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
