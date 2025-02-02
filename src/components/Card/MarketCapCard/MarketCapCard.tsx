import { formatCurrency } from "@/utils/format";
import Card from "../Card";

const MarketCapCard = () => {
  return (
    <Card>
      <div className="mb-5 flex justify-between">
        <p className="flex items-center gap-x-2 text-lg font-medium">Market cap</p>
      </div>
      <div>{formatCurrency(2721226850772.63)}</div>
    </Card>
  );
};

export default MarketCapCard;
