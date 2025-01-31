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
      <main>{children}</main>
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
