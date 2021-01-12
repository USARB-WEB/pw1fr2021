document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundColor = 'red';

    setTimeout(() => {
        document.body.style.backgroundColor = 'orange';
    }, 2000);
});


document.getElementById("greenButton").addEventListener("click", () => {
    document.body.style.backgroundColor = 'green';
})

document.getElementById("yellowButton").addEventListener("click", () => {
    document.body.style.backgroundColor = 'yellow';
})

document.getElementById("greenButton").addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = 'cyan';
});

document.getElementById("greenButton").addEventListener("mouseleave", () => {
    document.body.style.backgroundColor = 'black';
});

