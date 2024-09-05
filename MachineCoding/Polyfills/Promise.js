function myPromiseAll(promises) {
    if (promises.length === 0) {
        return Promise.resolve([]);
    }

    const output = [];
    let promiseSettled = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((data) => {
                    output[index] = data;
                    promiseSettled++;
                    if (promiseSettled === promises.length) {
                        resolve(output);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });
    });
}

function myPromiseAny(promises) {
    if (promises.length === 0) {
        return Promise.reject(new AggregateError([], "No promise were passed"));
    }

    const output = [];
    let promiseRejected = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            Promise.resolve(promise)
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    output.push(err);
                    promiseRejected++;
                    if (promiseRejected === promises.length) {
                        reject(
                            new AggregateError(
                                output,
                                "All promises were rejected"
                            )
                        );
                    }
                });
        });
    });
}

function myPromiseRace(promises) {
    if (promises.length === 0) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            Promise.resolve(promise).then(resolve).catch(reject);
        });
    });
}
