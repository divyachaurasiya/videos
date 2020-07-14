import React from 'react';
import SearchBar from './SearchBar';
import youTube from '../api/youTube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

const KEY = 'AIzaSyCIKvh2MPqZn8l5-yUPYnaxAKS4974BjVA';


class App extends React.Component {

    state = {videos : [], selectedVideo: null};  

    onSearchSubmit = async (term) => {
        const response = await youTube.get('/search?key='+KEY , {
            params : {
                q: term,
                part : 'snippet',
                maxResult : 10
            }
        });
        this.setState({
            videos : response.data.items,
            selectedVideo : response.data.items[0]});
    };
    componentDidMount() {
        this.onSearchSubmit('baby rhymes');
    }

    onVideoSelect = (video) => {

        this.setState({selectedVideo: video});

    };

    render() {
        return (
            <div className="ui container">
            <SearchBar searchTerm ={this.onSearchSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="ten wide column">
                        <VideoDetails video={this.state.selectedVideo} />
                    </div>
                    <div className="six wide column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                    </div>
                </div>
            </div>
            
            </div>
            );
    }
}

export default App;