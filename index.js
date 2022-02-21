console.log('Hey , hi,kdv')

class a{

    state={
        name:"meghrja"
    }
    no=90592
    constructor()
    {
       // debugger;
        this.age="meghraj",
        this.name="Golu"
    }d
}
console.log(new a())

function fn(){



}
let obj={

};
Object.setPrototypeOf(obj, Function.prototype)
console.log(obj);



//some important method
fn.call();//using new
//Object.setPrototypeOf();
//b.prototype=Object.create(A.prototype);

class b{
   
    constructor()
    {
        this.name="class B"
       this.fn=()=>{}
    }
   
    add=function(){
       
       console.log('add fucntion in B') 

    }
}

class Sum {
    constructor(init){
      //  super()
        this.initVal=init;
    }
    add(t){
      //  console.log('into ');
        this.initVal+=t;
        console.log('inside add', this);
       // console.log('this.initval', this.initVal);
        return this;
    }
    sub(t){
        this.initVal-=t;
        return this;
    }
    val(t){
        
        return this.initVal;
    }
     
}





//function chaining
function Cal(initVal){
    this.init=initVal;
   this.add=function(t){
   // console.log('This his', this)
   console.log(this.init)
   console.log(this.init+=t);
       //this.initVal=10;
    return this;
   },
   this.sub=function(t){   
       this.init-=t;    
    return this;
   },  
   this.val=function(){       
    return this.init;
   }

};
console.log(new Cal());

console.log("Functional Approach",new Cal(4).add(40).sub(10).val());
console.log("class Approadch",new Sum(4).add(40));
console.log('\n\n\n\n/////////////\n\n')




// class Car{
//     constructor(name, year) {
        
//       this.name = name;
//       this.year = year;
//     }
//     ageNo() {
//       let date = new Date();
//       return date.getFullYear() - this.year;
//     }
// //   }
  
//   let myCar = new Car("Ford", 2014);
//   console.log('myCar', myCar);
//   //console.log(Car.prototype);
// console.log(  Car.prototype)


function Car(maker, model) {
    this.maker = maker;
    this.model = model;
}

 
Car.prototype.drive = function() {
    console.log("Zoom!");
}

  
function Tesla(model, chargetime) {
    Car.call(this, 'Tesla', model);
    this.chargetime = chargetime;
}

Tesla.prototype = Object.create(Car.prototype);
Tesla.prototype.constructor = Tesla;

Tesla.prototype.charge = function() {
    console.log("Charging...");
}

const tesla = new Tesla('3', 20);
console.log(tesla);
tesla.drive();
tesla.charge();





class Car1{
    constructor(maker, model) {
      this.maker = maker;
      this.model = model;
    }
  
    drive() {
        console.log("Zoom!");
    }
  }
  
  

  class Tesla1 extends Car1 {
    constructor(model, chargetime) {
        super('Tesla', model);
        this.chargetime = chargetime;
    }

    charge() {
        console.log("Charging...");
    }
}

const tesla1 = new Tesla1('3', 20);
tesla.drive();
tesla.charge();
console.log('class', tesla);



let obj2={
    
fn1:function()
{
  console.log(this);
  let f=function(){

    console.log('arrowFun insdie fn1 ',this);
    
  }
  f.call({})
}

}

obj2.fn1()