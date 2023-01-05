// 1
const ParentObj = {
    calAge : function(){
    console.log(`${this.fname} ${this.lname} ${this.age}`)
    }
  }
  const childObj = Object.create(ParentObj);
  childObj.fname = "Kapadam";
  childObj.lname = "Dharani";
  childObj.age = 22;
  childObj.calAge();
//   2
Object.prototype.bunglaw="9bhk flat";
  const grandfather={
    name:"john",
    // bunglaw:"2bhk flat",
    getland:function(){
      console.log("2 acres land");
    }
  }
  let father=Object.create(grandfather);
  console.log(father.name); //prints john
  father.name="joe";
  console.log(father.name); //prints joe
  console.log(father); //prints {name:"joe"}
  console.log(father.bunglaw); //prints 2bhk flat
  console.log(grandfather.getland);
  console.log(grandfather.bunglaw);//prints 9bhk flat ...looks for local variable if doesn't get looks for global prototype object variable this is called prototype chaining.
//   3
const calSum={
    sum:function(arr){
      let sum=0;
      for(let i=0;i<arr.length;i++){
        sum+=arr[i];
      }
      console.log(sum);
    }
  }
  let arr1=[1,2,3,4,5,6,7];
  calSum.sum(arr1);
//   4
function retriveOwnProperties(user) {
    return Object.keys(user);
 }
 
 function inheritetedProperties(user) {
   return user.toString();
 }
 
 const user = {
     name: 'Alex',
     age: 30
 }
 
 console.log(retriveOwnProperties(user));
 console.log(inheritetedProperties(user));