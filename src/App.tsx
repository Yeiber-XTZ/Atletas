import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import AthleteGrid from "./components/AthleteGrid";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FilterBar />
        <AthleteGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
