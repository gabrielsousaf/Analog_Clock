const hourEl = document.getElementById('clock-hour');
const minuteEl = document.getElementById('clock-minutes');
const secondEl = document.getElementById('clock-seconds');

const textHourEl = document.getElementById('text-hour');
const textMinuteEl = document.getElementById('text-minutes');
const textAmPmEl = document.getElementById('text-ampm');
const dateDayEl = document.getElementById('date-day');
const dateMonthEl = document.getElementById('date-month');
const dateYearEl = document.getElementById('date-year');

const updateClock = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourRotation = hours * 30 + minutes / 2;
    const minuteRotation = minutes * 6 + seconds / 10;
    const secondRotation = seconds * 6;

    hourEl.style.transform = `rotateZ(${hourRotation}deg)`;
    minuteEl.style.transform = `rotateZ(${minuteRotation}deg)`;
    secondEl.style.transform = `rotateZ(${secondRotation}deg)`;
};

const updateClockText = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    let ampm = hours >= 12 ? 'PM' : 'AM';
    let hours12 = hours % 12;
    hours12 = hours12 ? hours12 : 12;

    textHourEl.innerHTML = `${hours12}:`;
    textMinuteEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    textAmPmEl.innerHTML = ampm;
    dateDayEl.innerHTML = day;
    dateMonthEl.innerHTML = monthNames[month];
    dateYearEl.innerHTML = year;
};

const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

setInterval(updateClock, 1000);
setInterval(updateClockText, 1000);



const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

