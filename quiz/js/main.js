'use strict';

{
    let correctAnswer = 0;
    function render(quiz){
        const main = document.querySelector('main')
        const section = document.createElement('section');
        main.appendChild(section)

        const h2 = document.createElement('h2')
        h2.textContent = quiz[0]
        section.appendChild(h2)

        const ul = document.createElement('ul')
        section.appendChild(ul)

        for(let i = 1; i < quiz.length - 1; i++){
            const li = document.createElement('li')
            li.textContent = quiz[i]
            li.addEventListener('click', () => {
                if(quiz[quiz.length - 1] === (i-1)){
                    li.classList.add('correct')
                    correctAnswer++
                    checkAllCorrect()
                }else{
                    li.classList.add('wrong')
                }
            })
            ul.appendChild(li)
        }

        // const li0 = document.createElement('li')
        // li0.textContent = quiz[1]
        // li0.addEventListener('click', () => {
        //     if(quiz[4] === 0){
        //         li0.classList.add('correct')
        //     }else{
        //         li0.classList.add('wrong')
        //     }
        // })
        // ul.appendChild(li0)
    }   
    
    const main = document.querySelector('main')
    const timer = document.createElement('p')
    timer.textContent = '経過時間: 0秒';
    main.appendChild(timer)

    let time = 0;
    const intervalId = setInterval(() => {
        time++;
        timer.textContent = `経過時間: ${time}秒`
        if(time >= 10){
            stopTime('時間切れです', 'red')
        }
    }, 1000)

    function checkAllCorrect(){
        if(correctAnswer === quizzes.length){
            stopTime('おめ', 'green')
        }
    }

    function stopTime(messageText, color){
        clearInterval(intervalId)
        const p = document.querySelector('p')
        const message = document.createElement('p')
        message.textContent = messageText
        message.style.color = color
        p.appendChild(message)
    }

    // 問題文, 選択肢, 選択肢, 選択肢, 正解(0, 1, 2)
    const quizzes = [
        ['ゲリラ豪雨はどの程度で止むでしょうか？', '10分', '1時間', '3時間', 1],
        ['おでんの大根に味が染み込みやすくする方法はなんでしょうか？', '氷水につけておく', '電子レンジで加熱する', 'タオルで大根全体を擦る', 1],
        ['スーパーのレジの中でベテラン店員がいることが多いのはどのあたりでしょうか？', '出口に一番近いところ', '真ん中', '出口から一番遠いところ', 0],
        ['スーツの袖のボタンは、もともとどんな理由で付けられたでしょうか？', '飾り', '予備のボタン', '袖口の太さを変えるため', '鼻水を拭かないため', 3]
    ]

    quizzes.forEach(quiz => render(quiz))
}