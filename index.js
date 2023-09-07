const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop(2);
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    return appendCat = [...cats, "Broom"]
}

function prependCat(name){
    return prependCat = ["Arnold", ...cats]
}

function removeLastCat(){
    return removeLastCat = cats.slice(0, cats.length-1);
}

function removeFirstCat(){
    return removeFirstCat = cats.slice(1);
}
