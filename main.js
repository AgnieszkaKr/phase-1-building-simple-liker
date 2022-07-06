// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let emptyHeart = document.querySelectorAll('.like-glyph')
emptyHeart.forEach(heart => heart.addEventListener('click', function(){
  console.log('works')
  mimicServerCall()
    .then()
    .catch(error => {
      document.querySelector('h2').removeAttribute('class')
      document.querySelector('h2').textContent = error
      console.log(error)
      setTimeout(()=>{
        document.querySelector('h2').setAttribute('class', 'hidden')
      }, 3000)
  })
  
}))


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
