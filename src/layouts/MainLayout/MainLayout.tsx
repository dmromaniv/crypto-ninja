import { ReactNode } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
