import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { ArrowUp } from "lucide-react";
import { GiExitDoor } from "react-icons/gi";

const menuImages = [
  { src: "/menu2.webp" },
  { src: "/menu.webp" },
  { src: "/zavtrk1.webp", category: "breakfast" },
  { src: "/zavtrk2.webp", category: "breakfast" },
  { src: "/salat1.webp", category: "salad" },
  { src: "/salat2.webp", category: "salad" },
  { src: "/salat3.webp", category: "salad" },
  { src: "/1food1.webp", category: "first-course" },
  { src: "/1food2.webp", category: "first-course" },
  { src: "/1food3.webp", category: "first-course" },
  { src: "/1food4.webp", category: "first-course" },
  { src: "/2food1.webp", category: "second-course" },
  { src: "/2food2.webp", category: "second-course" },
  { src: "/2food3.webp", category: "second-course" },
  { src: "/2food4.webp", category: "second-course" },
  { src: "/2food5.webp", category: "second-course" },
  { src: "/kitayiski1.webp", category: "second-course" },
  { src: "/kitayiski2.webp", category: "second-course" },
  { src: "/2food6.webp", category: "second-course" },
  { src: "/2food7.webp", category: "second-course" },
  { src: "/na zakaz.webp", category: "second-course" },
  { src: "/shashlik1.webp", category: "kebab" },
  { src: "/shashlik2.webp", category: "kebab" },
  { src: "/freesh.webp", category: "kebab" },
  { src: "/steyk.webp", category: "kebab" },
  { src: "/doner1.webp", category: "doner" },
  { src: "/fasfood.webp", category: "doner" },
  { src: "/pitssa1.webp", category: "pizza" },
  { src: "/pitssa2.webp", category: "pizza" },
  { src: "/pitssa3.webp", category: "pizza" },
  { src: "/pitssa4.webp", category: "pizza" },
  { src: "/pide.webp", category: "pizza" },
  { src: "/sushi1.webp", category: "sushi" },
  { src: "/shushi2.webp", category: "sushi" },
  { src: "/sushi3.webp", category: "sushi" },
  { src: "/sushi4.webp", category: "sushi" },
  { src: "/basket.webp", category: "basket" },
  { src: "/basket2.webp", category: "basket" },
  { src: "/kombo.webp", category: "combo" },
  { src: "/kombo2.webp", category: "combo" },
  { src: "/set.webp", category: "set" },
  { src: "/limonad1.webp", category: "drinks" },
  { src: "/limonad2.webp", category: "drinks" },
  { src: "/limonad3.webp", category: "drinks" },
  { src: "/sumuzi.webp", category: "drinks" },
  { src: "/kokteyl.webp", category: "drinks" },
  { src: "/napitki.webp", category: "drinks" },
  { src: "/chay.webp", category: "tea" },
  { src: "/chay2.webp", category: "tea" },
  { src: "/chay3.webp", category: "tea" },
  { src: "/kofe.webp", category: "coffee" },
  { src: "/kofe2.webp", category: "coffee" },
  { src: "/kofe3.webp", category: "coffee" },
  { src: "/pasudi.webp" },
];

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [showScroll, setShowScroll] = useState(false);

  // ✅ Rasmlarni oldindan yuklab olish (preload)
  useEffect(() => {
    menuImages.forEach((img) => {
      const image = new Image();
      image.src = img.src;
    });
  }, []);

  const filteredImages =
    id === "all" ? menuImages : menuImages.filter((img) => img.category === id);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className={`${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen transition-colors`}
    >
      {/* Home button */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-4 right-4 z-50 bg-gray-900 text-white p-2 rounded-full shadow hover:bg-orange-600 transition w-10 h-10 flex items-center justify-center"
        title="Home"
      >
        <GiExitDoor size={20} />
      </button>

      <div className="p-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow">
              <img
                src={img.src}
                alt={img.category || "menu image"}
                loading="lazy"  // ✅ sekin yuklansin
                className="w-full h-auto hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white p-3 rounded-full shadow hover:bg-orange-600 transition"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default CategoryPage;
