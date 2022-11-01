import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.css';
import ShoppingList from "./shoppingList";

class Game extends React.Component{
        render(){
            return(
                <div className= "game">
                    <div> 
                        <Board/>
                    </div>
                </div>
                );
            }
        }
class Board extends React.Component{
    
    renderSquare(i){
        return <Square/>
    }
    render(){
        const player = 'x';
        return(
            <div className= "board ">
                <div>Next Player: {player}</div>
                <div className = "firstRow" > 
                    {this.renderSquare(0)}    
                    {this.renderSquare(1)}   
                    {this.renderSquare(2)}    
                 </div>

                <div className = "middleRow" > 
                   {this.renderSquare(3)}    
                   {this.renderSquare(4)}   
                   {this.renderSquare(5)}    
                        
                </div>
                <div className = "bottomRow" > 
                   {this.renderSquare(6)}    
                   {this.renderSquare(7)}   
                   {this.renderSquare(8)}
                </div>
            </div>
            );
        }
}

class Square extends React.Component{
    render(){
        return(
            <button className = "square">
                {/* we'll be adding more stuff to this later */}
            </button>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ShoppingList name="Will®" item="water™"/>);
root.render(<Game></Game>)

