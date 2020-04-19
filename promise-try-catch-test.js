function runTest(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num === 1)
                resolve("hi");
            else
                reject("bye");
        }, 3000);
    });
}

async function demoTest(d) {
    try {
        let b = await runTest(d);
        return b;
    } catch(e) {
        throw e;
    }
}

async function demoRun(d) {
    try {
        let b = await demoTest(d);
        console.log(b);
    } catch (e) {
        console.log(e);
    }
}

demoRun(1);
demoRun(2);
