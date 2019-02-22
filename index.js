const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf(firstName, message) {
  return fetch('http://guestbook.example.com/register', {
    method: "POST",
    body: {
      "firstName": firstName,
      "registryMessage": message
    }
  })
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      console.log(response.message)
      return response.message
    })
}

function errorSelf(firstName, message) {
  return fetch('http://guestbook.example.com/register-error', {
    method: "POST",
    body: {
      "firstName": firstName,
      "registryMessage": message
    }
  })
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      console.log(response.message)
      return response.message
    })
    .catch(function(error) {
      return ':(';
    })
}