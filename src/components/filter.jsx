import React, { Component } from 'react';

class Filters extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <button onClick={this.props.onFilterAll} type="button" className="btn btn-warning m-2">All</button>
                <button onClick={this.props.onFilterAction} type="button" className="btn btn-warning m-2">Action</button>
                <button onClick={this.props.onFilterRomcom} type="button" className="btn btn-warning m-2">Romcom</button>
                <button onClick={this.props.onFilterHorror} type="button" className="btn btn-warning m-2">Horror</button>
                
            </div>
         );
    }
}
 
export default Filters;