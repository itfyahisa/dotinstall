'use strict';

{
    const open = document.querySelector('#open')
    const overlay = document.querySelector('.overlay')
    const close = document.querySelector('#close')

    open.addEventListener('click', () => {
        overlay.classList.add('show')
        open.classList.add('hide')
    })

    close.addEventListener('click', () => {
        overlay.classList.remove('show')
        open.classList.remove('hide')
    })
}