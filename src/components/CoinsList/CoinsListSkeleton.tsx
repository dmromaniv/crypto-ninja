import Skeleton from "react-loading-skeleton";

const CoinsListSkeleton = () => {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {Array.from({ length: 10 }).map((_, index) => (
        <li key={index}>
          <Skeleton borderRadius={"0.375rem"} className="h-[190px] w-full" />
        </li>
      ))}
    </ul>
  );
};

export default CoinsListSkeleton;
