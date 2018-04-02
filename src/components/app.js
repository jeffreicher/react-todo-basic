import List from './list';
import axios from 'axios';
import AddForm from './add_form';
import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=jeffreicher15';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: []
        };
    };

    componentDidMount() {
        this.getListItems();
    }

    getListItems() {
        axios.get(`${BASE_URL}/todos/${API_KEY}`).then(resp => {
            console.log('Server response:', resp);
            this.setState({
                list: resp.data.todos
            });
        }).catch(err => {
            console.log('Error:', err.message);
        });
    }

    getOneItem() {
        //axios.get
        //url: http://api.reactprototypes.com/todos/[item id]?key=[your api key]
    }

    toggleComplete() {
        //axios.put 
        //url: http://api.reactprototypes.com/todos/[item id]?key=[your api key]
    }

    deleteItem(item) {
        axios.delete(`${BASE_URL}/todos/${API_KEY}`, item).then(resp => {
            console.log('Item to delete:', resp);
            this.getListItems();
        }).catch(err => {
            console.log('Error:', err.message);
        });

        //axios.delete to delete an item
        //url: http://api.reactprototypes.com/todos/[item id]?key=[your api key]
        // console.log(item);
        // const newList = [...this.state.list];
        // newList.splice(item, 1);
        // console.log('New:', newList);
        // console.log('Old:',this.state.list);
        // this.setState({
        //     list: newList
        // });
    };

    addItem(item) {
        axios.post(`${BASE_URL}/todos/${API_KEY}`, item).then(resp => {
            console.log('Item Added:', resp);
            this.getListItems();
        });
    };

    render() {
        return (
            <div className="container">
                <h1 className="center">To Do List</h1>
                <AddForm add={this.addItem.bind(this)}/>
                <List list={this.state.list}  delete={this.deleteItem.bind(this)}/>
            </div>
        );
    };
};

export default App;
