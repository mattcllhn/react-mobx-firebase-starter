
import axios from 'axios';

export default function setAxiosDefaults(apiKey:string){
    axios.defaults.headers.common['api_key'] = apiKey;
    axios.defaults.headers.common['app_source'] = 'StudioPlus.ECom';
}