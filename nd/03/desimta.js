function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;


for (let i = 0; i < 444; i++) {
 const skritulys = document.createElement('div');
    skritulys.className = 'circle';
    skritulys.style.backgroundColor = randomColor();
    const skritulioDydis = rand(44, 144)
    skritulys.style.width = `${skritulioDydis}px` ;
    skritulys.style.height = `${skritulioDydis}px`;
    const positionX = rand(0, screenWidth - skritulioDydis);
    const positionY = rand(0, screenHeight - skritulioDydis);
    skritulys.style.left = `${positionX}px`
    skritulys.style.top = `${positionY}px`
    document.body.appendChild(skritulys);
}
