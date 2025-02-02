import { ReactNode } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GlobalMarket from "@/components/GlobalMarket";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <GlobalMarket />
        {children}
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
