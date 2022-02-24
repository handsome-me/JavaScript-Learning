let name="Meghraj";
var name2="varName_Meghraj";

function fn(){

    console.clear()
     setInterval(()=>{
         console.log('interval after everry 0 sec');
     },1000)
    setTimeout(()=>{

        console.log('settimeoutafter 0 sec');
    },0);

    const pr= new Promise((resoleve, rejeact)=>{
        setInterval(()=>{
           resoleve()
        },5000)
     });
     pr.then((msg)=>{
         console.log("primse is resolve , msg", msg);
     })
    

};

fn();
for(let i=0;i<200;i++)
{
 console.log("0");
}



/*
Let’s take a look at an example to better illustrate the differences between setTimeout and setInterval.

setTimeout(function(){
    
  setTimeout(arguments.callee, 10);
}, 10);
 
setInterval(function(){
  
}, 10);
These two pieces of code may appear to be functionally equivalent, 
at first glance, but they are not. 
Notably the setTimeout code will always have at least a 10ms delay
 after the previous callback execution (it may end up being more, but never less) 
 whereas the setInterval will attempt to execute a callback every 10ms regardless 
 of when the last callback was executed.

 Link- https://johnresig.com/blog/how-javascript-timers-work/

 if their is x sec setInternal and it times up so its callback function gets push to Q so u cannot clearTimout() it after ward
*/
