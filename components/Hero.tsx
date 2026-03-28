export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-5xl font-bold text-white shadow-xl">
            Dev
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
          Привет, я <span className="text-blue-600">Разработчик</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Full-stack разработчик, создающий современные веб-приложения
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-lg"
          >
            Смотреть проекты
          </a>
          <a
            href="#contacts"
            className="px-8 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 rounded-lg font-semibold transition-colors"
          >
            Связаться со мной
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
