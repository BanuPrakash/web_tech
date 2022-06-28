// OCP ==> closed for a change open for extension
// HOF because action function is passed as argument
function forEach(data, action) {
    for(i = 0; i < data.length; i++) {
        action(data[i]);
    }
}
