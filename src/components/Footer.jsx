function StickyFooter({ skip, onBack, onContinue }) {
  if (!skip) return null;

  const size = skip.size;
  const basePrice = Number(skip.price_before_vat) || 0;
  const priceWithVAT = (basePrice * 1.2).toFixed(2);
  const hirePeriod = skip.hire_period_days;

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#181818] border-t border-[#232323] z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Left info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-white">
          <span className="font-bold text-lg">{size} Yard Skip</span>
          <span className="text-blue-800 font-bold text-lg">£{priceWithVAT} <span className="text-xs text-gray-400">(inc. VAT)</span></span>
          <span className="text-gray-400 text-sm">{hirePeriod} days hire</span>
        </div>
        {/* Right buttons */}
        <div className="flex gap-2">
          <button
            className="px-5 py-2 rounded bg-[#232323] text-white font-semibold hover:bg-[#181818] border border-[#232323] transition"
            onClick={onBack}
          >
            Back
          </button>
          <button
            className="px-5 py-2 rounded bg-[#0037C1] text-white font-semibold hover:bg-[#002da1] transition"
            onClick={onContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </footer>
  );
}

export default StickyFooter;