const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf() {
  return fetch('http://guestbook.example.com/register', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
    body: JSON.stringify({firstName: "Cassidy S", registryMessage: "Mod 3 woo"})
  })
  .then(resp => resp.json())
  .then(json => json.message)
}

function errorSelf() {
  return fetch('http://guestbook.example.com/register-error', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
    body: JSON.stringify({firstName: "Cassidy S", registryMessage: "Mod 3 woo"})
  })
  .then(resp => resp.json())
  .then(json => json.message)
  .catch(error => ":(")
}
