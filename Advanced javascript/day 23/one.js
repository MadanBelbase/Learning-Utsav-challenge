// async function getdata() {
//     return p; // Return the promise p
// }

// const p = new Promise((resolve, reject) => {
//     resolve("Hello");
// });

// const data = getdata();
// data.then((res) => {
//     console.log(res); // This will log "Hello"
// });


const p1 = new Promise((resolve,rejected)=>{
    setTimeout(()=>{
    resolve("success")
    },10000);});
const p2 = new Promise((resolve,rejected)=>{
    setTimeout(()=>{
    resolve("success")
    },1000);});
const p3 = new Promise((resolve,rejected)=>{
    setTimeout(()=>{
    resolve("success")
    },30000);});

async  function handlePromise(){
    console.log("javascript")
    const val1 = await p1;
    console.log("hello");
    console.log(val1)

    const val2 = await p2;
    console.log("hello 2");
    console.log(val2)

    const val3 = await p3;
    console.log("hello 3");
    console.log(val3)
}
handlePromise() // This will log "success" in the console.  

// function getData (){
//     p.then(res => console.log(res)); 
//     console.log("javascript")
// }
// getData();