import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AssistantWidget } from "@/widgets/assistant-widget/assistant-widget";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geist-sans",
  display: "swap",
});

// === Viewport ===
// Явная конфигурация мета-тега viewport обеспечивает корректное
// масштабирование на мобильных устройствах (iOS Safari/Android Chrome).
// Без этого тега страница отображается как на 980px и уменьшается,
// из-за чего медиа-запросы работают некорректно.
//
// Поля:
// - width=device-width: ширина равна ширине устройства (не 980px)
// - initialScale=1: начальный масштаб 100% (без зума)
// - maximumScale=5: разрешаем zoom до 5x (accessibility, WCAG)
// - userScalable=true: пользователь может масштабировать (accessibility)
// - themeColor: цвет адресной строки на мобильных (брендовый синий)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0050AA",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Центр занятости населения Республики Татарстан | ЦЗН РТ",
  description:
    "Официальный портал Центра занятости населения Республики Татарстан. Поиск работы, подбор персонала, профессиональное обучение, государственная поддержка.",
  keywords: [
    "работа в Татарстане",
    "вакансии Казань",
    "центр занятости",
    "поиск работы РТ",
    "трудоустройство",
    "ЦЗН",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ЦЗН РТ",
    title: "Центр занятости населения Республики Татарстан",
    description:
      "Помогаем найти работу и подобрать квалифицированных сотрудников",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="antialiased">
        {children}
        <AssistantWidget />
      </body>
    </html>
  );
}
