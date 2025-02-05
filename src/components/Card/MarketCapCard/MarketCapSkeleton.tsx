import Skeleton from "react-loading-skeleton";

import Card from "../Card";

const MarketCapSkeleton = () => {
  return (
    <Card>
      <p className="mb-5 text-lg font-medium">Market cap</p>
      <Skeleton className="h-7 w-full" />
    </Card>
  );
};

export default MarketCapSkeleton;
