import Skeleton from "react-loading-skeleton";

interface TrendingCoinsListSkeletonProps {
  count: number;
}

const TrendingCoinsListSkeleton = ({ count }: TrendingCoinsListSkeletonProps) => {
  return (
    <ul>
      {Array.from({ length: count }).map((_, index) => (
        <li key={index}>
          <Skeleton borderRadius={"0.375rem"} className="h-14 w-full" />
        </li>
      ))}
    </ul>
  );
};

export default TrendingCoinsListSkeleton;
