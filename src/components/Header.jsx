import React from 'react';

const steps = [
  {
    label: "Postcode",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  },
  {
    label: "Waste Type",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 6h18"></path>
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
        <line x1="10" x2="10" y1="11" y2="17"></line>
        <line x1="14" x2="14" y1="11" y2="17"></line>
      </svg>
    ),
  },
  {
    label: "Select Skip",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
        <path d="M15 18H9"></path>
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
        <circle cx="17" cy="18" r="2"></circle>
        <circle cx="7" cy="18" r="2"></circle>
      </svg>
    ),
  },
  {
    label: "Permit Check",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
      </svg>
    ),
  },
  {
    label: "Choose Date",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
      </svg>
    ),
  },
  {
    label: "Payment",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
        <line x1="2" x2="22" y1="10" y2="10"></line>
      </svg>
    ),
  },
];

function ProgressHeader({ activeStep = "Select Skip" }) {
  // Find the index of the active step
  const activeIdx = steps.findIndex((s) => s.label === activeStep);

  return (
    <>
      {/* Mobile: show only active step */}
      <nav className="flex sm:hidden w-full max-w-5xl mx-auto mb-4 px-2">
        <div className="flex items-center gap-2">
          {steps[activeIdx].icon}
          <span className="ml-2 text-white font-semibold">{steps[activeIdx].label}</span>
        </div>
      </nav>
      {/* Desktop: show full progress header */}
      <nav className="hidden sm:block w-full max-w-5xl mx-auto mb-8 px-2">
        <div className="flex items-center">
          {steps.map((step, idx) => {
            // Determine step state
            const isActive = idx === activeIdx;
            const isCompleted = idx < activeIdx;
            const isDisabled = idx > activeIdx;

            // Line color logic
            let lineColor = "bg-[#2A2A2A]";
            if (isCompleted) lineColor = "bg-[#0037C1]";
            if (isActive) lineColor = "bg-[#0037C1]";

            return (
              <React.Fragment key={step.label}>
                <button
                  disabled={isDisabled}
                  className={`flex items-center whitespace-nowrap transition-colors px-0 py-0
                    ${isActive || isCompleted ? "text-[#0037C1] hover:text-[#0037C1]" : "text-white/60"}
                    ${isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                  `}
                >
                  {step.icon}
                  <span className="ml-2 text-white">{step.label}</span>
                </button>
                {idx < steps.length - 1 && (
                  <div
                    className={`w-16 h-px mx-2 ${lineColor} transition-colors`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default ProgressHeader;
