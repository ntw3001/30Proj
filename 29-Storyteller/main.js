const storyOutput = document.getElementById("story");
const speedInput = document.getElementById("speed");

let storyText = "Once upon a time, in a land far away, there lived a brave knight. He embarked on a quest to find a hidden treasure. Along the way, he faced many challenges and made new friends. Then the dragon killed him with its tail.";

let speedValue = 1;

let speed = 200

writeStory();

function writeStory() {
storyOutput.innerText = storyText.slice(0, speedValue);
speedValue++;
if (speedValue > storyText.length) {
  speedValue = 1;
}
setTimeout(writeStory, speed);
}

speedInput.addEventListener("input", (e) => {
  speed = 200 / e.target.value;
});
