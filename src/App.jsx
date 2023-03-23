import "./App.scss";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProjectsArea from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <ProjectsArea />
    </div>
  );
}

export default App;
