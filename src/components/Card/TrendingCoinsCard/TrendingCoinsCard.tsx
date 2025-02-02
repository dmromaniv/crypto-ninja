import Card from "../Card";

import ChangePercentage from "@/components/ChangePercentage";

import { formatCurrency } from "@/utils/format";

const coins = [
  {
    id: "ket",
    coin_id: 53789,
    name: "Ket",
    symbol: "KET",
    market_cap_rank: 464,
    thumb: "https://coin-images.coingecko.com/coins/images/53789/standard/edfw.jpg?1737381234",
    small: "https://coin-images.coingecko.com/coins/images/53789/small/edfw.jpg?1737381234",
    large: "https://coin-images.coingecko.com/coins/images/53789/large/edfw.jpg?1737381234",
    slug: "ket",
    price_btc: 0.0000012384829783702772,
    score: 0,
    data: {
      price: 0.12641123355225528,
      price_btc: "0.000001238482978370277",
      price_change_percentage_24h: {
        aed: 56.25607998286921,
        ars: 56.32436855473736,
        aud: 56.96577251816248,
        bch: 63.86586724540773,
        bdt: 56.25607998286918,
        bhd: 56.2859287226614,
        bmd: 56.256079982869146,
        bnb: 60.23466851435029,
        brl: 56.55085221401508,
        btc: 60.29804651799541,
        cad: 57.922231468112685,
        chf: 56.77296841910599,
        clp: 56.297406637189,
        cny: 56.27782510240815,
        czk: 57.28551130350454,
        dkk: 57.165027179771734,
        dot: 61.0767389673191,
        eos: 57.35992850336024,
        eth: 62.78610815390263,
        eur: 57.15542671265901,
        gbp: 57.01566328776575,
        gel: 56.256079982869224,
        hkd: 56.23903437550959,
        huf: 57.2555837665749,
        idr: 56.78544244111621,
        ils: 56.232910986950735,
        inr: 56.542359026938726,
        jpy: 56.645127908232155,
        krw: 56.910353792452774,
        kwd: 56.30370235022368,
        lkr: 56.25607998286923,
        ltc: 64.02043686869668,
        mmk: 56.25607998286927,
        mxn: 57.04460593783923,
        myr: 56.2560799828692,
        ngn: 56.25607998286915,
        nok: 56.9257969627513,
        nzd: 57.27795096795427,
        php: 56.25609870546142,
        pkr: 56.256079982869245,
        pln: 57.13745585669261,
        rub: 56.247867246674886,
        sar: 56.25474685148156,
        sek: 57.174598432671054,
        sgd: 56.708205033270964,
        thb: 57.07201500787278,
        try: 55.62832584069478,
        twd: 56.90377897297355,
        uah: 56.25607998286921,
        usd: 56.256079982869146,
        vef: 56.2560799828691,
        vnd: 56.25607998286923,
        xag: 57.120917566149764,
        xau: 56.659411988885275,
        xdr: 56.25607998286921,
        xlm: 61.695171549206364,
        xrp: 61.752553448148426,
        yfi: 67.34664166827169,
        zar: 56.80792047885422,
        bits: 60.29804651799543,
        link: 64.26412617374046,
        sats: 60.29804651799543,
      },
      market_cap: "$125,405,807",
      market_cap_btc: "1228.418476103687",
      total_volume: "$10,731,854",
      total_volume_btc: "105.1427036114926",
      sparkline: "https://www.coingecko.com/coins/53789/sparkline.svg",
      content: {
        title: "What makes Ket unique?",
        description:
          "YellowCatDAO sets itself apart by integrating cutting-edge AI-driven trading mechanisms with a community-centered governance model. At its core, the project leverages an AI agent capable of executing trades across multiple blockchain networks, making it a pioneer in cross-chain AI trading. Unlike typical trading bots, this AI agent not only focuses on profitability but also strategically reinvests gains into the project’s treasury to ensure sustainable growth and support ongoing initiatives.",
      },
    },
  },

  {
    id: "mochi-thecatcoin",
    coin_id: 33083,
    name: "Mochi",
    symbol: "MOCHI",
    market_cap_rank: 975,
    thumb:
      "https://coin-images.coingecko.com/coins/images/33083/standard/CIRCLE-200x200.png?1713297273",
    small:
      "https://coin-images.coingecko.com/coins/images/33083/small/CIRCLE-200x200.png?1713297273",
    large:
      "https://coin-images.coingecko.com/coins/images/33083/large/CIRCLE-200x200.png?1713297273",
    slug: "mochi-thecatcoin",
    price_btc: 3.2309473243817384e-10,
    score: 1,
    data: {
      price: 0.00003297809045021399,
      price_btc: "0.0000000003230947324381738",
      price_change_percentage_24h: {
        aed: -10.056442952614965,
        ars: -10.017134932983506,
        aud: -9.647932313916922,
        bch: -5.664849533673507,
        bdt: -10.056442952615011,
        bhd: -10.039261529462754,
        bmd: -10.05644295261497,
        bnb: -7.75645472954288,
        brl: -9.886767231894488,
        btc: -7.716077720703537,
        cad: -9.09737888817017,
        chf: -9.758913508916567,
        clp: -10.03265465400415,
        cny: -10.043926105910728,
        czk: -9.463885435978966,
        dkk: -9.533238069536997,
        dot: -7.261372456681429,
        eos: -9.398869991020502,
        eth: -6.287710513707538,
        eur: -9.538764255535884,
        gbp: -9.619214370381941,
        gel: -10.056442952614946,
        hkd: -10.066254683192925,
        huf: -9.481112216053138,
        idr: -9.751733257687857,
        ils: -10.069779405867553,
        inr: -9.891656049381767,
        jpy: -9.832500599313363,
        krw: -9.679832239461664,
        kwd: -10.029030738540845,
        lkr: -10.05644295261496,
        ltc: -5.5833096749990485,
        mmk: -10.056442952614935,
        mxn: -9.602554507301587,
        myr: -10.056442952614969,
        ngn: -10.056442952615008,
        nok: -9.67094289788281,
        nzd: -9.468237288860045,
        php: -10.056432175584469,
        pkr: -10.05644295261497,
        pln: -9.54910857435519,
        rub: -10.06117033798451,
        sar: -10.057210324860781,
        sek: -9.527728699717548,
        sgd: -9.796192373771445,
        thb: -9.586777397991957,
        try: -10.417788511165996,
        twd: -9.683616813162542,
        uah: -10.056442952614963,
        usd: -10.05644295261497,
        vef: -10.056442952615027,
        vnd: -10.056442952614978,
        xag: -9.558628285070256,
        xau: -9.824278448704982,
        xdr: -10.056442952614987,
        xlm: -6.91067172102471,
        xrp: -6.892413253421722,
        yfi: -3.65819448259156,
        zar: -9.738794531272728,
        bits: -7.71607772070354,
        link: -5.425288784846321,
        sats: -7.716077720703534,
      },
      market_cap: "$32,875,321",
      market_cap_btc: "322.0988319198325",
      total_volume: "$1,811,590",
      total_volume_btc: "17.74860415607874",
      sparkline: "https://www.coingecko.com/coins/33083/sparkline.svg",
      content: null,
    },
  },
  {
    id: "ket",
    coin_id: 53789,
    name: "SolanaMemeCoins",
    symbol: "KET",
    market_cap_rank: 464,
    thumb: "https://coin-images.coingecko.com/coins/images/53789/standard/edfw.jpg?1737381234",
    small: "https://coin-images.coingecko.com/coins/images/53789/small/edfw.jpg?1737381234",
    large: "https://coin-images.coingecko.com/coins/images/53789/large/edfw.jpg?1737381234",
    slug: "ket",
    price_btc: 0.0000012384829783702772,
    score: 0,
    data: {
      price: 0.12641123355225528,
      price_btc: "0.000001238482978370277",
      price_change_percentage_24h: {
        aed: 56.25607998286921,
        ars: 56.32436855473736,
        aud: 56.96577251816248,
        bch: 63.86586724540773,
        bdt: 56.25607998286918,
        bhd: 56.2859287226614,
        bmd: 56.256079982869146,
        bnb: 60.23466851435029,
        brl: 56.55085221401508,
        btc: 60.29804651799541,
        cad: 57.922231468112685,
        chf: 56.77296841910599,
        clp: 56.297406637189,
        cny: 56.27782510240815,
        czk: 57.28551130350454,
        dkk: 57.165027179771734,
        dot: 61.0767389673191,
        eos: 57.35992850336024,
        eth: 62.78610815390263,
        eur: 57.15542671265901,
        gbp: 57.01566328776575,
        gel: 56.256079982869224,
        hkd: 56.23903437550959,
        huf: 57.2555837665749,
        idr: 56.78544244111621,
        ils: 56.232910986950735,
        inr: 56.542359026938726,
        jpy: 56.645127908232155,
        krw: 56.910353792452774,
        kwd: 56.30370235022368,
        lkr: 56.25607998286923,
        ltc: 64.02043686869668,
        mmk: 56.25607998286927,
        mxn: 57.04460593783923,
        myr: 56.2560799828692,
        ngn: 56.25607998286915,
        nok: 56.9257969627513,
        nzd: 57.27795096795427,
        php: 56.25609870546142,
        pkr: 56.256079982869245,
        pln: 57.13745585669261,
        rub: 56.247867246674886,
        sar: 56.25474685148156,
        sek: 57.174598432671054,
        sgd: 56.708205033270964,
        thb: 57.07201500787278,
        try: 55.62832584069478,
        twd: 56.90377897297355,
        uah: 56.25607998286921,
        usd: 56.256079982869146,
        vef: 56.2560799828691,
        vnd: 56.25607998286923,
        xag: 57.120917566149764,
        xau: 56.659411988885275,
        xdr: 56.25607998286921,
        xlm: 61.695171549206364,
        xrp: 61.752553448148426,
        yfi: 67.34664166827169,
        zar: 56.80792047885422,
        bits: 60.29804651799543,
        link: 64.26412617374046,
        sats: 60.29804651799543,
      },
      market_cap: "$125,405,807",
      market_cap_btc: "1228.418476103687",
      total_volume: "$10,731,854",
      total_volume_btc: "105.1427036114926",
      sparkline: "https://www.coingecko.com/coins/53036/sparkline.svg",
      content: {
        title: "What makes Ket unique?",
        description:
          "YellowCatDAO sets itself apart by integrating cutting-edge AI-driven trading mechanisms with a community-centered governance model. At its core, the project leverages an AI agent capable of executing trades across multiple blockchain networks, making it a pioneer in cross-chain AI trading. Unlike typical trading bots, this AI agent not only focuses on profitability but also strategically reinvests gains into the project’s treasury to ensure sustainable growth and support ongoing initiatives.",
      },
    },
  },
];

const TrendingCoinsCard = () => {
  return (
    <Card>
      <div className="mb-5 flex justify-between">
        <p className="flex items-center gap-x-2 text-lg font-medium">Trending coins</p>
      </div>
      <ul>
        {coins?.map((coin) => {
          return (
            <li
              key={coin.coin_id}
              className="flex min-h-14 cursor-pointer items-center justify-between gap-x-6 rounded-md p-2 hover:bg-accent/80"
            >
              <div className="flex flex-1 items-center gap-x-2">
                <img
                  className="min-h-[30px] min-w-[30px] overflow-hidden rounded-full"
                  width={30}
                  height={30}
                  src={coin.thumb}
                  alt={`${coin.name} thumb`}
                />
                <p className="line-clamp-1 font-medium">{coin.name}</p>
              </div>

              <p className="flex flex-col items-end gap-x-4 gap-y-1 md:flex-row md:items-center">
                {formatCurrency(coin.data.price)}
                <ChangePercentage percentage={coin.data.price_change_percentage_24h.usd} />
              </p>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default TrendingCoinsCard;
