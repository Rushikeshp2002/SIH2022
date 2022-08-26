const audio = document.getElementById("sound");
const buttons = document.querySelectorAll(".three");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});