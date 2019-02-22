let formData = {
  "firstName": "Raymond",
  "registryMessage": "You have been added to the guest book"
}

let configData = {
  method: "POST",
  body: formData
}

function registerSelf() {
  return fetch("http://guestbook.example.com/register", configData)
  .then(res => res.json())
  .then(content => content["message"])
}

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", configData)
  .then(res => res.json())
  .then(content => console.log(content))
  .catch(error => ":(")
}
registerSelf();
