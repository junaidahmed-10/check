// const promiseOne = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log("async task is complete");
//         resolve();
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
// })

const promiseFour = new Promise(function (resolve, reject){
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username:"hitesh", password:"2123"})
        }else{
            reject("ERROR: somethng went wrong")
        }
    }, 2000);
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
    return user.password
})
.then((password) => {
    // console.log(password);
})
.catch(function(error){
    console.log(error);
})
.finally(() => {
    console.log("the promise is either resolved or rejected");
})