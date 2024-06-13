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
  const curTop = extractPos(player.style.top);
  const curLeft = extractPos(player.style.left);
  switch (key) {
    case "ArrowUp":
    case "Up":
      player.style.top = `${curTop - 50}px`;
      break;
    case "ArrowDown":
    case "Down":
      player.style.top = `${curTop + 50}px`;
      break;
    case "ArrowRight":
    case "Right":
      player.style.left = `${curLeft + 50}px`;
      player.style.transform = "scale(1,1)";
      break;
    case "ArrowLeft":
    case "Left":
      player.style.left = `${curLeft - 50}px`;
      player.style.transform = "scale(-1,1)";
      break;
    default:
      break;
  }
  if (isTouching(player, coin)) moveCoin();
});

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
