import React from 'react';
import { ChefHat, Heart, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-black flex items-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-amber-600">
              <Heart className="w-6 h-6 fill-current" />
              <span className="text-sm font-semibold uppercase tracking-wider">{t('heroSubtitle')}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                {t('heroTitle')}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
              {t('heroDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-xl">
                {t('menu')}
              </button>
              <button className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300">
                {t('orderOnline')}
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">1000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center justify-center">
                  5.0
                  <Star className="w-6 h-6 ml-1 text-amber-500 fill-current" />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center">
                <ChefHat className="w-32 h-32 text-amber-600" />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-10 -right-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg animate-bounce">
              <Heart className="w-8 h-8 text-red-500 fill-current" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg animate-pulse">
              <Star className="w-8 h-8 text-amber-500 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;