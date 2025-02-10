import { Link } from "react-router-dom";

import LogoIcon from "@/assets/icons/LogoIcon";

const Footer = () => {
  return (
    <footer className="bg-accent dark:bg-accent-dark">
      <div className="container mx-auto max-w-[1300px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start gap-y-6 md:flex-row md:justify-between">
          <div className="flex w-full items-start justify-start gap-x-5 md:items-center">
            <Link to="/">
              <LogoIcon width={80} height={80} />
            </Link>

            <div className="flex flex-grow flex-col gap-y-6 md:flex-row md:justify-between">
              <p className="text-lg font-bold text-accent-fg dark:text-fg-dark">
                Crypto<span className="text-primary">Ninja</span>
                <br />
                <span className="text-sm font-normal">
                  track crypto prices, trends, and market insights🚀
                </span>
              </p>
              <div className="flex flex-col gap-y-2 text-sm text-accent-fg/80 dark:text-fg-dark/80">
                <p>Copyright © 2025. All rights reserved.</p>
                <p className="flex gap-x-2">
                  <span>Powered by</span>
                  <a
                    href="https://www.coingecko.com/en/api"
                    target="_blank"
                    className="text-[#4BCC00] hover:underline"
                  >
                    CoinGecko API
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
