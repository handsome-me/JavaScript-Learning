console.log("Started implementing promise");

   class customPromise{
    
     refer_to_then=null;

     //promise(//promise_callback->// (res,rej)=>{})
     constructor(promise_callback){
         setTimeout(()=>{
          this.resolve(33);
         },1000);
        return this.obj;
     }
     resolve(val){
       this.refer_to_then(val);
     };
     reject(){

     } 
     obj={
         then:(callBack)=>{
            
            this.refer_to_then=callBack()
         }
     }

   }