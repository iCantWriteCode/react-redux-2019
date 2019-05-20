import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'

class SongList extends Component {
    render() {
        return <div>Song List</div>
    }
}

export default connect()(SongList); // Connect Component with redux

// function connect() {
//     return function() {
//         return 'Hi There'
//     }
// }
// connect()    Does Nothing
// connect()()  Invokes the inner function