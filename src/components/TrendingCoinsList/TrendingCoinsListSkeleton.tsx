import Skeleton from "react-loading-skeleton";

interface TrendingCoinsListSkeletonProps {
  count: number;
}

const TrendingCoinsListSkeleton = ({ count }: TrendingCoinsListSkeletonProps) => {
  return <Skeleton borderRadius={"0.375rem"} className="h-14 w-full" count={count} />;
};

export default TrendingCoinsListSkeleton;
