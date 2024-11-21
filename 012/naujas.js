console.log('kazkas');

document.querySelector('#btn1').addEventListener('click', e => {
    console.log('Button 1 clicked', e.target);
});
document.querySelector('#btn1').addEventListener('dblclick', e => {
    console.log('Button 1 dbclicked');
});
document.querySelector('#btn2').addEventListener('click', e => {
    console.log('Button 2 clicked');
});
 
 
window.addEventListener('scroll', e => {
    console.log('Scrolling', window.scrollY);
});
 
document.querySelector('#btn2').addEventListener('scroll', e => {
    console.log('Scrolling button 2');
});


document.querySelector('#btn3').addEventListener('click', e => {
    e.preventDefault();
    console.log('Link clicked', e.target);
});

//preventdefault neleidzia nueiti i ta puslapi


document.querySelector('.tevas').addEventListener('click', e => {
    // document.querySelector('.tevas').style.backgroundColor = 'darkred'; jei paliksim taip, spalvinsis tik tevas,nesvarbu ant ko spausim. jei norim, kad spalvintusi tik tas ant ko spaudziam, reikia rasyti su etarget
    e.target.style.backgroundColor = 'darkred';
})

document.querySelector('.vaikas').addEventListener('click', e => {
    e.stopPropagation();
    document.querySelector('.vaikas').style.backgroundColor = 'darkblue';
});
//stopPropogation ant vaiko sustapdo evento perdavima tevui