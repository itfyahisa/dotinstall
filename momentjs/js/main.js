'use strict';

{
    // const input = document.querySelector('input')
    // const button = document.querySelector('button')
    // const p = document.querySelector('p')
    // button.addEventListener('click', () => {
    //     // const d = new Date(input.value)
    //     // // p.textContent = input.value
    //     // p.textContent = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`

    //     const d = moment(input.value)
    //     p.textContent = d.isValid() ? d.format('LL') : '無効な日付です'
    // })

    // const d = moment()
    // const d = moment('2018-01-10')
    // const d = moment('01-10-2018', 'MM-DD-YYYY')
    // const d = moment(new Date(2018, 0, 10))
    // const d = moment([2018, 0, 10])

    // const d = moment('2018-01-10')
    // //2018年1月10日 00:00
    // console.log(d.format('LLL'))
    // //January 10th, Wednesday
    // d.locale('en')
    // console.log(d.format('MMMM Do, dddd'))

    // const d = moment('2018-01-10 15:35:24')
    // d.locale('en')
    // console.log(d.format('hh:mm:ss a')) //小文字で12時間表記 aで午前午後表示
    // console.log(d.format('l')) //1/10/2018
    // console.log(d.format('ll')) //Jan 10, 2018
    // console.log(d.format('lll')) //Jan 10, 2018 3:35 PM
    // console.log(d.format('llll')) //Wed, Jan 10, 2018 3:35 PM
    // console.log(d.format('L')) //01/10/2018
    // console.log(d.format('LL')) //January 10, 2018
    // console.log(d.format('LLL')) //January 10, 2018 3:35 PM
    // console.log(d.format('LLLL')) //Wednesday, January 10, 2018 3:35 PM

    // const d = moment('2018-01-10 15:35:24')
    // console.log(d.get('year'))
    // console.log(d.get('y'))
    // console.log(d.get('month')) //0-11
    // console.log(d.get('M')) //0-11
    // console.log(d.get('date'))
    // console.log(d.get('D'))
    // console.log(d.get('day')) //曜日 0-6
    // console.log(d.get('d')) //曜日 0-6
    // console.log(d.get('hour')) 
    // console.log(d.get('h')) 
    // console.log(d.get('minute')) 
    // console.log(d.get('m')) 
    // console.log(d.get('second')) 
    // console.log(d.get('s')) 
    // console.log(d.get('millisecond')) 
    // console.log(d.get('ms')) 

    // const d = moment('2018-01-10 15:35:24')
    // // d.set('year', 2020)
    // // d.month(11)
    // // d.hour(1).minute(1)
    // // d.day('土曜日')
    // // d.month('3月')
    // // d.locale('en')
    // // d.month('March')
    // console.log(d.format('LLLL'))
    
    // const d = moment('2018-01-10 15:35:24')
    // //setは中身が変わってしまうのでcloneしてからしたほうが良い
    // console.log(d.clone().set('year', 2020).format('LLLL')) 
    // console.log(d.get('year'))

    // const d = moment('2018-01-10 15:35:24')
    // console.log(d.clone().add(3, 'day').format('LLLL')) //3日後
    // console.log(d.clone().subtract(3, 'year').format('LLLL')) //3年後
    // console.log(d.clone().add(1, 'y').add(2, 'M').format('LLLL'))
    // console.log(d.clone().add({year: 1, month: 2}).format('LLLL'))
    // console.log(d.clone().add({y: 1, M: 2}).format('LLLL'))

    // const start = moment('2018-01-10 08:00')
    // const end = moment('2018-01-10 10:30')
    // console.log(end.diff(start, 'hour', true))

    // const posted = moment('2024-07-03 11:00:00')
    // console.log(posted.fromNow())

    // const d1 = moment('2018-01-03')
    // const d2 = moment('2018-01-05')
    // const d3 = moment('2018-01-08')
    // // console.log(d.isValid())
    // console.log(d1.isBefore(d2))
    // console.log(d1.isAfter(d2))
    // console.log(d1.isSame(d2))
    // console.log(d2.isBetween(d1, d3))
    // console.log(d2.isLeapYear()) //うるう年判定

    const button = document.querySelector('button')
    const p = document.querySelector('p')

    function getResult(){
        const bday = moment(document.querySelector('input').value)
        if(!bday.isValid()){
            return '日付が無効です'
        }
        const now = moment()
        const age = now.diff(bday, 'year')
        const days = now.diff(bday, 'day')

        const thisBirthday = bday.clone().year(now.year())
        let nextBirthday
        if(now.isSameOrAfter(thisBirthday)){
            nextBirthday = thisBirthday.clone().add(1, 'year')
        }else{
            nextBirthday = thisBirthday
        }

        const left = Math.ceil(nextBirthday.diff(now, 'day', true))

        return `今${age}歳です！生まれてから${days}日経ちました！次の誕生日は${nextBirthday.format('LL')}で、あと${left}日です`
    }

    button.addEventListener('click', () => {
        p.textContent = getResult()
    })
}