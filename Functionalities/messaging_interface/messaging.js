const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const text = messageInput.value.trim();
  if (text) {
    const message = createMessage('You', text);
    addMessageToContainer(message);
    messageInput.value = '';
    messageInput.focus();
    // Send the message to the server or other recipient
  }
}

function createMessage(sender, text) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  const senderDiv = document.createElement('div');
  senderDiv.classList.add('sender');
  senderDiv.innerText = sender;
  messageDiv.appendChild(senderDiv);
  const textDiv = document.createElement('div');
  textDiv.classList.add('text');
  textDiv.innerText = text;
  messageDiv.appendChild(textDiv);
  return messageDiv;
}

function addMessageToContainer(message) {
  messageContainer.appendChild(message);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}
