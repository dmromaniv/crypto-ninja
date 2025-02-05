import Skeleton from "react-loading-skeleton";

import Card from "../Card";

const TotalVolumeSkeleton = () => {
  return (
    <Card>
      <p className="mb-5 text-lg font-medium">Total volume</p>
      <Skeleton className="h-7 w-full" />
    </Card>
  );
};

export default TotalVolumeSkeleton;
