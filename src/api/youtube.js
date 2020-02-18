import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    param:{
        part:'snippet',
        maxResults: 10,
        key:'AIzaSyAn1K6865WNgj4KvFJsoixAbx_hJMMD-tA'
    }
});