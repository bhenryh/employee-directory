import React, { Component } from 'react';
import './style.css';
import Api from '../../util/api'
import Search from '../Search'
import Table from '../Table'

class Main extends Component {

    state = {
        users: [],
        order: 'descend',
        filterUsers: [],
        search: "",
        results: []

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

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    
    render() {
        const lowercasedSearch = this.state.search.toLowerCase();
        const searchResult = this.state.users.filter(name => name.name.first.concat(name.name.last).toLocaleLowerCase().includes(lowercasedSearch));
        return (

            <div className="container">
                <Search />
                <Table
                    users={this.state.filterUsers}
                // handleSort={this.handleSort}
                />
            </div>
        )
    }
}

export default Main;