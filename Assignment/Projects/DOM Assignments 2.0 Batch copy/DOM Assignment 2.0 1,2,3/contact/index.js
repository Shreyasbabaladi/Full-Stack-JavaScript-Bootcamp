let emailInput = [...document.querySelectorAll('input[type=email]')];
let textInput = [...document.querySelectorAll('.mainWrapper input[type=text]')];
let textArea = [...document.querySelectorAll('textarea')];

const details= {
    Name:'FSJS 2.0',
    Email:'fsjs@ineuron.ai',
    TextBox:'Hello World'
};

[emailInput,textInput,textArea].forEach((Elements, index) => {
    let inputDetails = index == 1? details.Name: index == 0? details.Email : details.TextBox;
    console.log(inputDetails);
    Elements.forEach(Element => {
        Element.placeholder=inputDetails;
    })
});