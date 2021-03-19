export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        console.log(project)
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().getFirebase.profile;
        const authorId = getState().getFirebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId,
            createdAt: new Date()
        }).then((data) => {
            //make async call to database
            console.log(data)
            dispatch(
                {
                    type:'CREATE_PROJECT', 
                    project
                }
            )
        }).catch((err) => {
            dispatch({type: "CREATE_PROJECT_ERROR", err})
        })
        
    }
}
