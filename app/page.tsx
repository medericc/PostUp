// app/page.tsx

import Caroussel from "./components/Caroussel";
import Headers from "./components/Headers";
import Stats from "./components/Stats";

import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function Home() {
  // Défini les articles ici si tu ne peux pas utiliser getStaticProps
  const articles = [
    {
      title: "Premier Article",
      image: "/images/article1.jpg",
    },
    {
      title: "Deuxième Article",
      image: "/images/article2.jpg",
    },
    {
      title: "Troisième Article",
      image: "/images/article3.jpg",
    },
    {
      title: "Quatrième Article",
      image: "/images/article4.jpg",
    },
    {
      title: "Cinquième Article",
      image: "/images/article5.jpg",
    },
  ];

  return (
    <main className="flex flex-col p-0">
      <Headers />
      {/* Statistiques */}
      <Stats />
      {/* Header avec nom et drapeau */}
      <Caroussel articles={articles} />
      {/* News */}
    
      <Footer />
    </main>
  );
}
