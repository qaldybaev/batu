"use client";

import React from "react";
import { Link } from "react-router-dom"; 
import {
  Coffee,
  Utensils,
  Salad,
  Pizza,
  Drumstick,
  Soup,
  Sandwich,
  Beer,
  GlassWater,
  Package,
  Layers,
} from "lucide-react";
import { FaMugHot } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext"; 
import { GiDonerKebab } from "react-icons/gi";
import { MdKebabDining, MdOutlineMenuBook } from "react-icons/md";
import { BiSushi } from "react-icons/bi";

const categories = [
  { id: "all", name: { kz: "Барлығы", ru: "Все", en: "All" }, icon: Utensils },
  { id: "breakfast", name: { kz: "Таңғы ас", ru: "Завтрак", en: "Breakfast" }, icon: Sandwich },
  { id: "salad", name: { kz: "Салаттар", ru: "Салаты", en: "Salads" }, icon: Salad },
  { id: "first-course", name: { kz: "Бірінші тағам", ru: "Первое", en: "First course" }, icon: Soup },
  { id: "second-course", name: { kz: "Екінші тағам", ru: "Второе", en: "Second course" }, icon: Drumstick },
  { id: "kebab", name: { kz: "Шашлық", ru: "Шашлык", en: "Kebab" }, icon: MdKebabDining },
  { id: "doner", name: { kz: "Дөнер", ru: "Донер", en: "Doner" }, icon: GiDonerKebab },
  { id: "pizza", name: { kz: "Пицца", ru: "Пицца", en: "Pizza" }, icon: Pizza },
  { id: "sushi", name: { kz: "Суши", ru: "Суши", en: "Sushi" }, icon: BiSushi },
  { id: "basket", name: { kz: "Баскет", ru: "Баскет", en: "Basket" }, icon: Package },
  { id: "drinks", name: { kz: "Сусындар", ru: "Напитки", en: "Drinks" }, icon: GlassWater },
  { id: "tea", name: { kz: "Шай", ru: "Чай", en: "Tea" }, icon: FaMugHot },
  { id: "coffee", name: { kz: "Кофе", ru: "Кофе", en: "Coffee" }, icon: Coffee },
  { id: "combo", name: { kz: "Комбо", ru: "Комбо", en: "Combo" }, icon: Beer },
  { id: "set", name: { kz: "Сет", ru: "Сет", en: "Set" }, icon: Layers },
];

const Menu: React.FC = () => {
  const { currentLanguage, t } = useLanguage(); // <-- t funksiyasini olamiz
  const { isDark } = useTheme();

  return (
    <div
      className={`p-6  mx-auto min-h-screen transition-colors ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
        <MdOutlineMenuBook size={28} />
        <span>{t("menu")}</span> 
      </h1>

      <div id="menu" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.id}`}
            className={`flex flex-col items-center justify-center p-4 rounded-xl shadow transition
              ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-gray-100 hover:bg-orange-100 text-gray-900"
              }`}
          >
            <cat.icon size={28} className="mb-2 text-orange-500" />
            <span>{cat.name[currentLanguage]}</span> {/* Tilga qarab o'zgaradi */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
