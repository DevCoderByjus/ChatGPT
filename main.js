// Get the AI element by class name
const aiElement = document.querySelector('.ai');

// Add a click event listener to the AI element
aiElement.addEventListener('click', function() {
  // Add the 'clicked' class to the AI element to apply the click animation
  aiElement.classList.add('clicked');
  
  // Remove the 'clicked' class after the animation is finished
  setTimeout(function() {
    aiElement.classList.remove('clicked');
  }, 1000); // Set the timeout to match the duration of the click animation
});

function addMessageToChat(message) {
  const chatMessages = document.querySelector('.chat-messages');
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
}