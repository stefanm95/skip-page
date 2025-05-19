import SkipSelect from "../components/SkipSelect";
import ProgressHeader from "../components/Header";

function SkipPage() {
  return (
    <main className="w-full overflow-x-hidden max-w-7xl mx-auto py-6">
      <ProgressHeader activeStep="Select Skip" />
      <h1 className="text-3xl font-bold mb-6 text-center">
        Choose Your Skip Size
      </h1>
      <h3 className="text-xl text-gray-400 mb-6 text-center">
        Select the skip size that best suits your needs
      </h3>
      <SkipSelect />
    </main>
  );
}

export default SkipPage;
