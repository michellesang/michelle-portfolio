import './App.css';
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Experience from "./components/Experience.jsx";
import About from "./components/About.jsx";

function App() {
    return (
        <div className="app-container">
            <Navbar/>
            <section>
                <Home/>
            </section>
            <section>
                <About/>
            </section>
            <section>
                <Experience/>
            </section>
            {/*<section>
                        <Projects/>
                    </section>
                    <section>
                        <Contact/>
                    </section>*/}
        </div>
    );
}

export default App;