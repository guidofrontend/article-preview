let share = document.querySelector('.social')
let personal = document.querySelector('.personal')
let contact = document.querySelector('.contact')

let redes = document.createElement('div')
redes.className = 'redes'
redes.style.display = 'none'

function validator() {
    if (redes.style.display === 'none') {
        personal.style.display = 'none'
        redes.innerHTML = `<span>share</span>
        <a href="#" class="face"></a>
        <a href="#" class="twitt"></a>
        <a href="#" class="pinter"></a>`
        redes.style.display = ''
        contact.prepend(redes)
        contact.style.backgroundColor = 'hsl(217, 19%, 35%)'
    }
    else if (personal.style.display === 'none') {
        redes.style.display = 'none'
        personal.style.display =''
        contact.style.backgroundColor = 'hsl(0, 0%, 96%)'
    }  
}

function displaySocialMenu() {
    share.addEventListener('click', validator)
}

displaySocialMenu()