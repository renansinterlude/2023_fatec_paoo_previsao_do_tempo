require('dotenv').config()
const axios = require('axios')
console.log(process.env)
// const appid='ef0b0973b783e0614ac87612ec04344b'
// const q='Itu'
// const units='metric'
// const cnt=12
// const lang='pt_BR'
// const url='https://api.openweathermap.org/data/2.5/forecast'

// const appid = process.env.appid
// const q = process.env.q
// const units = process.env.units
// const cnt = process.env.cnt
// const lang = process.env.lang
// const url = process.env.url

//desestruturar
const { appid, q, units, cnt, language, url} = process.env

const end = `${url}?appid=${appid}&q=${q}&units=${units}&cnt=${cnt}&lang=${language}`

console.log(end)



