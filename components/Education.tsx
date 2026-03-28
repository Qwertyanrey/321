export default function Education() {
  return (
    <section className="py-10 px-8 border-b border-gray-200 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Образование</h2>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="text-lg font-bold text-gray-800">Бакалавр, Информатика и вычислительная техника</h3>
          <p className="text-gray-600 font-medium">МГТУ им. Баумана</p>
          <p className="text-gray-500 text-sm">2014 — 2018</p>
        </div>
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="text-lg font-bold text-gray-800">Курсы веб-разработки</h3>
          <p className="text-gray-600 font-medium">Яндекс.Практикум</p>
          <p className="text-gray-500 text-sm">2019</p>
        </div>
      </div>
    </section>
  );
}
