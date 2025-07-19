function updateMessage() {
  const messages = [
    "Keep pushing forward.",
    "You're doing great.",
    "Success is near.",
    "Take a deep breath.",
    "Believe in yourself."
  ];

  const index = getRandomInt(0, messages.length - 1);
  console.log("Selected message index:", index);
  document.getElementById("messageTitle").innerHTML = messages[index];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}