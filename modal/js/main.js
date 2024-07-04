'use strict';
{
    // shift+alt+↓ 行をコピーして貼り付け
    // ctl+d 同じ文字を選択、一括で編集できる
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');

    open.addEventListener('click', () => {
        modal.classList.remove('hidden')
        mask.classList.remove('hidden')
    })

    close.addEventListener('click', () => {
        modal.classList.add('hidden')
        mask.classList.add('hidden')
    })

    mask.addEventListener('click', () => {
        // modal.classList.add('hidden')
        // mask.classList.add('hidden')
        close.click()
    })


}