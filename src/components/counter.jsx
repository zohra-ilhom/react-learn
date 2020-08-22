import React, { Component } from 'react';


class Counter extends Component {

        
    
    render() { 
        return ( 
        
            <tr>
                <td scope="row">{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.genre}</td>
                <td>
                    <span>{this.props.stock}</span>
                    <button onClick={() => this.props.onIncrement(this.props.id)} type="button" className="btn btn-dark m-2">+1</button>
                    <button disabled={this.props.stock ===0 ? "disabled" : ""} onClick={() => this.props.onDecrement(this.props.id)} type="button" className="btn btn-dark m-2" >-1</button>
                </td>
                <td>{this.props.rate}</td>
                <td><button onClick={() => this.props.onDelete(this.props.id)} type="button" className="btn btn-danger">Delete</button></td>
            </tr>

        );
    }
}
 
export default Counter;