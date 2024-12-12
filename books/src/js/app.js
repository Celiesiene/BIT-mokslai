console.log('Tipo veikia?');

if (document.querySelector('[data-msg-container]')) {
    setTimeout(_ => {
        document.querySelector('[data-msg-container]').remove();
    }, 3000);
}
 