const results = [
  {
    name: "Ailith",
    power: "Invisibility and Stealth",
    image: "https://example.com/dragon1.jpg"
  },
  {
    name: "Branoc",
    power: "Fire Manipulation",
    image: "https://example.com/dragon2.jpg"
  },
  {
    name: "Caelan",
    power: "Healing and Restoration",
    image: "https://example.com/dragon3.jpg"
  },
  {
    name: "Darragh",
    power: "Telekinetic Force",
    image: "https://example.com/dragon4.jpg"
  }
];

function showResult() {
  const selected = document.querySelectorAll('input[type="radio"]:checked');
  if (selected.length < 12) {
    alert("Please answer all questions!");
    return;
  }

  const index = Math.floor(Math.random() * results.length);
  const result = results[index];

  document.getElementById("dragonName").textContent = result.name;
  document.getElementById("dragonPower").textContent = result.power;
  document.getElementById("dragonImage").src = result.image;

  document.getElementById("quizForm").style.display = "none";
  document.getElementById("result").style.display = "block";
}

function retakeQuiz() {
  document.getElementById("quizForm").reset();
  document.getElementById("quizForm").style.display = "block";
  document.getElementById("result").style.display = "none";
}
