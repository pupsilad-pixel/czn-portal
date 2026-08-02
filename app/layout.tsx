import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AssistantWidget } from "@/widgets/assistant-widget/assistant-widget";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geist-sans",
  display: "swap",
});

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
