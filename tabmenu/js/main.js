'use strict';

{
    const menuItems = document.querySelectorAll('.menu li a');
    menuItems.forEach(clickedItem => {
        clickedItem.addEventListener('click', (e) => {
            // イベント発生時に読み込まない
            e.preventDefault();

            // 一旦全部削除して、クリックされたアイテムだけにアクティブクラスを追加する
            menuItems.forEach(item => {
                item.classList.remove('active')
            })
            clickedItem.classList.add('active');

            // 一旦全部削除して、クリックされたアイテムだけにアクティブクラスを追加する
            const contents = document.querySelectorAll('.content')
            contents.forEach(content => {
                content.classList.remove('active')
            })
            document.getElementById(clickedItem.dataset.id).classList.add('active')
        })
    })
}