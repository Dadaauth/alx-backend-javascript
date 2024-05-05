var arrs = [1, 12, "string", true];
var someValue = "this is a string";
var strLength = someValue.length;
var men = "Dojo";
// const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);
// Change 1:
// const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
// handleRequest(req.url, req.method as "GET");
var req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
var firstName = Symbol("name");
var secondName = Symbol("name");
console.log(typeof firstName);
console.log(typeof secondName);
