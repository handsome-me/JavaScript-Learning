
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
        
         const resolve=(val)=>{
           
            this.status=FULLFILLED;
            this.val=val;
             
          };
         
     
          promise_callback(resolve);
      

     }
       
     
     then=(callBack)=>{
            
          const res=callBack(this.val);
          if(res)
          if(res.__proto__===Promise.prototype){
               
               
             return res; 
          }
          
          this.status=FULLFILLED
          
         
          this.result=res;
           
          return this;

        }
   
    
   };

  const obj= new customPromise((res,rej)=>{
     res("hey, promise implemented!");
   });
   window.custom=obj;
    
   //console.log('obj',obj.then((r)=>r))
//    obj.then((result)=>{
//     console.log("result->", result);
//    })