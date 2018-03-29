import React, { Component } from 'react';

class AddForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            details: ''
        };
    }

    handleAddItem(event) {
        event.preventDefault();        
        console.log('New item to add:', this.state);
        
        this.props.add(this.state);

        this.setState({
            title: '',
            details: ''
        });
    }

    render() {
        const {title, details} = this.state;

        return (
            <form className="row" onSubmit={this.handleAddItem.bind(this)}>
                <div className="col s6">
                    <label>Title</label>
                    <input type="text" value={title} onChange={event => this.setState({title: event.target.value})}/>
                </div>
                <div className="col s6">
                    <label>Details</label>
                    <input type="text" value={details} onChange={event => this.setState({details: event.target.value})}/>
                </div>
                <div className="center">
                  <button className="btn blue darken-3">Submit</button>  
                </div>
                
            </form>
        );
    };
};

export default AddForm;