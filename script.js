function drawOmikuji() {
  const fortunes = [
    "大吉 🌟 最高の一日になる予感！",
    "中吉 😊 いいことありそう！",
    "小吉 😌 穏やかに過ごせそう",
    "吉 🍀 ちょっとラッキーかも",
    "末吉 🤞 努力すれば報われる",
    "凶 😱 注意して行動してね"
  ];
  const result = fortunes[Math.floor(Math.random() * fortunes.length)];
  document.getElementById("result").textContent = result;
}
