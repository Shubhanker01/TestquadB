const mongoose = require('mongoose')
const {Schema} = mongoose

const hodlinfo = new Schema({
    "name":String,
    "last_traded_price":String,
    "buy":String,
    "sell":String,
    "vol":String,
    "base_unit":String
})

module.exports = mongoose.model('hodlinfo',hodlinfo)