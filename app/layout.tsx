import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Портфолио разработчика",
  description: "Персональное портфолио (визитная карточка) разработчика",
  keywords: ["разработчик", "портфолио", "frontend", "React", "Next.js"],
  authors: [{ name: "Developer" }],
  openGraph: {
    title: "Портфолио разработчика",
    description: "Персональное портфолио (визитная карточка) разработчика",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
