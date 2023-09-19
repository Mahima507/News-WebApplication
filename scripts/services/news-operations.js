/*
 news CRUD operations
 C - create, R - read, U - update, D - delete
 it talk to network layer to bring the JSON, and 
 convert JSON into Objects vice-versa  
*/
import News from "../models/news.js";
import makeNetworkCall from "./api-client.js";

const newsOperations = {
    async loadNews(){
       const news = await makeNetworkCall();
       const newsArray = news['id']; 
       const currentArray =  newsArray.map(news=>{
        const currentNews = new  News(news.id,news.name, news.description,news.url);
           return currentArray;
       })
       console.log('News Array ', currentArray);
       return currentArray; // Wrap in promise
    },
     sortNews(){  
        
    },
    searchNews(){

    }
}

export default newsOperations;
