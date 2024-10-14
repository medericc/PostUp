"use client";
import { useState } from "react";

interface Article {
  id: number;
  title: string;
  content: string;
  date: string; // Format: "YYYY-MM-DD"
}

const articles: Article[] = [
  { id: 1, title: "Le basketball féminin en Europe", content: "Cet article parle du basketball féminin en Europe et de son évolution.", date: "2024-10-12" },
  { id: 2, title: "Les championnats nationaux", content: "Une analyse des différents championnats nationaux de basketball féminin.", date: "2024-09-30" },
  { id: 3, title: "Les performances de l'équipe de France", content: "Retour sur les performances de l'équipe de France féminine lors des dernières compétitions.", date: "2024-09-15" },
];


const Search = () => {
  const [searchTerm, setSearchTerm] = useState(""); // État pour stocker la recherche
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]); // État pour stocker les articles filtrés

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    
    // Filtrer les articles qui contiennent le mot-clé et les trier par date décroissante
    const filtered = articles
      .filter(
        (article) =>
          article.title.toLowerCase().includes(value) ||
          article.content.toLowerCase().includes(value)
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Trier du plus récent au plus ancien
    
    setFilteredArticles(filtered);
  };

  return (
    <div className="container mx-auto p-8 mt-20 bg-[#723a29]">
      <h1 className="text-2xl font-bold mb-4">Recherche d'articles</h1>

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher un mot dans les articles..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 mb-6 border border-gray-300 rounded text-black"
      />

      {/* Affichage des articles filtrés */}
      {searchTerm ? (
        filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="mb-4 p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold">{article.title}</h2>
              <p>{article.content}</p>
              <p className="text-sm text-gray-500">Publié le {article.date}</p> {/* Afficher la date de publication */}
            </div>
          ))
        ) : (
          <p>Aucun article trouvé pour "{searchTerm}".</p>
        )
      ) : null}
    </div>
  );
};


export default Search;
