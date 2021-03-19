import React from 'react'
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { compose } from 'redux'



const ProjectDetails = (props) => {
    const { project, auth, initials } = props;
    if(!auth.uid) return <Redirect to='/signin'/>
    if (project) {
        return(
        <div className="container section project-details">
            <div className="card z-indepth-0">
                <div className="card-content">
                    <span className='card-title'>{project.title}</span>
                    <p>{project.content}</p>
                </div>
                <div class="card-action grey lighten-4 grey-text">
                    <div>Posted by {initials}</div>
                    <div>2nd Feb, 2pm</div>
                </div>
            </div>
        </div>
    )
    }else{
        return (
            <div className='container center'>
                <p>Loading projects...</p>
            </div>
        )
    }
   
}

const mapStateToProps =( state, ownProps ) => {
    //console.log(state)
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return{
        project: project,
        auth: state.firebase.auth,
        initials: state.firebase.initials
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
) (ProjectDetails)