const testVar = {}

function testFunc() {
  return "hi"
}

// let configObj = {
//   method: "POST",
//   body: {
//   	"name": "Edwin",
//   	"message": "Hi."
//   }
// }

function registerSelf(){
  return fetch(("http://guestbook.example.com/register") , {
  method: "POST",
  body: {
  	name: "Edwin",
  	message: "hi"
  }
}).then(function(response) {
    return response.json();
  }).then(function(parsed){
  	return parsed.message
  }).catch(function(error){
    alert("Bad things! Ragnarők!");
    return "This is an error message. There are many like it, but this one is for log_dogger";

})
};

function errorSelf() {
  return fetch(("http://guestbook.example.com/register-error") , {
  method: "POST",
  body: {
  	firstName: "Edwin",
  	registryMessage: "hi"
  }
}).then(function(response) {
    return response.json();
  }).then(function(parsed){
  	return parsed.message
  }).catch(function(error){
    return ":(";

})
}
registerSelf();