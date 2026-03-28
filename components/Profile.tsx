import Image from "next/image";

export default function Profile() {
  return (
    <section className="py-10 px-8 border-b border-gray-200">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-xl flex-shrink-0 border-4 border-white">
          <Image
            src="/avatar.jpg"
            alt="Ганнов Андрей Александрович"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Профиль</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Опытный frontend-разработчик с 5-летним стажем создания веб-приложений. 
            Специализируюсь на React, TypeScript и современных JavaScript-фреймворках. 
            Умею работать в команде, писать чистый код и соблюдать дедлайны.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Возраст:</span>
              <span className="ml-2 text-gray-800 font-medium">19 лет</span>
            </div>
            <div>
              <span className="text-gray-500">Город:</span>
              <span className="ml-2 text-gray-800 font-medium">Сочи</span>
            </div>
            <div>
              <span className="text-gray-500">Email:</span>
              <span className="ml-2 text-gray-800 font-medium">andrey@example.com</span>
            </div>
            <div>
              <span className="text-gray-500">Телефон:</span>
              <span className="ml-2 text-gray-800 font-medium">+7 (966) 777-93-64</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
