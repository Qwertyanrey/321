const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "HTML5", "CSS3", "Tailwind CSS", "SCSS", "Git", "GitHub",
  "PostgreSQL", "MongoDB", "Docker", "Webpack", "Vite"
];

export default function Skills() {
  return (
    <section className="py-10 px-8 border-b border-gray-200 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Навыки</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
