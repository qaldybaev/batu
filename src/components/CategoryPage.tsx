import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { ArrowUp } from "lucide-react";
import { GiExitDoor } from "react-icons/gi";

const menuImages = [
  { src: "/menu2.png" },
  { src: "/menu.png" },
  { src: "/zavtrk1.png", category: "breakfast" },
  { src: "/zavtrk2.png", category: "breakfast" },
  { src: "/salat1.png", category: "salad" },
  { src: "/salat2.png", category: "salad" },
  { src: "/salat3.png", category: "salad" },
  { src: "/1food1.png", category: "first-course" },
  { src: "/1food2.png", category: "first-course" },
  { src: "/1food3.png", category: "first-course" },
  { src: "/1food4.png", category: "first-course" },
  { src: "/2food1.png", category: "second-course" },
  { src: "/2food2.png", category: "second-course" },
  { src: "/2food3.png", category: "second-course" },
  { src: "/2food4.png", category: "second-course" },
  { src: "/2food5.png", category: "second-course" },
  { src: "/kitayiski1.png", category: "second-course" },
  { src: "/kitayiski2.png", category: "second-course" },
  { src: "/2food6.png", category: "second-course" },
  { src: "/2food7.png", category: "second-course" },
  { src: "/na zakaz.png", category: "second-course" },
  { src: "/shashlik1.png", category: "kebab" },
  { src: "/shashlik2.png", category: "kebab" },
  { src: "/freesh.png", category: "kebab" },
  { src: "/steyk.png", category: "kebab" },
  { src: "/doner1.png", category: "doner" },
  { src: "/fasfood.png", category: "doner" },
  { src: "/pitssa1.png", category: "pizza" },
  { src: "/pitssa2.png", category: "pizza" },
  { src: "/pitssa3.png", category: "pizza" },
  { src: "/pitssa4.png", category: "pizza" },
  { src: "/pide.png", category: "pizza" },
  { src: "/sushi1.png", category: "sushi" },
  { src: "/shushi2.png", category: "sushi" },
  { src: "/sushi3.png", category: "sushi" },
  { src: "/sushi4.png", category: "sushi" },
  { src: "/basket.png", category: "basket" },
  { src: "/basket2.png", category: "basket" },
  { src: "/kombo.png", category: "combo" },
  { src: "/kombo2.png", category: "combo" },
  { src: "/set.png", category: "set" },
  { src: "/limonad1.png", category: "drinks" },
  { src: "/limonad2.png", category: "drinks" },
  { src: "/limonad3.png", category: "drinks" },
  { src: "/sumuzi.png", category: "drinks" },
  { src: "/kokteyl.png", category: "drinks" },
  { src: "/napitki.png", category: "drinks" },
  { src: "/chay.png", category: "tea" },
  { src: "/chay2.png", category: "tea" },
  { src: "/chay3.png", category: "tea" },
  { src: "/kofe.png", category: "coffee" },
  { src: "/kofe2.png", category: "coffee" },
  { src: "/kofe3.png", category: "coffee" },
  { src: "/pasudi.png" },
];

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [showScroll, setShowScroll] = useState(false);

  const filteredImages =
    id === "all" ? menuImages : menuImages.filter((img) => img.category === id);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className={`${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen transition-colors`}
    >
      {/* Home button */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-4 right-4 z-50  bg-gray-900 text-white p-2 rounded-full shadow hover:bg-orange-600 transition w-10 h-10 flex items-center justify-center"
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
                alt={img.category}
                className="w-full h-auto hover:scale-105 transition-transform"
                loading="lazy"
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
