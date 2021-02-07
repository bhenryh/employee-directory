import React, { Component } from 'react';
import './style.css';
import Api from '../../util/api'
import Nav from '../Nav'
import Table from '../Table'

class Main extends Component {

    state = {
        users: [],
        order: 'descend',
        filterUsers: []

    }
    componentDidMount() {
        Api.getUsers().then(users => {

            this.setState({
                users: users.data.results,
                filterUsers: users.data.results
            })
            // console.log(this.state.filterUsers)
        })
    }

    render() {
        return (

            <div className="container">
                <Nav />
                <Table
                    users={this.state.filterUsers}
                // handleSort={this.handleSort}
                />
            </div>
        )
    }
}

export default Main;