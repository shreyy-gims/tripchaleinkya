// const baba={
//   name:"baba",
//   rating:4.5,
//   offers:["30% off","20% off","10% off"],
//   isOpen:true,
//   openHours:{
//     mon:10,
//     sat:12,
//     sun:11,
//   },
//   price:1000,
//   discount:function(){
//     return this.price-(this.price*this.offers[10]/100);
//   },
// };
// console.log(baba.offers);
// console.log(baba.openHours.mon);
// console.log(baba.price);
// console.log(baba.discount());


// a=[1,2,3,4,5,6,7,8,9,10];
// console.log(a);

// let tt=0
// for (let i of a){
//     tt+=i;
// }
// console.log(tt/a.length);

b=[225,234,245,256,267,278,289,300];
 
for (let i in b){
  let c=b[i]*0.1;
  let a=b[i]-c;
    b[i]=a;
    console.log(b[i]);
}
console.log(b);

let strobj=["deviloose","demon","devil","demon","devil"];
let tt=["Satyendra","Raj","Rajesh","Rajesh","Rajesh"];
console.log(strobj.length);
console.log(strobj.concat(tt));

console.log(strobj.indexOf("demon"));
console.log(strobj.lastIndexOf("demon"));
console.log(strobj);

// console.log(strobj.join(" "));
// console.log(strobj.reverse());
// console.log(strobj.sort());
// console.log(strobj.slice(0,3)); //return the selected element without modifying the original array
// console.log(strobj.splice(0,3));//remove the selected element from the original array and return the removed element
// console.log(strobj.shift());   //remove the first element of the array
// console.log(strobj.unshift()); //add the first element of the array



let store=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(store.shift());  //it change the original array
console.log(store);













