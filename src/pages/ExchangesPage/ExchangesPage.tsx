import MainLayout from "@/layouts/MainLayout";

import ExchangesSection from "@/components/Sections/ExchangesSection";

const ExchangesPage = () => {
  return (
    <MainLayout>
      <div className="my-8">
        <ExchangesSection />
      </div>
    </MainLayout>
  );
};

export default ExchangesPage;
