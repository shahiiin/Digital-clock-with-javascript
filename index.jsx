const Hours = document.getElementById("hour")
const Minuts = document.getElementById("minutes")
const Seconds = document.getElementById("seconds")
const AM = document.getElementById("ampm")


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
    Hours.innerText = h
    Minuts.innerText = m
    Seconds.innerText = s
    AM.innerText = ampm
    setTimeout(() => {
        updateClock()
    }, 1000)
}
updateClock()