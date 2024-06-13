function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const player = document.querySelector("#player");
const coin = document.querySelector("#coin");

window.addEventListener("keyup", function (e) {
  const key = e.key;

  switch (key) {
    case "ArrowUp":
    case "Up":
      moveVertical(player, -50);
      break;
    case "ArrowDown":
    case "Down":
      moveVertical(player, 50);
      break;
    case "ArrowRight":
    case "Right":
      moveHorizontal(player, 50);
      player.style.transform = "scale(1,1)";
      break;
    case "ArrowLeft":
    case "Left":
      moveHorizontal(player, -50);
      player.style.transform = "scale(-1,1)";
      break;
  }
  if (isTouching(player, coin)) moveCoin();
});

const moveHorizontal = (element, amount) => {
  const curLeft = extractPos(player.style.left);
  element.style.left = `${curLeft + amount}px`;
};

const moveVertical = (element, amount) => {
  const curTop = extractPos(player.style.top);
  element.style.top = `${curTop + amount}px`;
};

const extractPos = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerHeight);
  const y = Math.floor(Math.random() * window.innerWidth);
  coin.style.top = `${x}px`;
  coin.style.left = `${y}px`;
};

moveCoin();
