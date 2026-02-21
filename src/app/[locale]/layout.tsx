import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GTProvider } from "gt-next";
import { getLocale } from "gt-next/server";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const titles: Record<string, string> = {
    en: "Variable Components | gt-next Example",
    es: "Componentes de Variable | Ejemplo de gt-next",
    fr: "Composants Variables | Exemple gt-next",
    ja: "変数コンポーネント | gt-next サンプル",
    ar: "مكونات المتغيرات | مثال gt-next",
  };
  const descriptions: Record<string, string> = {
    en: "Demonstrates Var, Num, Currency, and DateTime components with locale-aware formatting",
    es: "Demuestra los componentes Var, Num, Currency y DateTime con formato adaptado a la configuración regional",
    fr: "Démontre les composants Var, Num, Currency et DateTime avec un formatage adapté aux paramètres régionaux",
    ja: "Var、Num、Currency、DateTimeコンポーネントによるロケール対応フォーマットのデモ",
    ar: "يوضح مكونات Var وNum وCurrency وDateTime مع التنسيق المتوافق مع اللغة",
  };
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      locale,
    },
    alternates: {
      languages: {
        en: "/en",
        es: "/es",
        fr: "/fr",
        ja: "/ja",
        ar: "/ar",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={`${geist.variable} antialiased`}>
        <GTProvider>{children}</GTProvider>
      </body>
    </html>
  );
}
