export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">
          © {currentYear} Портфолио разработчика. Все права защищены.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Создано с использованием Next.js и Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
