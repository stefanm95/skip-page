import React, { useState } from "react";

function SkipCard({ skip, selected, onSelect, isFavorite, onToggleFavorite }) {
  const size = Number(skip.size) || 0;
  let imageUrl = "";
  const [imgLoaded, setImgLoaded] = useState(false);

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
      className={`bg-gradient-to-br from-[#232323] to-[#1C1C1C] bg-[url('/pattern.svg')] bg-repeat rounded-2xl shadow-2xl 
        p-2 xs:p-3 sm:p-6
        transition-transform duration-200 hover:-translate-y-1 hover:shadow-3xl border-2 relative w-full flex flex-col items-center cursor-pointer
        ${
          selected
            ? "border-4 border-transparent bg-clip-padding bg-gradient-to-r from-[#0037C1] to-[#00C1D4] sm:scale-105 text-white z-10"
            : "border-[#2A2A2A] hover:border-[#00C1D4] text-white hover:shadow-xl"
        } focus:outline-none focus:ring-2 focus:ring-[#00C1D4]`}
      style={{ willChange: "transform" }}
      onClick={onSelect}
      tabIndex={0}
      role="button"
      aria-pressed={selected}
      aria-label={`Select ${skip.size} yard skip${selected ? ", selected" : ""}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      <div className="relative w-full mb-0">
        {/* Skeleton Loader */}
        {!imgLoaded && (
          <div className="absolute inset-0 w-full h-28 xs:h-32 sm:h-40 md:h-48 bg-gradient-to-br from-[#232323] to-[#1C1C1C] rounded-xl animate-pulse z-10" />
        )}
        <img
          src={imageUrl}
          alt={
            size < 6
              ? "4 Yard Skip"
              : size >= 6 && size <= 16
              ? "5 Yard Skip"
              : "20 Yard Skip"
          }
          className={`w-full h-28 xs:h-32 sm:h-40 md:h-48 object-cover rounded-xl border border-[#2A2A2A] shadow-lg transition-opacity duration-500 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
        />
        {/* Size badge top right */}
        <span className="absolute top-2 right-2 bg-gradient-to-r from-[#0037C1] to-[#00C1D4] text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg border border-[#232323]">
          {skip.size} Yards
        </span>
        {/* Favorite button, now further left */}
        <button
          className="absolute top-2 right-23 p-1 rounded-full bg-black/60 hover:bg-[#0037C1] transition-colors z-20"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(skip.id);
          }}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 ${
              isFavorite ? "text-red-500 fill-red-500" : "text-white"
            }`}
            fill={isFavorite ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" />
          </svg>
        </button>
        {/* Recommended badge top center */}
        {skip.recommended && (
          <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00C1D4] to-[#0037C1] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20">
            Recommended
          </span>
        )}
        {/* Not allowed on road badge bottom left */}
        {!skip.allowed_on_road && (
          <>
            <div
              className="absolute bottom-2 left-2 bg-black/90 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center gap-2 shadow"
              title="This skip cannot be placed on the road. Click for more info about permits."
            >
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
              <span className="text-xs font-medium text-yellow-500">
                Not Allowed On The Road
              </span>
            </div>
            {/* Info icon bottom right */}
            <a
              href="/permit-info"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 flex items-center justify-center rounded-full bg-black/90 hover:bg-black transition-colors w-6 h-6 shadow group"
              tabIndex={0}
              aria-label="Learn more about skip permits"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="10" y2="16" />
                <circle cx="12" cy="7" r="1" />
              </svg>
              <span className="absolute bottom-8 right-0 w-40 bg-black text-yellow-500 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-lg">
                Learn more about skip permits
              </span>
            </a>
          </>
        )}
        {selected && (
          <div className="absolute top-2 left-2 bg-[#0037C1] rounded-full p-1 shadow-lg animate-bounce">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
      <div className="text-lg xs:text-xl sm:text-2xl font-extrabold mb-2 text-center tracking-tight">
        {skip.name}
      </div>
      <div className="mb-2 xs:mb-3 text-center text-gray-200 text-xs xs:text-sm sm:text-base">
        {skip.description}
      </div>
      <div className="flex flex-col items-start gap-1 xs:gap-2 mb-6 xs:mb-8 w-full">
        <span className="text-base xs:text-lg sm:text-2xl font-extrabold text-white">
          {skip.size} Yard Skip
        </span>
        <span className="text-xs xs:text-sm text-gray-200 font-semibold">
          {skip.hire_period_days} days hire period
        </span>
      </div>
      <div className="text-[#00C1D4] font-bold text-base xs:text-lg mb-3 xs:mb-4 w-full">
        £{priceWithVAT}{" "}
        <span className="text-xs text-gray-200">(inc. VAT)</span>
      </div>
      <button
        className={`px-3 xs:px-4 py-1.5 xs:py-2 rounded transition font-semibold w-full flex items-center justify-center gap-2 cursor-pointer
          ${
            selected
              ? "bg-gradient-to-r from-[#0037C1] to-[#00C1D4] hover:from-[#002da1] hover:to-[#00b3c1] text-white"
              : "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#00C1D4]"
          }
          focus:outline-none focus:ring-2 focus:ring-[#00C1D4]`}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
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
