import './App.css';
import Hero from './components/sections/Hero.js'
import About from "./components/sections/About.js"
import Footer from "./components/sections/Footer.js"
import Header from "./components/sections/Header.js"
import Services from "./components/sections/Services.js"
import { BrowserRouter as Router } from 'react-router-dom';





function App() {
    return (
        <Router>
            <>
                <Hero />
                <Header />
                <About />
                <Services />
                <Footer />
            </>
        </Router>
    );
}

export default App;