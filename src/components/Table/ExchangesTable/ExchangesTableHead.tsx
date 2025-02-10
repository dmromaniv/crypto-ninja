const ExchangesTableHead = () => {
  return (
    <tr>
      <th>#</th>
      <th className="w-[33%]">Exchange</th>
      <th className="w-[5%]">Trust Score</th>
      <th className="w-[25%]">Country</th>
      <th className="w-[5%]">Established</th>
      <th>24h Volume (Normalized)</th>
      <th className="w-[18%]">24h Volume</th>
    </tr>
  );
};

export default ExchangesTableHead;
