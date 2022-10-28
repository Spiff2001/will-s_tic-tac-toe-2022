import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.css';

class ShoppingList extends React.Component{
    render(){
        return(
            <div className= "shopping-list">
                <h1> shopping list for {this.props.name}</h1>
                <ul>
                    <li> peaches </li>
                    <li> metal girder</li>
                    <li> diced cumin </li>
                    <li> bryan's soul </li>
                    <li> {this.props.item}</li>
                </ul>
            </div>
        );
    }
}

export default ShoppingList; 