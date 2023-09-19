 // glue btw View and Model
 // controller will perform I/O to UI
// Data Exchange b/w  view and model.

import newsOperations from "../services/news-operations.js";
 
async function loadNews(){
    const news = await newsOperations.loadNews();
    console.log('News is ',news); 

}
loadNews();
