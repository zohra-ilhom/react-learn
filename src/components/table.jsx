import React, { Component } from 'react';
import Counter from "./counter";
import Filter from "./filter";

class Counterz extends Component {
    state = { 
        movies: [
            {
                name: 'Transformers', 
                id: 0, 
                genre: 'Action', 
                stock: 0, 
                rate: 2.5
            },


            {
                name: 'White Chicks', 
                id: 1, 
                genre: 'Romcom', 
                stock: 2, 
                rate: 5
            },

            {
                name: 'The Matrix', 
                id: 2, 
                genre: 'Action', 
                stock: 4, 
                rate: 4.4
            },

            {
                name: 'Exorcism', 
                id: 3, 
                genre: 'Horror', 
                stock: 0, 
                rate: 2.5
            },

            

        ]
     }




    


    formatMovieCount = () => {
        const totalMovies = this.state.movies.length;
        return totalMovies === 0 ? 'This database does not have any movies' : "Total list of movies is equal to " + totalMovies;
        

    };

    handleDelete = (movieId) => {
        const movies = this.state.movies.filter(movie => (movie.id !== movieId));
        //const movies = this.state.movies.filter(movie => movie.id !== movieId);
        this.setState({movies});
        

    };
    
    handleIncrement = (movieId) => {
        //const movies = [...this.state.movies];
        const incrementStock = this.state.movies[movieId].stock++;
        this.setState({incrementStock})

    };

    handleDecrement = (movieId) => {
        const movies = [...this.state.movies];
        const decrementStock = movies[movieId].stock--;
        this.setState({decrementStock})

    };

    handleReset = () => {
        const movies = this.state.movies.map(movie => {movie.stock = 0; return movie;});
        this.setState({movies});
    };


    handleFilterAll = () => {
        
    };

    handleFilterAction = () => {
        const movies = this.state.movies.filter(movie => movie.genre.includes('Action'));

        this.setState({movies})

        //console.log(movies);
        //const movies = this.state.movies.filter(movies.genre ='Action'));
        //this.setState({movies});

        //const name = this.state.name.filter(name => name.includes(input))

    };


    handleFilterRomcom = () => {
        const movies = this.state.movies.filter(movie => movie.genre.includes('Romcom'));

        this.setState({movies})

    };

    handleFilterHorror = () => {
        const movies = this.state.movies.filter(movie => movie.genre.includes('Horror'));

        this.setState({movies})
        

    };



    render() { 
        return (
            <div>
                
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" >Movie List</a>
                </nav>
                <p>{this.formatMovieCount()}</p>

                <button onClick={this.handleReset} type="button" className="btn btn-primary m-2">Reset</button>

                
                <Filter 
                    onFilterAction={this.handleFilterAction} 
                    onFilterAll={this.handleFilterAll}
                    onFilterRomcom={this.handleFilterRomcom}
                    onFilterHorror={this.handleFilterHorror}
                />
             

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rating</th>
                            <th scope="col"> </th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.movies.map(movie => 
                            <Counter 
                                onDecrement={this.handleDecrement} 
                                onIncrement={this.handleIncrement} 
                                onDelete={this.handleDelete} 
                                id={movie.id} 
                                key={movie.id} 
                                name={movie.name} 
                                genre={movie.genre} 
                                stock={movie.stock} 
                                rate={movie.rate}
                            />)}
                    </tbody>
                </table>
                

            </div>



        );
    }
}
 
export default Counterz;

    
            