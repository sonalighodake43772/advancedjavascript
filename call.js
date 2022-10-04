// call is used to call function
// syntax:functionname.call(obj,arg1,arg2,arg3);

let obj=
{
    num:5
}
 
let square=function(x)
{
    return this.num*x;
}

console.log(square.call(obj,5));