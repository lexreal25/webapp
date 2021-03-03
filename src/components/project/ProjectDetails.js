import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-indepth-0">
                <div className="card-content">
                    <span className='card-title'>Project Title - {id}</span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div class="card-action grey lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>2nd Feb, 2pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails