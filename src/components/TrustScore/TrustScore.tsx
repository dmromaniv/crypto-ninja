import clsx from "clsx";

interface TrustScoreProps {
  score: number;
}

const TrustScore = ({ score }: TrustScoreProps) => {
  return (
    <span
      className={clsx(
        "flex w-15 items-center justify-center rounded-md p-1 font-medium text-fg-dark",
        score > 5 && "bg-success",
        score <= 5 && "bg-warm",
        score < 3 && "bg-destructive"
      )}
    >
      {score} / 10
    </span>
  );
};

export default TrustScore;
