import './App.css';
import Hero from './components/sections/Hero.js'
import About from "./components/sections/About.js"
import Footer from "./components/sections/Footer.js"
import Header from "./components/sections/Header.js"
import Services from "./components/sections/Services.js"
import More from './components/More.js'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';





function App() {
    return (
        <Router>

            <Routes>
                <Route path='/' element={<> <Hero />
                    <Header />
                    <About />
                    <Services />
                    <Footer /></>}>
                </Route>
                <Route path='/more' element={<More />}>
                </Route>
            </Routes>


        </Router>
    );
}

export default App;