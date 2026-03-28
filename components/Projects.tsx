const projects = [
  {
    title: "Интернет-магазин электроники",
    description: "Разработка полноценного интернет-магазина с каталогом товаров, корзиной и онлайн-оплатой",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "https://www.mvideo.ru/"
  },
  {
    title: "Сервис погоды",
    description: "Приложение для просмотра текущей погоды и прогноза на неделю в разных городах мира",
    technologies: ["React", "API", "CSS3", "JavaScript"],
    link: "https://www.gismeteo.ru/"
  },
  {
    title: "Менеджер задач",
    description: "Веб-приложение для управления личными и рабочими задачами с напоминаниями",
    technologies: ["React", "TypeScript", "Local Storage"],
    link: "https://trello.com/"
  },
  {
    title: "Кинопоиск",
    description: "Каталог фильмов и сериалов с рейтингами, отзывами и возможностью добавления в избранное",
    technologies: ["Next.js", "API", "Tailwind CSS"],
    link: "https://www.kinopoisk.ru/"
  },
  {
    title: "Крипто-трекер",
    description: "Мониторинг курса криптовалют с графиками изменений и портфелем инвестора",
    technologies: ["React", "Chart.js", "API"],
    link: "https://www.coinmarketcap.com/"
  },
  {
    title: "Платформа для блогов",
    description: "Система публикации статей с поддержкой форматирования и комментариев",
    technologies: ["Next.js", "Markdown", "TypeScript"],
    link: "https://habr.com/"
  }
];

export default function Projects() {
  return (
    <section className="py-10 px-8 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Проекты</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow bg-white">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
              <span className="text-2xl">🚀</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              🔗 Посетить сайт →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
