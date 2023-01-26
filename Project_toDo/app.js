const form = document.getElementById('form');
const input = document.getElementById("input");
const btn = document.getElementById("btn1");
const list = document.getElementById("List");
const hour = document.getElementById('hour');
const min = document.getElementById('minutes');
const sec = document.getElementById('seconds');
const ampmE1 = document.getElementById('ampm');


form.addEventListener("submit", function (e) {
    e.preventDefault();
    const task = input.value;
    const newLI = document.createElement("LI");
    const del = document.createElement("button");
    del.setAttribute('id', 'del')
    del.innerText = ("delete");
    newLI.innerText = task;
    list.append(newLI, del);
    console.log(newLI);
    input.value = ''
    del.addEventListener("click", () => newLI.remove());
    newLI.appendChild(del);

    document.getElementById("List").appendChild(newLI);
})

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"


    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    hour.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    ampmE1.innerText = ampm;
    setTimeout(() => {
        updateClock()
    }, 1000)
}

updateClock();