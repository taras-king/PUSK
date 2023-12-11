let textArray = [];

function getContext() {
    fetch('./Context.json')
        .then(async (res) => textArray = await res.json())
        .catch(err => console.log(err));
}

getContext();

let currentIndex = 0;
let marqueeContent = document.getElementById('marqueeContent');

function updateMarqueeText() {
    if (textArray.length > 0) {
        marqueeContent.textContent = textArray[currentIndex]['title'];
        currentIndex = (currentIndex + 1) % textArray.length;
    }
}

setTimeout(() => {
    updateMarqueeText();

    // Subsequent updates every 10 seconds
    setInterval(updateMarqueeText, 10000);
}, 1000);