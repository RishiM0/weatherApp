import postWeather from "./weather";

function createQuestion() {

    let webpage = document.querySelector('.page');

    let form = document.createElement("form");
    form.classList.add('theForm')
    form.setAttribute("method", "post");
    //form.setAttribute("action", "submit.php");

    const label = document.createElement('label');
    label.classList.add('cityQuestion');
    label.innerHTML = "Enter City: ";

    const input = document.createElement('input');
    input.classList.add('cityInput');
    input.type = 'text';
    input.value = 'London';
    input.name = 'City';

    var s = document.createElement("input");
    s.classList.add('sumbitter')
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(s);
    webpage.appendChild(form);
}

function postQuestion() {
    let theCity = 'London';
    let webpage = document.querySelector('.page');
    createQuestion()
    let theForm = document.querySelector('.theForm');
    theForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('marker')
        console.log(webpage.innerHTML);
        let inputValue = document.querySelector('.cityInput').value;
        console.log(`input value: ${inputValue}`);
        theCity = inputValue;
        webpage.innerHTML = '';
        postWeather(theCity);
    })
    /*
    postWeather(theCity);
    submitter.onClick = () => {
        inputValue = document.querySelector('.cityInput').value;
        console.log(`input value: ${inputValue}`);
        theCity = inputValue;
        postWeather(theCity);
    }
    */
}

window.onload = function(){ postQuestion()};