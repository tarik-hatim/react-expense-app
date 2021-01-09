const promise = new Promise((resolve,reject) => {

    // setTimeout(()=>{
    //     resolve('the data is resloved');
    // }, 1500)
    reject('something went wrong !');
    
});

console.log('before promise resolved');
promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

console.log('after promise is resolved');