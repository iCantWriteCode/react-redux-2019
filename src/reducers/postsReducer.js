export default (state = [], action) => {
    // if (action.type === 'FETCH_POSTS') {
    //     return action.payload
    // }
    // return state; // Reducer must return something, besides undefined

    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload
        default:
            return state
    }
}