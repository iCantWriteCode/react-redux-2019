import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const userIds = _.uniq(_.map(getState().posts, 'userId')) // Getting the unique userId's of users
    userIds.forEach(userId => dispatch(fetchUser(userId)))
}

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts')
    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

/**
|--------------------------------------------------
| NON-Memoize Version
|--------------------------------------------------
*/

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({ type: 'FETCH_USER', payload: response.data })
}

/**
|--------------------------------------------------
| Memoize Version ES6
|--------------------------------------------------
*/
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch)
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`)
//     dispatch({ type: 'FETCH_USER', payload: response.data })
// })
/**
|--------------------------------------------------
| Memoize Version Pre ES6
|--------------------------------------------------
*/
// export const fetchUser = function (id) {
//     return _.memoize(async function (dispatch) {
//         const response = await jsonPlaceholder.get(`/users/${id}`)
//         dispatch({ type: 'FETCH_USER', payload: response.data })
//     })
// }