import { Trans, useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  const features = t<"about.features_list", { returnObjects: true }, string[]>(
    "about.features_list",
    {
      returnObjects: true,
    }
  );

  const futureFeatures = t<"about.whats_next_list", { returnObjects: true }, string[]>(
    "about.whats_next_list",
    { returnObjects: true }
  );

  return (
    <section>
      <h1 className="mb-2 text-2xl font-bold">{t("about.title")}</h1>

      <p className="mb-8">
        <Trans i18nKey="about.intro">
          Welcome to <span className="font-medium">CryptoNinja</span>, your go-to platform for
          tracking the latest cryptocurrency data in real time!
        </Trans>
        🚀
      </p>

      <div className="flex flex-col gap-y-6">
        <div>
          <h2 className="mb-1 text-lg font-medium">{t("about.what_is_title")}</h2>
          <p>
            <Trans i18nKey="about.what_is_desc">
              <span className="font-medium">CryptoNinja</span> is a pet project <br /> Whether
            </Trans>
          </p>
        </div>

        <div>
          <h2 className="mb-1 text-lg font-medium">{t("about.where_data_title")}</h2>
          <p>
            <Trans i18nKey="about.where_data_desc">
              All the market data displayed on <span className="font-medium">CryptoNinja</span> is
              fetched from the
              <a
                href="https://www.coingecko.com/en/api"
                target="_blank"
                className="pl-1 text-[#4BCC00] hover:underline"
              >
                CoinGecko API
              </a>
            </Trans>
          </p>
        </div>

        <div>
          <h2 className="mb-1 text-lg font-medium">{t("about.features_title")}</h2>
          <ul>
            {features.map((item, idx) => (
              <li key={idx}>{`🔹${item}`}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-1 text-lg font-medium">{t("about.whats_next_title")}</h2>
          <p>{t("about.whats_next_desc")}</p>
          <ol className="list-inside list-decimal">
            {futureFeatures.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </div>

        <div>{t("about.thanks")}🚀💎</div>
      </div>
    </section>
  );
};

export default AboutSection;
