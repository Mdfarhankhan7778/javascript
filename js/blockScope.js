// block scpe-- variables declared in a block are accesible inside that bloc
var a=100;
{
    var a=10;
    let b=20;
    const c=30;

    console.log(a);
    console.log(b);
    console.log(c);

}
console.log(a);  // output- 10,20,30,10
console.log(b);

//-----------------

let b=10;
{
    var a=10;
    let b=20;
    const c= 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(b);
