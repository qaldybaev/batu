import React from "react";
import { ShoppingCart, Truck, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const OnlineOrder: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const orderMethods = [
    {
      name: "Yandex",
      description:
        currentLanguage === "kz"
          ? "Yandex Еда арқылы тез жеткізу"
          : currentLanguage === "ru"
          ? "Быстрая доставка через Yandex Еда"
          : "Fast delivery via Yandex Food",
      color: "from-yellow-400 to-yellow-500",
      logo: "/yandex.png", // ✅ Yandex rasmi shu papkada bo‘lishi kerak (public/images/)
      deliveryTime: "30-40 мин",
      link: "https://eda.yandex.kz/ru-kz/astana/r/baty_doner?placeSlug=_baty_doner",
    },
    {
      name: "Bold",
      description:
        currentLanguage === "kz"
          ? "Bold қолданбасы арқылы тапсырыс"
          : currentLanguage === "ru"
          ? "Заказ через приложение Bold"
          : "Order through Bold app",
      color: "from-green-500 to-green-600",
      logo: "/images.jpeg", // ✅ Bold rasmi shu papkada bo‘lishi kerak
      deliveryTime: "25-35 мин",
      link: "https://wolt.com/ru/kaz/nur-sultan/restaurant/batu-astana?no_universal_links=true",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-amber-600 mb-4">
            <ShoppingCart className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              {t("orderOnline")}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {t("orderOnline")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {currentLanguage === "kz"
              ? "Тағамды үйіңізге жеткізіп алыңыз немесе дайын болған кезде алып кетіңіз"
              : currentLanguage === "ru"
              ? "Закажите доставку на дом или заберите готовую еду самостоятельно"
              : "Get your food delivered to your home or pick it up when ready"}
          </p>
        </div>

        {/* Order Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {orderMethods.map((method) => (
            <div
              key={method.name}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${method.color}`}></div>

              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center">
                    <img
                      src={method.logo}
                      alt={method.name}
                      className="w-16 h-16 object-contain rounded"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {method.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{method.description}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{method.deliveryTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="w-4 h-4" />
                    <span>
                      {currentLanguage === "kz"
                        ? "Тегін жеткізу"
                        : currentLanguage === "ru"
                        ? "Бесплатная доставка"
                        : "Free delivery"}
                    </span>
                  </div>
                </div>

                {/* ✅ Tugma o‘rniga <a> link ishlatamiz */}
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center bg-gradient-to-r ${method.color} text-white py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg`}
                >
                  {currentLanguage === "kz"
                    ? `${method.name} арқылы тапсырыс`
                    : currentLanguage === "ru"
                    ? `Заказать через ${method.name}`
                    : `Order via ${method.name}`}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineOrder;
