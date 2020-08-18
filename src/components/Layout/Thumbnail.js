import React from "react";
import { Link } from 'react-router-dom';

function Thumbnail(props) {
    return (
        <article className="projects__item">
            <Link className={"project " + (props.main ? 'featured' : 'personal')} to={props.link} style={{ background: props.color }}>
                <div className="project__image">
                    <img src={props.image} alt="Project Thumbnail" />
                </div>
                <strong className="project__info">
                    <span className="date">{props.date}</span>
                    <span className="title">{props.title} — {props.description}</span>
                    {props.tags}
                    <span className="more">
                        View Case Study
                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z" fill="white" />
                        </svg>
                    </span>
                </strong>
            </Link>
        </article>
    )
}

export default Thumbnail;