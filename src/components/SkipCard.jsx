function SkipCard({ skip, selected, onSelect }) {
  const size = Number(skip.size) || 0;
  const imageUrl =
    size < 20
      ? "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
      : "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg";

  const basePrice = Number(skip.price_before_vat) || 0;
  const priceWithVAT = (basePrice * 1.2).toFixed(2);

  return (
    <div
      className={`w-full rounded-xl p-8 shadow-lg flex flex-col items-center cursor-pointer transition border-2 ${
        selected
          ? "border-blue-500 bg-[#232323] text-white"
          : "border-[#2A2A2A] hover:border-[#0037C1]/50bg-[#1C1C1C] text-white cursor-pointer hover:shadow-xl"
      }`}
      onClick={onSelect}
    >
      <img
        src={imageUrl}
        alt={size < 20 ? "4 Yard Skip" : "20 Yard Skip"}
        className="w-full h-40 md:h-56 object-cover rounded-md mb-6"
      />
      <div className="text-2xl font-bold mb-2 text-center">{skip.name}</div>
      <div className="mb-3 text-center text-gray-300">{skip.description}</div>
      <div className="mb-6 text-green-400 font-bold text-lg">
        £{priceWithVAT}{" "}
        <span className="text-xs text-gray-400">(inc. VAT)</span>
      </div>
      <button
        className={`px-4 py-2 rounded transition font-semibold w-full flex items-center justify-center gap-2 ${
          selected
            ? "bg-[#0037C1] hover:bg-[#002da1] text-white"
            : "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1] cursor-default"
        }`}
        disabled={!selected}
      >
        {selected ? (
          "Selected"
        ) : (
          <>
            <span>Select This Skip</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </>
        )}
      </button>
    </div>
  );
}

export default SkipCard;
