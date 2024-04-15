function sum(a,b){
    return a+b;
}
function input(a){
    if(typeof a !== 'number'){
        throw new Error('input must be a number');
    }
    return a;
}
function fetchData(callback){
    setTimeout(() => {
        callback('peanut butter');
    }, 1000);
}
function fetchPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 1000);
    });
}
module.exports ={
    sum,
    input,
    fetchData,
    fetchPromise
}