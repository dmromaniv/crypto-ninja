import { formatCurrency } from "@/utils/format";
import Card from "../Card";

interface MarketCapCardProps {
  marketCap: number;
}

const MarketCapCard = ({ marketCap }: MarketCapCardProps) => {
  return (
    <Card>
      <div className="mb-5 flex justify-between">
        <p className="flex items-center gap-x-2 text-lg font-medium">Market cap</p>
      </div>
      <p className="text-lg font-medium">
        {formatCurrency({ number: marketCap, notation: "compact" })}
      </p>
    </Card>
  );
};

export default MarketCapCard;
