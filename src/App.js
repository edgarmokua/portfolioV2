import "./App.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import SidebarNav from "./components/Social/SidebarNav";


function App() {
  return (
    <div className="app">
      <Navbar />
       <div id="content">
      
      <Hero />
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
    <SidebarNav/>
    </div>
  );
}

export default App;
