const mFlag = document.querySelector(".main-flag__flag");
const mHeading = document.querySelector(".main-flag__heading");
const list = document.querySelector(".list");
const mainFlag = document.querySelector(".main-flag");
const list1 = document.querySelector(".list__flag1")
const list2 = document.querySelector(".list__flag2")
const list3 = document.querySelector(".list__flag3")

mainFlag.addEventListener("click", () => {
    list.style.display = "block"
})


list1.addEventListener('click', () => {
    mFlag.src = "./images/Rusian.png";
    mHeading.innerHTML = "Russian";
    list.style.display = "none"
})

list2.addEventListener('click', () => {
    mFlag.src = "./images/UZB.jfif";
    mHeading.innerHTML = "Uzbek";
    list.style.display = "none"
})

list3.addEventListener('click', () => {
    mFlag.src = "./images/english.webp";
    mHeading.innerHTML = "English";
    list.style.display = "none"
})