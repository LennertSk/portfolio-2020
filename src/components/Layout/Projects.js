import React from "react";
import Thumbnail from '../Layout/Thumbnail';
import Image1 from '../../assets/p1/mockup-1.jpg'

export default class Projects extends React.Component {
    render() {
        return (
            <section className='section-projects'>
                <div className="heading">
                    <p className="heading__sub">Featured Projects</p>
                    <h1 className="heading__title" id='projects'>Case studies</h1>
                </div>
                <div className="projects">
                    <Thumbnail
                        link="/squery"
                        image={Image1}
                        title="Squery"
                        description="online survey builder with PWA ready output"
                        date="2020"
                        color="#F2F2F2"
                        main='true'
                    />
                    <Thumbnail
                        link="/squery"
                        image={Image1}
                        title="Squery"
                        description="easy to use survey generator"
                        date="2020"
                        color="#F2F2F2"
                        main='true'
                    />
                    <Thumbnail
                        link="/squery"
                        image={Image1}
                        title="Squery"
                        description="easy to use survey generator"
                        date="2020"
                        color="#F2F2F2"
                        main='true'
                    />
                    <Thumbnail
                        link="/squery"
                        image={Image1}
                        title="Squery"
                        description="easy to use survey generator"
                        date="2020"
                        color="#F2F2F2"
                        main='true'
                    />
                    <Thumbnail
                        link="/squery"
                        image={Image1}
                        title="Squery"
                        description="easy to use survey generator"
                        date="2020"
                        color="#F2F2F2"
                        main='true'
                    />
                    <Thumbnail
                        link="/squery"
                        image={Image1}
                        title="Squery"
                        description="easy to use survey generator"
                        date="2020"
                        color="#F2F2F2"
                        main='true'
                    />
                </div>
            </section>

        )
    }
}