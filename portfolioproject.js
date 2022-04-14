const compareTime = () => {
    let startDate = new Date("04/16/2021");
    let currentDate = new Date();
    let difference = currentDate.getTime() - startDate.getTime();
    calcDifference = Math.round(difference / (1000 * 3600 * 24))
    return calcDifference;
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("calc-time").innerHTML = compareTime();
    document.getElementById("calc-time1").innerHTML = compareTime();
})