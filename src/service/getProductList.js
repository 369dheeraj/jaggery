import axios from 'axios'

const getProductList = async(url) =>{
    try{
        const response = await axios.get(url);
        return response.data;
    }catch(error){
        console.error('Error in fetching data in getProductList',error);
        throw error;
    }
};

export default  getProductList;