import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts')
    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

/**
|--------------------------------------------------
| Above Method is a Refactored version of the below
|--------------------------------------------------
*/

// export const fetchPosts = async () => {
//     return async function(dispatch, getState) {
//         const response = await jsonPlaceholder.get('/posts')
//         dispatch({type: 'FETCH_POSTS', payload: response})

//     }
// }

export const fetchUser = id => dispatch => _fetchUser(id, dispatch)


const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({ type: 'FETCH_USER', payload: response.data })
})

// export const fetchUser = function (id) {
//     return _.memoize(async function (dispatch) {
//         const response = await jsonPlaceholder.get(`/users/${id}`)
//         dispatch({ type: 'FETCH_USER', payload: response.data })
//     })
// }