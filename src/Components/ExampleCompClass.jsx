
import React, { Component } from 'react'
import axios from 'axios'


class ExampleCompClass extends Component {
    constructor() {
        super()

        this.state = {
            user: []
        }
    }

    getUser = async () => {
        let respon = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        this.setState({
            user: respon.data
        })
    }

    componentDidMount() {
        this.getUser()
    }

    render() {
        const { user } = this.state
        return (
            <div>
                <h1>My Name is {user.name}</h1>
                <h1>My Name is {user.username}</h1>
            </div>
        )
    }
}

export default ExampleCompClass
