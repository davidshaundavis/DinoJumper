let character = document.getElementById('character');
let block = document.getElementById('block');


//character jumps on click 
function jump() {
    //unless character class is already applied
    if (character.className === "jump") {
        return;
    }
    //applying .jump class to character
    character.classList.add('jump');
    setTimeout(function() {
        character.classList.remove('jump');
    }, 500);
}


//check if dead i.e. block and character collide
let checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));

    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if (blockLeft < 20 && blockLeft > 0 && characterTop >=130) {
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('Game Over.');
        location.reload();
    }

}, 10);

//display random #block location on animation load
// block.addEventListener('animationiteration', () => {
//     let random = Math.random() * 4;
//     let left = (random*100) + 480;
//     hole.style.left = -(left) +"px";
    
// });

//display random #hole location on animation load  ---  original from flappy bird
// hole.addEventListener('animationiteration', () => {
//     let random = Math.random() * 4;
//     let top = (random*100) + 150;
//     hole.style.top = -(top) +"px";
//     counter++;
// });




