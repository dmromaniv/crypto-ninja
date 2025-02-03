const CoinsTableHead = () => {
  return (
    <tr>
      <th className="w-[5%]">#</th>
      <th className="w-[35%]">Coin</th>
      <th>Price</th>
      <th className="w-[8%]">24h %</th>
      <th className="w-[8%]">7d %</th>
      <th className="w-[15%]">Market cap</th>
      <th className="w-[15%]">Last 7 Days</th>
    </tr>
  );
};

export default CoinsTableHead;
