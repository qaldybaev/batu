import React from 'react';
import { Clock, Star, Utensils } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  rating: number;
  prepTime: string;
}

const Menu: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: t('lambShashlik'),
      description: currentLanguage === 'kz' ? 'Дәмді қой еті шашлығы, арнайы дәмдеуіштермен' : currentLanguage === 'ru' ? 'Вкусный шашлык из баранины со специальными приправами' : 'Delicious lamb shashlik with special seasonings',
      price: '3,500 ₸',
      category: t('shashlik'),
      image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      prepTime: '20 min'
    },
    {
      id: 2,
      name: t('chickenDoner'),
      description: currentLanguage === 'kz' ? 'Жұмсақ тауық етінен жасалған донер' : currentLanguage === 'ru' ? 'Донер из нежного куриного мяса' : 'Doner made from tender chicken meat',
      price: '2,800 ₸',
      category: t('doner'),
      image: 'https://images.pexels.com/photos/4676410/pexels-photo-4676410.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      prepTime: '15 min'
    },
    {
      id: 3,
      name: t('margherita'),
      description: currentLanguage === 'kz' ? 'Классикалық маргарита пицца моцарелла ірімшігімен' : currentLanguage === 'ru' ? 'Классическая пицца Маргарита с сыром моцарелла' : 'Classic Margherita pizza with mozzarella cheese',
      price: '3,200 ₸',
      category: t('pizza'),
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      prepTime: '18 min'
    },
    {
      id: 4,
      name: t('borsch'),
      description: currentLanguage === 'kz' ? 'Дәстүрлі украин борщы етпен' : currentLanguage === 'ru' ? 'Традиционный украинский борщ с мясом' : 'Traditional Ukrainian borscht with meat',
      price: '2,500 ₸',
      category: t('firstCourse'),
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      prepTime: '25 min'
    },
    {
      id: 5,
      name: t('plov'),
      description: currentLanguage === 'kz' ? 'Дәстүрлі өзбек палауы сиыр етімен' : currentLanguage === 'ru' ? 'Традиционный узбекский плов с говядиной' : 'Traditional Uzbek pilaf with beef',
      price: '3,000 ₸',
      category: t('secondCourse'),
      image: 'https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      prepTime: '35 min'
    },
    {
      id: 6,
      name: t('coffee'),
      description: currentLanguage === 'kz' ? 'Ароматты кофе әртүрлі дайындау тәсілдерімен' : currentLanguage === 'ru' ? 'Ароматный кофе различных способов приготовления' : 'Aromatic coffee with various brewing methods',
      price: '800 ₸',
      category: t('beverages'),
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      prepTime: '5 min'
    }
  ];

  const categories = [t('shashlik'), t('doner'), t('pizza'), t('firstCourse'), t('secondCourse'), t('beverages')];
  const [activeCategory, setActiveCategory] = React.useState(t('shashlik'));

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-amber-600 mb-4">
            <Utensils className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">{t('menuTitle')}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('menuTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentLanguage === 'kz' ? 'Біздің ас үйшілерімізбен дайындалған ерекше тағамдарымызды дәмдеп көріңіз' : 
             currentLanguage === 'ru' ? 'Попробуйте наши особенные блюда, приготовленные нашими поварами' :
             'Try our special dishes prepared by our chefs'}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-amber-500 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                  <span className="text-sm font-semibold">{item.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className="text-xl font-bold text-amber-600">{item.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{item.prepTime}</span>
                  </div>
                  
                  <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-200 shadow-lg">
                    {t('order')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;