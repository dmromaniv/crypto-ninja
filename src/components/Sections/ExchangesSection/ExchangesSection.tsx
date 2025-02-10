import CoinsPagination from "@/components/CoinsPagination";

import ExchangesTableSkeleton from "@/components/Table/ExchangesTable/ExchangesTableSkeleton";
import ExchangesTable from "@/components/Table/ExchangesTable";
import ExchangesList from "@/components/CardsList/ExchangesList";
import CardsListSkeleton from "@/components/CardsList/CardsListSkeleton";

const exchanges = [
  {
    id: "binance",
    name: "Binance",
    year_established: 2017,
    country: "Cayman Islands",
    description:
      "One of the world’s largest cryptocurrency exchanges by trading volume, offering a wide range of services including spot, futures, and staking options.",
    url: "https://www.binance.com/",
    image: "https://coin-images.coingecko.com/markets/images/52/small/binance.jpg?1706864274",
    has_trading_incentive: false,
    trust_score: 10,
    trust_score_rank: 1,
    trade_volume_24h_btc: 187053.98031383075,
    trade_volume_24h_btc_normalized: 122443.68266976485,
  },
  {
    id: "bybit_spot",
    name: "Bybit",
    year_established: 2018,
    country: "British Virgin Islands",
    description:
      "Bybit is the world’s second-largest cryptocurrency exchange by trading volume, serving a global community of over 60 million users. Founded in 2018, Bybit is redefining openness in the decentralized world by creating a simpler, open and equal ecosystem for everyone. With a strong focus on Web3, Bybit partners strategically with leading blockchain protocols to provide robust infrastructure and drive on-chain innovation. Renowned for its secure custody, diverse marketplaces, intuitive user experience, and advanced blockchain tools, Bybit bridges the gap between TradFi and DeFi, empowering builders, creators, and enthusiasts to unlock the full potential of Web3. Discover the future of decentralized finance at Bybit.com.",
    url: "https://www.bybit.com",
    image: "https://coin-images.coingecko.com/markets/images/698/small/bybit_spot.png?1706864649",
    has_trading_incentive: false,
    trust_score: 10,
    trust_score_rank: 2,
    trade_volume_24h_btc: 57811.49546932196,
    trade_volume_24h_btc_normalized: 41616.55994707943,
  },
];

const ExchangesSection = () => {
  const isLoading = false;
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-xl font-medium text-accent-fg sm:text-3xl dark:text-accent-fg-dark/90">
          Top Crypto Exchanges
        </h1>
        <p>ranked by Trust Score</p>
      </div>

      <div className="hidden lg:block">
        {isLoading ? <ExchangesTableSkeleton /> : <ExchangesTable exchanges={exchanges || []} />}
      </div>
      <div className="lg:hidden">
        {isLoading ? <CardsListSkeleton /> : <ExchangesList exchanges={exchanges || []} />}
      </div>

      <div className="mt-8">
        <CoinsPagination />
      </div>
    </section>
  );
};

export default ExchangesSection;
