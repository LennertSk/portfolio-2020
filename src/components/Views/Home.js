import React from "react"
import Hero from '../Layout/Hero';
import Scroll from '../Layout/Scroll';

function Home(props) {
    return (
        <div className='content'>
            <div className="container">
                <Hero />
                <Scroll />
            </div>
        </div>
    )
}

export default Home;