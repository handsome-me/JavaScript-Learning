
console.log("Started implementing promise");

const PENDING="PENDING";
const FULLFILLED="FULLFILLED";
const REJECTED="REJECTED";

   class customPromise{
    
      refer_to_then=null;
       val=null;
       status=PENDING;

     //promise(//promise_callback->// (res,rej)=>{})
     constructor(promise_callback){
       
        promise_callback(this.resolve);
      
        return this;

     }
     resolve=(val)=>{
       this.status=FULLFILLED;
       this.val=val;
        
     };
     reject(){

     } 
     
     then=(callBack)=>{
            
          const res=callBack(this.val);
          this.val=res;
          this.status=FULLFILLED
          
          return this;

        }
   
    
   };

  const obj= new customPromise((res,rej)=>{
     res("hey, promise implemented!");
   });
   window.custom=obj;

   console.log('obj',obj)
//    obj.then((result)=>{
//     console.log("result->", result);
//    })