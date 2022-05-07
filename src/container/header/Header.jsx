import React from "react";
import { motion } from "framer-motion";
import "./Header.scss";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const Header = () => {
  // @dev --input
  const myName = "nishant";
  const myTitle = ["web3 developer", "freelance writer"];
  const tech = [images.flutter, images.redux, images.sass];

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__shadow app__flex">
            <span>🌅</span>
            <div style={{ marginLeft: 20 }}>
              <p
                onClick={() => window.open("https://bit.ly/3KBpcXR")}
                style={{ cursor: "pointer" }}
                className="p-text"
              >
                GM fren, I am
              </p>
              <h1 className="head-text">{myName}</h1>
            </div>
          </div>

          <div className="tag-cmp app__shadow app__flex">
            {myTitle.map((title, index) => (
              <p className="p-text">{myTitle[index]}</p>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* @dev --input Your Image will come here */}
        {/* <img src={images.profile} alt="profile-bg" className="profile-bg" /> */}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile-circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {tech.map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
