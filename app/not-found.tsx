import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4F7FB] to-white flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* 404 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#0050AA] mb-2">404</h1>
          <div className="h-1 w-24 bg-[#0050AA] mx-auto rounded-full" />
        </div>

        {/* Текст */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-3">
          Страница не найдена
        </h2>
        <p className="text-[#3A5070] mb-8 leading-relaxed">
          К сожалению, запрашиваемая страница не существует или была удалена.
          Возможно, вы перешли по устаревшей ссылке или ошиблись при вводе адреса.
        </p>

        {/* Действия */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="h-4 w-4" />
              На главную
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/jobs">
              <Search className="h-4 w-4" />
              Найти работу
            </Link>
          </Button>
        </div>

        {/* Полезные ссылки */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-sm text-[#7A96B4] mb-3">Возможно, вы искали:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "Вакансии", href: "/jobs" },
              { label: "Услуги", href: "/services" },
              { label: "Новости", href: "/news" },
              { label: "Контакты", href: "/contacts" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#0050AA] hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
