let CONFIG_BUTTONS = {
    btn1: 'q',
    btn2: 'w',
    btn3: 'e',
    btn4: 'r',
    btn5: 'a',
    btn6: 's',
    btn7: 'd',
    btn8: 'f',
    btn9: 'z',
    btn10: 'x',
    btn11: 'c',
    btn12: 'v'
}
const btns = document.querySelectorAll('button[class^=btn]');
const sel = document.querySelector('select');

window.addEventListener("load", () => {
    btns.forEach(btn => {
        let btnName = btn.className;
        btn.innerHTML = CONFIG_BUTTONS[btnName].toUpperCase() ? CONFIG_BUTTONS[btnName].toUpperCase() : CONFIG_BUTTONS[btnName];
    })
    btns.forEach(btn => {
        let opt = document.createElement('option');
        opt.value = btn.className;
        opt.text = btn.innerHTML;
        sel.appendChild(opt);

    })
})

document.addEventListener('keydown', (event) => {
    let key = event.key;
    // Alert the key name and key code on keydown
    btns.forEach(btn => {
        if (key.toUpperCase() === btn.innerHTML) {
            btn.click();
        }
    })
}, false);

btns.forEach(btn => {
    btn.addEventListener('click', event => {
        let btnNumber = btn.className.replace('btn', '')
        console.log(btnNumber)
        let audio = new Audio(`../assets/${btnNumber}.mp3`);
        audio.play();
    });
});