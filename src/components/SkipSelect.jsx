import { useEffect, useState } from "react";
import { fetchSkips } from "../api/skipService";
import SkipCard from "./SkipCard";
import StickyFooter from "./Footer";

function SkipSelect() {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [filter, setFilter] = useState("All");
  const [favorites, setFavorites] = useState([]);
//   const [compare, setCompare] = useState([]);

  useEffect(() => {
    fetchSkips().then((data) => {
      setSkips(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-center">Loading skips...</div>;

  // Example: categorize by size (adjust logic as needed)
  const getSizeCategory = (size) => {
    if (size <= 6) return "Small";
    if (size > 6 && size <= 10) return "Medium";
    return "Large";
  };

  // Get unique categories from skips
  const categories = ["All", ...Array.from(new Set(skips.map(s => getSizeCategory(Number(s.size)))) )];

  // Filter skips based on selected filter
  const filteredSkips = filter === "All"
    ? skips
    : skips.filter(s => getSizeCategory(Number(s.size)) === filter);

  return (
    <>
      {/* Dynamic filter UI */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-semibold transition cursor-pointer
              ${filter === cat ? "bg-[#0037C1] text-white" : "bg-[#2A2A2A] text-white hover:bg-[#0037C1]/80"}
            `}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="px-2 sm:px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible">
        {filteredSkips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            selected={selectedId === skip.id}
            onSelect={() => setSelectedId(selectedId === skip.id ? null : skip.id)}
            onToggleFavorite={id =>
              setFavorites(favs =>
                favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]
              )
            }
            isFavorite={favorites.includes(skip.id)}
          />
        ))}
      </div>
      <div className="h-32 sm:h-16" />
      <StickyFooter
        skip={skips.find((s) => s.id === selectedId)}
        onBack={() => { /* your back logic */ }}
        onContinue={() => { /* your continue logic */ }}
      />
    </>
  );
}

export default SkipSelect;
