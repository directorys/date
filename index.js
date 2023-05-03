"use strict";
// Элементы:
const pageElementText = document.querySelector('.page__text');
const pageElementButton = document.querySelector('.page__button');
// Даты:
const toDate = new Date();
const warDate = new Date(2022, 1, 24);
const yearDate = new Date(toDate.getFullYear() + 1, 0, 1);
// Интерйес для дат и переменная со скопированным текстом:
let stringCoppy = '';
// Получаем дни:
const gettingDate = (today, date) => {
    const dateNumber = Math.abs(Number(today) - Number(date));
    const newDateNumber = Math.ceil(dateNumber / (1000 * 60 * 60 * 24));
    return newDateNumber;
};
// Получаем даты:
const date = {
    war: gettingDate(toDate, warDate),
    year: gettingDate(toDate, yearDate)
};
// Внедряем текст в элемент и переменную:
if (pageElementText) {
    stringCoppy = pageElementText.textContent =
        'День войны: ' + date.war + '\n' +
            'Дней до НГ: ' + date.year;
}
// Скопировать текст по щелчку:
pageElementButton?.addEventListener('click', () => {
    stringCoppy += '\n' + window.location.href;
    navigator.clipboard.writeText(stringCoppy);
});
