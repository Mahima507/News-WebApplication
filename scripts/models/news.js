/* News model (blue print)
 contains the structure of a news Object
  
*/

class News{
    constructor(id, name, desc, url ){
// this - keyword(contains current calling object reference )      
        this.id =  id;
       this.name = name;
       this.desc = desc;
       this.url = url;
    }
}

export default News;  


