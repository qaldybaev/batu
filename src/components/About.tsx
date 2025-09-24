// import React from 'react';
// import { Heart, Users, Award, ChefHat } from 'lucide-react';
// import { useLanguage } from '../contexts/LanguageContext';

// const About: React.FC = () => {
//   const { t, currentLanguage } = useLanguage();

//   const features = [
//     {
//       icon: <Heart className="w-8 h-8 text-red-500" />,
//       title: currentLanguage === 'kz' ? 'Сүйіспеншілікпен дайындалған' : 
//              currentLanguage === 'ru' ? 'Приготовлено с любовью' : 
//              'Made with Love',
//       description: currentLanguage === 'kz' ? 'Әрбір тағам жүректен келіп, сүйіспеншілікпен дайындалады' : 
//                   currentLanguage === 'ru' ? 'Каждое блюдо готовится от души и с любовью' : 
//                   'Every dish is prepared from the heart with love'
//     },
//     {
//       icon: <Users className="w-8 h-8 text-blue-500" />,
//       title: currentLanguage === 'kz' ? 'Отбасылық дәстүрлер' : 
//              currentLanguage === 'ru' ? 'Семейные традиции' : 
//              'Family Traditions',
//       description: currentLanguage === 'kz' ? 'Ғасырлар бойы жалғасып келе жатқан отбасылық рецепттер' : 
//                   currentLanguage === 'ru' ? 'Семейные рецепты, передающиеся из поколения в поколение' : 
//                   'Family recipes passed down through generations'
//     },
//     {
//       icon: <Award className="w-8 h-8 text-amber-500" />,
//       title: currentLanguage === 'kz' ? 'Сапалы ингредиенттер' : 
//              currentLanguage === 'ru' ? 'Качественные ингредиенты' : 
//              'Quality Ingredients',
//       description: currentLanguage === 'kz' ? 'Тек ең жақсы және таза ингредиенттерді қолданамыз' : 
//                   currentLanguage === 'ru' ? 'Используем только лучшие и свежие ингредиенты' : 
//                   'We use only the finest and freshest ingredients'
//     },
//     {
//       icon: <ChefHat className="w-8 h-8 text-green-500" />,
//       title: currentLanguage === 'kz' ? 'Кәсіби ас үйшілер' : 
//              currentLanguage === 'ru' ? 'Профессиональные повара' : 
//              'Professional Chefs',
//       description: currentLanguage === 'kz' ? 'Тәжірибелі ас үйшілер тобы сіздің үшін жұмыс істейді' : 
//                   currentLanguage === 'ru' ? 'Опытная команда поваров работает для вас' : 
//                   'Experienced team of chefs working for you'
//     }
//   ];

//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="flex items-center justify-center space-x-2 text-amber-600 mb-4">
//             <Heart className="w-6 h-6" />
//             <span className="text-sm font-semibold uppercase tracking-wider">{t('about')}</span>
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//             {currentLanguage === 'kz' ? 'Біз туралы' : 
//              currentLanguage === 'ru' ? 'О нас' : 
//              'About Us'}
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             {currentLanguage === 'kz' ? 'BatuFoodLove - бұл тек дәмді тағамдар ғана емес, сондай-ақ жылы атмосфера мен ерекше қызмет көрсету. Біз әрбір қонағымызды отбасының мүшесіндей қарсы аламыз.' : 
//              currentLanguage === 'ru' ? 'BatuFoodLove - это не только вкусная еда, но и теплая атмосфера, особенное обслуживание. Мы встречаем каждого гостя как члена семьи.' : 
//              'BatuFoodLove is not just delicious food, but also a warm atmosphere and special service. We welcome every guest like a family member.'}
//           </p>
//         </div>

//         {/* Story Section */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
//           <div className="space-y-6">
//             <h3 className="text-3xl font-bold text-gray-900">
//               {currentLanguage === 'kz' ? 'Біздің тарихымыз' : 
//                currentLanguage === 'ru' ? 'Наша история' : 
//                'Our Story'}
//             </h3>
//             <p className="text-gray-600 leading-relaxed">
//               {currentLanguage === 'kz' ? 'BatuFoodLove 2010 жылы отбасылық бизнес ретінде басталды. Біздің мақсатымыз - адамдарға үйдегідей дәмді және жылы тағам ұсыну болды. Бүгінгі таңда біз Астананың ең сүйікті кафелерінің бірімізбін.' : 
//                currentLanguage === 'ru' ? 'BatuFoodLove начался в 2010 году как семейный бизнес. Нашей целью было предоставить людям вкусную и теплую еду, как дома. Сегодня мы одно из самых любимых кафе в Астана.' : 
//                'BatuFoodLove started in 2010 as a family business. Our goal was to provide people with delicious and warm food, just like home. Today we are one of the most beloved cafes in Astana.'}
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               {currentLanguage === 'kz' ? 'Біздің рецепттеріміз ғасырлар бойы отбасымызда сақталып келе жатқан дәстүрлі тағамдарға негізделген. Әрбір тағамға біздің жанымызды салып, сүйіспеншілікпен дайындаймыз.' : 
//                currentLanguage === 'ru' ? 'Наши рецепты основаны на традиционных блюдах, которые хранились в нашей семье веками. Мы вкладываем душу в каждое блюдо и готовим с любовью.' : 
//                'Our recipes are based on traditional dishes that have been preserved in our family for centuries. We put our soul into every dish and cook with love.'}
//             </p>
//           </div>
          
//           <div className="relative">
//             <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 shadow-xl">
//               <div className="aspect-square bg-white rounded-2xl flex items-center justify-center">
//                 <div className="text-center">
//                   <ChefHat className="w-24 h-24 text-amber-600 mx-auto mb-4" />
//                   <h4 className="text-2xl font-bold text-gray-900">BatuFoodLove</h4>
//                   <p className="text-gray-600">Est. 2010</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="text-center group hover:-translate-y-2 transition-all duration-300"
//             >
//               <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats */}
//         <div className="mt-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 lg:p-12 text-white">
//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-4xl lg:text-5xl font-bold mb-2">1000+</div>
//               <div className="text-amber-100">
//                 {currentLanguage === 'kz' ? 'Бақытты клиенттер' : 
//                  currentLanguage === 'ru' ? 'Довольных клиентов' : 
//                  'Happy Customers'}
//               </div>
//             </div>
//             <div>
//               <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
//               <div className="text-amber-100">
//                 {currentLanguage === 'kz' ? 'Тағам түрлері' : 
//                  currentLanguage === 'ru' ? 'Видов блюд' : 
//                  'Menu Items'}
//               </div>
//             </div>
//             <div>
//               <div className="text-4xl lg:text-5xl font-bold mb-2">14</div>
//               <div className="text-amber-100">
//                 {currentLanguage === 'kz' ? 'Жыл тәжірибе' : 
//                  currentLanguage === 'ru' ? 'Лет опыта' : 
//                  'Years Experience'}
//               </div>
//             </div>
//             <div>
//               <div className="text-4xl lg:text-5xl font-bold mb-2">4.9</div>
//               <div className="text-amber-100">
//                 {currentLanguage === 'kz' ? 'Жұлдыз рейтингі' : 
//                  currentLanguage === 'ru' ? 'Звёзд рейтинг' : 
//                  'Star Rating'}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;