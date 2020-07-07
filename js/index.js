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
homeLink.addEventListener('click', function() {
    h1.style.fontSize = "5rem"
});

const footer = document.querySelector('.footer');
footer.addEventListener('mouseleave', function () {
    footer.style.backgroundColor = "aqua"
});

const footerText = document.querySelector('.footer p');
footerText.addEventListener('mouseup', function () {
    footer.style.backgroundColor = "blue"
});
