import React from 'react';
import SearchBar from './SearchBar';
import youTube from '../api/youTube';

class App extends React.Component {



    onSearchSubmit = async (term) => {
        const response = await youTube.get('/search' , {
            parms : {
                q: term
            }
        });
     console.log(response);
    };

    render() {
        return (
            <div className="ui container">
            <SearchBar searchTerm ={this.onSearchSubmit} />
            App</div>
            );
    }
}

export default App;