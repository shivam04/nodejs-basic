function makeAdjectifier(adjective) {
    return function (string) {
        return adjective + " " + string;
    };
}
let coolifier = makeAdjectifier("cool");
let a = coolifier("conference");
console.log(a);
