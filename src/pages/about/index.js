import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import GlobalStyles from "../../styles/Global.module.scss";
import FooterCta from "../../components/FooterCta";

const AboutPage = () => (
  <Layout>
    <SEO
      title="About TreePlanters"
      description="TreePlanters is a non-profit volunteer project to bring awarness to climate change and what individuals can do through planting trees."
      keywords={[`About Climate Choice`, `TreePlanters`]}
    />
    <section
      className={`${GlobalStyles.container} ${GlobalStyles.subpageContainer}`}
    >
      <div className={`${GlobalStyles.inner} ${GlobalStyles.subpageInner}`}>
        <div className={GlobalStyles.subpageContent}>
          <h1 className={`${GlobalStyles.title} ${GlobalStyles.subpageTitle}`}>
            About TreePlanters
          </h1>

          <p>
            TreePlanters is a non-profit volunteer project from{" "}
            <OutboundLink
              href="https://twitter.com/jackjona123"
              title="Follow @jackjona123 on Twitter"
            >
              Jack Jona
            </OutboundLink>
            <OutboundLink
              href="https://treeplanters.jackjona.live"
              title="TreePlanters"
            >
              TreePlanters
            </OutboundLink>{" "}
            group — a community of tech people who want to have a positive
            impact by helping prevent earth’s climate breaking down. Read this
            to{" "}
            <OutboundLink
              href="https://jackjona123.com/blog/helping-prevent-climate-breakdown/"
              title="Origins of TreePlanters"
            >
              learn more about the origins of TreePlanters
            </OutboundLink>
            .
          </p>
          <br />
          <h2>Why we decided to make TreePlanters</h2>
          <p>
            <b>
              Our planet's climate is breaking down and we aren’t doing enough
              about it
            </b>
            . If we all made a few life changes and supported the right people,
            we’d be better positioned to stop forthcoming environmental
            disasters.
          </p>
          <p>
            When it comes to taking action, there’s so much information out
            there that sometimes it’s hard to know where to start, or what to
            believe. We decided to create TreePlanters as we didn’t believe
            there was a single point of truth which you could visit to quickly
            learn what you can do today to help prevent climate breakdown.
            TreePlanters is designed to be easily shared so you can let your
            friends and family know how they take action too.
          </p>
          <br />
          <h2>Future Developments</h2>
          <p>
            TreePlanters is a work in progress. We plan to add more choice
            guides and to continually improve the site so we can provide you
            with the best possible place to learn about how to prevent climate
            breakdown.
          </p>
          <p>
            If you have any feedback or would like to contribute, feel free to{" "}
            <a href="mailto:TreePlanters@jackjona.live" title="Email us">
              email
            </a>{" "}
            or{" "}
            <OutboundLink
              href="https://twitter.com/TreePlanters"
              title="Tweet @TreePlanters"
            >
              tweet us
            </OutboundLink>
            . If you’re interested in working on your own project to raise
            awareness of the climate breakdown issue and help people to take
            action, then please{" "}
            <OutboundLink
              href="https://treeplanters.jackjona.live"
              title="TreePlanters"
            >
              {" "}
              join us in the TreePlanters
            </OutboundLink>{" "}
            community!
          </p>
        </div>
      </div>
    </section>
    <FooterCta />
  </Layout>
);

export default AboutPage;
