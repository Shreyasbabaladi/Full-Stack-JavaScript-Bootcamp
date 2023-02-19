const navList = document.querySelector('nav > ul');

// creating new Iteam element 
const newIteam = document.createElement('li');
const aTage = document.createElement('a').innerText = 'Hire Me';
// appending 
newIteam.append(aTage);
navList.append(newIteam);


document.querySelector('.search-field > input')
        .setAttribute('placeholder', 'Search My Projects');

document.querySelectorAll('.hero-left-section >p >span')[1]
        .innerText = 'an Employee';

//creating button 
const btn = document.createElement('button')
btn.innerText='Support me';
document.querySelector('.hero-right-section-btns').append(btn)






