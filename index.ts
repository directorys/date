// Элементы:
const pageElementText = document.querySelector<HTMLElement>('.page__text');
const pageElementButton = document.querySelector<HTMLButtonElement>('.page__button');

// Даты:
const toDate: Date = new Date();
const warDate: Date = new Date(2022, 1, 24);
const yearDate: Date = new Date(toDate.getFullYear() + 1, 0, 1);

// Интерйес для дат и переменная со скопированным текстом:
let stringCoppy: string = '';
interface IDate {
  war: number,
  year: number
}

// Получаем дни:
const gettingDate = (today: Date, date: Date):number => {
  const dateNumber: number = Math.abs(
    Number(today) - Number(date)
  );

  const newDateNumber: number = Math.ceil(
    dateNumber / (1000 * 60 * 60 * 24)
  );

  return newDateNumber;
}

// Получаем даты:
const date: IDate = {
  war: gettingDate(toDate, warDate),
  year: gettingDate(toDate, yearDate)
}

// Внедряем текст в элемент и переменную:
if (pageElementText) {
  stringCoppy = pageElementText.textContent = 
    'День войны: ' + date.war + '\n' +
    'Дней до НГ: ' + date.year
  ;
}

// Скопировать текст по щелчку:
pageElementButton?.addEventListener('click', (): void => {
  stringCoppy += '\n' + window.location.href;
  navigator.clipboard.writeText(stringCoppy);
});
