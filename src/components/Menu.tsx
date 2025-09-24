"use client";

import React, { useState } from "react";
import { Utensils } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Menu: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const pdfs = [
    {
      key: "limonadlar",
      url: "/limonade.pdf",
      names: {
        kz: "Лимонадтар мәзірі (PDF)",
        ru: "Меню лимонадов (PDF)",
        en: "Lemonades Menu (PDF)",
      },
    },
    {
      key: "taomlar",
      url: "/foods.pdf",
      names: {
        kz: "Тағамдар мәзірі (PDF)",
        ru: "Меню блюд (PDF)",
        en: "Dishes Menu (PDF)",
      },
    },
  ];

  return (
    <section id="menu" className="py-20 bg-white dark:bg-gray-900 transition-colors">
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {pdfs.map((pdf) => (
            <button
              key={pdf.key}
              onClick={() => setSelectedPdf(pdf.url)}
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              📄 {pdf.names[currentLanguage]}
            </button>
          ))}
        </div>

        {/* PDF Viewer */}
        {selectedPdf && (
          <div style={{ height: "600px", border: "1px solid #ccc" }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.worker.min.js">
              <Viewer fileUrl={selectedPdf} />
            </Worker>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
