import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

function App() {
  // @dev --input implement redux for state managementtwt
  const allSections = [
    "home",
    "about",
    "work",
    "skills",
    "testimonial",
    "contact",
  ];
  return (
    <div className="app">
      <Navbar allSections={allSections} />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
