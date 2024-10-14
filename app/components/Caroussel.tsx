"use client";
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Article = {
  title: string;
  image: string;
};

interface CarousselProps {
  articles: Article[];
}

export default function Caroussel({ articles }: CarousselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * index;
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const width = containerRef.current.clientWidth;
        const newIndex = Math.round(scrollLeft / width);
        setCurrentIndex(newIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white bg-[#582e21]">
    {/* Texte animé en fond */}
   
  
    {/* Conteneur des images avec le scroll manuel */}
    <div
      className="absolute top-[25%] left-0 right-0 z-10 flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory bg-[#582e21]"
      ref={containerRef}
      style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
    >
      {articles.map((article, index) => (
        <div
          key={index}
          className="min-w-full p-8 flex justify-center items-center snap-center"
          style={{ minWidth: "100%" }}
        >
          <div
            className="bg-[#723a29] p-8 rounded-lg shadow-lg"  // Updated to a deep burgundy color
            style={{
              width: "100%",
              height: "25.75rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={400}
              className="object-cover w-full h-64"
            />
            <h2 className="text-center text-2xl font-bold uppercase">
              {article.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  
    {/* Dots pour naviguer entre les articles */}
    <div className="absolute bottom-40 w-full flex justify-center z-20">
      <div className="flex space-x-2">
        {articles.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            } cursor-pointer`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  </div>
  
  
  );
}

// Animation pour le texte en fond
const keyframesStyle = `
  @keyframes scrollText {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  .animate-scrollText {
    animation: scrollText 60s linear infinite;
  }
`;

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = keyframesStyle;
  document.head.appendChild(style);
}
