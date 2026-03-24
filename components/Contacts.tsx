"use client";

import { useState } from "react";

const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "GH" },
  { name: "Telegram", url: "https://t.me", icon: "TG" },
  { name: "Email", url: "mailto:dev@example.com", icon: "✉" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "IN" },
  { name: "MAX", url: "#", icon: "MX" },
  { name: "VK", url: "https://vk.com", icon: "VK" },
  { name: "Yandex Music", url: "https://music.yandex.ru", icon: "YM" },
  { name: "Kinopoisk", url: "https://kinopoisk.ru", icon: "KP" },
];

export default function Contacts() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contacts" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Связаться со <span className="text-blue-400">мной</span>
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Контакты</h3>
            <p className="text-gray-300 mb-6">
              Открыт для предложений и сотрудничества. Свяжитесь со мной любым удобным способом.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-blue-500/50 transition-colors group"
                >
                  <span className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 font-bold group-hover:bg-blue-600/30 transition-colors">
                    {link.icon}
                  </span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Форма связи</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                {status === "success" ? "Отправлено!" : "Отправить"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
