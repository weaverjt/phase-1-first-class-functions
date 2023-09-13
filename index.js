function spy () {}

function receivesAFunction (callback) {
    return callback();
}
receivesAFunction(spy);

function returnsANamedFunction () {
    return spy;
}

function returnsAnAnonymousFunction () {
    return function(){};
}



