function registerSelf() {
  return fetch('http://guestbook.example.com/register',{
    method: 'POST',
    body: {
      'firstName': "Lizzy",
      'registryMessage': "Hello"
    }
  }).then(function(response) {
      return response.json();
    }).then(function(json) {
      return json.message;
    });
}

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", {
    "method": "POST",
    "body": {
      "firstName": "Lizzy",
      "registryMessage": "Hello"
    }
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json.message;
  }).catch(function(x) {
    return ":(";
  });
}
