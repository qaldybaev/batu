import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'kz' | 'ru' | 'en';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  kz: {
    // Header
    home: 'Басты бет',
    menu: 'Мәзір',
    about: 'Біз туралы',
    contact: 'Байланыс',
    order: 'Тапсырыс беру',
    
    // Hero section
    heroTitle: 'BatuFoodLove',
    heroSubtitle: 'Дәмді тағамдар мен жақсы сезімдер',
    heroDescription: 'Біз сізге ең дәмді тағамдар мен жылы атмосфераны ұсынамыз. Әрбір тағам сүйіспеншілікпен дайындалады.',
    
    // Menu
    menuTitle: 'Біздің мәзір',
    shashlik: 'Шашлықтар',
    doner: 'Донерлер',
    pizza: 'Пиццалар',
    beverages: 'Сусындар',
    firstCourse: 'Бірінші тағамдар',
    secondCourse: 'Екінші тағамдар',
    
    // Contact
    contactTitle: 'Бізбен байланысыңыз',
    address: 'Мекенжайы',
    phone: 'Телефон',
    email: 'Электрондық пошта',
    workingHours: 'Жұмыс уақыты',
    
    // Online ordering
    orderOnline: 'Онлайн тапсырыс',
    orderYandex: 'Yandex арқылы тапсырыс',
    orderBold: 'Bold арқылы тапсырыс',
    
    // Social media
    followUs: 'Бізді қадағалаңыз',
    
    // Menu items
    lambShashlik: 'Қой еті шашлығы',
    beefShashlik: 'Сиыр еті шашлығы',
    chickenDoner: 'Тауық донері',
    beefDoner: 'Сиыр еті донері',
    margherita: 'Маргарита пицца',
    pepperoni: 'Пепперони пицца',
    tea: 'Шай',
    coffee: 'Кофе',
    borsch: 'Борщ',
    soup: 'Сорпа',
    plov: 'Палау',
    manty: 'Манты',
    
    // Footer
    allRightsReserved: 'Барлық құқықтар қорғалған',
  },
  ru: {
    // Header
    home: 'Главная',
    menu: 'Меню',
    about: 'О нас',
    contact: 'Контакты',
    order: 'Заказать',
    
    // Hero section
    heroTitle: 'BatuFoodLove',
    heroSubtitle: 'Вкусная еда и хорошие эмоции',
    heroDescription: 'Мы предлагаем вам самые вкусные блюда и теплую атмосферу. Каждое блюдо готовится с любовью.',
    
    // Menu
    menuTitle: 'Наше меню',
    shashlik: 'Шашлыки',
    doner: 'Донеры',
    pizza: 'Пиццы',
    beverages: 'Напитки',
    firstCourse: 'Первые блюда',
    secondCourse: 'Вторые блюда',
    
    // Contact
    contactTitle: 'Свяжитесь с нами',
    address: 'Адрес',
    phone: 'Телефон',
    email: 'Электронная почта',
    workingHours: 'Время работы',
    
    // Online ordering
    orderOnline: 'Онлайн заказ',
    orderYandex: 'Заказать через Yandex',
    orderBold: 'Заказать через Bold',
    
    // Social media
    followUs: 'Подписывайтесь на нас',
    
    // Menu items
    lambShashlik: 'Шашлык из баранины',
    beefShashlik: 'Шашлык из говядины',
    chickenDoner: 'Донер из курицы',
    beefDoner: 'Донер из говядины',
    margherita: 'Пицца Маргарита',
    pepperoni: 'Пицца Пепперони',
    tea: 'Чай',
    coffee: 'Кофе',
    borsch: 'Борщ',
    soup: 'Суп',
    plov: 'Плов',
    manty: 'Манты',
    
    // Footer
    allRightsReserved: 'Все права защищены',
  },
  en: {
    // Header
    home: 'Home',
    menu: 'Menu',
    about: 'About',
    contact: 'Contact',
    order: 'Order',
    
    // Hero section
    heroTitle: 'BatuFoodLove',
    heroSubtitle: 'Delicious food and good emotions',
    heroDescription: 'We offer you the most delicious dishes and warm atmosphere. Every meal is prepared with love.',
    
    // Menu
    menuTitle: 'Our Menu',
    shashlik: 'Shashlik',
    doner: 'Doner',
    pizza: 'Pizza',
    beverages: 'Beverages',
    firstCourse: 'First Course',
    secondCourse: 'Second Course',
    
    // Contact
    contactTitle: 'Contact Us',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    workingHours: 'Working Hours',
    
    // Online ordering
    orderOnline: 'Order Online',
    orderYandex: 'Order via Yandex',
    orderBold: 'Order via Bold',
    
    // Social media
    followUs: 'Follow Us',
    
    // Menu items
    lambShashlik: 'Lamb Shashlik',
    beefShashlik: 'Beef Shashlik',
    chickenDoner: 'Chicken Doner',
    beefDoner: 'Beef Doner',
    margherita: 'Margherita Pizza',
    pepperoni: 'Pepperoni Pizza',
    tea: 'Tea',
    coffee: 'Coffee',
    borsch: 'Borscht',
    soup: 'Soup',
    plov: 'Plov',
    manty: 'Manti',
    
    // Footer
    allRightsReserved: 'All rights reserved',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ru');

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};