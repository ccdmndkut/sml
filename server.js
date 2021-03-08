import express from 'express'
import axios from 'axios'
import fs from "fs-extra";
const app = express()
const port = 3000
import chars from './charsb.js'
let imgs = chars.map(i => i.url)
let imgWrite = async (img) => {
    var filename = img.substring(img.lastIndexOf('/') + 1);
    return await axios({
        method: 'get',
        url: img,
        responseType: 'stream'
    })
        .then((response) => {
            response.data.pipe(fs.createWriteStream('img/' + filename))
            return filename
        });
}
// imgs.forEach(img => imgWrite(img))

app.get('/', (req, res) => {
    imgWrite('https://static.wikia.nocookie.net/sml/images/3/32/AlienTransparent.png').then((filename) => {
        // res.sendFile(process.cwd() + '/img/' + filename)
        res.send(filename)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})