const AboutSection = () => {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-bold">About CryptoNinja</h1>
      <p className="mb-8">
        Welcome to <span className="font-medium">CryptoNinja</span>, your go-to platform for
        tracking the latest cryptocurrency data in real time! 🚀
      </p>

      <div className="flex flex-col gap-y-6">
        <div>
          <h2 className="mb-1 text-lg font-medium">What is CryptoNinja?</h2>
          <p>
            CryptoNinja is a pet project designed to provide up-to-date crypto market data in a
            simple and user-friendly interface. <br /> Whether you're a beginner exploring the world
            of digital assets or an experienced trader looking for quick insights, CryptoNinja helps
            you stay informed.
          </p>
        </div>
        <div>
          <h2 className="mb-1 text-lg font-medium">Where Does the Data Come From?</h2>
          <p>
            All the market data displayed on CryptoNinja is fetched from the
            <a
              href="https://www.coingecko.com/en/api"
              target="_blank"
              className="pl-1 text-[#4BCC00] hover:underline"
            >
              CoinGecko API
            </a>
            , one of the most reliable sources for cryptocurrency price tracking. This ensures that
            you get accurate and real-time updates on price movements, market trends, and more.
          </p>
        </div>
        <div>
          <h2 className="mb-1 text-lg font-medium">Features of CryptoNinja</h2>
          <ul>
            <li>🔹 Live cryptocurrency prices and market data</li>
            <li>🔹 Detailed coin information and price history</li>
            <li>🔹 A sleek, modern UI for a smooth user experience</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-1 text-lg font-medium">What’s Next?</h2>
          <p>I’m always looking to improve CryptoNinja! Some future enhancements may include:</p>
          <ul>
            <li>Advanced filtering and search options</li>
            <li> Interactive charts for price history</li>
            <li>Custom watchlists and portfolio tracking</li>
          </ul>
        </div>
        <div>
          Thanks for visiting CryptoNinja! Feel free to explore the site and stay up to date with
          the latest crypto trends. 🚀💎
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
