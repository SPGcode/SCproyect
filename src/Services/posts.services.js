import axios from 'axios';

const url = ''

const getPostService = {
    async getPosts(){
      try{
        const response = await axios.get(`${url}${urlProfile}`);
        return response.data;
        }catch(error){
            console.log(error)
        }
    }
},

export default getPostService;