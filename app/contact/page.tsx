// app/page.tsx


import Headers from "../components/Headers";


import Cards from "../components/Cards";
import Footer from "../components/Footer";

export default function Home() {
  // Défini les articles ici si tu ne peux pas utiliser getStaticProps
  

  return (
    <main className="flex flex-col p-0">
      <Headers />

   
      {/* News */}
      <Cards />
      <Footer />
    </main>
  );
}
