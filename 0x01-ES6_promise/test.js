import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
const promiseReject = Promise.reject();
handleResponseFromAPI(promise);
handleResponseFromAPI(promiseReject);