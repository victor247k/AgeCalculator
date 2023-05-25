const submit = document.getElementById('arrow');
submit.addEventListener('click', calculate);

const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
// console.log(year);
// console.log(month);
// console.log(day);

const dayIn = document.getElementById('dayIn');
const monthIn = document.getElementById('monthIn');
const yearIn = document.getElementById('yearIn');

const dayLabel = document.querySelector('.dayLabel');
const dayError = document.querySelector('.dayError');

const monthLabel = document.querySelector('.monthLabel');
const monthError = document.querySelector('.monthError');

const yearLabel = document.querySelector('.yearLabel');
const yearError = document.querySelector('.yearError');

const yearsText = document.querySelector('.years');
const monthsText = document.querySelector('.months');
const daysText = document.querySelector('.days');

function calculate() {

    let string  = yearIn.value + '-' + monthIn.value + '-' + dayIn.value;

    yearsText.textContent = '- -';
    monthsText.textContent = '- -';
    daysText.textContent = '- -';

    // erors

    dayLabel.style.color = "var(--clr-red-500)";
    dayIn.style.border = "1px solid var(--clr-red-500)";
    monthLabel.style.color = "var(--clr-red-500)";
    monthIn.style.border = "1px solid var(--clr-red-500)";
    yearLabel.style.color = "var(--clr-red-500)";
    yearIn.style.border = "1px solid var(--clr-red-500)";

    dayError.textContent = "";
    monthError.textContent = "";
    yearError.textContent = "";


    if (dayIn.value.length === 0) {
        dayError.textContent = "This field is required";
    }
    if (monthIn.value.length === 0) {
        monthError.textContent = "This field is required";
    }
    if (yearIn.value.length === 0) {
        yearError.textContent = "This field is required";
        return
    } 
    if (parseInt(monthIn) === 2 ? parseInt(yearIn.value) % 4 === 0 ? parseInt(dayIn.value) > 29 : parseInt(dayIn.value) > 28 : parseInt(monthIn.value) % 2 === 1 ||  parseInt(monthIn.value) ===  8 ? parseInt(dayIn.value) > 31 : parseInt(dayIn.value) > 30) {
        dayError.textContent = "Must be a valid day"
    }

    if (parseInt(monthIn.value) > 12 || parseInt(yearIn.value) === year ? parseInt(monthIn.value) > month : false) {
        monthError.textContent = "Must be a valid month";
    }
    if (parseInt(yearIn.value) > year) {
        yearError.textContent = "Must be in the past";
        return
    }    
    if (!isValidDate(string)) {
        dayError.textContent = "Must be a valid date";
        monthError.textContent = "";
        yearError.textContent = "";
        return
    }


    if (dayError.textContent === '' && monthError.textContent === '' && yearError.textContent === '') {
        // remove error styling
        dayLabel.style.color = "var(--clr-500-grey)";
        dayIn.style.border = "1px solid var(--clr-100-grey)";
        monthLabel.style.color = "var(--clr-500-grey)";
        monthIn.style.border = "1px solid var(--clr-100-grey)";
        yearLabel.style.color = "var(--clr-500-grey)";
        yearIn.style.border = "1px solid var(--clr-100-grey)";

        
    // calculating years

        let yearsOld = year - parseInt(yearIn.value)
        let monthsOld = month - parseInt(monthIn.value)
        
        if (month - parseInt(monthIn.value) < 0) {
            yearsOld -= 1
            monthsOld += 12
        }
        
        let daysOld = day - parseInt(dayIn.value)

        if (day - parseInt(monthIn.value) < 0) {
            monthsOld -= 1
            daysOld += 30
        }

    // displaying years

        yearsText.textContent = yearsOld;
        monthsText.textContent = monthsOld;
        daysText.textContent = daysOld;
    }
}
function isValidDate(dateString) {
    let date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
}

