// apply is behave same as a call only difference is that instead of multiple arg it take array
// syntax:functionname.apply(obj,arr);


let obj1=
{
    num:9
}
 
let add=function(x,y,z)
{
    return this.num+x+y+z;
}

let arr=[7,3,4];
console.log(add.apply(obj1,arr));