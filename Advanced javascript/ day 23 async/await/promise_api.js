const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 1 resolved")
        }, 2000);
});
const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 2 resolved")
        }, 3000);
});
const p3 = new Promise((resolve,reject)=>{
    // setTimeout(() => {
    //     resolve("Promise 3 resolved")
    //     }, 1000);
    setTimeout(() => {
        reject("Promise 3 FAILED")
        }, 1000);
});

Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
});