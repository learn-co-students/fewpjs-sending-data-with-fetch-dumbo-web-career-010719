const testVar = {}

function testFunc() {
  return "hi"
}

// async function registerSelf(){
//   const data = await fetch("http://guestbook.example.com/register",{
//     "method":"POST",
//     "body": {
//       "firstName": "Ben",
//       "registryMessage": "Did something"
//     }
//   })
//   const resp = await data.json()
//   return resp.message
//  **not sure why this way doesn't work**
// }

function registerSelf(){
  return fetch("http://guestbook.example.com/register",{
    "method":"POST",
    "body":{
      "firstName":"Ben",
      "registryMessage":"Did something"
    }
  })
  .then(res => res.json())
  .then(data => data.message)
}

function errorSelf(){
  return fetch("http://guestbook.example.com/register-error",{
    "method":"POST",
    "body":{
      "firstName":"Ben",
      "registryMessage":"Did something bad"
    }
  })
  .then(res => res.json())
  .then(data => data.message)
  .catch(data => ":(")
}
