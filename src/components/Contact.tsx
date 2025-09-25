import React from "react";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { AiFillTikTok } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const Contact: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      color: "from-pink-500 to-purple-600",
      handle: "@batufoodlove",
      link: "https://www.instagram.com/batu_foodlove/",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      handle: "+7 777 123 4567",
      link: "https://wa.me/77771234567",
    },
    {
      name: "TikTok",
      icon: <AiFillTikTok className="w-6 h-6" />,
      color: "from-gray-800 to-gray-900",
      handle: "@batufoodlove",
      link: "https://tiktok.com/@batu_food_love_",
    },
  ];

  const addressTextKz = "Астана қаласы, Жеңіс даңғылы 53";
  const addressTextRu = "г. Астана, проспект Жеңіс 53";
  const addressTextEn = "Astana city, Zhenis Avenue 53";
  const addressQuery = encodeURIComponent(
    currentLanguage === "kz"
      ? addressTextKz
      : currentLanguage === "ru"
      ? addressTextRu
      : addressTextEn
  );
  const yandexMapsUrl = `https://yandex.com/maps/?mode=search&text=${addressQuery}`;

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-amber-600" />,
      title: t("address"),
      content: (
        <a
          href={yandexMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-700 hover:text-amber-900 underline decoration-amber-400/60 underline-offset-2"
        >
          {currentLanguage === "kz"
            ? addressTextKz
            : currentLanguage === "ru"
            ? addressTextRu
            : addressTextEn}
        </a>
      ),
    },
    {
      icon: <Phone className="w-6 h-6 text-amber-600" />,
      title: t("phone"),
      content: "+7 777 123 4567",
    },
    {
      icon: <Mail className="w-6 h-6 text-amber-600" />,
      title: t("email"),
      content: "info@batufoodlove.kz",
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      title: t("workingHours"),
      content: (
        <div className="flex flex-col">
          <span>
            {currentLanguage === "kz"
              ? "Күн сайын: 10:00 - 00:00"
              : currentLanguage === "ru"
              ? "Ежедневно: 10:00 - 00:00"
              : "Daily: 10:00 - 00:00"}
          </span>
          <span className="text-amber-600 font-semibold mt-1">
            {currentLanguage === "kz"
              ? "Дөңер 24/7"
              : currentLanguage === "ru"
              ? "Донер 24/7"
              : "Doner 24/7"}
          </span>
        </div>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-black transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-amber-600 mb-4">
            <Phone className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              {t("contactTitle")}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {t("contactTitle")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {currentLanguage === "kz"
              ? "Бізбен байланысыңыз немесе социалды желілерде қадағалаңыз"
              : currentLanguage === "ru"
              ? "Свяжитесь с нами или подписывайтесь в социальных сетях"
              : "Get in touch with us or follow us on social media"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {currentLanguage === "kz"
                ? "Байланыс ақпараты"
                : currentLanguage === "ru"
                ? "Контактная информация"
                : "Contact Information"}
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 p-2 bg-amber-50 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media & Map */}
          <div className="space-y-8">
            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                {t("followUs")}
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div
                      className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-r ${social.color} text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        {social.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {social.handle}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                        <span className="text-xs">→</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  title="Yandex Map"
                  src={`https://yandex.com/map-widget/v1/?mode=search&text=${addressQuery}`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-4 border-t border-gray-100 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300">
                  {currentLanguage === "kz"
                    ? "Біздің орналасуымыз"
                    : currentLanguage === "ru"
                    ? "Наше местоположение"
                    : "Our Location"}
                </p>
                <p className="text-sm text-amber-700 mt-1">
                  <a
                    href={yandexMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-900 underline decoration-amber-400/60 underline-offset-2"
                  >
                    {currentLanguage === "kz"
                      ? addressTextKz
                      : currentLanguage === "ru"
                      ? addressTextRu
                      : addressTextEn}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
