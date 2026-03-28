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
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Обо <span className="text-blue-600">мне</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 mb-6">
              Я увлечённый разработчик с более чем 5-летним опытом создания веб-приложений.
              Специализируюсь на frontend-разработке с использованием современных технологий.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">Навыки</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-700 hover:bg-blue-200 transition-colors cursor-default font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">Опыт работы</h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-blue-600">{exp.title}</h4>
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
