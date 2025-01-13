
addEventListener("keydown",playSound);



function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${ e.code.toLowerCase()}"]`);
    let key = document.querySelector(`div[data-key="${ e.code.toLowerCase()}"]`);
    
    if(key) {
    key.classList.add("key-on");
    audio.currentTime = 0;
    audio.play();
    

    this.setTimeout(() => {
    key.classList.remove("key-on");
    },1000);


    }else {
        return;
    }

};


    

// this.setTimeout(() => {
//     selected.classList.remove("key-on");
// },1000);
//     audio ? audio.play() : console.log("No audio found");

// console.log(selected)