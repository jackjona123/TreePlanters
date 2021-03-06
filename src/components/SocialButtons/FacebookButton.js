import React from "react";
import PropTypes from "prop-types";
import { FacebookShareButton } from "react-share";
import styles from "./styles.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";
import FacebookIcon from "../Images/Icons/FacebookIcon";

export default function FacebookButton({
  url,
  facebookQuote,
  facebookHashtag,
  currentUrl
}) {
  return (
    <FacebookShareButton
      url={url}
      quote={facebookQuote}
      hashtag={facebookHashtag}
    >
      <div className={`${styles.button} ${buttonStyles.btnSimple}`}>
        <input type="hidden" id="fb-hidden-input" value={currentUrl} />
        <div className={styles.logo}>
          <FacebookIcon fillColor="#1877f2" />
        </div>
        Facebook
      </div>
    </FacebookShareButton>
  );
}

FacebookButton.defaultProps = {
  url: "https://treeplanters.jackjona.live/",
  facebookQuote: "",
  facebookHashtag: "#climatechange"
};

FacebookButton.propTypes = {
  url: PropTypes.string,
  facbookQuote: PropTypes.string,
  facebookHashtag: PropTypes.string
};
