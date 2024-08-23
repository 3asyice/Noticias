function sendMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (message !== '') {
    const chatMessages = document.getElementById('chat-messages');
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', 'sent');
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);
    input.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}
