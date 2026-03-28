const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company",
    period: "2022 — Наст. время",
    description: "Разработка масштабируемых веб-приложений на React и Next.js. Руководство командой из 3 разработчиков."
  },
  {
    title: "Middle Frontend Developer",
    company: "Web Studio",
    period: "2020 — 2022",
    description: "Создание адаптивных интерфейсов, интеграция с REST API, работа с дизайн-макетами."
  },
  {
    title: "Junior Developer",
    company: "StartUp",
    period: "2018 — 2020",
    description: "Разработка и поддержка веб-сайтов, исправление багов, верстка макетов."
  }
];

export default function Experience() {
  return (
    <section className="py-10 px-8 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Опыт работы</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-blue-600 pl-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <h3 className="text-lg font-bold text-gray-800">{exp.title}</h3>
              <span className="text-sm text-blue-600 font-medium">{exp.period}</span>
            </div>
            <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
            <p className="text-gray-500 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
