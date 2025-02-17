import MainLayout from "@/layouts/MainLayout";
import CoinsSection from "@/components/Sections/CoinsSection";
import TrendingSection from "@/components/Sections/TrendingSection";
import CoinsTitle from "@/components/CoinsTitle";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="my-8 flex w-full flex-col gap-y-10">
        <CoinsTitle />
        <TrendingSection />
        <CoinsSection />
      </div>
    </MainLayout>
  );
};

export default HomePage;
