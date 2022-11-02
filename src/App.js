import './Apps.css';
import Hero from './components/sections/Heros.js'
import About from "./components/sections/Abouts.js"
import Footer from "./components/sections/Footers.js"
import Header from "./components/sections/Headers.js"
import Services from "./components/sections/Service.js"





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