let classrow1 = document.getElementsByClassName('td1')
let classrow2 = document.getElementsByClassName('td2')
let classrow3 = document.getElementsByClassName('td3')
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
    }
})
console.log(classrow1)




