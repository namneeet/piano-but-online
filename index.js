
let pressedKeys = new Set();

let whiteKeys = document.getElementsByClassName("white");
let blackKeys = document.getElementsByClassName("black");


window.addEventListener('keydown', function (e) {
    if (!pressedKeys.has(e.key)){
        pressedKeys.add(e.key);
        playSound(e.key);
    }

}, false);

window.addEventListener('keyup', function (e) {
    for (let i = 0; i < whiteKeys.length; i++) {
        whiteKeys[i].style.backgroundColor= "white";       
    }
    for (let i = 0; i < blackKeys.length; i++) {
        blackKeys[i].style.backgroundColor= "black";       
    }
    pressedKeys.clear();
  }, false);

function playSound(e){
    switch (e) {
        case "z":
            playKey("3c");
            break;
        case "s":
            playKey("3cs");
            break;
        case "x":
            playKey("3d");
            break;
        case "d":
            playKey("3ds");
            break;
        case "c":
            playKey("3e");
            break;
        case "v":
            playKey("3f");
            break;
        case "g":
            playKey("3fs");
            break;
        case "b":
            playKey("3g");
            break;
        case "h":
            playKey("3gs");
            break;
        case "n":
            playKey("3a");
            break;
        case "j":
            playKey("3as");
            break;
        case "m":
            playKey("3b");
            break;
        case ",":
        case "q":
            playKey("4c");
            break;
        case "l":
        case "2":
            playKey("4cs");
            break;
        case ".":
        case "w":
            playKey("4d");
            break;
        case ";":
        case "3":
            playKey("4ds");
            break;
        case "/":
        case "e":
            playKey("4e");
            break;
        case "r":
            playKey("4f");
            break;
        case "5":
            playKey("4fs");
            break;
        case "t":
            playKey("4g");
            break;
        case "6":
            playKey("4gs");
            break;
        case "y":
            playKey("4a");
            break;
        case "7":
            playKey("4as");
            break;
        case "u":
            playKey("4b");
            break;
        case "i":
            playKey("5c");
            break;
        case "9":
            playKey("5cs");
            break;
        case "o":
            playKey("5d");
            break;
        case "0":
            playKey("5ds");
            break;
        case "p":
            playKey("5e");
            break;
            
    }

    
}

function playKey(a){
    audio = new Audio('piano-88-notes/'+a[0]+'-'+a.substr(1,2)+'.wav');
    document.getElementById(a).style.backgroundColor="pink"
    audio.play();
}


