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
        text: "Anak Anda lebih mudah mengingat sesuatu ketika...",
    options: [
      { text: "Melihat gambar atau tulisan", type: "visual" },
      { text: "Mendengar orang lain menjelaskan", type: "auditory" },
      { text: "Melakukannya langsung", type: "kinesthetic" }
    ]
  },
  {
    text: "Anak Anda suka membaca buku dengan...",
    options: [
      { text: "Banyak gambar atau diagram", type: "visual" },
      { text: "Membaca keras atau didengarkan", type: "auditory" },
      { text: "Aktivitas yang bisa dicoba setelah membacanya", type: "kinesthetic" }
    ]
  },
  {
    text: "Saat menonton TV, anak Anda fokus pada...",
    options: [
      { text: "Gambar dan warna", type: "visual" },
      { text: "Dialog dan suara", type: "auditory" },
      { text: "Menirukan adegan atau gerakan", type: "kinesthetic" }
    ]
  },
  {
    text: "Ketika belajar huruf atau angka, anak lebih suka...",
    options: [
      { text: "Melihat kartu bergambar", type: "visual" },
      { text: "Mendengarkan lagu huruf/angka", type: "auditory" },
      { text: "Membentuk huruf dengan tangan", type: "kinesthetic" }
    ]
  },
  {
    text: "Saat bermain, anak suka...",
    options: [
      { text: "Melihat buku gambar", type: "visual" },
      { text: "Bernyanyi atau mendengarkan lagu", type: "auditory" },
      { text: "Bermain balok atau tanah liat", type: "kinesthetic" }
    ]
  },
  {
    text: "Anak Anda lebih mudah memahami instruksi saat...",
    options: [
      { text: "Melihat langkah-langkahnya", type: "visual" },
      { text: "Mendengarkan penjelasan", type: "auditory" },
      { text: "Mencoba sendiri", type: "kinesthetic" }
    ]
  },
  {
    text: "Ketika berinteraksi dengan orang lain, anak Anda...",
    options: [
      { text: "Memperhatikan ekspresi wajah", type: "visual" },
      { text: "Mendengarkan dengan baik", type: "auditory" },
      { text: "Suka menyentuh atau bergerak", type: "kinesthetic" }
    ]
  },
  {
    text: "Jika bermain game edukatif, anak lebih suka...",
    options: [
      { text: "Melihat animasi menarik", type: "visual" },
      { text: "Mendengarkan narasi game", type: "auditory" },
      { text: "Klik dan gerak langsung", type: "kinesthetic" }
    ]
  },
  {
    text: "Dalam kegiatan menggambar, anak lebih suka...",
    options: [
      { text: "Menggunakan warna cerah", type: "visual" },
      { text: "Bernyanyi sambil menggambar", type: "auditory" },
      { text: "Menggambar dengan bebas dan besar", type: "kinesthetic" }
    ]
  },
  {
    text: "Anak mudah mengingat sesuatu jika...",
    options: [
      { text: "Melihat bentuknya", type: "visual" },
      { text: "Mendengar berulang kali", type: "auditory" },
      { text: "Mengalaminya sendiri", type: "kinesthetic" }
    ]
  },
  {
    text: "Saat mendengarkan cerita, anak lebih tertarik pada...",
    options: [
      { text: "Ilustrasi gambar", type: "visual" },
      { text: "Suara tokoh atau nada", type: "auditory" },
      { text: "Memainkan peran dalam cerita", type: "kinesthetic" }
    ]
  },
  {
    text: "Ketika harus mengingat arah, anak lebih mengandalkan...",
    options: [
      { text: "Peta atau gambar arah", type: "visual" },
      { text: "Petunjuk verbal", type: "auditory" },
      { text: "Pernah ke tempat itu sebelumnya", type: "kinesthetic" }
    ]
  },
  {
    text: "Anak Anda biasanya menggambarkan sesuatu dengan...",
    options: [
      { text: "Menggambar atau menunjuk", type: "visual" },
      { text: "Menceritakan dengan kata-kata", type: "auditory" },
      { text: "Menirukan gerakan atau menunjukkan langsung", type: "kinesthetic" }
    ]
  },
  {
    text: "Dalam kelas, anak akan lebih fokus jika...",
    options: [
      { text: "Ada gambar/diagram", type: "visual" },
      { text: "Guru berbicara dengan ekspresi", type: "auditory" },
      { text: "Ada praktik atau eksperimen", type: "kinesthetic" }
    ]
  },
  {
    text: "Jika melihat binatang, anak lebih suka...",
    options: [
      { text: "Mengamati warnanya", type: "visual" },
      { text: "Mendengar suara binatangnya", type: "auditory" },
      { text: "Menyentuh atau mengikuti gerakannya", type: "kinesthetic" }
    ]
  },
  {
    text: "Saat membuat kerajinan tangan, anak...",
    options: [
      { text: "Meniru dari contoh gambar", type: "visual" },
      { text: "Mengikuti instruksi suara", type: "auditory" },
      { text: "Mencoba tanpa banyak arahan", type: "kinesthetic" }
    ]
  },
  {
    text: "Anak paling antusias jika belajar melalui...",
    options: [
      { text: "Video berwarna", type: "visual" },
      { text: "Nyanyian atau cerita", type: "auditory" },
      { text: "Permainan dan aktivitas fisik", type: "kinesthetic" }
    ]
  },
  {
    text: "Ketika menceritakan pengalaman, anak lebih suka...",
    options: [
      { text: "Menunjukkan gambar atau foto", type: "visual" },
      { text: "Bercerita dengan suara", type: "auditory" },
      { text: "Menirukan gerakan atau situasi", type: "kinesthetic" }
    ]
  },
  {
    text: "Jika diberi alat musik, anak akan...",
    options: [
      { text: "Mengamati bentuk dan warna alat musik", type: "visual" },
      { text: "Mendengarkan suara yang dihasilkan", type: "auditory" },
      { text: "Memainkan dan bereksperimen langsung", type: "kinesthetic" }
    ]
  },
  {
    text: "Ketika belajar angka, anak paling suka...",
    options: [
      { text: "Melihat warna dan bentuk angka", type: "visual" },
      { text: "Mendengar lagu angka", type: "auditory" },
      { text: "Menggunakan benda nyata untuk menghitung", type: "kinesthetic" }
    ]
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
