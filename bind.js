// bind behaves different than call and apply ,instead of giving value it gives us function
let obj1=
{
    num:34
}
 
let sub=function(x,y,z)
{
    return this.num-x-y-z;
}

// console.log(add.bind(obj1,arr));//it gives function instead of value like call and apply
let bound=sub.bind(obj1);
// console.log(bound);//gives function
console.log(bound(5,7,8));
