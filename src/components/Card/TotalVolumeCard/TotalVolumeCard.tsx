import { formatCurrency } from "@/utils/format";
import Card from "../Card";

const TotalVolumeCard = () => {
  return (
    <Card>
      <div className="mb-5 flex justify-between">
        <p className="flex items-center gap-x-2 text-lg font-medium">Total volume</p>
      </div>
      <div>{formatCurrency(2721226850772.63)}</div>
    </Card>
  );
};

export default TotalVolumeCard;
