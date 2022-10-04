let student=
{
    age:20
}
 var printage=function()
 {
    return this.age;
 }
 let bond=printage.bind(student);
 console.log(bond());