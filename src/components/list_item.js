import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDetails: false
        };
    };

    toggleShow() {
        this.setState({
            showDetails: !this.state.showDetails
        });
    };

    // renderDetails() {
    //     // if(this.state.showDetails) {
    //     //     return (
    //     //         <ul className="collection">
    //     //             <li className="collection-item">{this.props.item.details}</li>
    //     //         </ul>
    //     //     );
    //     // };
    //     // return null;
    //     return this.state.showDetails ? <ul className="collection"><li className="collection-item">{this.props.item.details}</li></ul> : null;
    // };

    render() {
        const {item, index, del} = this.props;

        return(
            <li onClick={this.toggleShow.bind(this)} className="collection-item row">
                <div className="col s8">
                    {item.title} 
                    {this.state.showDetails ? (<ul className="collection"><li className="collection-item">{this.props.item.details}</li></ul>) : null}
                </div>
                <div className="col s4 right-align">
                    <button className="btn-floating red darken-3" onClick={del}><i className="material-icons">delete</i></button>
                </div>
            </li> 
        );
    };
};

export default ListItem;