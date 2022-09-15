
const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');
const findDate = document.getElementById('find-day-btn');
const output = document.getElementById('result');



findDate.addEventListener('click', () => {
    let inputDate = new Date(`${date.value} ${month.value} ${year.value}`);
    let day = inputDate.toString();
    day = day.slice(0, 3);
    result.innerText = day;
})