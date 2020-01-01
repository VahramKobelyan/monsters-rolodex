import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''

        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(responce => responce.json()).then(user => this.setState({monsters: user}))
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField));

        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox
                    placeholder='search monsters'
                    handleChange={this.getHandleChange}/>
                <CardList monsters={filteredMonsters}/>

            </div>


        );
    }

    getHandleChange = (event) => {
        return this.setState({searchField: event.target.value});
    }
}

export default App;
