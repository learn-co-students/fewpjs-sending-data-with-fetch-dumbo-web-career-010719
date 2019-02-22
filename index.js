const testVar = {}

function testFunc() {
  return "hi"
}


const registerSelf = () => {
  return fetch('http://guestbook.example.com/register', {
    method:'POST',
    body: {
      firstName: 'Cuffy',
      registryMessage: 'Combs'
    }
  })
  .then(resp => resp.json())
  .then(data => data.message)
}

const errorSelf = () => {
  return fetch('http://guestbook.example.com/register-error', {
    method: 'POST',
    body: {
      firstName: 'Sean',
      registryMessage: 'Combs'
    }
  })
  .then(resp => resp.json())
  .then(data => data.message)
  .catch(errors => ':(')
}
