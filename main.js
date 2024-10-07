const menuMobile = document.querySelector('.menu-mobile')
const menuBurguer = document.querySelector('.menu-burguer')

document.addEventListener('click', (e) =>{
    const el = e.target;
    if(el.classList.contains('menu-mobile')){
        menuBurguer.classList.add('show')
    }else if(!el.closest('.menu-burguer') && (!el.classList.contains('menu-burguer'))){
        menuBurguer.classList.remove('show')
    }
})


