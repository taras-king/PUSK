let textArray = [];

function getContext (){
    fetch('./Context.json')
    .then(async(res) => textArray = await res.json())
    .catch(err => console.log(err));
}

getContext()

let currentIndex = 0;
let marqueeContent = document.getElementById('marqueeContent');

function updateMarqueeText() {
    marqueeContent.textContent = textArray[currentIndex]['title'];
    currentIndex = (currentIndex + 1) % textArray.length;
}

setInterval(updateMarqueeText, 10000);