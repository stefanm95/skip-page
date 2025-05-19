import { useEffect, useState } from "react";
import { fetchSkips } from "../api/skipService";
import SkipCard from "./SkipCard";
import StickyFooter from "./Footer";

function SkipSelect() {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchSkips().then((data) => {
      console.log("Fetched skips:", data);
      setSkips(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-center">Loading skips...</div>;

  return (
    <>
      <div className="grid gap-6 p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            selected={selectedId === skip.id}
            onSelect={() =>
              setSelectedId(selectedId === skip.id ? null : skip.id)
            }
          />
        ))}
      </div>
      <div className="h-16" /> {/* Spacer for footer, adjust h-16 as needed */}
      <StickyFooter
        skip={skips.find((s) => s.id === selectedId)}
        onBack={() => {
          /* your back logic */
        }}
        onContinue={() => {
          /* your continue logic */
        }}
      />
    </>
  );
}

export default SkipSelect;
