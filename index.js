const form = document.querySelector('form');
const input = document.querySelector('input');
const chatbox = document.querySelector('#chatbox');
const imFeelingLonely = document.querySelector('button');
const from = ['Me', 'Myself', 'I'];
let id = 3;
let apiURL = "https://api.chucknorris.io/jokes/random";
const timestamp = new Date().toLocaleTimeString('en-US');

form.addEventListener('submit', hitSubmit);
imFeelingLonely.addEventListener('click', chuckTime);

function hitSubmit(go) {
  go.preventDefault();
  id++
  const randomNumber = Math.floor(Math.random() * me.length);
//   const timestamp = new Date().toLocaleTimeString('en-US');
  
  const giveJoke = document.createElement('div');
  giveJoke.className = 'message';
  giveJoke.setAttribute('id', id);
  giveJoke.innerHTML = `
    <span>${timestamp}</span>
    <span class="sender">${from[randomNumber]}:</span>
    <span>${input.value}</span>
    <span class="delete" onclick="deleteJoke(${id})">❌</span>`;
  chatbox.appendChild(giveJoke);
  input.value = ''
}


function deleteJoke(id) {
    const joke = document.getElementById(id)
    joke.remove();
}

function chuckTime(){
  
    fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
        let joke = data.value
        let chuckJoke = document.createElement('div')
        chuckJoke.className = 'message'
        chuckJoke.setAttribute('id', id);
        chuckJoke.innerHTML =
        `
        <span>${(timestamp)}</span>
          <span class="sender">Fact:</span>
          <span>${joke}</span>
          <span class="delete" onclick="deleteJoke(${id})">❌</span>
        `;
        chatbox.appendChild(chuckJoke);
    });


}