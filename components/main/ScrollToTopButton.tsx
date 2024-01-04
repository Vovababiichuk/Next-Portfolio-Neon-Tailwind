
'use client';

import { ArrowUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Добавляем слушатель события прокрутки
    window.addEventListener('scroll', handleScroll);
    // Убираем слушатель события прокрутки при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Показываем кнопку, если прокрутка больше определенного значения (например, 100px)
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Прокручиваем страницу вверх при нажатии кнопки
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button className='fixed bottom-5 right-5 z-[999] bg-[#2f2158] text-white p-4 rounded-full hover:scale-110 duration-300 ease-in-out' onClick={scrollToTop}>
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
