import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { SectionHeader } from "@/shared/ui/section-header";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import {
  Search, UserCheck, GraduationCap, Briefcase, Accessibility, Heart,
  Users, Plus, BadgeDollarSign, Calendar, FileSignature, ClipboardList,
  LucideIcon, Clock, FileText, ArrowRight,
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  time: string;
  online: boolean;
  category: "citizens" | "employers";
}

const allServices: ServiceItem[] = [
  {
    title: "Постановка на учёт в качестве безработного",
    description: "Регистрация граждан, ищущих работу, с последующим назначением пособия",
    icon: UserCheck,
    href: "/registration",
    time: "10 рабочих дней",
    online: true,
    category: "citizens",
  },
  {
    title: "Назначение пособия по безработице",
    description: "Принятие решения о назначении пособия зарегистрированным безработным",
    icon: BadgeDollarSign,
    href: "/unemployment-benefit",
    time: "11 рабочих дней",
    online: true,
    category: "citizens",
  },
  {
    title: "Направление на профессиональное обучение",
    description: "Организация профессиональной подготовки по востребованным специальностям",
    icon: GraduationCap,
    href: "/training",
    time: "1 рабочий день",
    online: false,
    category: "citizens",
  },
  {
    title: "Содействие самозанятости",
    description: "Оказание государственной услуги по самозанятости и открытию бизнеса",
    icon: Briefcase,
    href: "/self-employment",
    time: "30 рабочих дней",
    online: true,
    category: "citizens",
  },
  {
    title: "Психологическая поддержка безработных",
    description: "Консультации психолога для граждан, испытывающих трудности с занятостью",
    icon: Heart,
    href: "/psychological-support",
    time: "По записи",
    online: false,
    category: "citizens",
  },
  {
    title: "Профориентация",
    description: "Помощь в выборе профессии с учётом склонностей и рынка труда",
    icon: Search,
    href: "/career-guidance",
    time: "По записи",
    online: true,
    category: "citizens",
  },
  {
    title: "Квотирование рабочих мест",
    description: "Организация квотирования рабочих мест для трудоустройства инвалидов",
    icon: Accessibility,
    href: "/quotas",
    time: "1 рабочий день",
    online: true,
    category: "employers",
  },
  {
    title: "Содействие в подборе кадров",
    description: "Бесплатная помощь работодателям в поиске квалифицированного персонала",
    icon: Users,
    href: "/recruitment",
    time: "По запросу",
    online: false,
    category: "employers",
  },
  {
    title: "Субсидии за трудоустройство",
    description: "Назначение субсидий работодателям, принявшим на работу безработных граждан",
    icon: BadgeDollarSign,
    href: "/subsidies",
    time: "10 рабочих дней",
    online: true,
    category: "employers",
  },
  {
    title: "Регистрация вакансий",
    description: "Размещение актуальных вакансий в базе данных ЦЗН",
    icon: Plus,
    href: "/post-vacancy",
    time: "1 рабочий день",
    online: true,
    category: "employers",
  },
  {
    title: "Регистрация коллективных договоров",
    description: "Уведомительная регистрация коллективных договоров работодателей",
    icon: FileSignature,
    href: "/collective-agreements",
    time: "7 рабочих дней",
    online: false,
    category: "employers",
  },
  {
    title: "Приём сведений о сокращении",
    description: "Информирование о высвобождении работников и сокращении штата",
    icon: ClipboardList,
    href: "/info-submission",
    time: "1 рабочий день",
    online: true,
    category: "employers",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#F4F7FB] to-white py-8 md:py-14">
          <div className="container">
            <Breadcrumbs items={[{ title: "Услуги" }]} className="mb-6" />
            <SectionHeader
              title="Государственные услуги"
              description="Полный перечень услуг ЦЗН РТ — часть из них доступна онлайн"
              className="max-w-2xl"
            />
          </div>
        </section>

        {/* Для граждан */}
        <section className="py-10 md:py-14">
          <div className="container">
            <h2 className="text-2xl font-bold text-[#0A1628] mb-8 flex items-center gap-3">
              Для граждан
              <Badge variant="default">{allServices.filter(s => s.category === "citizens").length} услуг</Badge>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allServices
                .filter((s) => s.category === "citizens")
                .map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-transparent hover:-translate-y-0.5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EBF3FF] text-[#0050AA] group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-[#0A1628] group-hover:text-[#0050AA] transition-colors mb-1 line-clamp-1">
                          {service.title}
                        </h3>
                        <p className="text-xs text-[#3A5070] line-clamp-1 mb-3">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-xs text-[#7A96B4]">
                            <Clock className="h-3.5 w-3.5" />
                            {service.time}
                          </span>
                          {service.online && (
                            <Badge variant="default">Онлайн</Badge>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>

        {/* Для работодателей */}
        <section className="py-10 md:py-14 bg-[#F4F7FB]">
          <div className="container">
            <h2 className="text-2xl font-bold text-[#0A1628] mb-8 flex items-center gap-3">
              Для работодателей
              <Badge variant="accent">{allServices.filter(s => s.category === "employers").length} услуг</Badge>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allServices
                .filter((s) => s.category === "employers")
                .map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-transparent hover:-translate-y-0.5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-[#0A1628] group-hover:text-[#0050AA] transition-colors mb-1 line-clamp-1">
                          {service.title}
                        </h3>
                        <p className="text-xs text-[#3A5070] line-clamp-1 mb-3">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-xs text-[#7A96B4]">
                            <Clock className="h-3.5 w-3.5" />
                            {service.time}
                          </span>
                          {service.online && (
                            <Badge variant="default">Онлайн</Badge>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-20">
          <div className="container">
            <div className="rounded-3xl bg-[#0A1628] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Нужна консультация?
                </h2>
                <p className="text-white/70 max-w-lg">
                  Наши специалисты помогут выбрать нужную услугу и сопроводят на
                  каждом этапе
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button asChild variant="white" size="lg">
                  <Link href="/appointment">Записаться на приём</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                  <a href="tel:88001234567">Позвонить</a>
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
