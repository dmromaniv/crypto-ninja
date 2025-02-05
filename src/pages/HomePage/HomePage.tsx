import MainLayout from "@/layouts/MainLayout";
import CoinsSection from "@/components/Sections/CoinsSection";
import TrendingSection from "@/components/Sections/TrendingSection";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="my-8 flex w-full flex-col gap-y-10">
        <div className="flex justify-start text-start sm:max-w-[462px] sm:text-end">
          <div className="relative text-xl font-medium text-accent-fg sm:text-3xl dark:text-accent-fg-dark/90">
            <h1>Cryptocurrency Market Prices & Capitalization</h1>
            <span className="absolute bottom-0 left-0 hidden text-xl font-light text-accent-fg/70 sm:flex dark:text-accent-fg-dark/80">
              We are listing <span className="px-1 text-primary"> 17002 </span> coins
            </span>
          </div>
        </div>
        <TrendingSection />
        <CoinsSection />
      </div>
    </MainLayout>
  );
};

export default HomePage;
