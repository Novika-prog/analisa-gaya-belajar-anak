const questions = [
  {
    text: "Saat belajar, anak Anda lebih suka...",
    options: [
      { text: "Melihat gambar atau warna", type: "visual" },
      { text: "Mendengarkan penjelasan", type: "auditory" },
      { text: "Langsung praktik", type: "kinesthetic" },
    ],
  },
  {
    text: "Saat bermain, anak lebih sering...",
    options: [
      { text: "Melukis atau menyusun puzzle", type: "visual" },
      { text: "Bernyanyi atau ngobrol", type: "auditory" },
      { text: "Berlari atau memegang benda", type: "kinesthetic" },
    ],
  }
];

const quizForm = document.getElementById("quizForm");
const resultDiv = document.getElementById("result");
const resultText = document.getElementById("resultText");
const downloadBtn = document.getElementById("downloadBtn");

function renderQuestions() {
  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question-block";
    div.innerHTML = `<h3>${index + 1}. ${q.text}</h3>`;
    q.options.forEach((opt, optIndex) => {
      const id = `q${index}_opt${optIndex}`;
      div.innerHTML += `
        <label>
          <input type="radio" name="q${index}" value="${opt.type}" required />
          ${opt.text}
        </label>
      `;
    });
    quizForm.appendChild(div);
  });

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Lihat Hasil";
  quizForm.appendChild(submitBtn);
}

quizForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(quizForm);
  const scores = { visual: 0, auditory: 0, kinesthetic: 0 };

  for (let pair of formData.entries()) {
    scores[pair[1]]++;
  }

  const highest = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  let result = "";
  if (highest === "visual") {
    result = "Gaya belajar anak Anda cenderung Visual.";
  } else if (highest === "auditory") {
    result = "Gaya belajar anak Anda cenderung Auditori.";
  } else {
    result = "Gaya belajar anak Anda cenderung Kinestetik.";
  }

  resultText.textContent = result;
  resultDiv.style.display = "block";
});

downloadBtn.addEventListener("click", function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("Hasil Gaya Belajar Anak", 10, 10);
  doc.text(resultText.textContent, 10, 20);
  doc.save("hasil-gaya-belajar-anak.pdf");
});

renderQuestions();
