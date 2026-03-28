'use client';

import { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Устанавливаем размер canvas на весь экран
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Символы: латиница, цифры, катакана и кириллица
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const cyrillic = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

    const alphabet = katakana + latin + nums + cyrillic;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    // Массив для отслеживания позиции y каждой колонки
    const rainDrops: number[] = [];

    // Инициализация начальных позиций
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      // Полупрозрачный черный фон для эффекта шлейфа
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0'; // Зеленый текст
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        // Выбор случайного символа
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));

        // Отрисовка символа
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        // Сброс капли наверх случайным образом, когда она ушла за край
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }

        // Движение капли вниз
        rainDrops[i]++;
      }
    };

    // Запуск анимации (30 кадров в секунду)
    const interval = setInterval(draw, 30);

    // Обновление размеров при изменении окна
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Пересчитываем колонки и сбрасываем капли при ресайзе
      const newColumns = canvas.width / fontSize;
      rainDrops.length = 0;
      for (let x = 0; x < newColumns; x++) {
        rainDrops[x] = 1;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: -1 }}
    />
  );
}
