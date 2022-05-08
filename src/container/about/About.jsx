import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  // fetching data from the sanity backend
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((res) => setAbouts(res));
  }, []);
  return (
    <div>
      <h2 className="head-text">
        I know that
        <span> Good Design</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "blogs",
  "app__whitebg"
);
