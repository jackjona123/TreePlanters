import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import FacebookIcon from "../Images/Icons/FacebookIcon";
import TwitterIcon from "../Images/Icons/TwitterIcon";
import LinkedinIcon from "../Images/Icons/LinkedinIcon";
import InstagramIcon from "../Images/Icons/InstagramIcon";
import GlobalStyles from "../../styles/Global.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import Logo from "./LogoOnLight.svg";

const Footer = () => (
  <footer className={Styles.container}>
    <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
      <div className={Styles.top}>
        <div className={Styles.company}>
          <Link to="/" title="Go back home">
            <img src={Logo} alt="TreePlanters" />
          </Link>
          <p className={Styles.description}>
            Learn how you can help prevent earth’s climate breaking down.
          </p>
          {/* <span className={Styles.social}>
            Follow us
            <a
              href="https://twitter.com/jackjona123"
              title="Follow us on Twitter"
            >
              <TwitterIcon /> @TreePlanters
            </a>
          </span> */}
          <ul className={Styles.social}>
            <li className={Styles.socialLink}>
              <OutboundLink
                href="https://twitter.com/TreePlanters"
                title="Follow us on Twitter"
              >
                <TwitterIcon />
              </OutboundLink>
            </li>
            <li className={Styles.socialLink}>
              <OutboundLink
                href="https://www.facebook.com/TreePlanters"
                title="Like us on Facebook"
              >
                <FacebookIcon />
              </OutboundLink>
            </li>
            <li className={Styles.socialLink}>
              <OutboundLink
                href="https://instagram.com/yourTreePlanters"
                title="Follow us on Instagram"
              >
                <InstagramIcon />
              </OutboundLink>
            </li>
            <li className={Styles.socialLink}>
              <OutboundLink
                href="https://www.linkedin.com/company/TreePlanters"
                title="Follow us on LinkedIn"
              >
                <LinkedinIcon />
              </OutboundLink>
            </li>
          </ul>
        </div>
        <div className={Styles.nav}>
          <div className={Styles.navCol}>
            <div className={Styles.navTitle}>Sitemap</div>
            <ul className={Styles.navList}>
              <li className={Styles.navItem}>
                <Link to="/" title="Go back home">
                  Home
                </Link>
              </li>
              <li className={Styles.navItem}>
                <Link
                  to="/contact#contribute"
                  title="Contribute to TreePlanters"
                >
                  Contribute
                </Link>
              </li>
              <li className={Styles.navItem}>
                <Link to="donate" title="Donate to TreePlanters">
                  Donate
                </Link>
              </li>
              <li className={Styles.navItem}>
                <Link to="/about" title="About TreePlanters">
                  About
                </Link>
              </li>
              <li className={Styles.navItem}>
                <Link to="/contact" title="Get in touch">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className={Styles.choiceCol}>
            <div className={Styles.navTitle}>Your choices</div>
            <div className={Styles.choiceLists}>
              <ul className={`${Styles.navList} ${Styles.choiceList}`}>
                <li className={`${Styles.navItem} ${Styles.choiceItem}`}>
                  <Link to="/change-how-you-eat">Change how you eat</Link>
                </li>
                <li className={Styles.navItem}>
                  <Link to="/change-how-you-travel">Change how you travel</Link>
                </li>

                <li className={`${Styles.navItem} ${Styles.choiceItem}`}>
                  <Link to="/choose-renewable-energy">
                    Choose renewable energy
                  </Link>
                </li>
                <li className={Styles.navItem}>
                  <Link to="/use-less-energy">Use less energy</Link>
                </li>
                <li className={Styles.navItem}>
                  <Link to="/change-your-lifestyle">Change your lifestyle</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.bottom}>
        <p className={Styles.disclaimer}>
          Disclaimer: The content of this site is based on researched material
          from around the web. We’re doing our best to provide you as much
          accurate info as possible, but some of the data and suggestions may be
          incorrect. If you’re unsure, we recommend doing further research on
          your own.
        </p>
      </div>
      <div className={Styles.impactMakers}>
        <h1 className={Styles.impactMakersTitle}>
          An TreePlanters project from:
        </h1>
        <ul className={Styles.impactMakersCreators}>
          <li className={Styles.impactMakersCreator}>
            <a
              href="https://twitter.com/jackjona123"
              title="Follow @jackjona123 on Twitter"
            >
              @jackjona123
            </a>
          </li>
        </ul>
        <p className={Styles.impactMakersDescription}>
          TreePlanters is a community of volunteers who want to have a
          positive impact by helping prevent earth’s climate breaking down through planting.
        </p>
        <div>
          <OutboundLink
            className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
              ButtonStyles.btnOrange
            } ${ButtonStyles.btnMobile}`}
            href="https://treeplanters.jackjona.live"
          >
            Find out more about us
          </OutboundLink>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
