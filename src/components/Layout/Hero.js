import React from "react";
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero-image.png';
import heroImageMask from '../../assets/hero-image-mask.png';

export default class Hero extends React.Component {

    onHover() {
        console.log('get of me')
    }

    render() {
        return (

            <section className='section-hero'>
                <div className="hero">
                    <p className="hero__subtitle">Lennert Slabbinck</p>
                    <h1 className="hero__title">Web developer &amp; <br /> front-end designer</h1>
                    <p className="hero__info">
                        I’m an Antwerp based developer, creating fresh and engaging products that help boost user-interaction. I love finding creative solutions and projects that leave a lasting impression.                </p>
                    <ul className="hero__nav">
                        <li className="hero__nav__url">
                            <Link to="/projects">
                                Check out my projects
                        </Link>
                        </li>
                        <li>
                            <p>or</p>
                        </li>
                        <li className="hero__nav__url">
                            <Link to="/projects">
                                Read about me
                        </Link>
                        </li>
                    </ul>
                </div>
                <div className="tile">
                    <figure className="tile__figure">
                        <img src={heroImageMask} className='tile__image' alt='flying robin' />
                        {/* <img src={heroImage} className='tile__image' alt='flying robin' /> */}
                    </figure>
                </div>
            </section>
        )
    }
}