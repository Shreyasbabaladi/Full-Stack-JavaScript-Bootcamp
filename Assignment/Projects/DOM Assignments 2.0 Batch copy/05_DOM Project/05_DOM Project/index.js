let nav = [...document.querySelectorAll('.nav-center div')].pop();
let tagsContainer = document.querySelector('.tags-container div');
let recipeGallery = document.querySelector('.recipe-gallery');


function addElement(parent,newElement,innerText,callName) {
    let Element = document.createElement(`${newElement}`);
    callName && Element.classList.add(`${callName}`);
    Element.innerText=innerText;
    Element.href='#';
    parent.append(Element);
};   

addElement(nav,'a','Pro Subscription','btn');
addElement(tagsContainer,'a','Chinese (7)');
addElement(recipeGallery,'div','Add 6th Card here','card');
