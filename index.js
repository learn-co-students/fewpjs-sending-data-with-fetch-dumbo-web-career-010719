const testVar = {}

function testFunc() {
  return "hi"
}
fetch('http://guestbook.example.com/register')
.then(function(response) {
  response.json()
})
.then(data)
.catch(function(error) {
 console.log(':(')
 return ':('
})
