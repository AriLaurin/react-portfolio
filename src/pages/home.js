import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/navbar";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation, Trans } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <Navbar />
      <div className="center">
        <div className="welcome-card">
          <h1 className="home-title">
            <Trans i18nKey="description.part1">Welcome</Trans>
          </h1>
          <p className="home-p">{t("description.part2")}</p>

          <div className="button-container">
            <ScrollLink to="details" smooth={true} duration={500}>
              <div className="icon-background">
                <FontAwesomeIcon icon={faArrowDown} className="welcome-icon" />
              </div>
            </ScrollLink>
          </div>

          {/*end of welcome-card*/}
        </div>

        {/*end of center*/}
      </div>
      <div className="left-bar"></div>
      <div className="right-bar"></div>
      <div className="footer">
        <h1 className="card-page-title">{t("description.part3")}</h1>
        <div className="underline" id="details"></div>
        <div className="card-library">
          <div className="card-wrapper">
            <div className="card-container">
              <img
                src={process.env.PUBLIC_URL + "/img/aboutme.gif"}
                type="video/gif"
                alt="About me"
                className="card-image"
              />
              <div className="card-text">
                <h2 className="card-title">/ / {t("description.part4")}</h2>
                <p className="card-p">{t("description.part5")}</p>
              </div>
            </div>

            <div className="card-container">
              <img
                src={process.env.PUBLIC_URL + "/img/aboutme.gif"}
                type="video/gif"
                alt="About me"
                className="card-image"
              />
              <div className="card-text">
                <h2 className="card-title">/ / {t("description.part6")}</h2>
                <p className="card-p">{t("description.part7")}</p>
              </div>
            </div>

            <div className="card-container">
              <img
                src={process.env.PUBLIC_URL + "/img/aboutme.gif"}
                type="video/gif"
                alt="About me"
                className="card-image"
              />
              <div className="card-text">
                <h2 className="card-title">/ / {t("description.part8")}</h2>
                <p className="card-p">{t("description.part9")}</p>
              </div>
            </div>

            {/*end of card-warpper*/}
          </div>

          {/*end of card library*/}
        </div>
        {/*END OF DETAILS*/}

        <h1 className="card-page-title">{t("description.part10")}</h1>
        <div className="underline" id="details"></div>
        <div className="PE-library">
          <div className="PE-wrapper">
            <div className="PE-container">
              <img
                src={process.env.PUBLIC_URL + "/img/bbpwybg.png"}
                type="image/png"
                alt="About me"
                className="PE-image"
              />
              <div className="PE-text">
                <h2 className="PE-title">/ / Project Blackbird</h2>
                <p className="PE-p">{t("description.part11")}</p>
              </div>
            </div>

            {/*end of card-warpper*/}
          </div>

          {/*end of card library*/}
        </div>

        {/*end of footer*/}
      </div>
      {/* end of container*/}
    </div>
  );
};

export default Home;
