import './App.css';
import Hero from './components/sections/Hero.js'
import About from "./components/sections/About.js"
import Contact from "./components/sections/Contact.js"
import Footer from "./components/sections/Footer.js"
import Header from "./components/sections/Header.js"
import Home from "./components/sections/Home.js"
import Services from "./components/sections/Services.js"





function App() {
    return (
        <>
            <Hero />
            <Header />
            <About />
            <Services />
            <Footer />


        </>
    );
}

export default App;