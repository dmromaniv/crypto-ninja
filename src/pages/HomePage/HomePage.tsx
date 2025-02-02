import MainLayout from "@/layouts/MainLayout";
import CoinsSection from "@/components/Sections/CoinsSection/CoinsSection";
import TrendingSection from "@/components/Sections/TrendingSection";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="mt-4 mb-10 flex justify-start text-start sm:max-w-[462px] sm:text-end">
        <div className="relative text-xl font-medium text-accent-fg sm:text-3xl">
          <h1>Cryptocurrency Market Prices & Capitalization</h1>
          <span className="absolute bottom-0 left-0 hidden text-xl font-light text-accent-fg/70 sm:flex">
            We are listing <span className="px-1 text-primary"> 17002 </span> coins
          </span>
        </div>
      </div>

      <TrendingSection />

      <div className="mt-10">
        <CoinsSection />
      </div>
    </MainLayout>
  );
};

export default HomePage;
