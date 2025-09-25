import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Hero: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const images = [
    "/foto1.png",
    "/foto2.png",
    "/foto3.png",
    "/foto4.png",
    "/foto5.png",
    "/foto6.png",
    "/foto7.png",
    "/foto8.png",
    "/foto9.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Kafe tavsifi (tilga qarab)
  const descriptions: { [key: string]: string } = {
    kz: "Batu – бұл тек қана дәмді тағамдар емес, сонымен бірге жақсы эмоциялар мен есте қаларлық сәттердің ошағы. Біз әрбір тағамды сүйіспеншілікпен дайындап, әр келушіні ерекше атмосферамен қарсы аламыз. Бізбен бірге дәмді тағамның, жылулық пен көңілді сәттердің куәсі болыңыз!",
    ru: "Batu – это не просто вкусная еда, а место, где рождаются хорошие эмоции и незабываемые моменты. Мы готовим каждое блюдо с любовью и встречаем каждого гостя в особой атмосфере. Станьте свидетелем настоящего вкуса, тепла и радости вместе с нами!",
    en: "Batu is not just a place for delicious food, but a haven where good emotions and unforgettable moments come alive. Every dish is prepared with love, and every guest is welcomed into a unique and warm atmosphere. Join us and experience the true taste of joy, warmth, and culinary delight!",
  };

  return (
    <section
      id="home"
      className="pt-16 min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-black flex flex-col items-center transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-center space-x-2 text-amber-600">
              <Heart className="w-6 h-6 fill-current" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                {t("heroSubtitle")}
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                {t("heroTitle")}
              </span>
            </h1>
          </div>

          {/* Right Slider */}
          <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`slide-${index}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Slider ostidagi tavsif */}
        <div className="mt-10 text-center px-4">
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            {descriptions[currentLanguage]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
