import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Banner: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const bannerContent = document.querySelector(".banner-content");

    if (bannerContent) {
      // Apply classes to trigger animation
      bannerContent.classList.add("opacity-100", "translate-y-0");
    }
  }, []);

  return (
    <div className="relative w-full max-w-full h-52 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
      <div className="text-center transform translate-y-5 opacity-0 transition-all duration-1000 delay-500 banner-content">
        <h1 className="text-2xl font-bold mb-3 headline">
          Discover Amazing Deals!
        </h1>
        <p className="text-lg mb-5 subtext">
          Shop now and save big on your favorite items.
        </p>
        <button
          onClick={() => navigate('/discounts')}
          className="inline-block px-6 py-2 bg-red-600 text-white font-bold rounded-md shadow-md transition-transform transform hover:bg-green-300 hover:scale-125"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;