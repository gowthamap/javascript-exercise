
console.log("Start");

function getDataFromAPI(callback){
    setTimeout(()=>{
        callback (5);
    }, 1000)
}
function getDataFromAPI2(callback){
    setTimeout(()=>{
        callback (5);
    }, 1000)
}
function getDataFromAPI3(callback){
    setTimeout(()=>{
        callback (5);
    }, 1000)
}

getDataFromAPI((value)=>{
    getDataFromAPI2((api2Val)=>{
        getDataFromAPI3((api3Val)=>{
            console.log(api2Val + api3Val +value);
        })
    })
});

console.log("End");