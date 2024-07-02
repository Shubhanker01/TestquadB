
const express = require('express')
const mongoose = require('mongoose')
const port = 3000
const app = express()
const cors = require('cors')
const hodlinfo = require('./model')
app.use(cors())
async function getData() {
    let res = await fetch('https://api.wazirx.com/api/v2/tickers')
    let data = await res.json()
    const jsonArr = Array.from(Object.values(data))
    var resArr = []
    for (var i = 0; i < 10; i++) {
        resArr.push(jsonArr[i])
    }
    return resArr
}


// async function saveData() {
//     let data = await getData()
//     for(var i=0;i<10;i++){
//         await hodlinfo.create({
//             "name":data[i].name,
//             "last_traded_price":data[i].last,
//             "buy":data[i].buy,
//             "sell":data[i].sell,
//             "vol":data[i].volume,
//             "base_unit":data[i].base_unit
//         })
//     }
// }
// saveData().then((res) => { console.log('success') })
//     .catch(err => console.log(err)
//     )

// get method to fetch data
app.get('/fetch',async (req,res) =>{
    let data = await hodlinfo.find()
    res.send(data)
})
async function main() {
    mongoose.connect('mongodb+srv://shubhanker40:bca02092001@cluster1.ivvgywy.mongodb.net/hodlinfo')
}


main().catch(err => console.log(err))
app.listen(port, () => { console.log(`App listening on port:${port}`) })
