import React, { Component } from 'react';
import './App.scss'
import { CardList } from './components/cart-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            keySearch: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => {
                this.setState({
                    users
                })
            });
    }

    render() {
        const { users, keySearch } = this.state;
        const filteredUsers = users.filter((item) => {
            return (item.name.toLowerCase().includes(keySearch.toLowerCase()))
        })
        return (
            <div>
                <h1 className="title" >Monster User</h1>
                <SearchBox
                placeholder = 'search user' 
                handleChange = {(text)=>{
                    this.setState({keySearch: text.target.value})
                }}
                />
                <CardList users={filteredUsers} />
            </div>
        )
    }
}