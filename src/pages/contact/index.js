import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import GlobalStyles from "../../styles/Global.module.scss";
import FooterCta from "../../components/FooterCta";

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact TreePlanters and learn how to contribute"
      keywords={[`Contact`, `TreePlanters`]}
    />
    <section
      className={`${GlobalStyles.container} ${GlobalStyles.subpageContainer}`}
    >
      <div className={`${GlobalStyles.inner} ${GlobalStyles.subpageInner}`}>
        <div className={GlobalStyles.subpageContent}>
          <h1 className={`${GlobalStyles.title} ${GlobalStyles.subpageTitle}`}>
            Contact & contribute
          </h1>
          <h2>General enquiries & feedback</h2>
          <p>
            <ul>
              <li>
                {" "}
                <a href="mailto:TreePlanters@jackjona.live" title="Email us">
                  Email us
                </a>
              </li>
              <li>
                <OutboundLink
                  href="https://twitter.com/TreePlanters"
                  title="Tweet @TreePlanters"
                >
                  Tweet @TreePlanters
                </OutboundLink>
              </li>
            </ul>
            <div id="contribute" aria-label={"Contribute"}>
              {" "}
            </div>
          </p>
          <br />
          <h2>Want to help with the site?</h2>
          <p>
            {" "}
            <Link to="/" title="Go home">
              TreePlanters
            </Link>{" "}
            is a non-profit project created by a{" "}
            <OutboundLink
              href="https://treeplanters.jackjona.live"
              title="TreePlanters"
            >
              community of tech volunteers
            </OutboundLink>
            , working to prevent climate breakdown.
          </p>
          <p>
            If you're interested in contributing to TreePlanters please{" "}
            <a href="mailto:TreePlanters@jackjona.live" title="Email us">
              send us an email
            </a>,{" "}
            <OutboundLink
              href="https://github.com/jackjona123/TreePlanters/"
              title="TreePlanters GitHub"
            >
              swing by GitHub to help us work on some issues
            </OutboundLink>
            , or{" "}
            <OutboundLink
              href="mailto:TreePlanters@jackjona.live"
              title="The TreePlanters Email"
            >
              email us
            </OutboundLink>{" "}
            to discuss how you can help. It doesn't matter what your skill set
            is, all motivated people are welcome!
          </p>
          <br />
          <h3>Contributors so far:</h3>
          <p>
            <ul>
              <li>
                <OutboundLink
                  href="https://twitter.com/jackjona123"
                  title="Follow @jackjona123 on Twitter"
                >
                  Jack Jona
                </OutboundLink>{" "}
                - Design, content, development
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
    <FooterCta />
  </Layout>
);

export default ContactPage;
