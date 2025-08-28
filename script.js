// Increase Heart value by clicking
const increaseHeart = () => {
  const addHeart = document.querySelectorAll(".add_heart");
  let totalHeart = parseInt(document.getElementById("total_heart").innerText);

  addHeart.forEach((btn) => {
    btn.addEventListener("click", () => {
      totalHeart += 1;
      document.getElementById("total_heart").innerText = totalHeart;
    });
  });
};
increaseHeart();
