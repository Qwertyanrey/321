Новое содержимое уже сохранено в файле на вашем компьютере:

Путь к файлу:

D:\portfolio\components\Projects.tsx
Как загрузить изменения на GitHub:
Способ 1: Через командную строку (если установлен Git)
cd /d D:\portfolio
git add .
git commit -m "Update projects"
git push
Способ 2: Через браузер GitHub (без Git)
Откройте файл по ссылке:
https://github.com/Qwertyanrey/321/blob/main/components/Projects.tsx

Нажмите на значок карандаша ✏️ (Edit this file)

Удалите всё старое содержимое и вставьте новое (я покажу его ниже)

Нажмите Commit changes

Новое содержимое файла Projects.tsx:
Скопируйте этот код и вставьте в файл на GitHub:

const projects = [
  {
    title: "Интернет-магазин электроники",
    description: "Полнофункциональный интернет-магазин с каталогом товаров, корзиной, оформлением заказа и интеграцией платёжной системы Stripe. Админ-панель для управления товарами и заказами.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    demoUrl: "https://example-store.com",
    githubUrl: "https://github.com/Qwertyanrey/ecommerce-store"
  },
  {
    title: "Менеджер задач с реальным временем",
    description: "Приложение для управления проектами и задачами в команде. Поддержка досок Kanban, чатов, уведомлений и совместной работы в реальном времени через WebSocket.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    demoUrl: "https://example-taskmanager.com",
    githubUrl: "https://github.com/Qwertyanrey/task-manager"
  },
  {
    title: "Панель мониторинга погоды",
    description: "Интерактивное приложение для отслеживания погоды в разных городах мира. Прогноз на 7 дней, карты осадков, уведомления о неблагоприятных условиях.",
    technologies: ["Next.js", "Tailwind CSS", "OpenWeather API", "Chart.js"],
    demoUrl: "https://example-weather.com",
    githubUrl: "https://github.com/Qwertyanrey/weather-dashboard"
  },
  {
    title: "Социальная платформа для разработчиков",
    description: "Социальная сеть для IT-специалистов. Публикация статей, обсуждение проектов, поиск работы, технический блог, система рейтингов и достижений.",
    technologies: ["React", "GraphQL", "Node.js", "PostgreSQL", "Apollo"],
    demoUrl: "https://example-devsocial.com",
    githubUrl: "https://github.com/Qwertyanrey/dev-social"
  },
  {
    title: "Корпоративный портал",
    description: "Внутренний портал компании для сотрудников. Расписание встреч, бронирование переговорных, база знаний, объявления, интеграция с календарём.",
    technologies: ["Next.js", "TypeScript", "Microsoft Graph API", "Azure AD"],
    demoUrl: "https://example-portal.com",
    githubUrl: "https://github.com/Qwertyanrey/corporate-portal"
  },
  {
    title: "Бот для Telegram с AI",
    description: "Умный чат-бот для автоматической поддержки клиентов. Интеграция с ChatGPT, база знаний компании, эскалация на оператора, аналитика диалогов.",
    technologies: ["Node.js", "Telegraf", "OpenAI API", "Redis", "Docker"],
    demoUrl: "https://t.me/example-bot",
    githubUrl: "https://github.com/Qwertyanrey/telegram-ai-bot"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Мои <span className="text-blue-400">проекты</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-6xl group-hover:scale-110 transition-transform">
                  🚀
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors"
                  >
                    Демо
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white rounded-lg text-sm font-semibold transition-colors"
                  >
                    Код
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
