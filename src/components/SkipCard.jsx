function SkipCard({ skip, selected, onSelect }) {
  const size = Number(skip.size) || 0;
  let imageUrl = "";

  if (size < 6) {
    imageUrl =
      "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg";
  } else if (size >= 6 && size <= 16) {
    imageUrl =
      "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg";
  } else {
    imageUrl =
      "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg";
  }

  const basePrice = Number(skip.price_before_vat) || 0;
  const priceWithVAT = (basePrice * 1.2).toFixed(2);

  return (
    <div
      className={`w-full rounded-xl p-8 shadow-lg flex flex-col items-center cursor-pointer transition border-2 ${
        selected
          ? "border-blue-500 bg-[#232323] text-white"
          : "border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white cursor-pointer hover:shadow-xl"
      }`}
      onClick={onSelect}
    >
      <div className="relative w-full mb-2">
        <img
          src={imageUrl}
          alt={
            size < 6
              ? "4 Yard Skip"
              : size >= 6 && size <= 16
              ? "5 Yard Skip"
              : "20 Yard Skip"
          }
          className="w-full h-40 md:h-56 object-cover rounded-md"
        />
        {/* Size badge top right */}
        <span className="absolute top-2 right-2 bg-[#0037C1] text-white px-3 py-1 rounded text-xs font-semibold shadow-lg">
          {skip.size} Yards
        </span>
        {/* Not allowed on road badge bottom left */}
        {!skip.allowed_on_road && (
          <div className="absolute bottom-2 left-2 bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-yellow-500 shrink-0"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            <span className="text-xs font-medium text-yellow-500">Not Allowed On The Road</span>
          </div>
        )}
      </div>
      <div className="text-2xl font-bold mb-2 text-center">{skip.name}</div>
      <div className="mb-3 text-center text-gray-300">{skip.description}</div>
      <div className="flex flex-col items-start gap-2 mb-6 w-full">
        <span className="text-2xl font-extrabold text-white">
          {skip.size} Yard Skip
        </span>
        <span className="text-sm text-gray-400 font-semibold">
          {skip.hire_period_days} days hire period
        </span>
      </div>
      <div className="text-blue-800 font-bold text-lg mb-4 w-full">
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
