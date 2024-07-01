
const express = require('express')
const mongoose = require('mongoose')
const port = 3000
const app = express()

async function getData() {
    let res = await fetch('https://api.wazirx.com/api/v2/tickers')
    let data = await res.json()
    // var result = []
    // for(var i in data){
    //     result.push(i)
    // }
    const jsonArr = Array.from(Object.values(data))
    var resArr = []
    for (var i = 0; i < 10; i++) {
        resArr.push(jsonArr[i])
    }
    return resArr
}
app.get('/', (req, res) => {
    let data = getData()
    res.send(data)
})
async function main() {
    mongoose.connect('mongodb+srv://shubhanker40:bca02092001@cluster1.ivvgywy.mongodb.net/hodlinfo')
}


main().catch(err => console.log(err))
app.listen(port, () => { console.log(`App listening on port:${port}`) })
