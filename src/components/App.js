import React from 'react';
import SearchBar from './SearchBar';
import youTube from '../api/youTube';
import VideoList from './VideoList'

const KEY = 'AIzaSyCIKvh2MPqZn8l5-yUPYnaxAKS4974BjVA';


class App extends React.Component {

    state = {videos : []};

    onSearchSubmit = async (term) => {
        const response = await youTube.get('/search?key='+KEY , {
            params : {
                q: term,
                part : 'snippet',
                maxResult : 10
            }
        });
        this.setState({videos : response.data.items});
        //console.log(this.state.videos)
    };

    render() {
        return (
            <div className="ui container">
            <SearchBar searchTerm ={this.onSearchSubmit} />
            <VideoList videos={this.state.videos} />
            </div>
            );
    }
}

export default App;