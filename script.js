// ==============================
// Daftar Soal Pramuka Penggalang
// ==============================
const questions = [
  {
    question: "Ada berapa tanda pengenal dalam Gerakan Pramuka?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true }
    ]
  },
  {
    question: "TKU dan TKK termasuk dalam tanda pengenal?",
    answers: [
      { text: "Tanda pengenal umum", correct: false },
      { text: "Tanda pengenal satuan", correct: false },
      { text: "Tanda pengenal kecakapan", correct: true },
      { text: "Tanda pengenal jabatan", correct: false }
    ]
  },
  {
    question: "Ada berapa TKK wajib yang harus dimiliki Pramuka Penggalang?",
    answers: [
      { text: "5", correct: false },
      { text: "10", correct: true },
      { text: "15", correct: false },
      { text: "20", correct: false }
    ]
  },
  {
    question: "Yang termasuk tanda pengenal umum adalah?",
    answers: [
      { text: "Kop kepala, tanda pelantikan, bed kwarda", correct: false },
      { text: "Tanda pelantikan, bed Kwarcab, nomor Gudep", correct: false },
      { text: "Kop kepala, bintang tahunan, setangan leher", correct: false },
      { text: "Setangan leher, kop kepala, tanda pelantikan", correct: true }
    ]
  },
  {
    question: "Urutan tingkatan dalam Pramuka Penggalang adalah?",
    answers: [
      { text: "Siaga, Penegak, Pandega", correct: false },
      { text: "Ramu, Rakit, Terap", correct: true },
      { text: "Mula, Bantu, Tata", correct: false },
      { text: "Bantara, Laksana", correct: false }
    ]
  },
  {
    question: "Pramuka Penggalang adalah anggota usia?",
    answers: [
      { text: "7–10 tahun", correct: false },
      { text: "10–15 tahun", correct: false },
      { text: "11–15 tahun", correct: true },
      { text: "15–18 tahun", correct: false }
    ]
  },
  {
    question: "Siapa bapak Pandu di Indonesia?",
    answers: [
      { text: "K.H. Agus Salim", correct: true },
      { text: "Sri Sultan HB IX", correct: false },
      { text: "Ki Hajar Dewantara", correct: false },
      { text: "Baden‑Powell", correct: false }
    ]
  },
  {
    question: "Gerakan Pramuka resmi diberi nama pada tahun?",
    answers: [
      { text: "1945", correct: false },
      { text: "1951", correct: false },
      { text: "1961", correct: true },
      { text: "1978", correct: false }
    ]
  },
  {
    question: "Kode kehormatan gerakan pramuka terdiri dari?",
    answers: [
      { text: "Tri Satya saja", correct: false },
      { text: "Dasa Darma saja", correct: false },
      { text: "Tri Satya & Dasa Darma", correct: true },
      { text: "Dwi Satya & Dwi Darma", correct: false }
    ]
  },
  {
    question: "Arti lambang tunas kelapa pada Pramuka adalah?",
    answers: [
      { text: "Tunas kelapa melambangkan jiwa muda yang kuat dan berkembang", correct: true },
      { text: "Melambangkan kemakmuran bangsa", correct: false },
      { text: "Melambangkan persatuan antar negara", correct: false },
      { text: "Melambangkan akar yang kuat di tanah", correct: false }
    ]
  },
  {
    question: "Apa kepanjangan dari SKU?",
    answers: [
      { text: "Satuan Kecakapan Umum", correct: false },
      { text: "Syarat Kecakapan Umum", correct: true },
      { text: "Surat Keterangan Umum", correct: false },
      { text: "Surat Kegiatan Umum", correct: false }
    ]
  },
  {
    question: "Apa kepanjangan dari SKK?",
    answers: [
      { text: "Syarat Kecakapan Khusus", correct: true },
      { text: "Syarat Kegiatan Khusus", correct: false },
      { text: "Surat Keterangan Khusus", correct: false },
      { text: "Syarat Keahlian Khusus", correct: false }
    ]
  },
  {
    question: "Dalam satu regu Pramuka Penggalang terdiri dari?",
    answers: [
      { text: "5–10 orang", correct: true },
      { text: "8–12 orang", correct: false },
      { text: "10–15 orang", correct: false },
      { text: "12–18 orang", correct: false }
    ]
  },
  {
    question: "Simbol Tri Satya adalah?",
    answers: [
      { text: "Kode kedisiplinan", correct: false },
      { text: "Kode kehormatan Pramuka", correct: true },
      { text: "Kode permainan", correct: false },
      { text: "Kode tuntas tugas", correct: false }
    ]
  },
  {
    question: "Sandi Morse disampaikan dengan?",
    answers: [
      { text: "Tanda asap", correct: false },
      { text: "Titik dan garis", correct: true },
      { text: "Rumput", correct: false },
      { text: "Bendera", correct: false }
    ]
  },
  {
    question: "Semaphore dilakukan dengan alat?",
    answers: [
      { text: "Bendera", correct: true },
      { text: "Peluit", correct: false },
      { text: "Kedipan mata", correct: false },
      { text: "Lilin", correct: false }
    ]
  },
  {
    question: "Apa tujuan dari sistem pionering?",
    answers: [
      { text: "Membuat makanan di alam terbuka", correct: false },
      { text: "Mendirikan bangunan darurat dari tongkat dan tali", correct: true },
      { text: "Berkemping sendiri", correct: false },
      { text: "Bermain perkemahan", correct: false }
    ]
  },
  {
    question: "Apa nama simpul untuk mengikat dua tali sejajar?",
    answers: [
      { text: "Simpul Pangkal", correct: false },
      { text: "Simpul Anyam", correct: true },
      { text: "Simpul Mati", correct: false },
      { text: "Simpul Laso", correct: false }
    ]
  },
  {
    question: "Simpul pangkal biasa disebut juga?",
    answers: [
      { text: "Clove hitch", correct: true },
      { text: "Bowline", correct: false },
      { text: "Figure‑eight", correct: false },
      { text: "Sheet bend", correct: false }
    ]
  },
  {
    question: "Nama kegiatan latihan kepemimpinan untuk pemimpin regu adalah?",
    answers: [
      { text: "Gladian Pimpinan Regu", correct: true },
      { text: "Persami", correct: false },
      { text: "Latihan Mandiri", correct: false },
      { text: "Kemah Bakti", correct: false }
    ]
  },
  {
    question: "Kegiatan perkemahan besar tingkat nasional disebut?",
    answers: [
      { text: "Jambore Nasional", correct: true },
      { text: "Raimuna Nasional", correct: false },
      { text: "Kepramukaan Internasional", correct: false },
      { text: "Kemah Besar", correct: false }
    ]
  },
  {
    question: "Upacara api unggun yang khas disebut?",
    answers: [
      { text: "Api Keakraban", correct: false },
      { text: "Api Semangat", correct: false },
      { text: "Api Unggun", correct: true },
      { text: "Api Suci", correct: false }
    ]
  },
  {
    question: "Ukuran standar tongkat Pramuka adalah?",
    answers: [
      { text: "160 cm atau 1,6 m", correct: true },
      { text: "150 cm", correct: false },
      { text: "170 cm", correct: false },
      { text: "140 cm", correct: false }
    ]
  },
  {
    question: "Bunyi Dasa Darma Pramuka yang ke‑10?",
    answers: [
      { text: "Menepati Darma Tuhan", correct: false },
      { text: "Suci dalam pikiran, perkataan, dan perbuatan", correct: true },
      { text: "Menolong sesama hidup", correct: false },
      { text: "Patuh pada hukum", correct: false }
    ]
  },
  {
    question: "Jumlah semua golongan dalam Gerakan Pramuka adalah?",
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false }
    ]
  },
  {
    question: "Siapa pendiri Gerakan Pramuka dunia?",
    answers: [
      { text: "Robert Baden‑Powell", correct: true },
      { text: "Sri Sultan HB IX", correct: false },
      { text: "K.H. Agus Salim", correct: false },
      { text: "Ki Hajar Dewantara", correct: false }
    ]
  },
  {
    question: "Pramuka wajib mematuhi?",
    answers: [
      { text: "Peraturan sekolah", correct: false },
      { text: "Trisatya dan Dasa Darma", correct: true },
      { text: "Perintah tentara", correct: false },
      { text: "Semua peraturan pemerintah", correct: false }
    ]
  },
  {
    question: "Apa arti 'Wide Game' dalam Pramuka?",
    answers: [
      { text: "Permainan mencari jejak", correct: false },
      { text: "Permainan strategi", correct: false },
      { text: "Permainan kerjasama tim di lapangan terbuka", correct: true },
      { text: "Permainan ketangkasan", correct: false }
    ]
  },
  {
    question: "Apa nama alat untuk menentukan arah mata angin?",
    answers: [
      { text: "Peta", correct: false },
      { text: "Kompas", correct: true },
      { text: "GPS", correct: false },
      { text: "Teropong", correct: false }
    ]
  },
  {
    question: "Berapa jari yang dipakai dalam salam Pramuka?",
    answers: [
      { text: "Dua", correct: false },
      { text: "Tiga", correct: true },
      { text: "Empat", correct: false },
      { text: "Lima", correct: false }
    ]
  },
  {
    question: "Hari Pramuka diperingati tanggal?",
    answers: [
      { text: "10 November", correct: false },
      { text: "14 Agustus", correct: true },
      { text: "22 Februari", correct: false },
      { text: "1 Juni", correct: false }
    ]
  },
  {
    question: "Siapa pencipta lagu Hymne Pramuka?",
    answers: [
      { text: "WR. Supratman", correct: false },
      { text: "Husein Mutahar", correct: true },
      { text: "Ismail Marzuki", correct: false },
      { text: "Ki Hajar Dewantara", correct: false }
    ]
  },
  {
    question: "Tanda Kecakapan Khusus (TKK) warnanya?",
    answers: [
      { text: "Merah", correct: false },
      { text: "Hijau", correct: true },
      { text: "Biru", correct: false },
      { text: "Kuning", correct: false }
    ]
  },
  {
    question: "Regu dalam Pramuka Penggalang adalah satuan?",
    answers: [
      { text: "Terkecil", correct: true },
      { text: "Terbesar", correct: false },
      { text: "Sedang", correct: false },
      { text: "Maksimal", correct: false }
    ]
  },
  {
    question: "Nama lain dari sanggar atau tempat regu besar disebut?",
    answers: [
      { text: "Barung", correct: true },
      { text: "Pasukan", correct: false },
      { text: "Markas", correct: false },
      { text: "Sangga", correct: false }
    ]
  }
];

// ==============================
// LOGIKA QUIZ
// ==============================
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');
const scoreElement = document.getElementById('score');
const highscoreElement = document.getElementById('highscore');
const restartButton = document.getElementById('restart-btn');
const timerElement = document.getElementById('time');

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add('hidden');
  document.getElementById('quiz').classList.remove('hidden');
  nextButton.innerText = "Pertanyaan Selanjutnya";
  loadHighscore();
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.addEventListener('click', () => selectAnswer(button, answer));
    answerButtons.appendChild(button);
  });
  startTimer();
}

function resetState() {
  nextButton.style.display = 'none';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
  clearInterval(timer);
  timeLeft = 15;
  timerElement.textContent = timeLeft;
}

function selectAnswer(button, answer) {
  const allButtons = answerButtons.querySelectorAll('button');
  allButtons.forEach(btn => btn.disabled = true);
  clearInterval(timer);
  if (answer.correct) {
    button.classList.add('correct');
    score++;
  } else {
    button.classList.add('wrong');
  }
  nextButton.style.display = 'inline-block';
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      lockAnswers();
      nextButton.style.display = 'inline-block';
    }
  }, 1000);
}

function lockAnswers() {
  const allButtons = answerButtons.querySelectorAll('button');
  allButtons.forEach(btn => btn.disabled = true);
}

function showResult() {
  document.getElementById('quiz').classList.add('hidden');
  resultContainer.classList.remove('hidden');
  scoreElement.innerText = `${score} dari ${questions.length}`;
  saveHighscore(score);
}

function saveHighscore(score) {
  const currentHigh = localStorage.getItem('quizHighscore') || 0;
  if (score > currentHigh) {
    localStorage.setItem('quizHighscore', score);
  }
  loadHighscore();
}

function loadHighscore() {
  const high = localStorage.getItem('quizHighscore');
  highscoreElement.innerText = high !== null ? high : '-';
}

restartButton.addEventListener('click', startQuiz);

startQuiz();
