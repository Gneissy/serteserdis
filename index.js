function makeRotateFaster() {
    var gear = document.querySelector(".gear-icon");
    var teeth = document.getElementsByClassName("tooth-icon");

    if (gear.classList.contains("rotate-2s")) {
        gear.classList.remove("rotate-2s");
        gear.classList.add("rotate-1s");
    }
    else if (gear.classList.contains("rotate-1s")) {
        gear.classList.remove("rotate-1s");
        gear.classList.add("rotate-half-s");
    }
    else if (gear.classList.contains("rotate-half-s")) {
        gear.classList.remove("rotate-half-s");
        gear.classList.add("rotate-quarter-s");

        gear.classList.remove("transform-origin-center");
        gear.classList.add("transform-origin-random");

        teeth[0].classList.add("tooth-jump-1");
        teeth[1].classList.add("tooth-jump-2");
        teeth[2].classList.add("tooth-jump-3");
        teeth[3].classList.add("tooth-jump-4");
    }
    else if (gear.classList.contains("rotate-quarter-s") && gear.classList.contains("transform-origin-random")) {
        gear.classList.add("ball-the-jack");
        teeth[0].classList.remove("tooth-jump-1");
        teeth[1].classList.remove("tooth-jump-2");
        teeth[2].classList.remove("tooth-jump-3");
        teeth[3].classList.remove("tooth-jump-4");
    }
    else return;
}