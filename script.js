const style = document.createElement('style');
style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

* {
  box-sizing: border-box;
}

body {
  background-color: rebeccapurple;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.btn {
  background-color: wheat;
  color: black;
  font-family: inherit;
  font-weight: bold;
  font-size: larger;
  padding: 2rem;
  border-radius: 11px;
  border: none;
  cursor: pointer;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.99);
}

#toasts {
  position: fixed;
  bottom: 11px;
  right: 11px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.toast {
  background-color: #fff;
  color: black;
  border-radius: 11px;
  padding: 1rem 2rem;
  margin: 0.5rem;
}

.toast.info {
    color: black;
}

.toast.success {
    color: green;
}

.toast.error {
    color: red;
}
`;
document.head.appendChild(style);



const button = document.createElement('button');
button.className = 'btn';
button.id = 'button';
button.textContent = 'Show Notification';
document.body.appendChild(button);

const toasts = document.createElement('div');
toasts.id = 'toasts';
document.body.appendChild(toasts);

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
  'Message Five',
  'Message Six',
  'Message Seven',
  'Message Eight',
  'Message Nine',
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type ? type : getRandomType());
  notif.innerText = message ? message : getRandomMessage();
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
