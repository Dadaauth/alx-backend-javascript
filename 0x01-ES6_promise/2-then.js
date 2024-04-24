export default async function handleResponseFromAPI(promise) {
  const rtn = await promise.then(() => {
    console.log('Got a response from the API');
    return ({
      status: 200,
      body: 'success',
    });
  })
    .catch(() => new Error());
  return rtn;
}
