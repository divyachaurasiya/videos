import axios from 'axios';

const KEY = 'AIzaSyDe5pTxi9S7eVEtVu1-qzAx6yKvx4lyTeg';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : ['snippet'],
        maxResult : 5,
        type: ['video'],
        key: KEY

    }
}

);