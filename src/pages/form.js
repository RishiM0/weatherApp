
function postQuestion() {

    let webpage = document.querySelector('.page');

    const label = document.createElement('label');
    label.classList.add('cityQuestion');
    newlabel.innerHTML = "Enter City: ";

    const input = document.createElement('input');
    input.classList.add('cityInput');
    input.type = 'text';
    input.value = 'London';
    input.name = 'City';

    webpage.appendChild(label);
    webpage.appendChild(input);
}

export default postQuestion;