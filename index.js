/* -- Blob effect -- */

// const blob = document.getElementById("blob");

// window.onpointermove = event => {
//     const { clientX, clientY } = event;

//     blob.animate({
//         left: `${clientX}px`,
//         top: `${clientY}px`
//     }, { duration: 3000, fill: "forwards" });
// }

/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const screen = document.querySelector(".screen"),
    name = document.querySelector(".name");

screen.onmouseenter = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        name.innerText = name.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return name.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= name.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
}

// sparkling effect

let index = 0,
    inter = 1000;

const rand = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
}

for (const star of document.getElementsByClassName("magic-star")) {
    setTimeout(() => {
        animate(star);

        setInterval(() => animate(star), 1000);
    }, index++ * (inter / 3))
}