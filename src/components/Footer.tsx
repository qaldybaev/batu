import React from "react";
import { Heart, MapPin, Phone, Instagram } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { QRCode } from "react-qrcode-logo";

const Footer: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const menuUrl = "https://batu-xi.vercel.app/#/category/all";

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white py-16 overflow-hidden dark:from-black dark:via-gray-950 dark:to-gray-900">
      {/* Decorative backgrounds */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-amber-400/30 transition-colors duration-300">
            <div className="flex items-center space-x-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                BatuFoodLove
              </h3>
              <Heart className="w-6 h-6 text-red-500 fill-current" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {currentLanguage === "kz"
                ? "Дәмді тағамдар мен жақсы сезімдер - біздің негізгі ұранымыз"
                : currentLanguage === "ru"
                ? "Вкусная еда и хорошие эмоции - наш главный девиз"
                : "Delicious food and good emotions - our main motto"}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-amber-400/30 transition-colors duration-300">
            <h4 className="text-lg font-semibold">
              {currentLanguage === "kz"
                ? "Тез сілтемелер"
                : currentLanguage === "ru"
                ? "Быстрые ссылки"
                : "Quick Links"}
            </h4>
            <div className="space-y-2">
              {[
                { key: "home", href: "#home" },
                { key: "menu", href: "#menu" },
                { key: "contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="group flex items-center justify-between text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                >
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    {t(link.key)}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-amber-400/30 transition-colors duration-300">
            <h4 className="text-lg font-semibold">{t("contactTitle")}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm bg-white/5 rounded-lg px-3 py-2 border border-white/10">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">
                  {currentLanguage === "kz"
                    ? "Астана қ., Жеңіс даңғылы 53"
                    : currentLanguage === "ru"
                    ? "г. Астана, пр. Жеңіс 53"
                    : "Astana, Zhenis Ave 53"}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm bg-white/5 rounded-lg px-3 py-2 border border-white/10">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">+7 777 123 4567</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          {/* Social Media */}
          <div className="space-y-4 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-amber-400/30 transition-colors duration-300">
            <h4 className="text-lg font-semibold">{t("followUs")}</h4>

            {/* Social icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/batu_foodlove/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/77771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://tiktok.com/@batu_food_love_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-gray-800 to-black rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <AiFillTikTok className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* QR kod containerini alohida qo‘shish */}
          <div className="mt-4 flex flex-col items-center justify-center">
            <div className="w-28 h-28 bg-white p-2 rounded-lg flex items-center justify-center">
              <QRCode
                value={menuUrl}
                size={120}
                bgColor="#ffffff"
                fgColor="#000000"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pb-5 pt-8 text-center bg-white/5 rounded-xl backdrop-blur-sm">
          <p className="text-gray-300 text-sm">
            © 2025 BatuFoodLove. {t("allRightsReserved")}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
