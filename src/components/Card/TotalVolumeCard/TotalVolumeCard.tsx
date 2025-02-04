import { formatCurrency } from "@/utils/format";
import Card from "../Card";

interface TotalVolumeCardProps {
  totalVolume: number;
}

const TotalVolumeCard = ({ totalVolume }: TotalVolumeCardProps) => {
  return (
    <Card>
      <div className="mb-5 flex justify-between">
        <p className="flex items-center gap-x-2 text-lg font-medium">Total volume</p>
      </div>
      <p className="text-lg font-medium">
        {formatCurrency({ number: totalVolume, notation: "compact" })}
      </p>
    </Card>
  );
};

export default TotalVolumeCard;
