/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var gifje = document.querySelector('img');
var button = document.querySelector('button');
console.log(gifje.src);

button.addEventListener('click', function () {
    gifje.src = 'image/dans.gif';
});