let x = 1;
let y = 4;
let z = -1;

if (x < 2) {
    document.write( "\na est plus petit que 2")
}
if (y > 3) {
    document.write("\ny est plus grand que 3")
}
if ( z <= 0) {
    document.write("\nz est inferieur ou egal a 0")
}
if( x < 2 && y > 3 && z <= 0 ) {
    document.write("\ntout est vrai")
}
if( x < 2 && y > 3 || z === -1 ) {
    document.write("\ntout est vrai")
}