import React from "react";
import GlobalStyles from "../../styles/Global.module.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Styles from "./Styles.module.scss";

const SuccessBanner = () => (
  <section className={Styles.container}>
    <div className={`${GlobalStyles.inner} ${Styles.inner}`}>
      <h1 className={Styles.title}>
        Has TreePlanters helped you make changes?
      </h1>
      <p className={Styles.text}>
        Then tweet your success story{" "}
        <OutboundLink
          href="https://twitter.com/TreePlanters"
          title="Tweet @TreePlanters"
        >
          @TreePlanters
        </OutboundLink>{" "}
        and we'll add it here!
      </p>
    </div>
  </section>
);

export default SuccessBanner;
