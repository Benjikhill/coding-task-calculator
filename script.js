let state = 0;
let a = 5;
// Gegeben
function add(a) {
  return (state = state + a);
}

function multiply(c) {
  return (state = state * c);
}

function sub(b) {
  return (state = state - b);
}

function divide(d) {
  return (state = state / d);
}

function reset() {
  return (state = 0);
}

function add(a) {
  return (state = state + a);
}

function log() {
  console.log(state);
}

// Soll
add(5); // state + 5
log(); // console.log(state) ERGEBNIS 5
add(40); // state + 40
log(); // console.log(state) ERGEBNIS 45
multiply(2); // state * 2
log(); // console.log(state) ERGEBNIS 90
sub(10); // state - 10
log(); // console.log(state) ERGEBNIS 80
divide(4); // state / 4
log(); // console.log(state) ERGEBNIS 20
reset(); // state = 0
log();
add(10); // state + 10
log(); // console.log(state) ERGEBNIS 10
