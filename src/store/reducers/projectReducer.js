const initialState = {
    projects: [
        {id: '1', title: 'help me find her', content:'blah blah blah blahhh'},
        {id: '2', title: 'all stars', content:'let the game begin'},
        {id: '3', title: 'time', content:'the time is now and not later'}
    ]
}

const projectReducer = (state = initialState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;

            case "CREATE_PROJECT_ERROR":
                console.log('create project error', action.err)
                break
                 default: 
                 return state
    }
}

export default projectReducer;