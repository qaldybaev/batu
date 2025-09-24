export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  rating: number;
  prepTime: string;
}

// Funksiya t (translate) va tilni (currentLanguage) oladi
export const getMenuItems = (
  t: (key: string) => string,
  currentLanguage: string
): MenuItem[] => [
  {
    id: 1,
    name: t("lambShashlik"),
    description:
      currentLanguage === "kz"
        ? "Дәмді қой еті шашлығы, арнайы дәмдеуіштермен"
        : currentLanguage === "ru"
        ? "Вкусный шашлык из баранины со специальными приправами"
        : "Delicious lamb shashlik with special seasonings",
    price: "3,500 ₸",
    category: t("shashlik"),
    image:
      "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    prepTime: "20 min",
  },
  {
    id: 2,
    name: t("chickenDoner"),
    description:
      currentLanguage === "kz"
        ? "Жұмсақ тауық етінен жасалған донер"
        : currentLanguage === "ru"
        ? "Донер из нежного куриного мяса"
        : "Doner made from tender chicken meat",
    price: "2,800 ₸",
    category: t("doner"),
    image:
      "https://images.pexels.com/photos/4676410/pexels-photo-4676410.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    prepTime: "15 min",
  },
  {
    id: 3,
    name: t("margherita"),
    description:
      currentLanguage === "kz"
        ? "Классикалық маргарита пицца моцарелла ірімшігімен"
        : currentLanguage === "ru"
        ? "Классическая пицца Маргарита с сыром моцарелла"
        : "Classic Margherita pizza with mozzarella cheese",
    price: "3,200 ₸",
    category: t("pizza"),
    image:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    prepTime: "18 min",
  },
  {
    id: 4,
    name: t("borsch"),
    description:
      currentLanguage === "kz"
        ? "Дәстүрлі украин борщы етпен"
        : currentLanguage === "ru"
        ? "Традиционный украинский борщ с мясом"
        : "Traditional Ukrainian borscht with meat",
    price: "2,500 ₸",
    category: t("firstCourse"),
    image:
      "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    prepTime: "25 min",
  },
  {
    id: 5,
    name: t("plov"),
    description:
      currentLanguage === "kz"
        ? "Дәстүрлі өзбек палауы сиыр етімен"
        : currentLanguage === "ru"
        ? "Традиционный узбекский плов с говядиной"
        : "Traditional Uzbek pilaf with beef",
    price: "3,000 ₸",
    category: t("secondCourse"),
    image:
      "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    prepTime: "35 min",
  },
  {
    id: 6,
    name: t("coffee"),
    description:
      currentLanguage === "kz"
        ? "Ароматты кофе әртүрлі дайындау тәсілдерімен"
        : currentLanguage === "ru"
        ? "Ароматный кофе различных способов приготовления"
        : "Aromatic coffee with various brewing methods",
    price: "800 ₸",
    category: t("beverages"),
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    prepTime: "5 min",
  },
  {
    id: 7,
    name: t("coffee"),
    description:
      currentLanguage === "kz"
        ? "Ароматты кофе әртүрлі дайындау тәсілдерімен"
        : currentLanguage === "ru"
        ? "Ароматный кофе различных способов приготовления"
        : "Aromatic coffee with various brewing methods",
    price: "800 ₸",
    category: t("beverages"),
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    prepTime: "5 min",
  },
  {
    id: 7,
    name: t("coffee"),
    description:
      currentLanguage === "kz"
        ? "Ароматты кофе әртүрлі дайындау тәсілдерімен"
        : currentLanguage === "ru"
        ? "Ароматный кофе различных способов приготовления"
        : "Aromatic coffee with various brewing methods",
    price: "800 ₸",
    category: t("beverages"),
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    prepTime: "5 min",
  },
];
