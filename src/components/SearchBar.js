import React from 'react';

class SearchBar extends React.Component {

    state = {term :''};

    onInputSubmit = (event) => {
        event.preventDefault();
        this.props.searchTerm(this.state.term);

    }

    onInputChange = (event) => {
        this.setState({term : event.target.value });
        
    }

    render () {
        return (
        <div>
            <form onSubmit={this.onInputSubmit}>
            <label>Search YouTube video</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange} />
            </form>
        </div>
            );
    }
}

export default SearchBar;