"use client";

import React from "react";
import { Utensils } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Menu: React.FC = () => {
  const {  currentLanguage } = useLanguage();

  // PDF fayllar (public papkaga qo‘yiladi)
  const pdfs = [
    {
      key: "limonadlar",
      url: "public/limonade.pdf",
      names: {
        kz: "Лимонадтар мәзірі (PDF)",
        ru: "Меню лимонадов (PDF)",
        en: "Lemonades Menu (PDF)",
      },
    },
    {
      key: "taomlar",
      url: "public/foods.pdf",
      names: {
        kz: "Тағамдар мәзірі (PDF)",
        ru: "Меню блюд (PDF)",
        en: "Dishes Menu (PDF)",
      },
    },
  ];

  return (
    <section
      id="menu"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Header */}
        <div className="flex items-center justify-center space-x-2 text-amber-600 mb-4">
          <Utensils className="w-6 h-6" />
          <span className="text-sm font-semibold uppercase tracking-wider">
            {currentLanguage === "kz"
              ? "Онлайн мәзір"
              : currentLanguage === "ru"
              ? "Онлайн меню"
              : "Online Menu"}
          </span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          {currentLanguage === "kz"
            ? "Онлайн мәзір"
            : currentLanguage === "ru"
            ? "Онлайн меню"
            : "Online Menu"}
        </h2>

        {/* PDF tugmalar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {pdfs.map((pdf) => (
            <a
              key={pdf.key}
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              📄 {pdf.names[currentLanguage]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
