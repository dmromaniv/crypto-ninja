import MainLayout from "@/layouts/MainLayout";

import CoinChartsSection from "@/components/Sections/CoinChartsSection";
import CoinInfo from "@/components/CoinInfo/CoinInfo";

const CoinPage = () => {
  return (
    <MainLayout>
      <div className="my-8 grid gap-x-4 gap-y-10 md:grid-cols-[1fr_3fr]">
        <CoinInfo />
        <CoinChartsSection />
      </div>
    </MainLayout>
  );
};

export default CoinPage;
