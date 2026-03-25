let streak = 0;
let mistakes = [];

function markWrong(question) {
  mistakes.push(question);
  console.log("Weak areas:", mistakes);
}
function setGoal() {
  const goal = document.getElementById("goal").value;
  document.getElementById("displayGoal").innerText = "Goal: " + goal;
}

function increaseStreak() {
  streak++;
  document.getElementById("streak").innerText = "Streak: " + streak;

  if (streak === 100) {
    alert("🎉 You unlocked 3-day premium!");
  }
}
function addFlashcard() {
  const q = document.getElementById("question").value;
  const a = document.getElementById("answer").value;

  const li = document.createElement("li");
  li.innerText = q + " -> " + a;
  
  li.onclick = () => {
  const userAnswer = prompt(q);
  if (userAnswer !== a) {
    mistakes.push(q);   // ✅ THIS is the weakness analyzer
    alert("Wrong! Weak area tracked.");
  } else {
    alert("Correct!");
  }
};

  document.getElementById("flashcards").appendChild(li);
}
async function generateNotes() {
  const text = prompt("Enter notes:");

  const res = await fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  const data = await res.json();
  alert("Summary: " + data.summary);
}

