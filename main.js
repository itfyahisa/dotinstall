'use strict'
{
    // document.querySelector('button').addEventListener('click', () => {
        // textContent テキスト
        // console.log('clicked')
        // document.querySelector('p').textContent = 'こんにちは'
        // document.querySelector('p').textContent = document.querySelector('button').textContent
        
        // classList クラス
        // document.querySelector('p').classList.add('pink-bg', 'red-border')
        // document.querySelector('p').classList.remove('green-color')

        // querySelector 要素検索
        // console.log(document.querySelector('p').classList.contains('pink-bg')) //false
        // // if(document.querySelector('p').classList.contains('pink-bg') === false){
        // //     document.querySelector('p').classList.add('pink-bg')
        // // }else{
        // //     document.querySelector('p').classList.remove('pink-bg')
        // // }
        // document.querySelector('p').classList.toggle('pink-bg')

        // querySelectorAll
        // document.querySelector('li').textContent = 'Changed!' //一致する最初の要素しかできない
        // document.querySelectorAll('li').textContent = 'Changed!' //一致するすべての要素に適用できる
        // document.querySelectorAll('li').forEach((li) => {
        //     li.textContent = 'Changed!'
        // })
        // document.querySelectorAll('.target').forEach((li) => { //クラスをつけることで指定もできる
        //     li.textContent = 'Changed!'
        // })
        // document.querySelector('#second').textContent = 'Changed!' //idはselectorでおけ

        //createElement 要素の追加
        // const liElement = document.createElement('li')
        // liElement.textContent = 'Hanako'
        // document.querySelector('ul').appendChild(liElement)
        // document.querySelector('ul').insertBefore(liElement, document.querySelector('#second'))
        // if(confirm('Sure?') === true ){
        //     document.querySelector('#second').remove()
        // } 

        //フォーム入力 value
        // alert(document.querySelector('input').value)
        // alert(document.querySelector('textarea').value) textareaもinput同様valueで入力をとれる
        // document.querySelector('textarea').value = ''

        // ドロップダウン方式 selector
        // alert(document.querySelector('select').value)

        // ラジオボタン radio
        // document.querySelectorAll('input').forEach((radio) => {
        //     if(radio.checked === true){
        //         alert(radio.value)
        //     }
        // })

        // チェックボックス 配列に値を代入して１個で出力できるようにする。
        // const colors = []
        // document.querySelectorAll('input').forEach((checkbox) => {
        //     if(checkbox.checked === true){
        //         colors.push(checkbox.value)
        //     }
        // })
        // alert(colors.join(', '))
    // })


    // =====
    // // 入力したときに動きをつけたい input event
    // // input -> text, textarea, select
    // // change -> radio, checkbox
    // document.querySelector('input').addEventListener('input', () => {
    //     const pElement = document.querySelector('p')
    //     const inputElement = document.querySelector('input')
    //     pElement.textContent = inputElement.value
    // })


    // =====
    // フォーカスイベントの時に表示を出す、はずしたら消える。focus() デフォルトでフォーカスしておく
    // document.querySelector('input').addEventListener('focus', () => {
    //     document.querySelector('p').textContent = 'English Only!'
    // })
    // document.querySelector('input').addEventListener('blur', () => {
    //     document.querySelector('p').textContent = ''
    // })
    // document.querySelector('input').focus()


    // =====
    //キーが押されたときに押したボタンが表示される。document全体から取得する
    // document.addEventListener('keydown', (e) => {
    //     document.querySelector('p').textContent = e.key
    // })

    // =====
    // マウスを動かしたときに座標がでる
    // document.addEventListener('mousemove', (e) => {
    //     document.querySelector('p').textContent = `X: ${e.clientX} Y: ${e.clientY}`
    // })

    // =====
    // フォーム入力 エンターキー入力で処理したいとき
    // document.querySelector('form').addEventListener('submit', (e) =>{
    //     e.preventDefault() //デフォルトで行うページ移動を防いでくれる
    //     document.querySelector('p').textContent = document.querySelector('input').value
    // })

    // =====
    // ボタンを押すとスタイルを追加できる。
    document.querySelector('button').addEventListener('click', () => {
        document.querySelector('p').style.fontSize = '24px'
    })

}