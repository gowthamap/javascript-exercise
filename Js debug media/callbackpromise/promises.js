
const promise1 = new Promise((resolve, reject)=>{
    resolve(["Javascript", "Java"])
    // reject("API Failed");

});

const promise2 = new Promise((resolve, reject)=>{
    // resolve(["React", "Angular"])
    reject("API Failed");
});


const allPromises = Promise.any([promise1, promise2]);

allPromises.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})