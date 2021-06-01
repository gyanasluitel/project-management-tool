import React from "react";

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae iure tempore voluptate quia numquam id totam dolorem necessitatibus natus doloremque magni officia excepturi, cupiditate, nisi porro repellendus neque inventore.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Gyanas</div>
                    <div>30th May, 3pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;