// ساعت زنده
setInterval(() => {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleString("fa-IR");
}, 1000);

// جمله انگیزشی تصادفی
const messages = [
  "هر کاری ممکنه وقتی باورش کنی.",
  "امروز بهترین روز برای شروعه!",
  "هیچوقت دیر نیست برای موفق شدن.",
  "باور به خودت یعنی شروع پیروزی."
];
document.getElementById("motivation").textContent =
  messages[Math.floor(Math.random() * messages.length)];

// انیمیشن ستاره ساده
const canvas = document.getElementById("stars"),
  ctx = canvas.getContext("2d"),
  stars = Array(100).fill().map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.5 + 0.5
  }));

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    s.y += 0.3;
    if (s.y > canvas.height) s.y = 0;
  });
  requestAnimationFrame(animateStars);
}
animateStars();
