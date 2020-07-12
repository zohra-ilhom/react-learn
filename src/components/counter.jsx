import React, { Component } from 'react';



class Counter extends Component {
    state = {
        count: this.props.value,
        name: this.props.name,
        
    };

    renderTags() {
        
        if (this.state.tags.length === 0) return <p> not tags available</p>;

        return <ul>{this.state.tags.map( tagItem => <li key={tagItem}>{tagItem}</li> )}</ul>
    }

    handleIncrement = () => {
        //console.log('increment button clicked', this.state.count);
        this.setState({ count: this.state.count +1 })
        
    }

    handleReduce = () => {
        //console.log('increment button clicked', this.state.count);
        this.setState({ count: this.state.count -1 })
        
    }

    render() { 
        
         return (
            // you can replace div with react.fragment
            <div>
                <span className= {this.getBadgeClasses()}> {this.formatCount()} </span>
                <button 
                    onClick={this.handleIncrement} 
                    className="btn btn-secondary btn-sm m-2"
                >
                +1 
                </button>

                <button 
                onClick={this.handleReduce} 
                className="btn btn-secondary btn-sm m-2"
                >
                -1 
                </button>

                <span> {this.state.name} </span>
                

            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "success";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        //if statment if count is = 0 then return string zero elsse return the number of count
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;

// you can set a bynch of styles like below and then reference it inside a div i.e. style={this.styles}
//     styles = {
//     fontSize: '30px',
//     fontWeight: 'bold',
//     backgroundColor: 'pink',
//     padding: '10px'
// };

