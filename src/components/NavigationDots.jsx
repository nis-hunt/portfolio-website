import React from "react";

const NavigationDots = ({ active }) => {
  // @dev --input change it to become dynamic,
  // along with the navbar links
  const allSections = [
    "home",
    "about",
    "skills",
    "work",
    "testimonials",
    "contact",
  ];

  return (
    <div className="app__navigation ">
      {allSections.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          //example of using a prop inside style
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
