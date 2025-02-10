import Skeleton from "react-loading-skeleton";

const CoinsListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Skeleton borderRadius={"0.375rem"} className="h-[190px]" count={5} />
      <Skeleton borderRadius={"0.375rem"} className="h-[190px]" count={5} />
    </div>
  );
};

export default CoinsListSkeleton;
