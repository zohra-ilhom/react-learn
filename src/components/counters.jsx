import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {name: "Zohra", value: 3, id: 1  },
            {name: "Pandora", value: 4, id:2 }
        ]

    }
    addItem = () => {
       const userInput = document.getElementById("entry").value
       let uniqueID = Date.now()
       this.setState(state => ({counters: this.state.counters.concat({name: userInput, value: 0, id: uniqueID}) })) ;
       
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counters => counters.id !== counterId);
        this.setState({counters});

    }


    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                </nav>
                
                <input className="m-2" type="text" id="entry" placeholder="enter item"></input>
                <button onClick={this.addItem} type="button"  className="btn btn-primary">Add Item</button>
        
                {this.state.counters.map(counter => <Counter onDelete={this.handleDelete}  name={counter.name} value={counter.value} key={counter.id}/>)}
            </div>
            

         );
    }
}
 
export default Counters;
