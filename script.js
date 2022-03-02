let replyInput = document.getElementById("input-message");
let replyBox = document.querySelector(".reply");
let chatSpace = document.querySelector(".chats-main");

replyInput.addEventListener("click", function () {
  replyBox.classList.add("active");
  chatSpace.classList.add("with-keyboard");
});

chatSpace.addEventListener("click", function () {
  replyBox.classList.remove("active");
  chatSpace.classList.remove("with-keyboard");
});
