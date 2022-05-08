import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

function App() {
  // @dev --input implement redux for state managementtwt
  const allSections = [
    "home",
    "skills",
    "work",
    "blogs",
    "testimonial",
    "contact",
  ];
  return (
    <div className="app">
      <Navbar allSections={allSections} />
      <Header />
      <Skills />
      <Work />
      <About />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
