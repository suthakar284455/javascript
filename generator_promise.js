function makeRequest(param){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(param)
        },1000)
    })

    promise.then((result) =>{
        console.log(result);
        g.next();
    })
}

function *generator(){
    yield makeRequest('fistname');
    yield makeRequest("lastname");
}

var g = generator();
g.next();