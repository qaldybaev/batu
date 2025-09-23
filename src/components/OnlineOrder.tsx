import React from 'react';
import { ShoppingCart, Truck, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const OnlineOrder: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const orderMethods = [
    {
      name: 'Yandex',
      description: currentLanguage === 'kz' ? 'Yandex Еда арқылы тез жеткізу' : 
                  currentLanguage === 'ru' ? 'Быстрая доставка через Yandex Еда' : 
                  'Fast delivery via Yandex Food',
      color: 'from-red-500 to-red-600',
      icon: '🍽️',
      deliveryTime: '30-40 мин',
      link: '#'
    },
    {
      name: 'Bold',
      description: currentLanguage === 'kz' ? 'Bold қолданбасы арқылы тапсырыс' : 
                  currentLanguage === 'ru' ? 'Заказ через приложение Bold' : 
                  'Order through Bold app',
      color: 'from-blue-500 to-blue-600',
      icon: '📱',
      deliveryTime: '25-35 мин',
      link: '#'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-amber-600 mb-4">
            <ShoppingCart className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">{t('orderOnline')}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('orderOnline')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentLanguage === 'kz' ? 'Тағамды үйіңізге жеткізіп алыңыз немесе дайын болған кезде алып кетіңіз' : 
             currentLanguage === 'ru' ? 'Закажите доставку на дом или заберите готовую еду самостоятельно' :
             'Get your food delivered to your home or pick it up when ready'}
          </p>
        </div>

        {/* Order Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {orderMethods.map((method) => (
            <div
              key={method.name}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${method.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center text-3xl`}>
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{method.name}</h3>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{method.deliveryTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="w-4 h-4" />
                    <span>{currentLanguage === 'kz' ? 'Тегін жеткізу' : 
                           currentLanguage === 'ru' ? 'Бесплатная доставка' : 
                           'Free delivery'}</span>
                  </div>
                </div>
                
                <button 
                  className={`w-full bg-gradient-to-r ${method.color} text-white py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg`}
                >
                  {currentLanguage === 'kz' ? `${method.name} арқылы тапсырыс` : 
                   currentLanguage === 'ru' ? `Заказать через ${method.name}` : 
                   `Order via ${method.name}`}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Clock className="w-8 h-8 text-amber-600" />,
              title: currentLanguage === 'kz' ? 'Тез жеткізу' : 
                     currentLanguage === 'ru' ? 'Быстрая доставка' : 
                     'Fast Delivery',
              description: currentLanguage === 'kz' ? '30 минуттан аспайтын уақытта' : 
                          currentLanguage === 'ru' ? 'За 30 минут или бесплатно' : 
                          'Within 30 minutes or free'
            },
            {
              icon: <ShoppingCart className="w-8 h-8 text-amber-600" />,
              title: currentLanguage === 'kz' ? 'Оңай тапсырыс' : 
                     currentLanguage === 'ru' ? 'Простой заказ' : 
                     'Easy Ordering',
              description: currentLanguage === 'kz' ? 'Бірнеше клик арқылы тапсырыс беріңіз' : 
                          currentLanguage === 'ru' ? 'Закажите в несколько кликов' : 
                          'Order in just a few clicks'
            },
            {
              icon: <Truck className="w-8 h-8 text-amber-600" />,
              title: currentLanguage === 'kz' ? 'Қауіпсіз жеткізу' : 
                     currentLanguage === 'ru' ? 'Безопасная доставка' : 
                     'Safe Delivery',
              description: currentLanguage === 'kz' ? 'COVID-19 қауіпсіздік шараларымен' : 
                          currentLanguage === 'ru' ? 'С соблюдением мер безопасности' : 
                          'With COVID-19 safety measures'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineOrder;