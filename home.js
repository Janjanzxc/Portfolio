
var subText = document.getElementById('sub-text');

var typewriter = new Typewriter(subText, {
    loop: true
});

typewriter.typeString('Aspring Web Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Computer Engineer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Front End Designer')
    .pauseFor(2500)
    .start();