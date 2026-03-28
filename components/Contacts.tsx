export default function Contacts() {
  return (
    <section className="py-10 px-8 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Контакты</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <a href="tel:+79667779364" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
          <span className="text-2xl">📞</span>
          <div>
            <p className="text-xs text-gray-500">Телефон</p>
            <p className="text-gray-800 font-medium">+7 (966) 777-93-64</p>
          </div>
        </a>
        <a href="mailto:andrey@example.com" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
          <span className="text-2xl">✉</span>
          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-gray-800 font-medium">andrey@example.com</p>
          </div>
        </a>
        <a href="https://github.com/Qwertyanrey" target="_blank" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
          <span className="text-2xl">💼</span>
          <div>
            <p className="text-xs text-gray-500">GitHub</p>
            <p className="text-gray-800 font-medium">github.com/Qwertyanrey</p>
          </div>
        </a>
        <a href="https://t.me/username" target="_blank" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
          <span className="text-2xl">✈</span>
          <div>
            <p className="text-xs text-gray-500">Telegram</p>
            <p className="text-gray-800 font-medium">@username</p>
          </div>
        </a>
        <a href="https://linkedin.com" target="_blank" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
          <span className="text-2xl">💼</span>
          <div>
            <p className="text-xs text-gray-500">LinkedIn</p>
            <p className="text-gray-800 font-medium">linkedin.com/in/username</p>
          </div>
        </a>
        <a href="https://vk.com" target="_blank" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
          <span className="text-2xl">📘</span>
          <div>
            <p className="text-xs text-gray-500">VK</p>
            <p className="text-gray-800 font-medium">vk.com/username</p>
          </div>
        </a>
      </div>
    </section>
  );
}
