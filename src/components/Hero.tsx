import React, { useState, useEffect } from "react";
import { Heart, Phone, ShoppingBag } from "lucide-react";
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

            {/* <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
  <img 
    src="/batu logo1.png" // 👉 public papkaga logoni joylashtirasiz
    alt="BatuFoodLove Logo" 
    className="h-20 lg:h-28 w-auto mx-auto lg:mx-0 object-contain" 
  />
</h1> */}

            <div className="flex flex-wrap gap-4 mt-6">
              {/* 📞 Pozvonit */}
              <a
                href="tel:+7 775 396 7888"
                className="relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                <Phone className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{t("call")}</span>
                {/* Shine effekt */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-shine" />
              </a>

              {/* 🛍 Zakazat dostavku */}
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
                {/* Shine effekt */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-shine" />
              </button>
            </div>
          </div>

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
