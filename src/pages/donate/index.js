import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import GlobalStyles from "../../styles/Global.module.scss";
import ButtonStyles from "../../styles/Buttons.module.scss";
import Styles from "./Styles.module.scss";
import FooterCta from "../../components/FooterCta";

const DonatePage = () => (
  <Layout>
    <SEO
      title="Donate to TreePlanters and other climate causes"
      description="Donate to the development of TreePlanters and other projects, or find a cause to donate to that's working to prevent climate breakdown."
      keywords={[`Donate`, `TreePlanters`]}
    />
    <section
      className={`${GlobalStyles.container} ${GlobalStyles.subpageContainer}`}
    >
      <div className={`${GlobalStyles.inner} ${GlobalStyles.subpageInner}`}>
        <div className={GlobalStyles.subpageContent}>
          <h1 className={`${GlobalStyles.title} ${GlobalStyles.subpageTitle}`}>
            Donations
          </h1>{" "}
          <h2>Donate to the development of this site and others</h2>
          <p>
            {" "}
            <Link to="https://treeplanters.jackjona.live/" title="Go home">
              TreePlanters
            </Link>{" "}
            is a non-profit project created by the{" "}
            <OutboundLink
              href="https://treeplanters.jackjona.live"
              title="TreePlanters"
            >
              TreePlanters
            </OutboundLink>{" "}
            community of tech volunteers, working to prevent earth's climate
            breaking down. Donations will be put towards the development of
            TreePlanters and other non-profit projects which help
            raise awareness of the climate issue, and encourage people to take
            action.
          </p>
          <div className={Styles.ctaActions}>
            <OutboundLink
              className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
                ButtonStyles.btnPrimary
              } ${ButtonStyles.btnMobile} `}
              href="https://liberapay.com/treeplanters/"
            >
              Donate to TreePlanters
            </OutboundLink>
          </div>
          <div
            id="causes"
            aria-label={"Ways of preventing climate breakdown"}
          />
          <h2>Donate to causes working to prevent climate breakdown</h2>
          <p>
            We're crowdsourcing a resource which lists charities, movements and
            organisations around the world that you can contribute to. Have a
            look below and see if you can find a cause that you can relate to.
            You can also{" "}
            <OutboundLink
              href="http://eepurl.com/hFynSr"
              title="Add somewhere you can donate"
            >
              join our email list
            </OutboundLink>
            .
          </p>
        </div>
      </div>
    </section>
    <FooterCta />
  </Layout>
);

export default DonatePage;
