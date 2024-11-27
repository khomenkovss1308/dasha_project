const btn1 = document.querySelector("#btn1");
const btn = document.querySelector("#btn");
const card = document.querySelector(".card");

const random = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const moveButton = () => {
    const cardRect = card.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    const maxLeft = cardRect.width - btnRect.width;
    const maxTop = cardRect.height - btnRect.height;

    btn.style.left = `${random(0, maxLeft)}px`;
    btn.style.top = `${random(0, maxTop)}px`;
};

btn.addEventListener("mouseenter", moveButton);

btn.addEventListener("click", () => {
    // alert("Ошибка, повторите попытку!!!");
    moveButton();
});

btn1.addEventListener("click", () => {
    alert("Спасибо за честность!!!");
});
