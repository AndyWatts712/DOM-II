// Your code goes here
const image = document.querySelector('img');
image.addEventListener('mouseover', (e) => { e.target.style.border = "3px solid black"; });

const body = document.querySelector('body');
body.addEventListener('keydown', function (e) {
    e.target.style.backgroundColor = "gray";
});

const header = document.querySelector('header');
const changHeader = function () {
    header.style.backgroundColor = "orange";
};
header.addEventListener('wheel', changHeader);

const images = document.querySelectorAll('img');
images.forEach(function (item) {
    item.addEventListener('drag', function (e) {
        e.target.style.border = "3px solid red"
    });
});

header.addEventListener('dblclick', function(e) {
    e.target.style.borderBottom = "5px solid blue"
});

images.forEach(function(item) {
    item.addEventListener('dragend', function(){
    header.style.backgroundColor = "yellow"
    });
});

const homeLink = document.querySelector('a');
const h1 = document.querySelector('h1');
homeLink.addEventListener('click', function(e) {
    h1.style.fontSize = "5rem"
    e.stopPropagation()
});

const footer = document.querySelector('.footer');
footer.addEventListener('mouseleave', function () {
    footer.style.backgroundColor = "aqua"
});

const footerText = document.querySelector('.footer p');
footerText.addEventListener('mouseup', function () {
    footer.style.backgroundColor = "blue"
});
// Stop propagation
images.forEach(function(item) {
    item.addEventListener('click', function(e) {

        e.target.style.border = "5px dashed black"
    });
});

const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    e.target.style.backgroundColor = "red"
});

//Prevent default
const button = document.querySelectorAll('.btn');
button.forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault()
    });
});
const links = document.querySelectorAll('a');
links.forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault()
    });
});