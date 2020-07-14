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
        <div className="ui segment">
            <form onSubmit={this.onInputSubmit} className="ui form" >
                <div className="field">
                    <label>Search YouTube video</label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange} />
                </div>
            </form>
        </div>
            );
    }
}

export default SearchBar;