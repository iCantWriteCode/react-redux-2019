import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'

class SongList extends Component {
    render() {
        console.log(this.props)
        return <div>Song List</div>
    }
}

// Getting data from store
const mapStateToProps = (state) => {
    console.log(state)
    // return state
    return { songs: state.songs }
}

export default connect(mapStateToProps)(SongList); // Connect Component with redux

// function connect() {
//     return function() {
//         return 'Hi There'
//     }
// }
// connect()    Does Nothing
// connect()()  Invokes the inner function