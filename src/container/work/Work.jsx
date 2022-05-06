import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filteredWork, setFilteredWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((res) => {
      setWorks(res);
      setFilteredWork(res);
    });
  }, []);

  const handleWorkFilter = (item) => {
    // changes the color of active tag to remain colored.
    setActiveFilter(item);
    // cards go down when filter is applied, takes half a sec to go down
    setAnimateCard([{ y: 100, opacity: 1 }]);

    setTimeout(() => {
      // cards come up when filter is applied
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilteredWork(works);
      } else {
        setFilteredWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My
        <span> Portfolio </span>
        Section
      </h2>
      <div className="app__work-filter">
        {/* @dev --input */}
        {["UI/UX", "Web App", "NFT", "React JS", "All"].map((item, index) => (
          <>
            {/* An example of styling according to user selection, changing classname according to the change in state. */}
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          </>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        // animation takes half a sec to go down
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filteredWork.map((work, index) => (
          <div className="app__flex app__work-card">
            <div className="app__work-item app_flex" key={index}>
              <a href={work.projectLink} target="blank" rel="noreferrer">
                <div className="app__work-img app__flex">
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className=" app__flex app__work-github"
                  >
                    <a href={work.codeLink} target="blank" rel="noreferrer">
                      <AiFillGithub />
                    </a>
                  </motion.div>
                  <img src={urlFor(work.imgUrl)} alt={work.name} />
                </div>
                <div className="app__work-content app__flex">
                  <h4 className="bold-text">{work.title}</h4>
                  <p className="p-text">{work.description}</p>
                  <div className="app__work-tag app--flex">
                    <h5 className="p-text">{work.tags[0]}</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};
export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
