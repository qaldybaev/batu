import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectMenu: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/category/all");
  }, [navigate]);

  return <p className="text-center mt-20 text-gray-700">Loading menu...</p>;
};

export default RedirectMenu;
