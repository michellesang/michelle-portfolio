import './App.css';
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Experience from "./components/Experience.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// import DarkMode from "./components/DarkMode.jsx";

function App() {
    return (
        <div className="app-container">
            <Navbar/>
            {/*<DarkMode/>*/}
            <Home/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;