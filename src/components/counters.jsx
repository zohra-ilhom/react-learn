import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    state = { 
       counters: [
           {id:1, value: 3, name: 'name1'},
           {id:2, value: 7, name: 'name2'},
           {id:3, value: 4, name: 'name3'},
           {id:4, value: 4, name: 'name4'},
       ]
        
     }
    render() { 
        return ( 
            <div>
                {this.state.counters.map(counter => 
                    <Counter key={counter.id} value={counter.value} name={counter.name}/>
                    

        )} 
            </div> 
        );
    }
}
 
export default Counters;