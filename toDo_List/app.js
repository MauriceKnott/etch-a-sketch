const form = document.getElementById('form');
const input = document.getElementById("input");
const list = document.getElementById("list");
const btn = document.getElementById("btn1");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const task = input.value;
    const newLI = document.createElement("LI");
    const del = document.createElement("button");
    del.innerText = ("Delete");
    newLI.innerText = task;
    list.append(newLI, del);
    console.log(task)
    del.addEventListener("click", () => newLI.remove());
    del.addEventListener("click", () => del.remove());
})