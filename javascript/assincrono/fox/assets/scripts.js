const BASE_URL = "https://randomfox.ca/floof/";
const catBtn = document.getElementById("change-fox");

const getFox = async () => {
  const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return data.image;
};

const loadImg = async () => {
  const catImg = document.getElementById("fox");
  catImg.src = await getFox();
};

catBtn.addEventListener("click", loadImg);

loadImg();
