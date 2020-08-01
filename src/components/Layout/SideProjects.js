import React from "react";
import Thumbnail from '../Layout/Thumbnail';
import Image1 from '../../assets/p1/mockup-1.jpg'

export default class SideProjects extends React.Component {
    render() {
        return (
            <section className='section-projects'>
                <div className="heading">
                    <p className="heading__sub">side projects</p>
                    <h1 className="heading__title">Personal projects</h1>
                </div>
                <div className="projects">
                    <Thumbnail
                        link="/squery"
                        image={Image1}
                        title="Squery"
                        description="online survey builder with PWA ready output"
                        date="2020"
                        color="#F2F2F2"
                    />
                    <Thumbnail
                        link="/squery"
                        image={Image1}
                        title="Squery"
                        description="easy to use survey generator"
                        date="2020"
                    />
                    <Thumbnail
                        link="/squery"
                        image={Image1}
                        title="Squery"
                        description="easy to use survey generator"
                        date="2020"
                    />
                    <Thumbnail
                        link="/squery"
                        image={Image1}
                        title="Squery"
                        description="easy to use survey generator"
                        date="2020"
                    />
                </div>
            </section>

        )
    }
}