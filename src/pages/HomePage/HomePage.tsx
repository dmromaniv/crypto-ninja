import CoinsTable from "@/components/Table/CoinsTable";

import MainLayout from "@/layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="mt-10">
        <CoinsTable />
      </div>
    </MainLayout>
  );
};

export default HomePage;
