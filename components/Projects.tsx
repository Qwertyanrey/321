const projects = [
  {
    title: "E-commerce Platform",
    description: "Интернет-магазин с полной функциональностью: корзина, оплата, админ-панель",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Manager",
    description: "Приложение для управления задачами с реальным временем обновлений",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Панель мониторинга погоды с интеграцией внешних API",
    technologies: ["Next.js", "Tailwind CSS", "OpenWeather API"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Network",
    description: "Социальная платформа с публикацией постов и сообщениями",
    technologies: ["React", "GraphQL", "Node.js", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "Шаблон портфолио для разработчиков с SEO оптимизацией",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Chat Application",
    description: "Мессенджер с поддержкой групповых чатов и файлами",
    technologies: ["React", "Firebase", "Material UI"],
    demoUrl: "#",
    githubUrl: "#"
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
