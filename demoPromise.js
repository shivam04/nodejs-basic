function checkPromise(num) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num === 1)
                resolve("hi");
            else
                reject("bye");
        }, 3000);
    }).then(r => {
        console.log(r);
    }).catch(e => {
        console.log(e);
    });
    console.log(num);
}

checkPromise(1);
checkPromise(0);
