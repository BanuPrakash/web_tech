// OCP ==> closed for a change open for extension
// HOF because action function is passed as argument
function forEach(data, action) {
    for(i = 0; i < data.length; i++) {
        action(data[i]);
    }
}

function filter(data, predicate) {
    var output = [];
    forEach(data, function(elem) {
        if(predicate(elem))
        output.push(elem)
    });
    return output;
}