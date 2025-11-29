import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import './App.css';

const FloatingHeart = ({ delay }) => {
  const randomX = Math.random() * 100; // Случайная позиция по горизонтали
  const size = Math.random() * 20 + 10; // Случайный размер

  return (
    <motion.div
      className="floating-heart"
      style={{ left: `${randomX}%`, width: size, height: size }}
      initial={{ y: '110vh', opacity: 0 }}
      animate={{ y: '-10vh', opacity: [0, 1, 0] }}
      transition={{
        duration: Math.random() * 5 + 5, // Длительность полета
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
    >
      <Heart fill="#ff4d6d" color="#ff4d6d" size="100%" />
    </motion.div>
  );
};

export default function App() {
  const [hearts, setHearts] = useState([]);

  // Генерируем массив сердечек для фона
  useEffect(() => {
    const newHearts = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 10
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="container">
      {/* Фон с летающими сердцами */}
      <div className="hearts-container">
        {hearts.map(heart => (
          <FloatingHeart key={heart.id} delay={heart.delay} />
        ))}
      </div>

      {/* Основная открытка */}
      <motion.div 
        className="card"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="card-content">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="main-heart-icon"
          >
            <Heart size={64} fill="#e01e37" color="#e01e37" />
          </motion.div>
          
          <h1 className="title">С Днём Матери!</h1>
          
          <p className="message">
            Мамочка, спасибо тебе за твою бесконечную любовь, тепло и поддержку. 
            <br /><br />
            Даже когда я занят работой, знай — я всегда помню о тебе и очень ценю всё, что ты делаешь.
            <br /><br />
            Ты — самый лучший человек на свете!
          </p>

          <div className="signature">
            С любовью, твой сын ❤️
          </div>
        </div>
      </motion.div>
    </div>
  );
}
