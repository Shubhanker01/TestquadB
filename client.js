let classrow1 = document.getElementsByClassName('td1')
let classrow2 = document.getElementsByClassName('td2')
let classrow3 = document.getElementsByClassName('td3')
let classrow4 = document.getElementsByClassName('td4')
let classrow5 = document.getElementsByClassName('td5')
let resArr = []

async function fetchData() {
    let headersList = {
        "Accept": "*/*"
    }
    let response = await fetch('http://localhost:3000/fetch', {
        method: 'GET',
        headers: headersList
    })
    const data = await response.json()
    return data
}

fetchData().then(function (res) {
    for (const obj of res) {
        resArr.push(obj)
    }
    for(let i=0;i<classrow1.length;i++){
        classrow1[i].innerText = resArr[i].name
        classrow2[i].innerText = resArr[i].last_traded_price
        classrow3[i].innerText = `₹${resArr[i].buy} / ₹${resArr[i].sell}`
        let diff = ((resArr[i].sell - resArr[i].buy)/resArr[i].buy)*100
        if(resArr[i].buy==0.0){
            diff=0.0
        }
        classrow4[i].innerText = `${Math.round(diff*100)/100}%`
        classrow5[i].innerText = `₹${Math.round(resArr[i].vol*100)/100}`
    }
})
console.log(classrow1)




