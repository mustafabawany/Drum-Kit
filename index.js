var numOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0 ; i < numOfDrumButtons ; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var drumValue = this.innerHTML;
        makeSound(drumValue);
        buttonAnimation(drumValue);
    });
}

document.addEventListener("keypress",function(event){
    var KeyPressed = event.key;
    makeSound(KeyPressed);
    buttonAnimation(KeyPressed);
});

function makeSound(key)
{
    switch (key)
    {
        case "w":
            var audio = new Audio ('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio ('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio ('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio ('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio ('sounds/snare.mp3');
            audio.play();
            break; 
        case "k":
            var audio = new Audio ('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio ('kick-bass.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey)
{
    document.querySelector("." + currentKey).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + currentKey).classList.remove("pressed");
    },100);
}