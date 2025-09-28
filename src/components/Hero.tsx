import React, { useState, useEffect } from "react";
import {
  Heart,
  Phone,
  ShoppingBag,
  Users,
  Utensils,
  Clock,
  MapPin,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Hero: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const images = [
    "/foto1.webp",
    "/foto2.webp",
    "/foto3.webp",
    "/foto4.webp",
    "/foto5.webp",
    "/foto6.webp",
    "/foto7.webp",
    "/foto8.webp",
    "/foto9.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  const descriptions: { [key: string]: string } = {
    kz: "Batu – бұл тек қана дәмді тағамдар емес, сонымен бірге жақсы эмоциялар мен есте қаларлық сәттердің ошағы. Біз әрбір тағамды сүйіспеншілікпен дайындап, әр келушіні ерекше атмосферамен қарсы аламыз. Бізбен бірге дәмді тағамның, жылулық пен көңілді сәттердің куәсі болыңыз!",
    ru: "Batu – это не просто вкусная еда, а место, где рождаются хорошие эмоции и незабываемые моменты. Мы готовим каждое блюдо с любовью и встречаем каждого гостя в особой атмосфере. Станьте свидетелем настоящего вкуса, тепла и радости вместе с нами!",
    en: "Batu is not just a place for delicious food, but a haven where good emotions and unforgettable moments come alive. Every dish is prepared with love, and every guest is welcomed into a unique and warm atmosphere. Join us and experience the true taste of joy, warmth, and culinary delight!",
  };


  const stats = [
    {
      icon: <Users size={28} className="text-amber-600" />,
      title: "5000+",
      desc:
        currentLanguage === "kz"
          ? "Маман тұтынушы"
          : currentLanguage === "ru"
          ? "Довольных клиентов"
          : "Happy customers",
    },
    {
      icon: <Utensils size={28} className="text-amber-600" />,
      title: "100+",
      desc:
        currentLanguage === "kz"
          ? "Тағам түрлері"
          : currentLanguage === "ru"
          ? "Видов блюд"
          : "Menu items",
    },
    {
      icon: <Clock size={28} className="text-amber-600" />,
      title: "10+",
      desc:
        currentLanguage === "kz"
          ? "Жыл тәжірибе"
          : currentLanguage === "ru"
          ? "Лет опыта"
          : "Years of experience",
    },
    {
      icon: <MapPin size={28} className="text-amber-600" />,
      title: "3",
      desc:
        currentLanguage === "kz"
          ? "Филиал"
          : currentLanguage === "ru"
          ? "Филиала"
          : "Branches",
    },
  ];

  return (
    <section
      id="home"
      className="pt-10 min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-black flex flex-col items-center transition-colors"
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

            {/* Highlight text */}
            {/* <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {highlightText[currentLanguage]}
            </p> */}
            <div className="mt-14 grid grid-cols-4 gap-6 text-center">
              {stats.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-full mb-3 shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="tel:+7 775 396 7888"
                className="relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                <Phone className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{t("call")}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-shine" />
              </a>

              <button
                onClick={() => {
                  document
                    .getElementById("order")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  {t("orderDelivery")}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-shine" />
              </button>
            </div>
          </div>

          {/* Slideshow */}
          <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`slide-${index}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-10 text-center px-4">
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            {descriptions[currentLanguage]}
          </p>
        </div>

        {/* Stats section */}
      </div>
    </section>
  );
};

export default Hero;
