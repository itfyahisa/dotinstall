'user strict';
{
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    // 等倍の確率での表示
    // btn.addEventListener('click', () => {
    //     const results = ['大吉', '中吉', '吉', '小吉']
    //     const n = Math.floor(Math.random() * results.length);
    //     result.textContent = results[n];
    // })

    // 確率操作
    const results = ['大吉', '中吉', '吉', '小吉', '凶', '大凶']
    const rates = [5, 10, 20, 20, 10, 5] 
    let totalRates = 0
    rates.forEach(rate => totalRates += rate)
    console.log(totalRates)

    btn.addEventListener('click', () => {
        const random = Math.random() * totalRates
        console.log(random)

        let sum = 0;
        let chosenResult = null;
        for(let i = 0; i < results.length; i++){
            sum += rates[i]
            if(random < sum){
                chosenResult = results[i]
                break
            }
        }
        result.textContent = chosenResult
    })
}