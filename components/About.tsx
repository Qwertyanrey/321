const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Tailwind CSS", "Git", "PostgreSQL", "MongoDB", "Docker"
];

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company",
    period: "2022 - Настоящее время",
    description: "Разработка масштабируемых веб-приложений на React и Next.js"
  },
  {
    title: "Middle Frontend Developer",
    company: "Web Studio",
    period: "2020 - 2022",
    description: "Создание адаптивных интерфейсов и интеграция с API"
  },
  {
    title: "Junior Developer",
    company: "StartUp",
    period: "2018 - 2020",
    description: "Разработка и поддержка веб-сайтов"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Обо <span className="text-blue-400">мне</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-300 mb-6">
              Я увлечённый разработчик с более чем 5-летним опытом создания веб-приложений.
              Специализируюсь на frontend-разработке с использованием современных технологий.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Навыки</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 hover:bg-blue-600/30 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Опыт работы</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-blue-400">{exp.title}</h4>
                    <span className="text-gray-400 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 mb-2">{exp.company}</p>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
