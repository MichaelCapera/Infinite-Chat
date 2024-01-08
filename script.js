

function addMessage() {
    const message = document.getElementById("messageInput").value;
    const chatContent = document.getElementById("chatContent");

    const newMessage = document.createElement("div");
    newMessage.textContent = message;

    chatContent.appendChild(newMessage);

    const chatContainer = document.getElementById("chatContainer");
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendMessageWithEnter() {
   document
    .getElementById("messageInput")
    .addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addMessage();
      }
    });
}

sendMessageWithEnter();