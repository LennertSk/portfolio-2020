import React from "react"
import Hero from '../Layout/Hero';
import Scroll from '../Layout/Scroll';
import Projects from '../Layout/Projects';
import SideProjects from '../Layout/SideProjects';
import About from '../Layout/About';
import Footer from '../Layout/Footer'

function Home(props) {
    return (
        <div className='content'>
            <div className="container">
                <Hero />
                <Scroll />
                <Projects />
                <SideProjects />
                <About />
                <Footer />
            </div>
        </div>
    )
}

export default Home;